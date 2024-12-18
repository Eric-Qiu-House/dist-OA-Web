<template>
	<el-dialog :title="用户管理" v-model="visible" :width="1800" destroy-on-close @closed="$emit('closed')">
		<el-main>
			<el-row :gutter="5">
				<el-col :lg="7">
					<el-tree class="menu" :data="group" @node-click="groupClick">
						<template #default="{ data }">
							<span class="el-tree-node__label">
								{{ data.name_ }}
							</span>
						</template>
					</el-tree>
				</el-col>
				<el-col :lg="14">
					<el-transfer v-model="value" :data="filteredUserData" :props="{ key: 'id_', label: 'fullname_' }" :titles="['用户组', '项目组']"/>
				</el-col>
			</el-row>
		</el-main>
		{{value}}
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
      data: [],
      value: [],
      visible: false,
      isSaveing: false,
      group: [],
      userData: [], // 完整用户数据
      groupUser: [] // 部门用户数据
    };
  },
  computed: {
    // 过滤后的用户数据，保留已选中的用户
    filteredUserData() {
      if (this.groupUser.length === 0) return this.userData;

      const groupUserIds = new Set(this.groupUser.map(user => user.id_));
      const selectedUsers = this.userData.filter(user => this.value.includes(user.id_));

      const combinedUsers = [
        ...this.userData.filter(user => groupUserIds.has(user.id_)),
        ...selectedUsers
      ];

      const uniqueUsers = Array.from(new Set(combinedUsers.map(user => user.id_)))
        .map(id => combinedUsers.find(user => user.id_ === id));

      return uniqueUsers;
    }
  },
  methods: {
    // 树点击事件
    async groupClick(data) {
      this.asd(data.id_);
    },
    // 加载分组用户
    async asd(groupId) {
      const data = { group_id_: groupId };
      this.groupUser = await this.$apiIAM.user.usersByGroup.post(data);
    },
    // 获取所有用户
    async getUser() {
      this.userData = await this.$apiIAM.user.fromList.get();
    },
    // 打开弹窗
    open(mode = 'add') {
      this.mode = mode;
      this.visible = true;
      return this;
    },
    // 加载分组数据
    async getGroup() {
      this.showGrouploading = true;
      const res = await this.$apiIAM.group.fromList.get();
      this.group = res;
      this.showGrouploading = false;
    },
    // 设置选中数据
    async setData(data) {
      console.log("data data:", data);

      if (!Array.isArray(data)) {
        console.error("setData 参数必须是数组");
        return;
      }

      // 等待 userData 加载完成
      if (this.userData.length === 0) {
        await this.getUser();
      }

      // 检查数据是否存在于 userData 中
      const matchedValues = data
        .filter(item => this.userData.some(user => user.id_ === item.id_))
        .map(item => item.id_);

      // 更新 value
      this.value = [...new Set([...this.value, ...matchedValues])];
      console.log("Updated value:", this.value);
    }
  },
  mounted() {
    // 加载初始数据
    this.getGroup();
    this.getUser();
  }
};
</script>
