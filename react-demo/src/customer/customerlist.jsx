import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Customers extends Component {
    render() {
        return (
            <div>
                <div class="page-wrapper">
                    <div class="content">
                        <div class="row">
                             <div class="col-sm-4 col-3">
                                 <h4 class="page-title">Khách hàng</h4>
                            </div>
                            <div class="col-sm-8 col-9 text-right m-b-20">
                            <Link to="/addcustomer" class="btn btn btn-primary btn-rounded float-right"><i class="fa fa-plus"></i> Thêm khách hàng</Link>
                            </div>
                        </div>
				        <div class="row">
					        <div class="col-md-12">
						        <div class="table-responsive">
							        <table class="table table-border table-striped custom-table datatable mb-0">
								        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Mã khách hàng</th>
                                                <th>Tên khách hàng</th>
                                                <th>Điện thoại</th>
                                                <th>Email</th>
                                                <th>Ngày sinh</th>
                                                <th>Giới tính</th>
                                                <th>Khu vực</th>
                                                <th class="text-right"></th>
                                            </tr>
								        </thead>
								        <tbody>
                                            <tr>
                                             <td></td>
                                             <td></td>
                                             <td></td>
                                             <td></td>
                                             <td></td>
                                             <td></td>
                                             <td></td>
                                             <td></td>
                                             <td class="text-right">
                                                    <div class="dropdown dropdown-action">
                                                        <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                                        <div class="dropdown-menu dropdown-menu-right">
                                                            <Link class="dropdown-item" to="/editcustomer"><i class="far fa-edit m-r-5"></i>Sửa</Link>
                                                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_patient"><i class="far fa-trash-alt m-r-5"></i>Xóa</a>
                                                        </div>
                                                    </div>
                                                </td> 
                                            </tr>
								        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="delete_patient" class="modal fade delete-modal" role="dialog">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-body text-center">
                                    <img src={require("../img/sent.png")} alt="" width={"50"} height={"46"}/>
                                    <h3>Bạn có chắc muốn xóa khách hàng này ?</h3>
                                    <div class="m-t-20"> <a href="#" class="btn btn-white" data-dismiss="modal">Đóng</a>
                                        <button type="submit" class="btn btn-danger">Xóa</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        );
    }
}

export default Customers;