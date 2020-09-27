
import React, { Component } from 'react';
import TipService from '../api/TipService';
import TypeService from '../api/TypeService';

class AddTip extends Component {
    constructor(props){
        super(props);
        this.state = {
            listDV: [],
            id :'',
             maDichVu:'',
             tenDichVu:'',
             giaDichVu:'',
             loaiDichVu:''
            
        }
        this.changemaDichVu=this.changemaDichVu.bind(this);
        this.changetenDichVu=this.changetenDichVu.bind(this);
        this.changegiaDichVu=this.changegiaDichVu.bind(this);
        this.saveTip=this.saveTip.bind(this);
    }

    componentDidMount(){
        TypeService.getServices().then(res=>{this.setState({listDV: res.data})});
    }
    changeloaiDichVu = (event) => {
        this.setState({loaiDichVu: event.target.value});

    }
    changemaDichVu = (event) => {
        this.setState({maDichVu: event.target.value});
    }
    changetenDichVu = (event) => {
        this.setState({tenDichVu: event.target.value});
    }
    changegiaDichVu = (event) => {
        this.setState({giaDichVu: event.target.value});
    }
    saveTip = (e) => {
        e.preventDefault();
        let tip = {
            maDichVu: this.state.maDichVu,
            tenDichVu: this.state.tenDichVu,
            giaDichVu: this.state.giaDichVu,
            loaiDichVu: this.state.listDV.find(x=>x.maLoaiDV===this.state.loaiDichVu)
        };
        console.log("tip =>" + JSON.stringify(tip));

        TipService.createTip(tip).then(res =>{
                this.props.history.push('/tiplist');
        });
    }
    cancel(){
       
        this.props.history.push('/tiplist');
    }
    renderListDichVu=()=>{
     
        return this.state.listDV.map((item,index)=>{
            return(
                <option value={item.maLoaiDV} key={index}>{item.tenLoaiDV}</option>
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
                                            <label>Mã thủ thuật<span class="text-danger">*</span></label>
                                            <input class="form-control" type="text" value={this.state.maDichVu} onChange={this.changemaDichVu}/>
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Tên thủ thuật<span class="text-danger">*</span></label>
                                            <input class="form-control" type="text" value={this.state.tenDichVu} onChange={this.changetenDichVu}/>
                                        </div>
                                    </div> 
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Giá thủ thuật<span class="text-danger">*</span></label>
                                            <input class="form-control" type="text" value={this.state.giaDichVu} onChange={this.changegiaDichVu}/>
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

export default AddTip;


                                          