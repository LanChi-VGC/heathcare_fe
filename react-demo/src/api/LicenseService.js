import axios from 'axios';

//const TIP_API_BASE_URL="https://localhost:8088/dichvu";
class LicenseService{
    getLicenses(){
        return axios.get("http://localhost:8088/giayphepcongviec");
    }

    createLicenses(license){
        return axios.post("http://localhost:8088/giayphepcongviec/them",license);
    }
    getLicenseById(licenseId){
        return axios.get("http://localhost:8088/giayphepcongviec"+'/'+licenseId);
    }

    updateLicense(license,licenseId){
        return axios.put("http://localhost:8088/giayphepcongviec/capnhat"+'/'+ licenseId,license);
    }

    deleteLicense(licenseId){
        return axios.delete("http://localhost:8088/giayphepcongviec/xoa"+ '/' + licenseId);
    }
}
export default new LicenseService();