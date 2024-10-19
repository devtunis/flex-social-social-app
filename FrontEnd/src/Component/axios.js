import axios from "axios"

const instance = axios.create({
    baseURL : "https://blusky-g.onrender.com"
 

})
// this should be wokring

export default instance