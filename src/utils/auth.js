import Cookies from 'js-cookie'

const TokenKey = 'token';

const LoginInfoKey = 'login_info'

const setToken = (token) => {
    Cookies.set(TokenKey, token)
}

const getToken = () => {
    return Cookies.get(TokenKey)
}

// TODO: 不能放对象
const setLoginInfo = (info) => {
    Cookies.set(LoginInfoKey, info)
}

// TODO: 同上
const getLoginInfo = () => {
    return Cookies.get(LoginInfoKey)
}

export {
    setToken,
    getToken,
    setLoginInfo,
    getLoginInfo
}