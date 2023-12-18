/*
 * @Author: zzs 2650317325@qq.com
 * @Date: 2023-12-15 16:14:25
 * @LastEditors: zzs 2650317325@qq.com
 * @LastEditTime: 2023-12-15 16:14:50
 * @FilePath: \my-react-app\src\api\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


import request from "./request"

export const logins = (data) => {
    return request({
        url: '/user/login',
        method: 'POST',
        data: data
    })
}
