/*
 * @Author: zzs 2650317325@qq.com
 * @Date: 2023-12-18 13:56:40
 * @LastEditors: zzs 2650317325@qq.com
 * @LastEditTime: 2023-12-18 14:50:09
 * @FilePath: \my-react-app\src\store\AuthContext.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { createContext, useContext, useReducer } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

const initialState = {
    token: Cookies.get('token') || null,
};

const authReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TOKEN':
            Cookies.set('token', action.payload, { expires: 1 })
            return {
                ...state,
                token: action.payload,
            };
        default:
            return state;
    }
};

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};


const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export { AuthProvider, useAuth };