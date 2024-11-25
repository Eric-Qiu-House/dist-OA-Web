<template>
    <el-header class="header-tabs">
      <el-tabs type="card" v-model="groupId" @tab-change="tabChange">
        <el-tab-pane label="所有" name="0"></el-tab-pane>
        <el-tab-pane label="执行项目" name="1"></el-tab-pane>
        <el-tab-pane label="市场响应" name="4"></el-tab-pane>
        <el-tab-pane label="自研项目" name="3"></el-tab-pane>
      </el-tabs>
    </el-header>
    <el-container>

    <el-card>
      <div shadow="never" header="分类筛选器">
        <sc-select-filter :data="data" :selected-values="selectedValues" :label-width="80"
          @on-change="change"></sc-select-filter>
      </div>
      <div shadow="never" header="返回值" style="margin-top: 15px;">
        <pre>{{ filterData }}</pre>
      </div>

      <div>
        <div class="left-panel">
          <el-button type="primary" icon="el-icon-plus"></el-button>
        </div>
      </div>

    </el-card>
    <el-header style="height: auto;">
      <scTable ref="projectData" :data="projectData" row-key="id_" stripe>
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column label="项目号" prop="project_number_" width="100"></el-table-column>
        <el-table-column label="项目名称" prop="project_name_" width="150"></el-table-column>
        <el-table-column label="项目经理" prop="project_manager_name_" width="150">
          <!-- <template #default="{ row }"> -->
          <!-- {{ userInfo(row.project_manager_) }} -->
          <!-- <el-select v-model="row.project_manager_" placeholder="Select" style="width: 120px">
              <el-option v-for="item in language" :key="item.value" :label="item.label" :value="item.value" />
            </el-select> -->
          <!-- </template> -->
        </el-table-column>
        <el-table-column label="客户" prop="ship_owner_" width="150"></el-table-column>
        <el-table-column label="船厂" prop="ship_person_" width="150"></el-table-column>
        <el-table-column label="项目开始" prop="start_date_" width="120"></el-table-column>
        <el-table-column label="项目结束" prop="end_date_" width="120"></el-table-column>
        <el-table-column label="项目状态" prop="project_statu_" width="120" sortable>
          <template #default="props">
            <router-link :to="{
              name: 'dataAnalysis',
            }">
              <el-button text type="primary" size="small">{{ props.row.project_statu_ }}</el-button>
            </router-link>
          </template>
        </el-table-column>
        <el-table-column label="备注" prop="remarks_" width="200" sortable></el-table-column>
        <el-table-column label="图纸状态" fixed="right" width="80">
          <template #default>
            <el-button-group>
              <router-link :to="{
                name: 'drawingInfo',
              }">
                <el-button text type="primary" size="small">查看</el-button>
              </router-link>
            </el-button-group>
          </template>
        </el-table-column>
        <el-table-column label="送审状态" fixed="right" width="80">
          <template #default>
            <el-button-group>
              <router-link :to="{
                name: 'submissionPlan',
              }">
                <el-button text type="primary" size="small">查看</el-button>
              </router-link>
            </el-button-group>
          </template>
        </el-table-column>
        <el-table-column label="操作" fixed="right" width="150">
          <template #default>
            <el-button-group>
              <a>
                <el-button text type="primary" size="small">编辑</el-button>

              </a>
              <!-- <a>
                <el-button text type="primary" size="small">删除</el-button>

              </a> -->
            </el-button-group>
          </template>
        </el-table-column>
      </scTable>
      <!-- <sc-select-filter :data="filterData" :label-width="80" @on-change="filterChange"></sc-select-filter> -->
    </el-header>

  </el-container>
</template>

<script>
import scSelectFilter from '@/components/scSelectFilter'

export default {
  name: 'listTab',
  components: {
    scSelectFilter
  },
  data() {
    return {
      data: [
        {
          title: "状态(单)",
          key: "state",
          options: [
            {
              label: "全部",
              value: ""
            },
            {
              label: "未开始",
              value: "1",
              icon: "el-icon-flag"
            },
            {
              label: "执行中",
              value: "2",
              icon: "el-icon-bottom-left"
            },
            {
              label: "已完成",
              value: "3",
              icon: "el-icon-checked"
            },
            {
              label: "已关闭",
              value: "4",
              icon: "el-icon-circle-close"
            }
          ]
        }
      ],
      selectedValues: {
        state: [""],
        type: [""]
      },
      filterData: {},

      groupId: "1",
      language: [
        {
          value: '0',
          label: '朱文广',
        },
        {
          value: '1',
          label: '王晓伟',
        },
      ],
      projectData: [],
      list: [
        {
          name: '22041',
          sex: '大连中远9000m³LEG',
          xmjl: 1,
          cd: '中远海运大连投资',
          cc: '大连中远海运重工',
          email: '2024-5-10',
          num: '2025-9-10',
          datetime: '进行中',
          datetime1: 'Hull No. N1214, Contract No. N1214-NY-02'
        },
        {
          name: '23010',
          sex: '大连中远6300m³LPG',
          xmjl: 0,
          cd: '中远海运大连投资',
          cc: '大连中远海运重工',
          email: '2024-8-10',
          num: '2025-4-10',
          datetime: '已结束',
          datetime1: '6300m³ : Hull No. N1213, Contract No. N1213-NY-01'
        },
        {
          name: '22041S',
          sex: '15000m3挖泥船FGSS',
          xmjl: 0,
          cd: '中远海运大连投资',
          cc: '大连中远海运重工',
          email: '2023-8-10',
          num: '2025-7-10',
          datetime: '未开始',
          datetime1: '15000m³ : Hull No. N1213, Contract No. N1213-NY-01'
        },
      ],

      // apiObj: this.$API.demo.list
      search: {
        keyword: ""
      }
    }
  },
  created() {
    this.getProjectInfo()
  },
  methods: {
    userInfo(id) {
      const postData = {
        id_: id
      }
      return this.$apiIAM.user.userIdReadUserInfo.post(postData)
      //     return'1111' + user

    },
    // async userInfo(id) {
    //   try {
    //     const postData = {
    //       id_: id
    //     }
    //     const user = await this.$apiIAM.user.userIdReadUserInfo.post(postData)
    //     return'1111' + user
    //   }catch (error) {
    //     console.error("Error fetching user list:", error);
    //   }
    // },
    async getProjectInfo() {
      try {
        this.projectData = await this.$dmsApi.project.readAll.get()
      } catch (error) {
        console.error("Error fetching user list:", error);
      }
    },
    //搜索
    change(selected) {
      this.filterData = selected
    },
    upsearch() {
      this.$refs.table.upData(this.search)
    },
    //标签切换
    // tabChange(name){
    // 	var params = {
    // 		groupId: name
    // 	}
    // 	this.$refs.table.reload(params)
    // },
    // filterChange(data){
    // 	this.$refs.table.upData(data)
    // }
  }
}
</script>

<style></style>
