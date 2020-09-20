import React, { Component } from 'react';

class AddArea extends Component {
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
                                                <input class="form-control" type="text"/>
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label>Tên khu vực<span class="text-danger">*</span></label>
                                                <input class="form-control" type="text"/>
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label>Giá<span class="text-danger">*</span></label>
                                                <input class="form-control" type="text"/>
                                            </div>
                                        </div>                                                   
                                    </div>
                                    <div class="m-t-20 text-center">
                                        <button class="btn btn-primary submit-btn">TẠO MỚI</button>
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

export default AddArea;