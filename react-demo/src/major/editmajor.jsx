import React, { Component } from 'react';
import MajorService from '../api/MajorService';

class EditMajor extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:this.props.match.params.id,
            maChuyenNganh:'',
            tenChuyenNganh:''
        };
        this.changemaChuyenNganh=this.changemaChuyenNganh.bind(this);
        this.changetenChuyenNganh=this.changetenChuyenNganh.bind(this);
        this.updateMajor=this.updateMajor.bind(this);
    }
    componentDidMount(){
       
        MajorService.getMajorById(this.state.id).then((res)=>{
            let major = res.data;
            console.log(res)
            this.setState({
               maChuyenNganh: major.maChuyenNganh,
               tenChuyenNganh: major.tenChuyenNganh
            });
        });
}

    changemaChuyenNganh = (event) => {
        this.setState({maChuyenNganh: event.target.value});
    }
    changetenChuyenNganh= (event) => {
        this.setState({tenChuyenNganh: event.target.value});
    }
    updateMajor = (e) => {
        e.preventDefault();
        let major = {
            id:this.state.id,
            maChuyenNganh: this.state.maChuyenNganh,
            tenChuyenNganh: this.state.tenChuyenNganh
        };
        console.log("major =>" + JSON.stringify(major));
        MajorService.updateMajor(major,this.state.id).then(res => {
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
                            <h4 class="page-title">Cập nhật chuyên ngành</h4>
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
                                    <button class="btn btn-primary submit-btn mr-3" onClick={this.updateMajor}>CẬP NHẬT</button>
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

export default EditMajor;