import React, { Component } from 'react';
import NursingService from '../api/NursingService';


class Nursings extends Component {
    constructor(props){
        super(props);
        this.state={nurs :[]}

        
    }
    deleteNurs(id){
            NursingService.deleteNursing(id).then(res => {
            this.setState({nurs : this.state.nurs.filter(nur => nur.id !== id)});
        });
    }
    editNurs(id){
        this.props.history.push(`/editnursing/${id}`);
    }
    addNurs(){
        this.props.history.push('/addnursing');
    }
    componentDidMount(){
        NursingService.getNursings().then(res =>{
            console.log(res);
            this.setState({nurs : res.data});
        });
    }  
    render() {
        return (
            <div>
                <div class="page-wrapper">
                    <div class="content">
                        <div class="row">
                             <div class="col-sm-4 col-3">
                                 <h4 class="page-title">Điều dưỡng</h4>
                            </div>
                            <div class="col-sm-8 col-9 text-right m-b-20">
                            <button class="btn btn btn-primary btn-rounded float-right" onClick={()=>this.addNurs()}><i class="fa fa-plus"></i> Thêm điều dưỡng</button>
                            </div>
                        </div>
				        <div class="row">
					        <div class="col-md-12">
						        <div class="table-responsive">
							        <table class="table table-border table-striped custom-table datatable mb-0">
								        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Mã điều dưỡng</th>
                                                <th>Tên điều dưỡng</th>
                                                <th>Tên đăng nhập</th>
                                                <th>Email</th>
                                                <th>Chuyên ngành</th>
                                                <th>Khu vực</th>
                                                <th class="text-right"></th>
                                            </tr>
								        </thead>
								        <tbody>
                                            {
                                                this.state.nurs.map((nur,idx) =>
                                                    <tr key={nur.id}>
                                                    <td>{idx+1}</td>
                                                    <td>{nur.maDieuDuong}</td>
                                                    <td>{nur.tenDieuDuong}</td>
                                                    <td>{nur.tenDangNhap}</td>
                                                    <td>{nur.email}</td>
                                                    <td>{nur.chuyenNganh.tenChuyenNganh}</td>
                                                    <td>{nur.khuVuc.tenKhuVuc}</td>
                                                    <td class="text-right">
                                                           <div class="dropdown dropdown-action">
                                                               <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                                               <div class="dropdown-menu dropdown-menu-right">
                                                               <button class="dropdown-item" onClick={()=>this.editNurs(nur.id)}><i class="far fa-edit m-r-5"></i>Sửa</button>
                                                               <button class="dropdown-item" onClick={()=>this.deleteNurs(nur.id)}><i class="far fa-trash-alt m-r-5"></i>Xóa</button>
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

export default Nursings;