import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AreaService from '../api/AreaService';

class Areas extends Component {
    constructor(props){
        super(props);
        this.state = {areas : []}
       
    }
    deleteArea(id){
        AreaService.deleteArea(id).then(res => {
            this.setState({areas : this.state.areas.filter(area => area.id !== id)});
        });
    }

    editArea(id){
        this.props.history.push(`/editarea/${id}`);
    }
    addArea(){
        this.props.history.push('/addarea');
    }
    componentDidMount(){
        AreaService.getAreas().then(res => {
            console.log(res);
            this.setState({areas : res.data});
        })
    }
    render() {
        return (
            <div>
                <div class="page-wrapper">
                    <div class="content">
                        <div class="row">
                             <div class="col-sm-4 col-3">
                                 <h4 class="page-title">Khu vực</h4>
                            </div>
                            <div class="col-sm-8 col-9 text-right m-b-20">
                            <button class="btn btn btn-primary btn-rounded float-right" onClick={()=>this.addArea()}><i class="fa fa-plus"></i> Thêm khu vực</button>
                            </div>
                        </div>
				        <div class="row">
					        <div class="col-md-12">
						        <div class="table-responsive">
							        <table class="table table-border table-striped custom-table datatable mb-0">
								        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Mã khu vực</th>
                                                <th>Tên khu vực</th>
                                                <th>Giá</th>
                                                <th class="text-right"></th>
                                            </tr>
								        </thead>
								        <tbody>
                                            {
                                                this.state.areas.map((area,idx)=>
                                                <tr key={area.id}>
                                                <td>{idx+1}</td>
                                                <td>{area.maKhuVuc}</td>
                                                <td>{area.tenKhuVuc}</td>
                                                <td>{area.gia}</td>
                                                <td class="text-right">
                                                       <div class="dropdown dropdown-action">
                                                           <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                                           <div class="dropdown-menu dropdown-menu-right">
                                                           <button class="dropdown-item" onClick={()=>this.editArea(area.id)}><i class="far fa-edit m-r-5"></i>Sửa</button>
                                                                  <button class="dropdown-item" onClick={()=>{this.deleteArea(area.id)}}><i class="far fa-trash-alt m-r-5"></i>Xóa</button>
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
                                    <h3>Bạn có chắc muốn xóa khu vực này ?</h3>
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

export default Areas;