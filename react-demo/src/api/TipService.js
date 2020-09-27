import axios from 'axios';

//const TIP_API_BASE_URL="https://localhost:8088/dichvu";
class TipService{
    getTips(){
        return axios.get("http://localhost:8088/dichvu");
    }

    createTip(tip){
        return axios.post("http://localhost:8088/dichvu/them",tip);
    }
    getTipById(tipId){
        return axios.get("http://localhost:8088/dichvu"+'/'+tipId);
    }

    updateTip(tip,tipId){
        return axios.put("http://localhost:8088/dichvu/capnhat"+'/'+ tipId,tip);
    }

    deleteTip(tipId){
        return axios.delete("http://localhost:8088/dichvu/xoa"+ '/' + tipId);
    }
}
export default new TipService();