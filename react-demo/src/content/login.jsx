import React,{Component} from 'react';

import { render, logDOM } from '@testing-library/react';
import '../App.css';
import '../css/style.css';
import { Link } from 'react-router-dom';
class Login extends Component {
    render(){
        return(
            <div>
                <div class="main-wrapper account-wrapper bg-primary">
                        <div class="account-page">
                            <div class="account-center">
                                <div class="account-box">
                                    <form action="http://dreamguys.co.in/preclinic/template/index.html" class="form-signin">
                                        <div class="account-logo">
                                            <a href="index-2.html"><img src={require("../img/logo-dark.png")} alt=""/></a>
                                        </div>
                                        <div class="form-group">
                                            <label>Tài khoản hoặc Email</label>
                                            <input type="text" autofocus="" class="form-control"/>
                                        </div>
                                        <div class="form-group">
                                            <label>Mật khẩu</label>
                                            <input type="password" class="form-control"/>
                                        </div>
                                        <div class="form-group text-right">
                                            <a href="forgot-password.html">Quên mật khẩu ?</a>
                                        </div>
                                        <div class="form-group text-center">
                                           <Link to="/home"><button type="submit" class="btn btn-primary account-btn">Đăng nhập</button></Link> 
                                        </div>
                                        <div class="text-center register-link">
                                           Chưa có tài khoản ? <a href="register.html">Đăng kí ngay</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }

}

export default Login;  // export thi cac trang khac dung dc
