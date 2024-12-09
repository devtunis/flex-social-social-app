import axios from "axios"

const instance = axios.create({
    baseURL : "http://localhost:9000"
 


})
//baseURL : "https://flex-social-social-app.onrender.com"
 
// this should be wokring
//https://blusky-g.onrender.com
export default instance