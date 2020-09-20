import React, { Component } from 'react';
import '../App.css';
import '../css/style.css';
import { Link } from 'react-router-dom';
class Sidebar extends Component {
    render() {
        return (
            <div>
                  <div class="sidebar" id="sidebar">
                    <div class="sidebar-inner slimscroll">
                        <div id="sidebar-menu" class="sidebar-menu">
                            <ul>
                                <li class="menu-title">Danh mục</li>
                                <li class="active">
                                    <Link to="/home"><i class="fas fa-tachometer-alt"></i> <span>Trang chủ</span></Link>
                                </li>
                                <li>
                                    <Link to="/accountlist"><i class="fas fa-user"></i> <span>Tài khoản</span></Link>
                                </li>
                                <li>
                                    <Link to="/tiplist"><i class="fab fa-gratipay"></i><span>Thủ thuật</span></Link>
                                </li>
                                <li>
                                    <Link to="/nursinglist"><i class="fa fa-user-md"></i> <span>Điều dưỡng</span></Link>
                                </li>
                                <li>
                                    <Link to="/customerlist"><i class="fa fa-wheelchair"></i> <span>Khách hàng</span></Link>
                                </li>
                                <li>
                                    <Link to="/appointlist"><i class="far fa-building"></i> <span>Lịch khám</span></Link>
                                </li>
                                <li>
                                    <Link to="/licenselist"><i class="far fa-calendar-check"></i> <span>Giấy phép công việc</span></Link>
                                </li>
                                <li>
                                    <Link to="/detaillist"><i class="fas fa-file-invoice-dollar"></i> <span>Chi tiết đặt lịch</span></Link>
                                </li>
                                <li>
                                    <Link to="/arealist"><i class="fas fa-globe"></i> <span>Khu vực</span></Link>
                                </li>
                                <li>
                                    <Link to="/servicelist"><i class="fab fa-servicestack"></i> <span>Dịch vụ</span></Link>
                                </li>
                                <li>
                                    <Link to="/majorlist"><i class="fas fa-briefcase-medical"></i> <span>Chuyên ngành</span></Link>
                                </li>
                            </ul>
                                </div>
                                </div>
                                </div>
            </div>
         
        );
    }

}

export default Sidebar; // export thi cac trang khac dung dc