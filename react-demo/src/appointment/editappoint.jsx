import React, { Component } from 'react';

class EditAppoint extends Component {
    render() {
        return (
            <div>
            <div class="page-wrapper">
                <div class="content">
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2">
                            <h4 class="page-title">Cập nhật lịch đặt</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2">
                            <form>
                                <div class="row">
                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <label>Mã đặt lịch<span class="text-danger">*</span></label>
                                            <input class="form-control" type="text" readonly=""/>
                                        </div>
                                    </div>
                                    <div class="col-sm-8">
                                        <div class="form-group">
                                            <label>Tên khách hàng<span class="text-danger">*</span></label>
                                            <input class="form-control" type="text"/>
                                        </div>
                                    </div>                                             
                                </div>
                                <div class="row">
                                            <div class="col-sm-4">
                                                        <div class="form-group">
                                                            <label>Điện thoại <span class="text-danger">*</span></label>
                                                            <input class="form-control" type="number"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-8">
                                                        <div class="form-group">
                                                            <label>Email <span class="text-danger">*</span></label>
                                                            <input class="form-control" type="email"/>
                                                        </div>
                                            </div>
                                </div>
                                <div class="row">
                                            <div class="col-sm-4">
                                                        <div class="form-group">
                                                            <label>Tổng tiền <span class="text-danger">*</span></label>
                                                            <input class="form-control" type="text"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-8">
                                                        <div class="form-group">
                                                            <label>Ghi chú <span class="text-danger">*</span></label>
                                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                        </div>
                                            </div>
                                </div>
                                < div class="row">
                                    
                                    <div class="col-sm-4">
                                                        <div class="form-group">
                                                            <label>Ngày đặt</label>
                                                            <input class="form-control" type="date"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-8">
                                                        <div class="form-group">
                                                            <label>Mã điều dưỡng</label>
                                                            <select class="form-control select">
                                                                <option>A</option>
                                                                <option>B</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                     </ div>
                                     <div class="row">
                                            <div class="col-sm-4">
                                                        <div class="form-group">
                                                        <label>Mã khách hàng</label>
                                                        <select class="form-control select">
                                                            <option>A</option>
                                                            <option>B</option>
                                                        </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4">
                                                    <div class="form-group">
                                                        <label>Mã khu vực</label>
                                                        <select class="form-control select">
                                                            <option>A</option>
                                                            <option>B</option>
                                                        </select>
                                                    </div>
                                            </div>
                                </div>
                                <div class="m-t-20 text-center">
                                    <button class="btn btn-primary submit-btn mr-3">CẬP NHẬT</button>
                                    <button class="btn btn-info submit-btn">TRỞ VỀ</button>
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

export default EditAppoint;