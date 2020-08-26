import { routerRedux } from 'dva';
import produce from 'immer';

let token =
    'eyJ0eXBlIjoiSldUIiwiYWxn' +
    'IjoiSFMyNTYifQ.eyJleHAiOjE2Mjk5NDcxMzQsImlhdCI6MTU5ODQxMTEzNH0.1KD0qOmY6BESz-gD1GD7jOyWXnXR1twPT3WBijRMA78';
export default {
    namespace: 'global',
    state: {
        token: token,
        cur_user: {
            id: 8,
            username: 'tom',
            description: '',
            email: '',
            phone: '',
            birthday: 1598043966000,
            avatarUrl:
                'http://1.zmz121.cn:8010/res/file/pic/17201800000320200521080528088661.png',
            createTime: 1597331350000,
            shown: true,
            gender: null,
        },
    },
    reducers: {
        setUser(state, action) {
            console.log(action.payload);
            return produce(state, draft => {
                draft.user = action.payload;
            });
        },
        setText(state, action) {
            return {
                ...state,
                text: 'setted dva',
            };
        },
        signin(state) {
            return {
                ...state,
                login: true,
            };
        },
    },
    effects: {
        *login(action, { call, put }) {
            yield put({
                type: 'signin',
            });
            yield put(routerRedux.push('/admin'));
        },
        *throwError() {
            throw new Error('hi error');
        },
    },
};
