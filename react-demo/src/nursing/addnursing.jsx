import React, { Component } from 'react';

class AddNursing extends Component {
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
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Mã điều dưỡng<span class="text-danger">*</span></label>
                                            <input class="form-control" type="text"/>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Tên điều dưỡng<span class="text-danger">*</span></label>
                                            <input class="form-control" type="text"/>
                                        </div>
                                    </div>                                             
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Tên đăng nhập<span class="text-danger">*</span></label>
                                            <input class="form-control" type="text"/>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Mật khẩu<span class="text-danger">*</span></label>
                                            <input class="form-control" type="password"/>
                                        </div>
                                    </div>                                             
                                </div>
                                <div class="row">
                                            <div class="col-sm-12">
                                                        <div class="form-group">
                                                            <label>Email <span class="text-danger">*</span></label>
                                                            <input class="form-control" type="email"/>
                                                        </div>
                                            </div>
                                </div>
                                < div class="row">
                                    
                                    <div class="col-sm-6">
                                                        <div class="form-group">
                                                            <label>Ngày sinh</label>
                                                            <input class="form-control" type="date"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-6">
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
                                            <div class="col-sm-6">
                                                        <div class="form-group">
                                                            <label>Địa chỉ <span class="text-danger">*</span></label>
                                                            <input class="form-control" type="number"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label>Chuyên ngành</label>
                                                        <select class="form-control select">
                                                            <option>A</option>
                                                            <option>B</option>
                                                        </select>
                                                    </div>
                                            </div>
                                </div>
                                <div class="m-t-20 text-center">
                                    <button class="btn btn-primary submit-btn mr-3">TẠO MỚI</button>
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

export default AddNursing;