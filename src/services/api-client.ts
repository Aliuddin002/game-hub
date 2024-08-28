import axios from "axios";
export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'3f22865eea4047ed8ed822018acb90b0'

    }
})
