import React, { Component } from 'react';

class EditLicense extends Component {
    render() {
        return (
            <div>
            <div class="page-wrapper">
                <div class="content">
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2">
                            <h4 class="page-title">Cập nhật giấy phép công việc</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2">
                            <form>
                                <div class="row">
                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <label>Xếp loại<span class="text-danger">*</span></label>
                                            <input class="form-control" type="text"/>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <label>Năm tốt nghiệp<span class="text-danger">*</span></label>
                                            <input class="form-control" type="year"/>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <label>Đơn vị cấp bằng<span class="text-danger">*</span></label>
                                            <input class="form-control" type="year"/>
                                        </div>
                                    </div>                                                
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Mã điều dưỡng<span class="text-danger">*</span></label>
                                                 <select class="form-control select">
                                                            <option>A</option>
                                                            <option>B</option>
                                                 </select>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Mã thủ thật<span class="text-danger">*</span></label>
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

export default EditLicense;