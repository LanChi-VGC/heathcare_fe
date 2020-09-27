import axios from 'axios';

const TYPSERVICE_API_BASE_URL="http://localhost:8088/loaidichvu";
class TypeService{
    getServices(){
        return axios.get("http://localhost:8088/loaidichvu");
    }

    createServices(service){
        return axios.post("http://localhost:8088/loaidichvu/them",service);
    }
    
    getServiceById(serviceId){
        return axios.get("http://localhost:8088/loaidichvu"+'/'+serviceId);
    }

    updateService(service,serviceId){
        return axios.put("http://localhost:8088/loaidichvu/capnhat"+'/'+ serviceId,service);
    }

    deleteService(serviceId){
        return axios.delete("http://localhost:8088/loaidichvu/xoa"+ '/' + serviceId);
    }
}
export default new TypeService();