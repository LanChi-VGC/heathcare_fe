import React, { Component } from 'react';
import AreaService from '../api/AreaService';
import MajorService from '../api/MajorService';
import NursingService from '../api/NursingService';

class AddNursing extends Component {
    constructor(props){
        super(props);
        this.state = {
            listKV: [],
            listCN:[],
            id :'',
            maDieuDuong:'',
            tenDieuDuong:'',
            tenDangNhap:'',
            matKhau:'',
            email:'',
            chuyenNganh:'',
            khuVuc:''
            
        }
    }

    componentDidMount(){
        AreaService.getAreas().then(res =>{this.setState({listKV : res.data})});

        MajorService.getMajors().then(res => {this.setState({listCN: res.data})});
    }
    changemaDieuDuong = (event) => {
        this.setState({maDieuDuong: event.target.value});

    }
    changetenDieuDuong = (event) => {
        this.setState({tenDieuDuong: event.target.value});
    }
    changetenDangNhap= (event) => {
        this.setState({tenDangNhap: event.target.value});
    }
    changematKhau= (event) => {
        this.setState({matKhau: event.target.value});
    }
    changeemail= (event) => {
        this.setState({email: event.target.value});
    }
    changeKhuVuc= (event) => {
        this.setState({khuVuc: event.target.value});
    }
    changeChuyenNganh= (event) => {
        this.setState({chuyenNganh: event.target.value});
    }
    saveNusing = (e) => {
        e.preventDefault();
        let nur = {
            maDieuDuong:this.state.maDieuDuong,
            tenDieuDuong:this.state.tenDieuDuong,
            tenDangNhap:this.state.tenDangNhap,
            matKhau:this.state.matKhau,
            email:this.state.email,
            chuyenNganh:this.state.listCN.find(x=>x.maChuyenNganh===this.state.chuyenNganh),
            khuVuc:this.state.listKV.find(x=>x.maKhuVuc===this.state.khuVuc)

        };
        console.log("nur =>" + JSON.stringify(nur));

        NursingService.createNursing(nur).then(res =>{
                console.log(res);
                this.props.history.push('/nursinglist');
        });
    }
    cancel(){
       
        this.props.history.push('/nursinglist');
    }

    
    renderListKhuVuc=()=>{
     
        return this.state.listKV.map((item,index)=>{
            return(
                <option value={item.maKhuVuc} key={index}>{item.tenKhuVuc}</option>
            )
        })
    }
    renderListChuyenNganh=()=>{
     
        return this.state.listCN.map((item,index)=>{
            return(
                <option value={item.maChuyenNganh} key={index}>{item.tenChuyenNganh}</option>
            )
        })
    }
    render() {
        
        return (
            <div>
            <div class="page-wrapper">
                <div class="content">
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2">
                            <h4 class="page-title">Thêm điều dưỡng</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2">
                            <form>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Mã điều dưỡng<span class="text-danger">*</span></label>
                                            <input class="form-control" type="text" value={this.state.maDieuDuong} onChange={this.changemaDieuDuong}/>
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Tên điều dưỡng<span class="text-danger">*</span></label>
                                            <input class="form-control" type="text" value={this.state.tenDieuDuong} onChange={this.changetenDieuDuong}/>
                                        </div>
                                    </div> 
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Tên đăng nhập<span class="text-danger">*</span></label>
                                            <input class="form-control" type="text" value={this.state.tenDangNhap} onChange={this.changetenDangNhap}/>
                                        </div>
                                    </div> 
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Mật khẩu<span class="text-danger">*</span></label>
                                            <input class="form-control" type="password" value={this.state.matKhau} onChange={this.changematKhau}/>
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Email<span class="text-danger">*</span></label>
                                            <input class="form-control" type="email" value={this.state.email} onChange={this.changeemail}/>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div class="form-group">
                                                <label>Khu Vực</label>
                                                <select id="selectkv"  onChange={this.changeKhuVuc}>
                                                    <option value="-1">--Chọn--</option>
                                                        {this.renderListKhuVuc()}
                                                </select>
                                        </div>
                                    </div> 
                                    <div className="col-sm-12">
                                        <div class="form-group">
                                                <label>  Chuyên ngành</label>
                                                <select id="selectcn"  onChange={this.changeChuyenNganh}>
                                                    <option value="-1">--Chọn--</option>
                                                        {this.renderListChuyenNganh()}
                                                </select>
                                        </div>
                                    </div> 
                                </div>
                                <div class="m-t-20 text-center">
                                    <button class="btn btn-primary submit-btn mr-3" onClick={this.saveNusing}>TẠO MỚI</button>
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

export default AddNursing;