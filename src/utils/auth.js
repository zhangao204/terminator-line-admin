import Cookies from 'js-cookie'

const TokenKey = 'token';

const setToken = (token) => {
    Cookies.set(TokenKey, token)
}

const getToken = () => {
    return Cookies.get(TokenKey)
}

export {
    setToken,
    getToken
}