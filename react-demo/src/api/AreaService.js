import axios from 'axios';

const AREA_API_BASE_URL="http://localhost:8088/khuvuc";
class AreaService{
    getAreas(){
        return axios.get(AREA_API_BASE_URL);
    }

    createArea (area){
        return axios.post("http://localhost:8088/khuvuc/them",area);
    }
    
    getAreaById(areaId){
        return axios.get("http://localhost:8088/khuvuc"+'/'+areaId);
    }

    updateArea(area,areaId){
        return axios.put("http://localhost:8088/khuvuc/capnhat"+'/'+ areaId,area);
    }

    deleteArea(areaId){
        return axios.delete("http://localhost:8088/khuvuc/xoa"+ '/' + areaId);
    }
}
export default new AreaService();