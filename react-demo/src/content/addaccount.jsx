import React,{Component} from 'react';
import '../App.css';
import '../css/style.css';
class AddAccount extends Component {
    render(){
        return(
            <div>
                <div class="page-wrapper">
                    <div class="content">
                        <div class="row">
                            <div class="col-lg-8 offset-lg-2">
                                <h4 class="page-title">Cập nhật tài khoản</h4>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-8 offset-lg-2">
                                <form>
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="form-group">
                                                <label>Mã tài khoản</label>
                                                <input class="form-control" type="text"/>
                                            </div>
                                        </div>
                                        <div class="col-sm-8">
                                            <div class="form-group">
                                                <label>Họ tên<span class="text-danger">*</span></label>
                                                <input class="form-control" type="text"/>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="form-group">
                                                <label>Tên user<span class="text-danger">*</span></label>
                                                <input class="form-control" type="text"/>
                                            </div>
                                        </div>
                                        <div class="col-sm-8">
                                            <div class="form-group">
                                                <label>Email <span class="text-danger">*</span></label>
                                                <input class="form-control" type="email"/>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="form-group">
                                                <label>Mật khẩu<span class="text-danger">*</span></label>
                                                <input class="form-control" type="password"/>
                                            </div>
                                        </div>
                                        <div class="col-sm-8">
                                            <div class="form-group">
                                                <label>Nhập lại mật khẩu <span class="text-danger">*</span></label>
                                                <input class="form-control" type="password"/>
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="row">
                                                <div class="col-sm-12">
                                                    <div class="form-group">
                                                        <label>Địa chỉ</label>
                                                        <input type="text" class="form-control "/>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label>Loại tài khoản</label>
                                                        <select class="form-control select">
                                                            <option>Admin</option>
                                                            <option>Điều dưỡng</option>
                                                            <option>Khác</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label class="display-block">Tình trạng</label>
                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio" name="status" id="patient_active" value="option1" checked/>
                                                                <label class="form-check-label" for="patient_active">
                                                                        Hoạt động
                                                                </label>
                                                            </div>
                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio" name="status" id="patient_inactive" value="option2"/>
                                                                <label class="form-check-label" for="patient_inactive">
                                                                        Không hoạt động
                                                                </label>
                                                            </div>
                                                    </div>
                                            </div>
                                            </div>
                                        </div>                                                        
                                    </div>
                                    <div class="m-t-20 text-center">
                                        <button class="btn btn-primary submit-btn">CẬP NHẬT</button>
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

export default AddAccount;  // export thi cac trang khac dung dc