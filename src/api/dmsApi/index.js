import config from "@/config"
import http from "@/utils/request"

export default {
	project: {
		readAll: {
			url: `${config.DMS_URL}/dmsServer/project/readALL`,
			name: "查询全部",
			get: async function(){
				return await http.get(this.url);
			}
		},
		create: {
			url: `${config.DMS_URL}/dmsServer/project/create`,
			name: "添加",
			post: async function(params){
				return await http.post(this.url,params);
			}
		},
		delete: {
			url: `${config.DMS_URL}/org/group/deleteGroup`,
			name: "删除",
			post: async function(params){
				return await http.post(this.url,params);
			}
		},
		update: {
			url: `${config.DMS_URL}/dmsServer/project/update`,
			name: "更新",
			post: async function(params){
				return await http.post(this.url,params);
			}
		}
	},
    projectUsershiproute: {
		readId: {
			url: `${config.DMS_URL}/dmsServer/projectUsershiproute/readId`,
			name: "项目ID查用用户ID组",
			post: async function(params){
				return await http.post(this.url, params);
			}
		},
	},
	drawingInfo: {
		inquireList: {
			url: `${config.DMS_URL}/dmsServer/drawingInfo/inquireList`,
			name: "read",
			post: async function(params){
				return await http.post(this.url,params);
			}
		},
	},
	drawingMenu: {
		readAll: {
			url: `${config.DMS_URL}/dmsServer/drawingMenu/readAll`,
			name: "read",
			get: async function(){
				return await http.get(this.url);
			}
		},
	},
	drawingMenuProject: {
		readId: {
			url: `${config.DMS_URL}/dmsServer/drawingMenuProject/readId`,
			name: "read",
			post: async function(params){
				return await http.post(this.url,params);
			}
		},
	},
	fileInfo: {
		readId: {
			url: `${config.DMS_URL}/dmsServer/fileInfo/readId`,
			name: "fileFind",
			post: async function(params){
				return await http.post(this.url,params);
			}
		},
	}, 
	csmFirm:{
		readAll: {
			url: `${config.DMS_URL}/dmsServer/csmFirmmodel/inquireSupplierList`,
			name: "查询全部",
			post: async function(){
				return await http.post(this.url);
			}
		},
		create: {
			url: `${config.DMS_URL}/dmsServer/csmFirmmodel/inquireSupplierById`,
			name: "添加",
			post: async function(params){
				return await http.post(this.url,params);
			}
		},
		delete: {
			url: `${config.DMS_URL}/dmsServer/csmFirmmodel/updateSupplier`,
			name: "删除",
			post: async function(params){
				return await http.post(this.url,params);
			}
		},
		update: {
			url: `${config.DMS_URL}/dmsServer/csmFirmmodel/createSupplier`,
			name: "更新",
			post: async function(params){
				return await http.post(this.url,params);
			}
		}
	},
	csmSystem:{
		readAll: {
			url: `${config.DMS_URL}/dmsServer/csmFirmmodel/inquireDeviceList`,
			name: "查询全部",
			post: async function(){
				return await http.post(this.url);
			}
		},
		create: {
			url: `${config.DMS_URL}/dmsServer/csmFirmmodel/inquireDeviceById`,
			name: "添加",
			post: async function(params){
				return await http.post(this.url,params);
			}
		},
		delete: {
			url: `${config.DMS_URL}/dmsServer/csmFirmmodel/updateDevice`,
			name: "删除",
			post: async function(params){
				return await http.post(this.url,params);
			}
		},
		update: {
			url: `${config.DMS_URL}/dmsServer/csmFirmmodel/createDevice`,
			name: "更新",
			post: async function(params){
				return await http.post(this.url,params);
			}
		}
	},
	csmProduct:{
		readAll: {
			url: `${config.DMS_URL}/dmsServer/csmFirmmodel/inquireSupplierList`,
			name: "查询全部",
			post: async function(){
				return await http.post(this.url);
			}
		},
		create: {
			url: `${config.DMS_URL}/dmsServer/csmFirmmodel/inquireSupplierById`,
			name: "添加",
			post: async function(params){
				return await http.post(this.url,params);
			}
		},
		delete: {
			url: `${config.DMS_URL}/dmsServer/csmFirmmodel/updateSupplier`,
			name: "删除",
			post: async function(params){
				return await http.post(this.url,params);
			}
		},
		update: {
			url: `${config.DMS_URL}/dmsServer/csmFirmmodel/createSupplier`,
			name: "更新",
			post: async function(params){
				return await http.post(this.url,params);
			}
		}
	},

}
