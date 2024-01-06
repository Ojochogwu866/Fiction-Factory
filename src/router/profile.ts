const clinicianDashboard = [
	{
		path: "profile-overview",
		component: () => import("../views/Profile/ProfileOverview.vue"),
		redirect: { name: "ProfileBio" },
		children: [
			{
				path: "userbio",
				name: "UserBio",
				component: () => import("../views/Profile/Bio.vue"),
			},
			{
				path: "portfolio",
				name: "portfolio",
				component: () => import("../views/Profile/Portfolio.vue"),
			},
			{
				path: "manage-projects",
				name: "ManageProfilects",
				component: () => import("../views/Profile/Projects.vue"),
			},
			{
				path: "new-gigs",
				name: "NewGigs",
				component: () => import("../views/Profile/NewGigs.vue"),
			},
			{
				path: "inbox",
				name: "inbox",
				component: () => import("../views/Profile/Inbox.vue"),
			},
			{
				path: "tasks-deadlines",
				name: "Task&Deadlines",
				component: () => import("../views/Profile/Tasks.vue"),
			},
			{
				path: "payments-billings",
				name: "PaymentsBillings",
				component: () => import("../views/Profile/Payments-Bilings.vue"),
			},
			{
				path: "marketplace",
				name: "marketplace",
				component: () => import("../views/Profile/Marketplace.vue"),
			},
			{
				path: "feedbacks",
				name: "feedbacks",
				component: () => import("../views/Profile/Feedbacks.vue"),
			},
			{
				path: "notifications",
				name: "Notifications",
				component: () => import("../views/Profile/Notifications.vue"),
			},
			{
				path: "analytics",
				name: "Analytics",
				component: () => import("../views/Profile/Analytics.vue"),
			},
		],
	},


	{
		path: "settings",
		component: () => import("../views/Profile/Settings.vue"),
		redirect: { name: "ProfileSettings" },
		children: [
			{
				path: "personal-information",
				name: "WritterPersonalInformation",
				component: () => import("../views/Profile/Settings/PersonalInformation.vue"),
			},
			{
				path: "Payments",
				name: "WrittersPayments",
				component: () => import("../views/Profile/Settings/Payments.vue"),
			},
			{
				path: "work-info",
				name: "writtersWorkInfo",
				component: () => import("../views/Profile/Settings/WorkInfo.vue"),
			},
			{
				path: "security",
				name: "writtersSecurity",
				component: () => import("../views/Profile/Settings/Security.vue"),
			},
			{
				path: "notifications",
				name: "writtersNotifications",
				component: () => import("../views/Profile/Settings/Notifications.vue"),
			},
			{
				path: "billing-information",
				name: "writtersBilling",
				component: () => import("../views/Profile/Settings/Billings.vue"),
			},
		],
	},
];

export default clinicianDashboard;