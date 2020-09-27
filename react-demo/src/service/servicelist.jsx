import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TypeService from '../api/TypeService';

class Services extends Component {
    constructor(props) {
        super(props);
        this.state={services :[]}

    }
    deleteService(id){
        TypeService.deleteService(id).then(res => {
            this.setState({services : this.state.services.filter(service => service.id !== id)});
        });
    }
    editService(id){
        this.props.history.push(`/editservice/${id}`);
    }
    addService(){
        this.props.history.push('/addservice');
    }
    componentDidMount(){
        TypeService.getServices().then(res=>{
            console.log(res)
            this.setState({services: res.data});
        });
    }
    render() {
        return (
            <div>
                <div class="page-wrapper">
                    <div class="content">
                        <div class="row">
                             <div class="col-sm-4 col-3">
                                 <h4 class="page-title">Dịch vụ</h4>
                            </div>
                            <div class="col-sm-8 col-9 text-right m-b-20">
                            <button class="btn btn btn-primary btn-rounded float-right" onClick={()=>this.addService()}><i class="fa fa-plus"></i> Thêm dịch vụ</button>
                            </div>
                        </div>
				        <div class="row">
					        <div class="col-md-12">
						        <div class="table-responsive">
							        <table class="table table-border table-striped custom-table datatable mb-0">
								        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Mã loại dịch vụ</th>
                                                <th>Loại dịch vụ</th>
                                                <th class="text-right"></th>
                                            </tr>
								        </thead>
								        <tbody>
                                           
                                        {
                                                this.state.services.map((service,idx) =>
                                                    <tr key={service.id}>
                                                    <td>{idx+1}</td>
                                                    <td>{service.maLoaiDV}</td>
                                                    <td>{service.tenLoaiDV}</td>
                                                    <td class="text-right">
                                                           <div class="dropdown dropdown-action">
                                                               <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                                               <div class="dropdown-menu dropdown-menu-right">
                                                               <button class="dropdown-item" onClick={()=>this.editService(service.id)} ><i class="far fa-edit m-r-5"></i>Sửa</button>
                                                               <button class="dropdown-item"  onClick={()=>this.deleteService(service.id)}><i class="far fa-trash-alt m-r-5"></i>Xóa</button>
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
                                    <h3>Bạn có chắc muốn xóa dịch vụ này ?</h3>
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

export default Services;