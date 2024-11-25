<template>
	<el-row :gutter="40">
		<el-col v-if="!form.id">
			<el-empty description="请选择左侧菜单后操作" :image-size="100"></el-empty>
		</el-col>
		<template v-else>
			<el-col v-if="type === '目录'">
				<h2>{{ form.title || "新增目录" }}</h2>
				<el-form :model="form" :rules="rules" ref="dialogForm" label-width="80px" label-position="left">
					<el-form-item label="显示名称" prop="title">
						<el-input v-model="form.title" clearable placeholder="菜单显示名字"></el-input>
					</el-form-item>
					<el-form-item label="上级菜单" prop="parent_id">
						<el-cascader v-model="form.parent_id" :options="menuOptions" :props="menuProps"
							:show-all-levels="false" placeholder="顶级菜单" clearable disabled></el-cascader>
					</el-form-item>
					<el-form-item label="编码规则" prop="coding_rule_">
						<el-input v-model="form.coding_rule_" clearable placeholder="编码规则"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="save" :loading="loading">保 存</el-button>
					</el-form-item>
				</el-form>
			</el-col>
			<el-col class="apilist" v-if="type === '图纸'">
				<h2>{{ form.title || "新增图纸" }}</h2>
				<el-table ref="table" :data="drawingInfo" highlight-current-row @expand-change="handleExpandChange">
					<el-table-column type="expand" label="全部">
						<template #default="props">
							<el-tree :data="props.row.fileList" :props="defaultProps" node-key="id_" show-checkbox
								highlight-current>
								<template #default="{ data }">
									<span v-if="data.children">版本：V{{ data.version }}</span>
									<span v-else style="display: flex; justify-content: space-between;">
										<div>
											<i class="el-icon-document"></i>
											{{ data.file_name_ }}
										</div>
										<div>
											<el-button type="primary" link style="">
												查看
											</el-button>
											<el-button type="primary" link>
												下载
											</el-button>
											<el-button type="danger" link>
												删除
											</el-button>
										</div>
									</span>

								</template>
							</el-tree>
						</template>
					</el-table-column>
					<el-table-column prop="drawing_number_" label="图号" width="100"></el-table-column>
					<el-table-column prop="drawing_name_" label="图名" width="180"></el-table-column>
					<el-table-column prop="executor_name_" label="执行" width="110"></el-table-column>
					<el-table-column prop="verifier_name_" label="校验" width="130"></el-table-column>
					<el-table-column prop="start_date_" label="开始时间" width="100"></el-table-column>
					<el-table-column prop="delivery_date_" label="交付时间" width="100"></el-table-column>
					<el-table-column prop="status_" label="状态" width="70">
						<template #default="scope">
							<el-link class="mx-1" :type="scope.row.status_ == 0 ? 'info'
								: scope.row.status_ == 1 ? 'success'
									: scope.row.status_ == 2 ? 'primary'
										: scope.row.status_ == 3 ? 'danger'
											: 'default'">
								{{ scope.row.status_ == 0 ? '未开始'
									: scope.row.status_ == 1 ? '执行中'
										: scope.row.status_ == 2 ? '已结束'
											: scope.row.status_ == 3 ? '已超期'
												: '未知' }}
							</el-link>
						</template>
					</el-table-column>
					<el-table-column prop="last_submission_" label="最新提交" width="100"></el-table-column>
					<el-table-column prop="current_version_" label="当前版本" width="80">
						<template #default="scope">
							{{ 'V' + scope.row.current_version_ }}
						</template>
					</el-table-column>
					<el-table-column prop="state6" label="操作" width="120">
						<!-- <template #default="props"> -->
						<!-- <el-button-group>
								<el-upload class="sc-file-select__upload" multiple :show-file-list="false"
									:file-list="fileList" :on-change="uploadChange" :before-upload="uploadBefore"
									:on-error="uploadError" :http-request="uploadRequest" style="display: inline;">
									<el-button text type="primary" size="small">上传</el-button>
								</el-upload>
								<el-button text type="primary" size="small" @click="open(props.row.name)">提交</el-button>
								<router-link :to="{
									name: 'drawingCheck'
								}">
									<el-button text type="primary" size="small">审核</el-button>
								</router-link>
								<el-button text type="primary" size="small">下载</el-button>
							</el-button-group> -->
						<!-- </template> -->
					</el-table-column>
				</el-table>
			</el-col>
		</template>
	</el-row>

</template>

<script>
import scIconSelect from '@/components/scIconSelect'

export default {
	components: {
		scIconSelect
	},
	props: {
		menu: { type: Object, default: () => { } },
		type: {
			type: String,
			default: '图纸' // 默认显示“图纸”
		}
	},
	data() {
		return {

			expands: [1],//只展开一行放入当前行id
			getRowKeys: (row) => {
				// console.log(row)
				return row.eqId   //这里看这一行中需要根据哪个属性值是id
			},

			defaultProps: {
				children: 'children',
				label: 'version'
			},
			form: {
				parentId: "",
				apiList: []
			},
			menuOptions: [],
			menuProps: {
				value: 'id',
				label: 'title',
				checkStrictly: true
			},
			predefineColors: [
				'#ff4500',
				'#ff8c00',
				'#ffd700',
				'#67C23A',
				'#00ced1',
				'#409EFF',
				'#c71585'
			],
			rules: [],
			drawingInfo: [],
			loading: false,
			drawingFind: {
				projec_id_: 1,
				drawing_menu_id_: 2
			},
			fileList: []
		}
	},
	watch: {
		// 监听 drawingFind 对象的变化
		drawingFind: {
			handler() {
				this.getDrawingInfo(); // 当 drawingFind 变化时调用 getDrawingInfo 方法
			},
			deep: true // 监听对象内部的变化
		},
		menu: {
			handler() {
				this.menuOptions = this.treeToMap(this.menu)
			},
			deep: true
		}

	},
	mounted() {
		this.getDrawingInfo();
		this.getfileInfo()

	},
	methods: {
		rowContextmenu(row, column, event) {
			this.row = row
			this.$refs.table.setCurrentRow(row);
			this.$refs.contextmenu.openMenu(event)
		},
		// exChange(row, rowList) {
		async handleExpandChange(row, expanded) {
			if (expanded) {
				if (!row.fileList) { // 检查 fileList 是否存在
					row.loading = true; // 开始加载状态
					try {
						const response = await this.$dmsApi.fileInfo.readId.post()
						// const response = await this.fetchFileList(row.id);
						row.fileList = response; // 设置文件列表
					} catch (error) {
						console.error('Error fetching file list:', error);
					} finally {
						row.loading = false; // 结束加载状态
					}
				}
			}

		},
		async getfileInfo() {
			try {
				// this.fileList = await this.$dmsApi.fileInfo.readId.post()
				return await this.$dmsApi.fileInfo.readId.post()
				// this.fileList = await this.$dmsApi.fileInfo.readId.post()
			} catch (error) {
				console.error('Error fetching details:', error);
			}
		},
		handleExpand() {
			this.getfileInfo()
			// 检查是否已经获取过详细数据
			// this.$dmsApi.fileInfo.readId.post()

			// console.log('1')
			// if (!row.id_) {
			// console.log('2')
			// 		// 假设这里调用接口获取数据
			// 		 this.getfileInfo(row.id_);
			// 		// row.details = response.data; // 将获取到的数据存储在当前行

			// }
		},
		fetchDetails(id) {
			// 示例接口调用
			return new Promise((resolve) => {
				setTimeout(() => {
					resolve({ data: `Details for ID: ${id}` });
				}, 1000); // 模拟网络延迟
			});
		},

		// 调用图纸方法
		async getDrawingInfo() {
			this.drawingInfo = await this.$dmsApi.drawingInfo.inquireList.post(this.drawingFind);
		},
		//简单化菜单
		treeToMap(tree) {
			const map = []
			tree.forEach(item => {
				var obj = {
					id: item.id,
					parentId: item.parentId,
					title: item.title,
					children: item.children && item.children.length > 0 ? this.treeToMap(item.children) : null
				}
				map.push(obj)
			})
			return map
		},
		//保存
		async save() {
			this.loading = true
			const formData = {
				id: this.form.id,
				// parentId: this.form.parentId,
				name: this.form.name,
				path: this.form.path,
				component: this.form.component,
				title: this.form.title,
				icon: this.form.icon,
				type: this.form.type,
			}
			console.log(formData)
			var res = await this.$apiIAM.system.updetaRoute.post(formData)
			this.loading = false
			if (res.code == 200) {
				this.$message.success("保存成功")
			} else {
				this.$message.warning(res.message)
			}
		},
		//表单注入数据
		setData(data, pid) {
			this.form = data
			this.form.apiList = data.apiList || []
			this.form.parentId = pid
			this.drawingFind.drawing_menu_id_ = data.id
		}
	}
}
</script>

<style scoped>
h2 {
	font-size: 17px;
	color: #3c4a54;
	padding: 0 0 30px 0;
}

.apilist {
	border-left: 1px solid #eee;
}

[data-theme="dark"] h2 {
	color: #fff;
}

[data-theme="dark"] .apilist {
	border-color: #434343;
}
</style>
