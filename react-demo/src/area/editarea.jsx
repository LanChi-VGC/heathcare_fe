import React, { Component } from 'react';
import AreaService from '../api/AreaService';

class EditArea extends Component {
    constructor(props){
        super(props);
        this.state = {
           id:this.props.match.params.id,
           maKhuVuc:'',
           tenKhuVuc:'',
           gia:''
        };

    }
    changemaKhuVuc = (event) => {
        this.setState({maKhuVuc: event.target.value});
    }
    changetenKhuVuc= (event) => {
        this.setState({tenKhuVuc: event.target.value});
    }
    changegia= (event) => {
        this.setState({gia: event.target.value});
    }
    componentDidMount(){
       
        AreaService.getAreaById(this.state.id).then((res)=>{
            let area = res.data;
            console.log(res)
            this.setState({
              maKhuVuc: area.maKhuVuc,
              tenKhuVuc: area.tenKhuVuc,
              gia: area.gia
            });
        });
}
        updateArea = (e) => {
            e.preventDefault();
            let area = {
                id:this.state.id,
                maKhuVuc: this.state.maKhuVuc,
                tenKhuVuc:this.state.tenKhuVuc,
                gia: this.state.gia
            };
            console.log("area =>" + JSON.stringify(area));
            AreaService.updateArea(area,this.state.id).then(res => {
                this.props.history.push('/arealist');
            });
        }
    cancel(){
       
        this.props.history.push('/arealist');
    }
    render() {
        return (
            <div>
            <div class="page-wrapper">
                <div class="content">
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2">
                            <h4 class="page-title">Thêm khu vực</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2">
                            <form>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Mã khu vực<span class="text-danger">*</span></label>
                                            <input class="form-control" type="text" value={this.state.maKhuVuc}
                                                onChange={this.changemaKhuVuc}/>
                                        </div>
                                    </div> 
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Tên khu vực<span class="text-danger">*</span></label>
                                            <input class="form-control" type="text" value={this.state.tenKhuVuc}
                                                onChange={this.changetenKhuVuc}/>
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Giá<span class="text-danger">*</span></label>
                                            <input class="form-control" type="text" value={this.state.gia}
                                                onChange={this.changegia}/>
                                        </div>
                                    </div>                                        
                                </div>
                                <div class="m-t-20 text-center">
                                    <button class="btn btn-primary submit-btn mr-3" onClick={this.updateArea}>CẬP NHẬT</button>
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

export default EditArea;