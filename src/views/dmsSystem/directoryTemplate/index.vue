<template>
	<el-container>
		<menu-directory></menu-directory>
	</el-container>
	<!-- <el-container>
		<el-aside width="300px" v-loading="menuloading">
			<el-container>
				<el-header>
					<el-input placeholder="输入关键字进行过滤" v-model="menuFilterText" clearable disabled></el-input>
				</el-header>
				<el-main class="nopadding">
					<el-tree ref="menu" class="menu" node-key="id" :data="menuTreeData" :props="menuProps" draggable
						highlight-current :expand-on-click-node="false" check-strictly show-checkbox
						:filter-node-method="menuFilterNode" @node-click="menuClick" @node-drop="nodeDrop">
						<template #default="{ node, data }">
							<span class="custom-tree-node">
								<span class="label">
									{{ node.label }}
								</span>
								<span class="do">
									<el-button icon="el-icon-plus" size="small"
										@click.stop="createMenuButton(node, data)"></el-button>
								</span>
							</span>
						</template>
</el-tree>
</el-main>
<el-footer style="height:51px;">
	<el-button type="primary" size="small" icon="el-icon-plus" @click="createMenuButton()"></el-button>
	<el-button type="danger" size="small" plain icon="el-icon-delete" @click="delMenu" disabled></el-button>
</el-footer>
</el-container>
</el-aside>
<el-container>
	<el-main class="nopadding" style="padding:20px;" ref="main">
		<save ref="save" :menu="menuTreeData" :type="displayType"></save>
	</el-main>

</el-container>
</el-container> -->
</template>

<script>
// let newMenuIndex = 1;
import { provide } from 'vue';
import menuDirectory from '@/views/dmsSystem/directoryTemplate/directoryTree.vue'
// import save from '@/components/views/drawingSystem/menuParams.vue'
export default {
	name: "settingMenu",
	components: {
		// save
		menuDirectory
	},
	setup() {
		const dynamicStatus = 'typeCatalogue'; // 这里可以是动态的状态
		provide('status', dynamicStatus); // 提供状态
	},
	// data() {
	// 	return {
	// 		menuloading: false,
	// 		displayType: '目录',
	// 		menuTreeData: [],
	// 		menuProps: {
	// 			label: (data) => {
	// 				return data.title_
	// 			}
	// 		},
	// 		menuFilterText: ""
	// 	}
	// },
	// watch: {
	// 	menuFilterText(val) {
	// 		this.$refs.menu.filter(val);
	// 	}
	// },
	// mounted() {
	// 	this.getMenu();
	// },
	// methods: {
	// 	//加载树数据
	// 	async getMenu() {
	// 		this.menuloading = true
	// 		// var data = await this.$apiIAM.system.routerTree.get();
	// 		var data = await this.$dmsApi.drawingMenu.readAll.get();
	// 		this.menuloading = false
	// 		this.menuTreeData = data;
	// 	},
	// 	//树点击
	// 	menuClick(data, node) {
	// 		var pid = node.level == 1 ? undefined : node.parent.data.menu_id_;
	// 		this.$refs.save.setData(data, pid)
	// 		this.$refs.main.$el.scrollTop = 0
	// 		console.log(node,'pidpidpid')
	// 	},
	// 	//树过滤
	// 	menuFilterNode(value, data) {
	// 		if (!value) return true;
	// 		var targetText = data.title;
	// 		return targetText.indexOf(value) !== -1;
	// 	},
	// 	//树拖拽
	// 	nodeDrop(draggingNode, dropNode, dropType) {
	// 		this.$refs.save.setData({})
	// 		this.$message(`拖拽对象：${draggingNode.data.title}, 释放对象：${dropNode.data.title}, 释放对象的位置：${dropType}`)
	// 	},
	// 	//增加
	// 	async createMenuButton(node, data) {
	// 		var newMenuName = "未命名" + newMenuIndex++;
	// 		var newMenuData = {
	// 			parent_id_: data ? data.menu_id_ : null,
	// 			title_: newMenuName,
	// 			// path: "",
	// 			// component: "",
	// 			// title: newMenuName,
	// 			// type: "menu"
	// 		}
	// 		this.menuloading = true
	// 		await this.$dmsApi.drawingMenu.create.post(newMenuData)
	// 		this.getMenu();

	// 		this.menuloading = false
	// 		// newMenuData.id = res.data

	// 		// this.$refs.menu.append(newMenuData, node)
	// 		// this.$refs.menu.setCurrentKey(newMenuData.id)
	// 		// var pid = node ? node.data.id : ""
	// 		// this.$refs.save.setData(newMenuData, pid)
	// 	},
	// 	//删除菜单
	// 	async delMenu() {
	// 		var CheckedNodes = this.$refs.menu.getCheckedNodes()
	// 		if (CheckedNodes.length == 0) {
	// 			this.$message.warning("请选择需要删除的项")
	// 			return false;
	// 		}

	// 		var confirm = await this.$confirm('确认删除已选择的菜单吗？', '提示', {
	// 			type: 'warning',
	// 			confirmButtonText: '删除',
	// 			confirmButtonClass: 'el-button--danger'
	// 		}).catch(() => { })
	// 		if (confirm != 'confirm') {
	// 			return false
	// 		}

	// 		this.menuloading = true
	// 		var reqData = {
	// 			ids: CheckedNodes.map(item => item.id)
	// 		}
	// 		var res = await this.$API.demo.post.post(reqData)
	// 		this.menuloading = false

	// 		if (res.code == 200) {
	// 			CheckedNodes.forEach(item => {
	// 				var node = this.$refs.menu.getNode(item)
	// 				if (node.isCurrent) {
	// 					this.$refs.save.setData({})
	// 				}
	// 				this.$refs.menu.remove(item)
	// 			})
	// 		} else {
	// 			this.$message.warning(res.message)
	// 		}
	// 	}
	// }
}
</script>

<style scoped>
/* .menu:deep(.el-tree-node__label) {
	display: flex;
	flex: 1;
	height: 100%;
}

.custom-tree-node {
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: space-between;
	font-size: 14px;
	height: 100%;
	padding-right: 24px;
}

.custom-tree-node .label {
	display: flex;
	align-items: center;
	;
	height: 100%;
}

.custom-tree-node .label .el-tag {
	margin-left: 5px;
}

.custom-tree-node .do {
	display: none;
}

.custom-tree-node .do i {
	margin-left: 5px;
	color: #999;
}

.custom-tree-node .do i:hover {
	color: #333;
}

.custom-tree-node:hover .do {
	display: inline-block;
} */
</style>
