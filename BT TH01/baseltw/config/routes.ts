export default [
	{
		path: '/user',
		layout: false,
		routes: [
			{
				path: '/user/login',
				layout: false,
				name: 'login',
				component: './user/Login',
			},
			{
				path: '/user',
				redirect: '/user/login',
			},
		],
	},

	///////////////////////////////////
	// DEFAULT MENU

	{
		path: '/dashboard',
		name: 'Dashboard',
		component: './TrangChu',
		icon: 'HomeOutlined',
	},

	{
		path: '/gioi-thieu',
		name: 'About',
		component: './TienIch/GioiThieu',
		hideInMenu: true,
	},

	{
		path: '/random-user',
		name: 'RandomUser',
		component: './RandomUser',
		icon: 'ArrowsAltOutlined',
	},

	{
		path: '/todo-list',
		name: 'TodoList',
		icon: 'OrderedListOutlined',
		component: './TodoList',
	},

	///////////////////////////////////
	// TH02

	{
		path: '/oantuti',
		name: 'OanTuTi',
		icon: 'PlayCircleOutlined',
		component: './OanTuTi',
	},

	{
		path: '/quanlycauhoi',
		name: 'QuanLyCauHoi',
		icon: 'FileTextOutlined',
		component: './QuanLyCauHoi',
	},

	///////////////////////////////////
	// TH03

	{
		path: '/nhanvien',
		name: 'NhanVien',
		icon: 'UserOutlined',
		component: './NhanVien',
	},

	{
		path: '/dichvu',
		name: 'DichVu',
		icon: 'AppstoreOutlined',
		component: './DichVu',
	},

	{
		path: '/lichhen',
		name: 'LichHen',
		icon: 'CalendarOutlined',
		component: './LichHen',
	},

	///////////////////////////////////

	{
		path: '/notification',
		routes: [
			{
				path: './subscribe',
				exact: true,
				component: './ThongBao/Subscribe',
			},
			{
				path: './check',
				exact: true,
				component: './ThongBao/Check',
			},
			{
				path: './',
				exact: true,
				component: './ThongBao/NotifOneSignal',
			},
		],
		layout: false,
		hideInMenu: true,
	},

	{
		path: '/403',
		component: './exception/403/403Page',
		layout: false,
	},

	{
		path: '/hold-on',
		component: './exception/DangCapNhat',
		layout: false,
	},

	{
		component: './exception/404',
	},
];
