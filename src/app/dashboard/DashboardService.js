import axios from 'axios'

const ANNONCE_API_URL = "http://e-commerce-transport-backend.herokuapp.com:80/api/commands/";
const ALLTRANSPORT_API_URL = "http://e-commerce-transport-backend.herokuapp.com:80/api/transport/";
const ALLCONTACT_PER_DAY_API_URL = "http://e-commerce-transport-backend.herokuapp.com:80/api/contacts/";

class AllServices {
    //first Card
    getCountAllCommandsByCreatedAt(){
        return axios.get(ANNONCE_API_URL +'countAllCommandsByCreatedAt' )
    }

    getAllCommandsByCreatedAt(){
        return axios.get(ANNONCE_API_URL +'getAllCommandsByCreatedAt')
    }
    //second Card
    getCountAllTransport(){
        return axios.get(ALLTRANSPORT_API_URL +'countAllTransports' )
    }
    getAllTransport(){
        return axios.get(ALLTRANSPORT_API_URL +'getAllTransport' )
    }
    // third Card
    getCountAllContactCreatedAt(){
        return axios.get(ALLCONTACT_PER_DAY_API_URL +'countAllContactByCreatedAt' )
    }
    getAllContactByCreatedAt(){
        return axios.get(ALLCONTACT_PER_DAY_API_URL +'getAllContactByCreatedAt' )
    }
    //    Fourth
    getCountAllCommands(){
        return axios.get(ANNONCE_API_URL +'countAllCommands' )
    }
    getAllCommands(){
        return axios.get(ANNONCE_API_URL +'getAllCommands' )
    }


}

export default new AllServices