import {create } from 'zustand'
import axios from 'axios'

const Axios_URL = "http://localhost:8080"

export const useRegisterStore = create((set) => ({
    registerUser: async (payload) => {        
      const res = await axios.post(Axios_URL + "/user/signup", payload);
    console.log(res);
    
      return { success: true };
      // return res
    }
  }));

export const UserLoginStore = create((set)=>({
    LoginUser: async(payload) =>{
      const res = await axios.post(Axios_URL + '/user/signin', payload);
      return res
    }
}))  