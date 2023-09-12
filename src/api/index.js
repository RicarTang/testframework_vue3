import axios from './base'

export default {
    /**
     * 账号密码登陆
     * @param {*} data 用户名密码对象
     * @returns 
     */
    async fetchLogin(data) {
        // return await axios.post('/user/login', data)
        return await axios({
            method: 'post',
            url: '/user/login',
            data: data
        })
    },
    /**
     * 拉取所有用户数据
     * @param {*} params 请求参数
     * @returns 
     */
    async fetchUsers(params) {
        return await axios({
            method: 'get',
            url: '/user/users',
            params: params
        })
    },
    /**
     * 退出登录
     */
    async logout() {
        await axios({
            method: 'post',
            url: '/user/logout'
        });
    },
    /**
     * 拉取所有测试用例
     * @param {*} params 请求参数
     */
    async fetchTestcases(params) {
        return await axios({
            method: 'get',
            url: '/testcase/getAll',
            params: params
        })
    },
    /**
     * 拉取所有测试套件
     * @param {*} params 请求参数
     */
    async fetchTestsuites(params) {
        return await axios({
            method: 'get',
            url: '/testsuite/getAll',
            params: params
        })
    },


}
