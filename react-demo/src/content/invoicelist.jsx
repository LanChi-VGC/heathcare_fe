import React,{Component} from 'react';
import '../App.css';
import '../css/style.css';
import { Link } from 'react-router-dom';
class Invoices extends Component {
    render(){
        return(
            <div>
                 <div class="page-wrapper">
                    <div class="content">
                        <div class="row">
                            <div class="col-sm-5 col-4">
                                <h4 class="page-title">Hóa đơn</h4>
                            </div>
                            <div class="col-sm-7 col-8 text-right m-b-30">
                                <Link to="/addinvoice" class="btn btn-primary btn-rounded"><i class="fa fa-plus"></i>Tạo hóa đơn</Link>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="table-responsive">
                                    <table class="table table-striped custom-table mb-0">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Mã hóa đơn</th>
                                                <th>Tên bệnh nhân</th>
                                                <th>Ngày lập hóa đơn</th>
                                                <th>Tổng tiền</th>
                                                <th>Tình trạng</th>
                                                <th class="text-right"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td><a href="invoice-view.html">#INV-0001</a></td>
                                                <td>Charles Ortega</td>
                                                <td>1 Aug 2018</td>
                                                <td>$20</td>
                                                <td><span class="badge badge-pill badge-success">Đã thanh toán</span></td>
                                                <td class="text-right">
                                                    <div class="dropdown dropdown-action">
                                                        <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                                        <div class="dropdown-menu dropdown-menu-right">
                                                            <Link class="dropdown-item" to="/addinvoice"><i class="far fa-edit m-r-5"></i>Sửa</Link>                      
                                                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_invoice"><i class="far fa-trash-alt m-r-5"></i> Xóa</a>
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
                <div id="delete_invoice" class="modal fade delete-modal" role="dialog">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-body text-center">
                                <img src={require("../img/sent.png")} alt="" width={"50"} height={"46"}/>
                                <h3>Bạn có chắc chắn muốn xóa hóa đơn này</h3>
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

export default Invoices;  // export thi cac trang khac dung dc