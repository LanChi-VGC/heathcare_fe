
import React, { Component } from 'react';
import AdminService from '../api/AdminService';
import AreaService from '../api/AreaService';
class AddAdmin extends Component {
    constructor(props){
        super(props);
        this.state = {
            listKV: [],
            tenAdmin:'',
            username:'',
            password:'',
            ngaySinh:'',
            diaChi:'',
            email:'',
            isActive:'',
            khuVuc:'',
            listtinhtrang:[],
            
        }
    }

    componentDidMount(){
        AreaService.getAreas().then(res =>{
            this.setState({listKV: res.data});
        })
    }
    changetenAdmin = (event) => {
        this.setState({tenAdmin: event.target.value});

    }
    changeusername = (event) => {
        this.setState({username: event.target.value});
    }
    changepassword = (event) => {
        this.setState({password: event.target.value});
    }
    changengaySinh = (event) => {
        this.setState({ngaySinh: event.target.value});
    }
    changediaChi = (event) => {
        this.setState({diaChi: event.target.value});
    }
    changeemail = (event) => {
        this.setState({email: event.target.value});
    }
    changekhuVuc = (event) => {
        this.setState({khuVuc: event.target.value});
    }
    changeisActive = (event) => {
        this.setState({isActive: event.target.value});
    }
    saveAdmin = (e) => {
        e.preventDefault();
        let admin = {
            tenAdmin:this.state.tenAdmin,
            username:this.state.username,
            password:this.state.password,
            ngaySinh:this.state.ngaySinh,
            diaChi:this.state.diaChi,
            email:this.state.email,
            isActive: this.state.isActive,
            khuVuc:this.state.listKV.find(x => x.maKhuVuc === this.state.khuVuc)
        };
        console.log("admin =>" + JSON.stringify(admin));

        AdminService.createAdmin(admin).then(res =>{
                this.props.history.push('/adminlist');
        });
    }
    cancel(){
       
        this.props.history.push('/adminlist');
    }
    renderListKhuVuc=()=>{
     
        return this.state.listKV.map((item,index)=>{
            return(
                <option value={item.maKhuVuc} key={index}>{item.tenKhuVuc}</option>
            )
        })
    }
    renderTinhTrang=()=>{
        var listtinhtrang = [{"value":true,"label":"Hoạt động"},{"value":false,"label":"Không hoạt động"}];
        return listtinhtrang.map((item,index)=>{
            return(
                <option value={item.value} key={index}>{item.label}</option>
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
                            <h4 class="page-title">Thêm Admin</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2">
                            <form>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Tên Admin<span class="text-danger">*</span></label>
                                            <input class="form-control" type="text" value={this.state.tenAdmin} onChange={this.changetenAdmin}/>
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Tên đăng nhập<span class="text-danger">*</span></label>
                                            <input class="form-control" type="text" value={this.state.username} onChange={this.changeusername}/>
                                        </div>
                                    </div> 
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Mật khẩu<span class="text-danger">*</span></label>
                                            <input class="form-control" type="password" value={this.state.password} onChange={this.changepassword}/>
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Ngày sinh<span class="text-danger">*</span></label>
                                            <input class="form-control" type="date" value={this.state.ngaySinh} onChange={this.changengaySinh}/>
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Địa chỉ<span class="text-danger">*</span></label>
                                            <input class="form-control" type="text" value={this.state.diaChi} onChange={this.changediaChi}/>
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
                                            <select id="selectkv"  onChange={this.changekhuVuc}>
                                                <option value="-1">--Chọn--</option>
                                                    {this.renderListKhuVuc()}
                                            </select>
                                        </div>
                                    </div> 
                                    <div className="col-sm-12">
                                        <div class="form-group">
                                            <label>Tình trạng</label>
                                            <select id=""  onChange={this.changeisActive}>
                                                <option value="-1">--Chọn--</option>
                                                    {this.renderTinhTrang()}
                                            </select>
                                        </div>
                                    </div> 
                                </div>
                                <div class="m-t-20 text-center">
                                    <button class="btn btn-primary submit-btn mr-3" onClick={this.saveAdmin}>TẠO MỚI</button>
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

export default AddAdmin;


                                          