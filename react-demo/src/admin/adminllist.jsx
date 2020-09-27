import React, { Component } from 'react';
import AdminService from '../api/AdminService';

class Admins extends Component {

    constructor(props){
        super(props);
        this.state={admins :[]}       
    }
    deleteAdmin(id){
        AdminService.deleteAdmin(id).then(res => {
            this.setState({admins : this.state.admins.filter(admin => admin.id !== id)});
        });
    }
    editAdmin(id){
        this.props.history.push(`/editadmin/${id}`);
    }
    addAdmin(){
        this.props.history.push('/addadmin');
    }
    componentDidMount(){
        AdminService.getAdmins().then(res => {
            this.setState({admins: res.data});
        });
    }  
    render() {
        return (
            <div>
                <div class="page-wrapper">
                    <div class="content">
                        <div class="row">
                             <div class="col-sm-4 col-3">
                                 <h4 class="page-title">Admin</h4>
                            </div>
                            <div class="col-sm-8 col-9 text-right m-b-20">
                            <button class="btn btn btn-primary btn-rounded float-right" onClick={()=>this.addAdmin()}><i class="fa fa-plus"></i> Thêm Admin</button>
                            </div>
                        </div>
				        <div class="row">
					        <div class="col-md-12">
						        <div class="table-responsive">
							        <table class="table table-border table-striped custom-table datatable mb-0">
								        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Tên admin</th>
                                                <th>Tên đăng nhập</th>
                                                <th>Ngày sinh</th>
                                                <th>Email</th>
                                                <th>Địa chỉ</th>
                                                <th>Tình trạng</th>
                                                <th>Khu Vực</th>
                                                <th class="text-right"></th>
                                            </tr>
								        </thead>
								        <tbody>
                                            {
                                                this.state.admins.map((admin,idx) =>
                                                    <tr key={admin.id}>
                                                    <td>{idx+1}</td>
                                                    <td>{admin.tenAdmin}</td>
                                                    <td>{admin.username}</td>
                                                    <td>{admin.ngaySinh}</td>
                                                    <td>{admin.email}</td>
                                                    <td>{admin.diaChi}</td>
                                                    <td>{admin.isActive}</td>
                                                    <td>{admin.khuVuc.tenKhuVuc}</td>
                                                    <td class="text-right">
                                                           <div class="dropdown dropdown-action">
                                                               <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                                               <div class="dropdown-menu dropdown-menu-right">
                                                               <button class="dropdown-item" onClick={()=>this.editAdmin(admin.id)}><i class="far fa-edit m-r-5"></i>Sửa</button>
                                                               <button class="dropdown-item" onClick={()=>this.deleteAdmin(admin.id)}><i class="far fa-trash-alt m-r-5"></i>Xóa</button>
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

export default Admins;