import React,{Component} from 'react';
import '../App.css';
import '../css/style.css';
import { Link } from 'react-router-dom';
class Header extends Component {
    render(){
        return(
            <div>
                <div class="main-wapper">
                        <div class="header">
                        <div class="header-left">
                            <a href="index-2.html" class="logo">
                                <img src={require("../img/logo.png")} width={"35"} height={"35"} alt=""/> <span class="font-weight-bold">LifeCare</span>
                            </a>
                        </div>
                        <ul class="nav user-menu float-right">
                            <li class="nav-item dropdown d-none d-sm-block">
                                <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown"><i class="far fa-bell"></i> <span class="badge badge-pill bg-danger float-right">3</span></a>
                            </li>
                            <li class="nav-item dropdown d-none d-sm-block">
                                <a href="javascript:void(0);" id="open_msg_box" class="hasnotifications nav-link"><i class="far fa-comments"></i> <span class="badge badge-pill bg-danger float-right">8</span></a>
                            </li>
                            <li class="nav-item dropdown has-arrow">
                                <a href="#" class="dropdown-toggle nav-link user-link" data-toggle="dropdown">
                                    <span class="user-img"><img class="rounded-circle" src={require("../img/user.jpg")} width={"40"} alt="Admin"/>
                                        <span class="status online"></span>
                                    <span>Admin</span></span>
                                </a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="profile.html">Thông tin cá nhân</a>
                                    <a class="dropdown-item" href="edit-profile.html">Sửa thông tin</a>
                                    <a class="dropdown-item" href="settings.html">Cài đặt</a>
                                    <Link class="dropdown-item" to="/login">Đăng xuất</Link>
                                </div>
                            </li>
                        </ul>
                        <div class="dropdown mobile-user-menu float-right">
                            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                            <div class="dropdown-menu dropdown-menu-right">
                                <a class="dropdown-item" href="profile.html">Thông tin cá nhân</a>
                                <a class="dropdown-item" href="edit-profile.html">Sửa thông tin</a>
                                <a class="dropdown-item" href="settings.html">Cài đặ<td></td></a>
                                <Link class="dropdown-item" to="/login">Đăng xuất</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Header;  // export thi cac trang khac dung dc
