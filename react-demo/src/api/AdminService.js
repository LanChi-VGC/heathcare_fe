import axios from 'axios';

class AdminService {
    getAdmins(){
        return axios.get("http://localhost:8088/admin");
    }

    createAdmin(admin){
        return axios.post("http://localhost:8088/admin/them",admin);
    }
    
    getAdminById(adminId){
        return axios.get("http://localhost:8088/admin"+'/'+adminId);
    }

    updateAdmin(admin,adminId){
        return axios.put("http://localhost:8088/admin/capnhat"+'/'+ adminId,admin);
    }

    deleteAdmin(adminId){
        return axios.delete("http://localhost:8088/admin/xoa"+ '/' + adminId);
    }
}
 
export default new AdminService() ;