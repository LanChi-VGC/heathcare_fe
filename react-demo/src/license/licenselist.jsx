import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LicenseService from '../api/LicenseService';

class Licenses extends Component {
    constructor(props){
        super(props);
        this.state={licenses :[]}
    }
    deleteLincense(id){
        LicenseService.deleteLicense(id).then(res => {
            this.setState({licenses : this.state.licenses.filter(license => license.id !== id)});
        });
    }
    editLicense(id){
        this.props.history.push(`/editlicense/${id}`);
    }
    addLicense(){
        this.props.history.push('/addlicense');
    }
    componentDidMount(){
        LicenseService.getLicenses().then(res =>{
            console.log(res);
            this.setState({licenses : res.data});
        });
    }  
    render() {
        return (
            <div>
                <div class="page-wrapper">
                    <div class="content">
                        <div class="row">
                             <div class="col-sm-4 col-3">
                                 <h4 class="page-title">Giấy phép công việc</h4>
                            </div>
                            <div class="col-sm-8 col-9 text-right m-b-20">
                            <button class="btn btn btn-primary btn-rounded float-right" onClick={()=>this.addLicense()}><i class="fa fa-plus"></i> Thêm giấy phép</button>
                            </div>
                        </div>
				        <div class="row">
					        <div class="col-md-12">
						        <div class="table-responsive">
							        <table class="table table-border table-striped custom-table datatable mb-0">
								        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Xếp loại</th>
                                                <th>Năm tốt nghiệp</th>
                                                <th>Đơn vị cấp bằng</th>
                                                <th>Mã điều dưỡng</th>
                                                <th>Thủ thuật</th>
                                                <th class="text-right"></th>
                                            </tr>
								        </thead>
								        <tbody>
                                            {
                                                this.state.licenses.map((license,idx) =>
                                                    <tr key={license.id}>
                                                    <td>{idx+1}</td>
                                                    <td>{license.xepLoai}</td>
                                                    <td>{license.namTotNghiep}</td>
                                                    <td>{license.donViCapBang}</td>
                                                    <td>{license.dieuDuong.maDieuDuong}</td>
                                                    <td>{license.dichVu.tenDichVu}</td>
                                                    <td></td>
                                                    <td class="text-right">
                                                           <div class="dropdown dropdown-action">
                                                               <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                                               <div class="dropdown-menu dropdown-menu-right">
                                                               <button class="dropdown-item" onClick={()=>this.editLicense(license.id)}><i class="far fa-edit m-r-5"></i>Sửa</button>
                                                               <button class="dropdown-item" onClick={()=>this.deleteLincense(license.id)}><i class="far fa-trash-alt m-r-5"></i>Xóa</button>
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

export default Licenses;