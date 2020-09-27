
import React, { Component } from 'react';
import MajorService from '../api/MajorService';

class AddMajor extends Component {
    constructor(props){
        super(props);
        this.state = {
            maChuyenNganh:'',
            tenChuyenNganh:''
        };
        this.changemaChuyenNganh=this.changemaChuyenNganh.bind(this);
        this.changetenChuyenNganh=this.changetenChuyenNganh.bind(this);
        this.saveMajor=this.saveMajor.bind(this);

    }
    changemaChuyenNganh = (event) => {
        this.setState({maChuyenNganh: event.target.value});
    }
    changetenChuyenNganh= (event) => {
        this.setState({tenChuyenNganh: event.target.value});
    }
    saveMajor = (e) => {
        e.preventDefault();
        let major = {
            id:this.state.id,
            maChuyenNganh: this.state.maChuyenNganh,
            tenChuyenNganh: this.state.tenChuyenNganh
        };
        console.log("major =>" + JSON.stringify(major));
     
       MajorService.createMajor(major).then(res => {
            this.props.history.push('/majorlist');
        });
    }
    cancel(){
       
        this.props.history.push('/majorlist');
    }
    render() {
        return (
            <div>
            <div class="page-wrapper">
                <div class="content">
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2">
                            <h4 class="page-title">Thêm chuyên ngành</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2">
                            <form>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Mã chuyên ngành<span class="text-danger">*</span></label>
                                            <input class="form-control" type="text" value={this.state.maChuyenNganh}
                                                onChange={this.changemaChuyenNganh}/>
                                        </div>
                                    </div> 
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Tên chuyên ngành<span class="text-danger">*</span></label>
                                            <input class="form-control" type="text" value={this.state.tenChuyenNganh}
                                                onChange={this.changetenChuyenNganh}/>
                                        </div>
                                    </div>                                       
                                </div>
                                <div class="m-t-20 text-center">
                                    <button class="btn btn-primary submit-btn mr-3" onClick={this.saveMajor}>TẠO MỚI</button>
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

export default AddMajor;