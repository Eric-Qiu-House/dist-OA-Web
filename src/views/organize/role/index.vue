<template>
	<el-container>
		<el-header>
			<div class="left-panel">
				<el-button type="primary" icon="el-icon-plus" @click="add"></el-button>
				<el-button type="danger" plain icon="el-icon-delete" :disabled="selection.length == 0"
					@click="batch_del"></el-button>
				<el-button type="primary" plain :disabled="selection.length != 1" @click="permission()">权限设置</el-button>
			</div>
			<div class="right-panel">
				<div class="right-panel-search">
					<el-input v-model="search.keyword" placeholder="角色名称" clearable></el-input>
					<el-button type="primary" icon="el-icon-search" @click="upsearch"></el-button>
				</div>
			</div>
		</el-header>
		<el-main class="nopadding">
			<scTable ref="table" :data="data" row-key="id" @selection-change="selectionChange" stripe>
				<el-table-column type="selection" width="50"></el-table-column>
				<el-table-column label="#" type="index" width="50"></el-table-column>
				<el-table-column label="角色名称" prop="name_" width="150"></el-table-column>
				<el-table-column label="排序" prop="sn_" width="80"></el-table-column>
				<el-table-column label="状态" prop="enabled_" width="80">
					<template #default="scope">
						<el-tag v-if="scope.row.enabled_ == 1" type="success">启用</el-tag>
						<el-tag v-if="scope.row.enabled_ == 0" type="danger">停用</el-tag>
					</template>
				</el-table-column>
				<el-table-column label="创建时间" prop="create_time_" width="180"></el-table-column>
				<el-table-column label="备注" prop="desc_" min-width="150"></el-table-column>
				<el-table-column label="操作" fixed="right" align="right" width="170">
					<template #default="scope">
						<el-button-group>
							<el-button text type="primary" size="small"
								@click="table_show(scope.row, scope.$index)">查看</el-button>
							<el-button text type="primary" size="small"
								@click="table_edit(scope.row, scope.$index)">编辑</el-button>
							<el-popconfirm title="确定删除吗？" @confirm="table_del(scope.row, scope.$index)">
								<template #reference>
									<el-button text type="primary" size="small">删除</el-button>
								</template>
							</el-popconfirm>
						</el-button-group>
					</template>
				</el-table-column>

			</scTable>
		</el-main>
	</el-container>

	<save-dialog v-if="dialog.save" ref="saveDialog" @success="handleSaveSuccess" 
		@closed="dialog.save = false"></save-dialog>

	<permission-dialog v-if="dialog.permission" ref="permissionDialog"
		@closed="dialog.permission = false"></permission-dialog>

</template>

<script>
import saveDialog from './save'
import permissionDialog from './permission'

export default {
	name: 'role',
	components: {
		saveDialog,
		permissionDialog
	},
	data() {
		return {
			dialog: {
				save: false,
				permission: false
			},
			selection: [],
			search: {
				keyword: null
			},
			data: []
		}
	},
	async created() {
		this.data = await this.$apiIAM.role.fromList.get()
	},
	methods: {
		//添加
		add() {
			this.dialog.save = true
			this.$nextTick(() => {
				this.$refs.saveDialog.open()
			})
		},
		//编辑
		table_edit(row) {
			this.dialog.save = true
			this.$nextTick(() => {
				this.$refs.saveDialog.open('edit').setData(row)
			})
		},
		//查看
		table_show(row) {
			this.dialog.save = true
			this.$nextTick(() => {
				this.$refs.saveDialog.open('show').setData(row)
			})
		},
		//权限设置
		permission() {
			this.dialog.permission = true
			this.$nextTick(() => {
				this.$refs.permissionDialog.setData(this.selection);
				this.$refs.permissionDialog.open()
			})
		},
		//删除
		async table_del(row) {
			var reqData = { id_: row.id_ }
			var res = await this.$apiIAM.role.delete.post(reqData);
			if (res.code == 200) {
				this.$refs.table.refresh()
				this.$message.success("删除成功")
			} else {
				this.$alert(res.message, "提示", { type: 'error' })
			}
		},
		//批量删除
		async batch_del() {
			this.$confirm(`确定删除选中的 ${this.selection.length} 项吗？如果删除项中含有子集将会被一并删除`, '提示', {
				type: 'warning'
			}).then(() => {
				const loading = this.$loading();
				this.$refs.table.refresh()
				loading.close();
				this.$message.success("操作成功")
			}).catch(() => {

			})
		},
		//表格选择后回调事件
		selectionChange(selection) {
			console.log(selection)
			this.selection = selection;
		},
		//表格内开关
		// changeSwitch(val, row) {
		// 	row.enabled_ = row.enabled_ == '1' ? '0' : '1'
		// 	row.$switch_status = true;
		// 	setTimeout(() => {
		// 		delete row.$switch_status;
		// 		row.enabled_ = val;
		// 		this.$message.success("操作成功")
		// 	}, 500)
		// },
		//搜索
		upsearch() {

		},
		//根据ID获取树结构
		filterTree(id) {
			var target = null;
			function filter(tree) {
				tree.forEach(item => {
					if (item.id == id) {
						target = item
					}
					if (item.children) {
						filter(item.children)
					}
				})
			}
			filter(this.$refs.table.tableData)
			return target
		},
		//本地更新数据
		handleSaveSuccess(data, mode) {
			if (mode == 'add') {
				this.$refs.table.refresh()
			} else if (mode == 'edit') {
				this.$refs.table.refresh()
			}
		}
	}
}
</script>

<style></style>
