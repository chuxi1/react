/*
 * @Author: zzs 2650317325@qq.com
 * @Date: 2023-12-15 10:37:42
 * @LastEditors: zzs 2650317325@qq.com
 * @LastEditTime: 2023-12-18 13:58:10
 * @FilePath: \my-react-app\src\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './global.scss';
import { AuthProvider } from './store/AuthContext';
const root = createRoot(document.getElementById('root'));
root.render(
  <>
    <AuthProvider>
      <App />
    </AuthProvider>
  </>
);