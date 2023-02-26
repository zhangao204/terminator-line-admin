import {post} from '@/api/request.js'

const login = (info) => {
    return post('/login', info)
}

export {
    login
}