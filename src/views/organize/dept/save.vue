<template>
	<el-dialog :title="titleMap[mode]" v-model="visible" :width="500" destroy-on-close @closed="$emit('closed')">
		<el-form :model="form" :rules="rules" :disabled="mode == 'show'" ref="dialogForm" label-width="100px">
			<el-form-item label="上级部门" prop="parent_id_">
				<el-cascader v-model="form.parent_id_" :options="groups" :props="groupsProps" :show-all-levels="false"
					clearable style="width: 100%;"></el-cascader>
			</el-form-item>
			<el-form-item label="部门名称" prop="name_">
				<el-input v-model="form.name_" placeholder="请输入部门名称" clearable></el-input>
			</el-form-item>
			<el-form-item label="排序" prop="sn_">
				<el-input-number v-model="form.sn_" controls-position="right" :min="1"
					style="width: 100%;"></el-input-number>
			</el-form-item>
			<el-form-item label="是否有效" prop="state_">
				<el-switch v-model="form.state_" :active-value="1" :inactive-value="0"></el-switch>
			</el-form-item>
			<el-form-item label="备注" prop="desc_">
				<el-input v-model="form.desc_" clearable type="textarea"></el-input>
			</el-form-item>
		</el-form>
		{{ mode }}

		<template #footer>
			<el-button @click="visible = false">取 消</el-button>
			<el-button v-if="mode != 'show'" type="primary" :loading="isSaveing" @click="submit()">保 存</el-button>
		</template>
	</el-dialog>
</template>

<script>
export default {
	emits: ['success', 'closed'],
	data() {
		return {
			mode: "add",
			titleMap: {
				add: '新增',
				edit: '编辑',
				show: '查看'
			},
			visible: false,
			isSaveing: false,
			//表单数据
			form: {
				id_: "",
				parent_id_: "",
				name_: "",
				sn_: 1,
				state_: "1",
				desc_: ""
			},
			//验证规则
			rules: {
				sort: [
					{ required: true, message: '请输入排序', trigger: 'change' }
				],
				label: [
					{ required: true, message: '请输入部门名称' }
				]
			},
			//所需数据选项
			groups: [],
			groupsProps: {
				value: "id_",
				label: 'name_',
				children: 'children',
				emitPath: false,
				checkStrictly: true
			}
		}
	},
	mounted() {
		this.getGroup()
	},
	methods: {
		//显示
		open(mode = 'add') {
			this.mode = mode;
			this.visible = true;
			return this
		},
		//加载树数据
		async getGroup() {
			var res = await this.$apiIAM.group.fromList.get();
			this.groups = res;
		},
		//表单提交方法
		submit() {
			if (this.mode == 'add') {
				console.log(this.mode, 'add')
				this.$refs.dialogForm.validate(async (valid) => {
					if (valid) {
						this.isSaveing = true;
						let formToSubmit = {
						parent_id_: this.form.parent_id_,
						name_: this.form.name_,
						sn_: this.form.sn_,
						state_: this.form.state_,
						desc_: this.form.desc_
					}
						var res = await this.$apiIAM.group.add.post(formToSubmit);
						this.isSaveing = false;
						if (res.code == 200) {
							this.$emit('success', this.form, this.mode)
							this.visible = false;
							this.$message.success("操作成功")
						} else {
							this.$alert(res.message, "提示", { type: 'error' })
						}
					}
				})
			} else {
				this.$refs.dialogForm.validate(async (valid) => {
					if (valid) {
						this.isSaveing = true;
						var res = await this.$apiIAM.group.undate.post(this.form);
						this.isSaveing = false;
						if (res.code == 200) {
							this.$emit('success', this.form, this.mode)
							this.visible = false;
							this.$message.success("操作成功")
						} else {
							this.$alert(res.message, "提示", { type: 'error' })
						}
					}
				})
			}

		},
		//表单注入数据
		setData(data) {
			this.form.id_ = data.id_
			this.form.name_ = data.name_
			this.form.state_ = data.state_
			this.form.sn_ = data.sn_
			this.form.parent_id_ = data.parent_id_
			this.form.desc_ = data.desc_

			//可以和上面一样单个注入，也可以像下面一样直接合并进去
			//Object.assign(this.form, data)
		}
	}
}
</script>

<style></style>
