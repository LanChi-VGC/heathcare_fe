import React, { Component } from 'react';
import LicenseService from '../api/LicenseService';
import NursingService from '../api/NursingService';
import TipService from '../api/TipService';

class AddLicense extends Component {
    constructor(props){
        super(props);
        this.state = {
            listDV: [],
            listDD:[],
            id :'',
            xepLoai:'',
            namTotNghiep:'',
            donViCapBang:'',
            dieuDuong:'',
            dichVu:''
            
        }
    }

    componentDidMount(){
        NursingService.getNursings().then(res => {this.setState({listDD: res.data})});
        TipService.getTips().then(res => {this.setState({listDV: res.data})});

    }
    changedieuDuong = (event) => {
        this.setState({dieuDuong: event.target.value});

    }
    changedichVu = (event) => {
        this.setState({dichVu: event.target.value});

    }
    changexepLoai = (event) => {
        this.setState({xepLoai: event.target.value});
    }
    changenamTotNghiep = (event) => {
        this.setState({namTotNghiep: event.target.value});
    }
    changedonviCapBang= (event) => {
        this.setState({donViCapBang: event.target.value});
    }
    saveLicense = (e) => {
        e.preventDefault();
        let license = {
            xepLoai:this.state.xepLoai,
            namTotNghiep:this.state.namTotNghiep,
            donViCapBang:this.state.donViCapBang,
            dieuDuong:this.state.listDD.find(x=>x.maDieuDuong===this.state.dieuDuong),
            dichVu:this.state.listDV.find(x=>x.maDichVu===this.state.dichVu)
        };
        console.log("license =>" + JSON.stringify(license));

        LicenseService.createLicenses(license).then(res =>{
                this.props.history.push('/licenselist');
        });
    }
    cancel(){
       
        this.props.history.push('/licenselist');
    }

    renderListThuThuat=()=>{
     
        return this.state.listDV.map((item,index)=>{
            return(
                <option value={item.maDichVu} key={index}>{item.tenDichVu}</option>
            )
        })
    }
    renderListDieuDuong=()=>{
     
        return this.state.listDD.map((item,index)=>{
            return(
                <option value={item.maDieuDuong} key={index}>{item.tenDieuDuong}</option>
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
                            <h4 class="page-title">Thêm thủ thuật</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2">
                            <form>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Xếp loại<span class="text-danger">*</span></label>
                                            <input class="form-control" type="text" value={this.state.xepLoai} onChange={this.changexepLoai}/>
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Năm tốt nghiệp<span class="text-danger">*</span></label>
                                            <input class="form-control" type="date" value={this.state.namTotNghiep} onChange={this.changenamTotNghiep}/>
                                        </div>
                                    </div> 
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Đơn vị cấp bằng<span class="text-danger">*</span></label>
                                            <input class="form-control" type="text" value={this.state.donViCapBang} onChange={this.changedonviCapBang}/>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div class="form-group">
                                            <label>Thủ thuật</label>
                                            <select id="selectdv" onChange={this.changedichVu}>
                                                <option value="-1">--Chọn--</option>
                                                    {this.renderListThuThuat()}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div class="form-group">
                                            <label>Điều dưỡng</label>
                                            <select id="selectdd"  onChange={this.changedieuDuong}>
                                                <option value="-1">--Chọn--</option>
                                                    {this.renderListDieuDuong()}
                                            </select>
                                        </div>
                                    </div> 
                                </div>
                                <div class="m-t-20 text-center">
                                    <button class="btn btn-primary submit-btn mr-3" onClick={this.saveLicense}>TẠO MỚI</button>
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

export default AddLicense;