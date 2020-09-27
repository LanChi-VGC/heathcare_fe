import axios from 'axios';


class AppointService{
    getAppoints(){
        return axios.get("http://localhost:8088/datlich");
    }

    createAppoint(appoint){
        return axios.post("http://localhost:8088/datlich/them",appoint);
    }
    
    getAppointById(appointId){
        return axios.get("http://localhost:8088/datlich"+'/'+appointId);
    }

    updateAppoint(appoint,appointId){
        return axios.put("http://localhost:8088/datlich/capnhat"+'/'+ appointId,appoint);
    }

    deleteApoint(appointId){
        return axios.delete("http://localhost:8088/datlich/xoa"+ '/' + appointId);
    }
}
export default new AppointService();