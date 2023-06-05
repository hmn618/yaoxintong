import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Nav from '@/components/Home/Nav'
import MedicineDetail from '@/components/medicine/MedicineDetail'
import MedicineCompanyDetail from '@/components/company/MedicineCompanyDetail'
import ElectricBusinessDetail from '@/components/company/ElectricBusinessDetail'
import MedicineReport from '@/components/medicine/MedicineReport'
import MedicineCompanyReport from '@/components/company/MedicineCompanyReport'
import ElectricBusinessReport from '@/components/company/ElectricBusinessReport'
import MedicineKnowledgeMap from '@/components/medicine/MedicineKnowledgeMap'
import ShowSellerInfor from '@/components/companysys/sellerShowInfor'
import CompanyKnowledgeMap from '@/components/company/CompanyKnowledgeMap'
import ChangeSellerInfor from '@/components/companysys/sellerChangeInfor'
import ChangeSellerPassword from '@/components/companysys/sellerChangePassword'
import AuthenticationApply from '@/components/companysys/AuthenticationApply'
import AuthenticationProcess from '@/components/companysys/AuthenticationProcess'
import UserCenter from '@/components/usersys/usercenter'
import UserChangeInfor from '@/components/usersys/userChangeInfor'
import UserChangePassword from '@/components/usersys/userChangePassword'
import OrderInfor from '@/components/usersys/OrderInfor'
import CompensationApply from '@/components/usersys/CompensationApply'
import CompensationInfor from '@/components/usersys/CompensationInfor'
import innerHead from '@/components/innerHeadAndFoot/innerHead'
import innerFoot from '@/components/innerHeadAndFoot/innerFoot'
import Login from '@/components/loginAndRegister/login'
import Register from '@/components/loginAndRegister/Register'
import Test from '@/components/Test'
import Mainframe from '@/components/Home/mainframe'
import process from '@/components/processData/process'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'Home',
			component: Mainframe
		},
		{
			path: '/nav/:search_ob/:search_type/:word',
			name: 'Nav',
			component: Nav
		},
		{
			path: '/medicine_detail/:id',
			name: 'MedicineDetail',
			component: MedicineDetail
		},
		{
			path: '/medicine_company_detail/:id',
			name: 'MedicineCompanyDetail',
			component: MedicineCompanyDetail
		},
		{
			path: '/electric_business_detail/:id',
			name: 'ElectricBusinessDetail',
			component: ElectricBusinessDetail
		},
		{
			path: '/medicine_report/:id',
			name: 'MedicineReport',
			component: MedicineReport
		},
		{
			path: '/medicine_company_report/:id',
			name: 'MedicineCompanyReport',
			component: MedicineCompanyReport
		},
		{
			path: '/company_knowledge_map/:map_op/:id',
			name: 'CompanyKnowledgeMap',
			component: CompanyKnowledgeMap
		},
		{
			path: '/electric_business_report/:id',
			name: 'ElectricBusinessReport',
			component: ElectricBusinessReport
		},
		{
			path: '/medicine_knowledge_map/:medOrCom/:map_op/:id',
			name: 'MedicineKnowledgeMap',
			component: MedicineKnowledgeMap
		},
		{
			path: '/login',
			name: 'Login',
			component: Login
		},
		{
			path: '/register',
			name: 'Register',
			component: Register
		},
		{
			path: '/showsellerinfor',
			name: 'ShowSellerInfor',
			component: ShowSellerInfor
		},
		{
			path: '/changesellerinfor',
			name: 'ChangeSellerInfor',
			component: ChangeSellerInfor
		},
		{
			path: '/changesellerpassword',
			name: 'ChangeSellerPassword',
			component: ChangeSellerPassword
		},
		{
			path: '/authenticationapply',
			name: 'AuthenticationApply',
			component: AuthenticationApply
		},
		{
			//引用路径在此
			path: '/authenticationprocess',
			name: 'AuthenticationProcess',
			component: AuthenticationProcess
		},
		{
			path: '/usercenter',
			name: 'UserCenter',
			component: UserCenter
		},
		{
			path: '/userchangeinfor',
			name: 'UserChangeInfor',
			component: UserChangeInfor
		},
		{
			path: '/userchangepassword',
			name: 'UserChangePassword',
			component: UserChangePassword
		},
		{
			path: '/orderinfor',
			name: 'OrderInfor',
			component: OrderInfor
		},
		{
			path: '/compensationapply/:id/:name',
			name: 'CompensationApply',
			component: CompensationApply
		},
		{
			path: '/compensationinfor/:id',
			name: 'CompensationInfor',
			component: CompensationInfor
		},
		{
			path: '/test',
			name: 'test',
			component: Test
		},
		{
			path: '/mainframe',
			name: 'mainframe',
			component: Mainframe
		},
		{
			path: '/process',
			name: 'process',
			component: process
		}
	],
	map: [{

	}]
})