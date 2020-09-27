import axios from 'axios';

const MAJOR_API_BASE_URL="http://localhost:8088/chuyennganh";
class MajorService{
    getMajors(){
        return axios.get(MAJOR_API_BASE_URL);
    }

    createMajor(major){
        return axios.post("http://localhost:8088/chuyennganh/them",major);
    }
    
    getMajorById(majorId){
        return axios.get("http://localhost:8088/chuyennganh"+'/'+majorId);
    }

    updateMajor(major,majorId){
        return axios.put("http://localhost:8088/chuyennganh/capnhat"+'/'+ majorId,major);
    }

    deleteMajor(majorId){
        return axios.delete("http://localhost:8088/chuyennganh/xoa"+ '/' + majorId);
    }
}
export default new MajorService();