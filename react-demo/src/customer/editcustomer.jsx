import React, { Component } from 'react';

class EditCustomer extends Component {
    render() {
        return (
            <div>
            <div class="page-wrapper">
                <div class="content">
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2">
                            <h4 class="page-title">Cập nhật khách hàng</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2">
                            <form>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Mã khách hàng<span class="text-danger">*</span></label>
                                            <input class="form-control" type="text" readonly=""/>
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Tên khách hàng<span class="text-danger">*</span></label>
                                            <input class="form-control" type="text"/>
                                        </div>
                                    </div>                                             
                                </div>
                                <div class="row">
                                            <div class="col-sm-4">
                                                        <div class="form-group">
                                                            <label>Số điện thoại <span class="text-danger">*</span></label>
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
                                < div class="row">
                                    
                                    <div class="col-sm-4">
                                                        <div class="form-group">
                                                            <label>Ngày sinh</label>
                                                            <input class="form-control" type="date"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-8">
                                                    <div class="form-group">
                                                                    <label class="display-block mb-3">Giới tính</label>
                                                                        <div class="form-check form-check-inline">
                                                                            <input class="form-check-input" type="radio" name="status" id="patient_active" value="option1" checked/>
                                                                            <label class="form-check-label" for="patient_active">
                                                                                    Nam
                                                                            </label>
                                                                        </div>
                                                                        <div class="form-check form-check-inline">
                                                                            <input class="form-check-input" type="radio" name="status" id="patient_inactive" value="option2"/>
                                                                            <label class="form-check-label" for="patient_inactive">
                                                                                    Nữ
                                                                            </label>
                                                                        </div>
                                                            </div>
                                                        </div>
                                     </ div>
                                     <div class="row">
                                            <div class="col-sm-4">
                                                        <div class="form-group">
                                                            <label>Địa chỉ <span class="text-danger">*</span></label>
                                                            <input class="form-control" type="number"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4">
                                                    <div class="form-group">
                                                        <label>Khu vực</label>
                                                        <select class="form-control select">
                                                            <option>Tp.Hồ Chí Minh</option>
                                                            <option>Hà Nội</option>
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

export default EditCustomer;