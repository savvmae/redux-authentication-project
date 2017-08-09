import axios from 'axios'


export function registerService(param) {
    return axios({
        method: 'post',
        url: 'https://user-auth-test.herokuapp.com/register',
        data: {
            email: param.email,
            password: param.password,
            full_name: param.name,
            message: param.secret
        }
    }).then(serverResponse => {
        return serverResponse
    })
}

export function loginService(param) {
    return axios({
        method: 'post',
        url: 'https://user-auth-test.herokuapp.com/login',
        data: {
            email: param.email,
            password: param.password
        }
    }).then(serverResponse => {
        return serverResponse
    })
}

export function dashboardService(param) {
    return axios({
        method: 'get',
        url: 'https://user-auth-test.herokuapp.com/dashboard',
        headers: {
            'X-AUTH-TOKEN': param
        }
    }).then(serverResponse => {
        return serverResponse
    })
}