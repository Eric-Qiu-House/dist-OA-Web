<template>
    <!-- <el-row :gutter="40"> -->
    <el-dialog v-model="dialogState" title="工时填报" width="90%" :before-close="handleClose">
        <el-container style="height: 70vh; overflow: hidden;">
            <!-- 左侧表单区域 -->
            <el-aside style="width: 70%; padding-right: 10px; overflow-y: auto;">
                <el-card shadow="never" title="">
                    <!-- {{ recordDay }} -->
                    <el-form-item label="填报记录" :label-width="100">
                        <el-table ref="formRef" :data="recordDay" label-width="100px">
                            <!-- <el-form-item label="当日填报记录" prop="list" disabled> -->
                            <el-table-column prop="pro_stage_" label="项目阶段" min-width="120">
                                <template #default="scope">
                                    <el-select v-model="scope.row.pro_stage_" disabled placeholder="请选择">
                                        <el-option v-for="item in projectType" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </template>
                            </el-table-column>
                            <el-table-column prop="project_number_" label="项目" width="180">
                                <template #default="scope">
                                    <el-select v-model="scope.row.project_number_" placeholder="请选择" disabled>
                                        <el-option v-for="item in projectInfo" :key="item.project_number_"
                                            :label="item.project_number_" :value="item.project_number_"></el-option>
                                    </el-select>
                                </template>
                            </el-table-column>
                            <el-table-column prop="project_name_" label="项目名称" width="180">
                                <template #default="scope">
                                    <el-select v-model="scope.row.project_name_" placeholder="请选择" disabled>
                                        <el-option v-for="item in projectInfo" :key="item.project_name_"
                                            :label="item.project_name_" :value="item.project_name_"></el-option>
                                    </el-select>
                                </template>
                            </el-table-column>
                            <el-table-column prop="job_type_" label="工作类型" min-width="120">
                                <template #default="scope">
                                    <el-select v-model="scope.row.job_type_" disabled placeholder="请选择阶段">
                                        <el-option v-for="item in jobType" :key="item.value" :label="item.label"
                                            :value="item.value"></el-option>
                                    </el-select>
                                </template>
                            </el-table-column>
                            <el-table-column prop="hours_" label="工时" min-width="100">
                                <template #default="scope">
                                    <el-input v-model="scope.row.hours_" placeholder="请输入内容" disabled></el-input>
                                </template>
                            </el-table-column>
                            <el-table-column prop="record_date_" label="时间" min-width="100">
                                <template #default="scope">
                                    <el-input v-model="scope.row.record_date_" disabled></el-input>
                                </template>
                            </el-table-column>
                            <el-table-column prop="remark_" label="备注" min-width="180">
                                <template #default="scope">
                                    <el-input v-model="scope.row.remark_" type="textarea" disabled />
                                </template>
                            </el-table-column>
                            <el-table-column prop="status_" fixed="right" label="操作" width="100">
                                <template #default="scope">
                                    <!-- <el-button text type="primary" size="small" @click="openDwgDialog(scope.row)" >编辑</el-button> -->
                                    <el-button text type="primary" :disabled="isReadOnly"
                                        @click="deleteButton(scope.row)">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-form-item>

                </el-card>
                <el-card shadow="never">
                    <el-form ref="formRef" :model="form" label-width="100px">
                        <el-form-item label="新增填报" prop="list">
                            <sc-form-table ref="rulesList" v-model="form.list" :addTemplate="addTemplate">

                                <el-table-column prop="pro_stage_" label="项目阶段" min-width="120">
                                    <template #default="scope">
                                        <el-select v-model="scope.row.pro_stage_" placeholder="请选择阶段" filterable
                                            @change="handleStageChange(scope.row)">
                                            <el-option v-for="item in projectType" :key="item.value" :label="item.label"
                                                :value="item.value"></el-option>
                                        </el-select>
                                    </template>
                                </el-table-column>

                                <el-table-column prop="project_number_" label="项目" width="180">
                                    <template #default="scope">
                                        <el-select v-model="scope.row.project_number_" placeholder="请选择项目" filterable
                                            @change="handleOptionSelect($event, scope.row)">
                                            <el-option v-for="item in filteredProjectInfo(scope.row.pro_stage_)"
                                                :key="item.project_number_"
                                                :label="item.project_number_ + ' - ' + item.project_name_"
                                                :value="item.project_number_">
                                            </el-option>
                                        </el-select>
                                    </template>
                                </el-table-column>

                                <el-table-column prop="project_name_" label="项目名称" width="180">
                                    <template #default="scope">
                                        <el-select v-model="scope.row.project_name_" placeholder="请选择" disabled>
                                            <el-option v-for="item in projectInfo" :key="item.project_number_"
                                                :label="item.project_name_" :value="item.project_name_"></el-option>
                                        </el-select>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="job_type_" label="工作类型" min-width="120">
                                    <template #default="scope">
                                        <el-select v-model="scope.row.job_type_" placeholder="请选择类型" filterable>
                                            <el-option v-for="item in jobType" :key="item.value" :label="item.label"
                                                :value="item.value"></el-option>
                                        </el-select>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="hours_" label="工时" min-width="100">
                                    <template #default="scope">
                                        <el-input v-model="scope.row.hours_" placeholder="请输入工时"></el-input>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="record_date_" label="时间" min-width="100">
                                    <template #default="scope">
                                        <el-input v-model="scope.row.record_date_" placeholder="请选择时间"
                                            disabled></el-input>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="remark_" label="备注" min-width="180">
                                    <template #default="scope">
                                        <el-input v-model="scope.row.remark_" type="textarea" />
                                    </template>
                                </el-table-column>
                            </sc-form-table>
                        </el-form-item>
                    </el-form>
                </el-card>

            </el-aside>

            <!-- 右侧手册表格区域 -->
            <el-main style="padding-left: 10px; border-left: 1px solid #eee; overflow-y: auto;">
                <handbookTable></handbookTable>
            </el-main>
        </el-container>
        <template #footer>
            <div class="dialog-footer">
                <el-button v-model="dialogState" @click="(dialogState = false)" :loading="loading">取消</el-button>
                <el-button v-model="dialogState" type="primary" @click="onSubmit" :loading="loading">提交</el-button>
            </div>
        </template>
    </el-dialog>
    <!-- </el-row> -->
</template>

<script>
import { defineAsyncComponent } from 'vue';
const scEditor = defineAsyncComponent(() => import('@/components/scEditor'));
import config from '@/utils/projectBasicstInfo'
import { ElMessageBox } from 'element-plus';
import { ElMessage } from 'element-plus';
import handbookTable from '../handbookTable'

export default {
    props: {
        receiveParams: Object,
    },
    components: {
        scEditor,
        handbookTable
    },
    data() {
        return {
            dialogState: false,
            projectInfo: [],
            userInfo: {},
            addTemplate: {
                user_id_: '',
                user_name_: '',
                project_number_: '',
                pro_stage_: '',
                job_type_: '',
                hours_: '',
                record_date_: '',
            },
            loading: true,
            form: {
                list: [
                    {
                        user_id_: '',
                        user_name_: '',
                        project_number_: '',
                        pro_stage_: '',
                        job_type_: '',
                        hours_: '',
                        record_date_: '',
                    },
                ],
            },
            recordDay: [],
            jobType: config.jobType,
            projectType: config.proStage,
        };
    },
    watch: {
        dialogState(val) {
            if (val) {
                // this.resetForm();
            }
        },
        receiveParams(val) {
            if (val) {
                this.getUserDayManhour();
                this.form.list.forEach(item => {
                    item.record_date_ = this.receiveParams.day,
                        item.user_id_ = this.userInfo.id_,
                        item.user_name_ = this.userInfo.fullname_
                });
            }
        },
        form: {
            handler(newVal) {
                newVal.list.forEach(item => {
                    item.record_date_ = this.receiveParams.day,
                        item.user_id_ = this.userInfo.id_,
                        item.user_name_ = this.userInfo.fullname_
                });
            },
            deep: true,
        },
    },
    async mounted() {
        this.userInfo = this.$TOOL.data.get("USER_INFO");
        if (this.userInfo) {
            this.form.user_name_ = this.userInfo.id_;
            const data = {
                userId: this.userInfo.id_,
            }
            try {
                const response = await this.$dmsApi.project.readByUser.post(data);
                this.projectInfo = response;
            } catch (error) {
                console.error(error);
            }
        }
    },
    methods: {
        handleStageChange(row) {
            // 清除项目选中状态
            row.project_number_ = "";
            console.log(row, '555555555555555')
        },
        filteredProjectInfo(proStage) {
            if (!proStage) return this.projectInfo; // 如果 pro_stage_ 为空，则返回全部项目信息
            return this.projectInfo.filter(item => item.pro_stage_ === proStage);
        },
        handleOptionSelect(selectedValue, row) {
            console.log('选中的值:', row);
            // 这里可以执行其他操作，比如根据选中的值更新行数据等
            // 例如，假设你想同时更新项目的名称
            this.projectInfo.forEach(item => {
                if (item.project_number_ === selectedValue) {
                    row.pro_stage_ = item.pro_stage_;
                }
            });
            const selectedItem = this.projectInfo.find(item => item.project_number_ === selectedValue);
            if (selectedItem) {
                row.project_name_ = selectedItem.project_name_; // 更新项目名称
            }
        },
        async openDwgDialog() {
            try {
                // 弹出确认对话框
                // const confirm = await ElMessageBox.confirm(
                //     '此操作将永久删除该项数据，是否继续？',
                //     '提示',
                //     {
                //         confirmButtonText: '确定',
                //         cancelButtonText: '取消',
                //         type: 'warning',
                //     }
                // );
                // if (confirm) {
                // 执行删除逻辑
                // this.dwgloading = true
                // const referData = {
                //     uuid_: row.uuid_,
                // };
                // await this.$dmsApi.manHours.delete.post(referData);
                // this.$emit('invoke-parent-method');
                // this.dialogState = false; // 关闭弹窗
                // this.getDwgData(); // 刷新数据
                // }
            } catch (error) {
                // 捕获取消操作或其他错误
            }
        },
        async deleteButton(row) {
            try {
                // 获取当前用户操作日期
                const currentDate = new Date(); // 确保接收了用户操作日期
                const rowDate = new Date(row.record_date_);

                // 判断是否同月
                if (currentDate.getFullYear() !== rowDate.getFullYear() || currentDate.getMonth() !== rowDate.getMonth()) {
                    // 如果不是同一个月，弹出提示，阻止后续操作
                    ElMessage({
                        type: 'warning',
                        message: '只能删除当月的记录！',
                    });
                    return;
                }

                // 弹出确认对话框
                const confirm = await ElMessageBox.confirm(
                    '此操作将永久删除该项数据，是否继续？',
                    '提示',
                    {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning',
                    }
                );

                if (confirm) {
                    // 执行删除逻辑
                    const referData = {
                        uuid_: row.uuid_,
                    };
                    await this.$dmsApi.manHours.delete.post(referData);
                    this.$emit('invoke-parent-method'); // 通知父组件刷新数据
                    this.dialogState = false; // 关闭弹窗
                }
            } catch (error) {
                // 捕获取消操作或其他错误
                if (error !== 'cancel') {
                    console.error('删除失败:', error);
                }
            }
        },

        async getUserDayManhour() {
            const data = {
                user_id_: this.userInfo.id_,
                record_date_: this.receiveParams.day
            };
            this.loading = true;
            try {
                this.recordDay = await this.$dmsApi.manHours.inquireList.post(data);
            } catch (error) {
                console.error(error);
            } finally {
                this.loading = false;
            }
        },
        open() {
            console.log(this.dialogState, 'open-tyep')
            this.dialogState = true;
        },
        resetForm() {
            // 重置表单
            this.form.list.length = 0
            // Object.assign(this.form.list[0], {
            //     user_id_: this.userInfo.id_,
            //     user_name_: this.userInfo.fullname_,
            //     record_date_: this.receiveParams.day,
            // });
        },
        async onSubmit() {
            this.loading = true;
            try {
                // 校验字段是否为空
                const isValid = this.form.list.every(item => {
                    const requiredFields = ['user_id_', 'user_name_', 'project_number_', 'job_type_', 'hours_', 'record_date_'];
                    return requiredFields.every(field => item[field]);
                });

                if (!isValid) {
                    this.$message.error('请确保所有信息均已填写');
                    return;
                }

                // 校验 hours_ 总和是否超过 24
                const totalHours = this.form.list.reduce((sum, item) => sum + Number(item.hours_ || 0), 0);
                if ((totalHours + this.receiveParams.dayHours) > 24) {
                    this.$message.error('累积工时不能超过 24 小时');
                    return;
                }

                // 提交数据
                await this.$dmsApi.manHours.create.post(this.form.list);

                // 接口返回成功后执行的操作
                this.$message.success('提交成功');
                this.form.list = []; // 清空表单
                this.dialogState = false; // 关闭弹窗
                this.resetForm(); // 重置表单
                this.$emit('invoke-parent-method');
            } catch (error) {
                this.$message.error('提交失败，请稍后重试');
            } finally {
                // 无论成功或失败都执行的操作
                this.loading = false;
            }
        },
    },
};
</script>