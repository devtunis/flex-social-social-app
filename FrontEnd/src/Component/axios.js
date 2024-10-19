import axios from "axios"

const instance = axios.create({
    baseURL : "https://blusky-g.onrender.com"
 

})

export default instance