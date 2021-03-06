import { defineConfig } from 'umi';

export default defineConfig({
    nodeModulesTransform: {
        type: 'none',
    },
    routes: [
        { path: '/login/index', component: '@/pages/LoginPage/index' },
        { path: '/register/index', component: '@/pages/RegisterPage/index' },
        {
            path: '/',
            component: '@/layouts/HomeLayout/index',
            routes: [
                {
                    path: '/',
                    component: '@/pages/ChatCvsPage/index',
                },
                {
                    path: '/friend',
                    component: '@/pages/FriendPage/index',
                },
                {
                    path: '/group',
                    component: '@/pages/GroupPage/index',
                },
                {
                    path: '/setting',
                    component: '@/pages/SettingPage/index',
                },
            ],
        },
    ],
    dva: {
        immer: true,
        hmr: false,
    },
});
