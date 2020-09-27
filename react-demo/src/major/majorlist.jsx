import React, { Component } from 'react';
import MajorService from '../api/MajorService';

class Majors extends Component {
    constructor(props){
        super(props);
        this.state = {majors : []}
        this.addMajor=this.addMajor.bind(this);
        this.editMajor=this.editMajor.bind(this);
        this.deleteMajor=this.deleteMajor.bind(this);
    }
    deleteMajor(id){
        MajorService.deleteMajor(id).then(res => {
            this.setState({majors : this.state.majors.filter(major => major.id !== id)});
        });
    }

    editMajor(id){
        this.props.history.push(`/editmajor/${id}`);
    }
    addMajor(){
        this.props.history.push('/addmajor');
    }
    componentDidMount(){
        MajorService.getMajors().then(res =>{
            console.log(res);
            this.setState({majors: res.data});
            console.log(this.state.majors)
        });
    }
    render() {
        return (
            <div>
                <div class="page-wrapper">
                    <div class="content">
                        <div class="row">
                             <div class="col-sm-4 col-3">
                                 <h4 class="page-title">Chuyên ngành</h4>
                            </div>
                            <div class="col-sm-8 col-9 text-right m-b-20">
                            <button class="btn btn btn-primary btn-rounded float-right" onClick={()=>this.addMajor()}><i class="fa fa-plus"></i> Thêm chuyên ngành</button>
                            </div>
                        </div>
				        <div class="row">
					        <div class="col-md-12">
						        <div class="table-responsive">
							        <table class="table table-border table-striped custom-table datatable mb-0">
								        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Mã chuyên ngành</th>
                                                <th>Tên chuyên ngành</th>
                                                <th class="text-right"></th>
                                            </tr>
								        </thead>
								        <tbody>
                                            {
                                                this.state.majors.map((major,idx) =>
                                                    <tr key={major.id}>
                                                    <td>{idx+1}</td>
                                                    <td>{major.maChuyenNganh}</td>
                                                    <td>{major.tenChuyenNganh}</td>
                                                    <td class="text-right">
                                                           <div class="dropdown dropdown-action">
                                                               <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                                               <div class="dropdown-menu dropdown-menu-right">
                                                               <button class="dropdown-item" onClick={()=>this.editMajor(major.id)}><i class="far fa-edit m-r-5"></i>Sửa</button>
                                                               <button class="dropdown-item" onClick={()=>{this.deleteMajor(major.id)}}><i class="far fa-trash-alt m-r-5"></i>Xóa</button>
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
                                    <h3>Bạn có chắc muốn xóa chuyên ngành này ?</h3>
                                    <div class="m-t-20"> <a href="#" class="btn btn-white" data-dismiss="modal">Đóng</a>
                                        <button type="submit" class="btn btn-danger"  >Xóa</button>
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

export default Majors;