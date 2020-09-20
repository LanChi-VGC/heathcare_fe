import React, { Component } from 'react';

class EditTip extends Component {
    render() {
        return (
            <div>
            <div class="page-wrapper">
                <div class="content">
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2">
                            <h4 class="page-title">Cập nhật thủ thuật</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2">
                            <form>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Mã thủ thuật<span class="text-danger">*</span></label>
                                            <input class="form-control" type="text" readonly=""/>
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Tên thủ thuật<span class="text-danger">*</span></label>
                                            <input class="form-control" type="text"/>
                                        </div>
                                    </div> 
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Giá thủ thuật<span class="text-danger">*</span></label>
                                            <input class="form-control" type="text"/>
                                        </div>
                                    </div> 
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Loại dịch vụ<span class="text-danger">*</span></label>
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

export default EditTip;