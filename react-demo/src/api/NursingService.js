import axios from 'axios';

class NursingService{
    getNursings(){
        return axios.get("http://localhost:8088/dieuduong");
    }

    createNursing(nursing){
        return axios.post("http://localhost:8088/dieuduong/them",nursing);
    }
    
    getNursingById(nursingId){
        return axios.get("http://localhost:8088/dieuduong"+'/'+nursingId);
    }

    updateNursing(nursing,nursingId){
        return axios.put("http://localhost:8088/dieuduong/capnhat"+'/'+ nursingId,nursing);
    }

    deleteNursing(nursingId){
        return axios.delete("http://localhost:8088/dieuduong/xoa"+ '/' + nursingId);
    }
}
export default new NursingService();