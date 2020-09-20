import axios from 'axios';

//const TIP_API_BASE_URL="https://localhost:8088/dichvu";
class TipService{
    getTips(){
        return axios.get("http://localhost:8088/dichvu");
    }

    createTip(tip){
        return axios.post("http://localhost:8088/dichvu/them",tip);
    }
}
export default new TipService();