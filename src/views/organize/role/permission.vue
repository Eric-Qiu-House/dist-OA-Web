<template>
	<el-dialog title="角色权限设置" v-model="visible" :width="500" destroy-on-close @closed="$emit('closed')">
		<el-tabs tab-position="top">
			<el-tab-pane label="菜单权限">
				<div class="treeMain">
					<el-tree ref="menu" node-key="id" :data="menu" :props="menu.props" show-checkbox></el-tree>
				</div>
			</el-tab-pane>
			<!--以下模块 暂时不使用 -->
			<!-- <el-tab-pane label="数据权限">
				<el-form label-width="100px" label-position="left">
					<el-form-item label="规则类型">
						<el-select v-model="data.dataType" placeholder="请选择">
							<el-option label="全部可见" value="1"></el-option>
							<el-option label="本人可见" value="2"></el-option>
							<el-option label="所在部门可见" value="3"></el-option>
							<el-option label="所在部门及子级可见" value="4"></el-option>
							<el-option label="选择的部门可见" value="5"></el-option>
							<el-option label="自定义" value="6"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="选择部门" v-show="data.dataType=='5'">
						<div class="treeMain" style="width: 100%;">
							<el-tree ref="dept" node-key="id" :data="data.list" :props="data.props" show-checkbox></el-tree>
						</div>
					</el-form-item>
					<el-form-item label="规则值" v-show="data.dataType=='6'">
						<el-input v-model="data.rule" clearable type="textarea" :rows="6" placeholder="请输入自定义规则代码"></el-input>
					</el-form-item>
				</el-form>
			</el-tab-pane>
			<el-tab-pane label="控制台模块">
				<div class="treeMain">
					<el-tree ref="grid" node-key="key" :data="grid.list" :props="grid.props" :default-checked-keys="grid.checked" show-checkbox></el-tree>
				</div>
			</el-tab-pane>
			<el-tab-pane label="控制台">
				<el-form label-width="100px" label-position="left">
					<el-form-item label="控制台视图">
						<el-select v-model="dashboard" placeholder="请选择">
							<el-option v-for="item in dashboardOptions" :key="item.value" :label="item.label" :value="item.value">
								<span style="float: left">{{ item.label }}</span>
								<span style="float: right; color: #8492a6; font-size: 12px">{{ item.views }}</span>
							</el-option>
						</el-select>
						<div class="el-form-item-msg">用于控制角色登录后控制台的视图</div>
					</el-form-item>
				</el-form>
			</el-tab-pane> -->
		</el-tabs>
		<template #footer>
			<el-button @click="visible = false">取 消</el-button>
			<el-button type="primary" :loading="isSaveing" @click="submit()">保 存</el-button>
		</template>
	</el-dialog>
</template>

<script>
export default {
	emits: ['success', 'closed'],
	data() {
		return {
			visible: false,
			isSaveing: false,
			menu: {
				list: [],
				checked: [],
				props: {
					label: (data) => {
						return data.meta.title
					}
				}
			},
			grid: {
				list: [],
				checked: ["welcome", "ver", "time", "progress", "echarts", "about"],
				props: {
					label: (data) => {
						return data.title
					},
					disabled: (data) => {
						return data.isFixed
					}
				}
			},
			data: {
				dataType: "1",
				list: [],
				checked: [],
				props: {},
				rule: ""
			},
			dashboard: "0",
			dashboardOptions: [
				{
					value: '0',
					label: '数据统计',
					views: 'stats'

				},
				{
					value: '1',
					label: '工作台',
					views: 'work'
				},
			],
			roleData: {}
		}
	},
	async mounted() {
		// 获取 - 路由菜单
		await this.getMenu()
		// 角色 - 已拥有的权限
		// this.getDept()
		// this.getGrid()
	},
	methods: {
		//表单注入数据
		setData(data) {
			// 处理数据
			this.roleData = data[0]

		},
		open() {
			this.visible = true;
		},
		async submit() {
			try {
				this.isSaveing = true;
				// 合并选中的和半选中的菜单项
				this.roleData.router_tree_ = [
					...this.$refs.menu.getCheckedKeys(),
					...this.$refs.menu.getHalfCheckedKeys()
				];
				// 提交数据
				const res = await this.$apiIAM.role.update.post(this.roleData);

				if (res.code === 200) {
					this.$message.success("操作成功");
					this.$emit('success', this.form, this.mode);
					this.visible = false;
				} else {
					this.$alert(res.message, "提示", { type: 'error' });
				}
			} catch (error) {
				this.$alert('操作失败，请稍后再试', '提示', { type: 'error' });
			} finally {
				this.isSaveing = false;
			}
		},


		async getMenu() {
			var data = await this.$apiIAM.system.routerTree.get();
			this.menu = data;
			// const asd = [2]
			// this.$refs.menu.setCheckedKeys(asd, true);
			this.$nextTick(() => {
				const node = this.$refs.menu.getNode(1); // 确保树节点已经渲染完成
				console.log(node.childNodes.length, 'nodenodenodenodenode'); // 打印node
				const selectedKeys = (this.roleData.router_tree_ || [] ).filter(key => {
					const node = this.$refs.menu.getNode(key)
					if ( node.childNodes.length == 0 ) {
						return key
					}
				})
				this.$refs.menu.setCheckedKeys(selectedKeys, true)
			});
			// if (this.menu) {
			// 	const node = this.$refs.menu.getNode(2);

			// 	console.log(node, 'nodenodenodenodenode')
			// }


			// this.$nextTick(() => {
			// 	// 获取需要选中的节点 IDs，排除父节点的 ID
			// 	const selectedKeys = (this.roleData.router_tree_ || []).filter(key => {
			// 		const node = this.$refs.menu.getNode(key);
			// 		// if (node && node.level > 0) {
			// 		// 	return key
			// 		// }
			// 		// return node && node.level > 0; // 只选中子节点，排除父节点
			// 		return node.level; // 只选中子节点，排除父节点
			// 	});

			// 	console.log(selectedKeys, '11')
			// 	// 只选中子节点，避免父节点被选中
			// 	// this.$refs.menu.setCheckedKeys(selectedKeys, true);

			// 	// 遍历所有选中的子节点，更新父节点状态
			// 	// selectedKeys.forEach(key => {
			// 	//     const node = this.$refs.menu.getNode(key);
			// 	//     if (node) {
			// 	//         this.checkParentNodes(node);
			// 	//     }
			// 	// });
			// });
		},

		checkParentNodes(node) {
			const parentNode = node.parent;
			if (parentNode && parentNode.level !== 0) {
				// 如果当前节点被选中，选中父节点
				this.$refs.menu.setChecked(parentNode.data.id, true);

				// 递归选中上层父节点
				this.checkParentNodes(parentNode);
			}
		},

		// 以下无用
		async getDept() {
			// var res = await this.$API.system.dept.list.get();
			// this.data.list = res.data
			// this.data.checked = ["12", "2", "21", "22", "1"]
			// this.$nextTick(() => {
			// 	let filterKeys = this.data.checked.filter(key => this.$refs.dept.getNode(key).isLeaf)
			// 	this.$refs.dept.setCheckedKeys(filterKeys, true)
			// })
		},
		getGrid() {
			this.grid.list = [
				{
					key: "welcome",
					title: "欢迎",
					isFixed: true
				},
				{
					key: "ver",
					title: "版本信息",
					isFixed: true
				},
				{
					key: "time",
					title: "时钟"
				},
				{
					key: "progress",
					title: "进度环"
				},
				{
					key: "echarts",
					title: "实时收入"
				},
				{
					key: "about",
					title: "关于项目"
				}
			]
		}
	},
}
</script>

<style scoped>
.treeMain {
	height: 280px;
	overflow: auto;
	border: 1px solid #dcdfe6;
	margin-bottom: 10px;
}
</style>
