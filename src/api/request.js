import axios from 'axios'
import Notify from '@/utils/notify.js'
import {getToken} from '@/utils/auth.js'

const baseURL = 'http://127.0.0.1:8080'

const tokenPrefix = ''

const instance = axios.create({
    baseURL
})

instance.interceptors.request.use(
    config => {
        const token = getToken()
        if (token) {
            config.headers['Authorization'] = tokenPrefix + token
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
);

instance.interceptors.response.use(
    response => {
        return response
    },
    error => {
        Notify.notifyFailure(error.message)
        return Promise.reject(error.response)
    }
);

const {get, post, put} = instance

export {get, post, put}