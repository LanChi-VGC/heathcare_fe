import React, { Component } from 'react';
import AppointService from '../api/AppointService';

class Appoints extends Component {
    constructor(props){
        super(props);
        this.state={appoints :[]}
     

        
    }
    deleteAppoint(id){
        AppointService.deleteApoint(id).then(res => {
            this.setState({appoints : this.state.appoints.filter(appoint => appoint.id !== id)});
        });
    }
    editAppoint(id){
        this.props.history.push(`/editappoint/${id}`);
    }
    addAppoint(){
        this.props.history.push('/addappoint');
    }
    componentDidMount(){
       AppointService.getAppoints().then(res =>{
           console.log(res);
           this.setState({appoints : res.data});
       })
    }  
    render() {
        return (
            <div>
                <div class="page-wrapper">
                    <div class="content">
                        <div class="row">
                             <div class="col-sm-4 col-3">
                                 <h4 class="page-title">Đặt lịch</h4>
                            </div>
                            <div class="col-sm-8 col-9 text-right m-b-20">
                            <button class="btn btn btn-primary btn-rounded float-right" onClick={()=>this.addAppoint()}><i class="fa fa-plus"></i> Thêm lịch khám</button>
                            </div>
                        </div>
				        <div class="row">
					        <div class="col-md-12">
						        <div class="table-responsive">
							        <table class="table table-border table-striped custom-table datatable mb-0">
								        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Tên khách hàng</th>
                                                <th>Email</th>
                                                <th>Điện thoại</th>
                                                <th>Ngày bắt đầu</th>
                                                <th>Giờ bắt đầu</th>
                                                <th>Số ngày</th>
                                                <th>Tổng tiền</th>
                                                <th class="text-right"></th>
                                            </tr>
								        </thead>
								        <tbody>
                                            {
                                                this.state.appoints.map((appoint,idx) =>
                                                    <tr key={appoint.id}>
                                                    <td>{idx+1}</td>
                                                    <td>{appoint.tenKhachHang}</td>
                                                    <td>{appoint.email}</td>
                                                    <td>{appoint.dienThoai}</td>
                                                    <td>{appoint.ngayBatDau}</td>
                                                    <td>{appoint.gioBatDau}</td>
                                                    <td>{appoint.soNgay}</td>
                                                    <td>{appoint.tongTien}</td>
                                                    <td></td>
                                                    <td class="text-right">
                                                           <div class="dropdown dropdown-action">
                                                               <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                                               <div class="dropdown-menu dropdown-menu-right">
                                                               <button class="dropdown-item" onClick={()=>this.editAppoint(appoint.id)}><i class="far fa-edit m-r-5"></i>Sửa</button>
                                                               <button class="dropdown-item" onClick={()=>this.deleteAppoint(appoint.id)}><i class="far fa-trash-alt m-r-5"></i>Xóa</button>
                                                               </div>
                                                           </div>
                                                       </td> 
                                                   </tr>
                                                )
                                            }
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
                                    <h3>Bạn có chắc muốn xóa thủ thuật này ?</h3>
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

export default Appoints;