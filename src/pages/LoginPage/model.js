import { Link } from 'umi';

const LoginModel = {
    namespace: 'LoginModel',
    state: {
        username: '',
        password: '',
    },
    reducers: {
        //action->{type, payload}
        setUserR(state, action) {
            return action.payLoad;
        },
    },
    effects: {
        //effects -> {put, call}
        *setUser(action, effects) {
            const token = yield effects.select(state => state.global.token);
            const data = yield effects.call(getUserByToken, token);

            if (data === undefined) {
                history.push('/LoginPage');
            }
            yield effects.put({
                type: 'global/setUser',
                payload: data,
            });
        },
    },
    subscriptions: {
        setup({ dispatch, history }, done) {
            history.listen((location, action) => {
                if (location.pathname === '/login/index') {
                    dispatch({
                        type: 'websocket/stopWebSocket',
                    });
                }
            });
        },
    },
};

export default LoginModel;
