import React, { Component } from 'react';
import AppointService from '../api/AppointService';
import AreaService from '../api/AreaService';
import NursingService from '../api/NursingService';
import TipService from '../api/TipService';

class AddAppoint extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:'',
            tongTien:'',
            tenKhachHang:'',
            dienThoai:'',
            email:'',
            diaChi:'',
            gioBatDau:'',
            ngayBatDau:'',
            ngayDatLich:'',
            ghiChu:'',
            soNgay:'',
            dieuDuong:'',
            khuVuc:'',
            dichVu:'',
            khachHang:'',
            listDD:[],
            listKV:[],
            listDV:[]
            
        }

    }

    componentDidMount(){
        TipService.getTips().then(res=>{this.setState({listDV: res.data})});
        NursingService.getNursings().then(res=>{this.setState({listDD: res.data})});
        AreaService.getAreas().then(res =>{this.setState({listKV: res.data})} );
    }
     changetenKhachHangHandler = (event) =>{
        this.setState({tenKhachHang: event.target.value})
      }
      changeemailHandler = (event) =>{
        this.setState({email: event.target.value})
      }
      changedienThoaiHandler = (event) =>{
        this.setState({dienThoai: event.target.value})
      }
      changedichVuHandler = (event) =>{
        this.setState({dichVu: event.target.value})
      }
      changedieuDuongHandler = (event) =>{
          this.setState({dieuDuong: event.target.value})
      } 
      changekhuVucHandler = (event) =>{
        this.setState({khuVuc: event.target.value})
      }
      changengayBatDauHandler = (event) =>{
        this.setState({ngayBatDau: event.target.value})
      }
      changegioBatDauHandler = (event) =>{
        this.setState({gioBatDau: event.target.value})
      }
      changesoNgayHandler = (event) =>{
        this.setState({soNgay: event.target.value})
      }
      changediaChiHandler = (event) =>{
        this.setState({diaChi: event.target.value})
      }
      changeghiChuHandler = (event) =>{
        this.setState({ghiChu: event.target.value})
      }
      changetongTien = (event) => {
          this.setState({tongTien: event.target.value})
      }
    
    saveTip = (e) => {
        e.preventDefault();
        let appoint = {
            tenKhachHang :this.state.tenKhachHang,
            email: this.state.email,
            dienThoai:this.state.dienThoai,
            diaChi:this.state.diaChi,
            gioBatDau:this.state.gioBatDau,
            soNgay:this.state.soNgay,
            ghiChu:this.state.ghiChu,
            tongTien:this.state.tongTien,
            dieuDuong:this.state.listDD.find(x => x.maDieuDuong === this.state.dieuDuong),
            khuVuc: this.state.listKV.find(x => x.maKhuVuc === this.state.khuVuc),
            dichVu:this.state.listDV.find(x => x.maDichVu === this.state.dichVu)
        };
        console.log("appoint =>" + JSON.stringify(appoint));

        AppointService.createAppoint(appoint).then(res =>{
                this.props.history.push('/appointlist');
        });
    }
    cancel(){
       
        this.props.history.push('/appointlist');
    }
    renderListDichVu=()=>{
     
        return this.state.listDV.map((item,index)=>{
            return(
                <option value={item.maDichVu} key={index}>{item.tenDichVu}</option>
            )
        })
    }

    renderListKhuVuc=()=>{
        return this.state.listKV.map((item,index)=>
        {
            return <option value={item.maKhuVuc} key={index}>{item.tenKhuVuc}</option>
        })
    }
    renderListDieuDuong=()=>{
        return this.state.listKV.map((item,index)=>
        {
            return <option value={item.maKhuVuc} key={index}>{item.tenKhuVuc}</option>
        })
    }

    render() {
        
        return (
            <div>
            <div class="page-wrapper">
                <div class="content">
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2">
                            <h4 class="page-title">Thêm lịch khám</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2">
                            <form>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Tên khách hàng<span class="text-danger">*</span></label>
                                            <input class="form-control" type="text" value={this.state.tenKhachHang} onChange={this.changetenKhachHangHandler}/>
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Điện thoại<span class="text-danger">*</span></label>
                                            <input class="form-control" type="text" value={this.state.dienThoai} onChange={this.changedienThoaiHandler}/>
                                        </div>
                                    </div> 
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Email<span class="text-danger">*</span></label>
                                            <input class="form-control" type="text" value={this.state.email} onChange={this.changeemailHandler}/>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                    <div class="form-group">
                                            <label>Loại dịch vụ</label>
                                            <select id="selectdv"  onChange={this.changeloaiDichVu}>
                                                <option value="-1">--Chọn--</option>
                                                    {this.renderListDichVu()}
                                            </select>
                                        </div>
                                      

                                            
                                    </div> 
                                </div>
                                <div class="m-t-20 text-center">
                                    <button class="btn btn-primary submit-btn mr-3" onClick={this.saveTip}>TẠO MỚI</button>
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

export default AddAppoint;