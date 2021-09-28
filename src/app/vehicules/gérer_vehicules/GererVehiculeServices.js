import axios from 'axios'

const TRANSPORT_API_URL = "http://e-commerce-transport-backend.herokuapp.com:80/api/transport/";


class GererServices {

    getAllTransports(){
        return axios.get(TRANSPORT_API_URL)
    }
    postImageTransport(data){
        return axios.post(TRANSPORT_API_URL+'createUpdateTransportImage/',data)
    }
    enableDisableStatusTransport(data){
        return axios.post(TRANSPORT_API_URL+'enableDisableStatusTransport/',data)
    }

}


export default new GererServices










