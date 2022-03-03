const INIT_STATE = {
    user: [
        {id: 1, email: 'thanh@gmail.com', password: '123456'},
        {id: 2, email: 'thang@gmail.com', password: '123456'}
    ],
    isLogin: false
}

const loginReducer = (state = INIT_STATE, action) => {

    switch (action.type) {
        case "LOGIN_PAGE":
            const users = state.user;
            const email = action.payload.email;
            const password = action.payload.pass;

            for(let i = 0; i < users.length; i++) {
                if (users[i].email === email && users[i].password === password) {
                    return {
                        ...state,
                        isLogin: true
                    }
                }else {
                    alert("Tài khoản và mật khẩu sai");
                }
            }
        case 'LOG_OUT':
            return {
                ...state,
                isLogin: false
            }

        default:
            break;
    }
    return state;
}

export default loginReducer;