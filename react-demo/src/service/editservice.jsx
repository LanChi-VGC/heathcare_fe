import React, { Component } from 'react';
import TypeService from '../api/TypeService';

class EditService extends Component {
    constructor(props){
        super(props);
        this.state={
            id:this.props.match.params.id,
            maLoaiDV:'',
            tenLoaiDV:''
        }
        this.changemaLoaiDV=this.changemaLoaiDV.bind(this);
        this.changetenLoaiDV=this.changetenLoaiDV.bind(this);
        this.updateService=this.updateService.bind(this);
    }
    componentDidMount(){
       
        TypeService.getServiceById(this.state.id).then((res)=>{
            let service = res.data;
            console.log(res)
            this.setState({
              maLoaiDV: service.maLoaiDV,
              tenLoaiDV: service.tenLoaiDV
            });
        });
    }
    changemaLoaiDV = (event) => {
        this.setState({maLoaiDV: event.target.value});
    }
    changetenLoaiDV= (event) => {
        this.setState({tenLoaiDV: event.target.value});
    }
    updateService = (e) => {
        e.preventDefault();
        let service = {
            id:this.state.id,
            maLoaiDV: this.state.maLoaiDV,
            tenLoaiDV: this.state.tenLoaiDV
        };
        console.log("service =>" + JSON.stringify(service));
     
        TypeService.updateService(service,this.state.id).then(res => {
            this.props.history.push('/servicelist');
        });
    }
    cancel(){
       
        this.props.history.push('/servicelist');
    }
    render() {
        return (
            <div>
            <div class="page-wrapper">
                <div class="content">
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2">
                            <h4 class="page-title">Cập nhật dịch vụ</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2">
                            <form>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Mã loại dịch vụ<span class="text-danger">*</span></label>
                                            <input class="form-control" type="text" value={this.state.maLoaiDV} onChange={this.changemaLoaiDV}/>
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Loại dịch vụ<span class="text-danger">*</span></label>
                                            <input class="form-control" type="text" value={this.state.tenLoaiDV} onChange={this.changetenLoaiDV}/>
                                        </div>
                                    </div>                                             
                                </div>
                                <div class="m-t-20 text-center">
                                    <button class="btn btn-primary submit-btn mr-3" onClick={this.updateService}>CẬP NHẬT</button>
                                    <button class="btn btn-info submit-btn" onClick={this.cancel.bind(this)}>TRỞ VỀ</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default EditService;