import { extend } from "umi-request";
import Cookies from "js-cookie";
function createRequest(){
  const request=extend({
    prefix:import.meta.env.API_PREFIX
  })
  request.interceptors.request.use((url, options)=>{
    const token=Cookies.get('token') || ''
    if(token){
      options.headers={
        ...options.headers,
        Authorization:token
      }
    }
    return {
      url, options,
    }
  })
  request.interceptors.response.use(async(response,options)=>{
    const result= await response.clone().json();
    if(result.errcode!==0){
      const msg= result.message || result.msg;
      console.log(msg)
    }
    if(result.errcode===0){
      return result.data
    } 
    return Promise.reject(result)
  })
  return request
}

const request =createRequest();

export default request