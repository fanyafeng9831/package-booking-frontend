import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
          storageListData:[]

  },
  mutations: {
         addRequest:function(state,request){
                state.storageListData = request;
          }

  },
  actions: {
        addPackage:function(store,formData){
            const urlStorage = "http://localhost:8080/storage";
                axios.post(urlStorage,formData).then((res)=>{
                    //    console.log(res);
                });
        },
        queryStorageList:function(store,formData){
                const urlStorage = "http://localhost:8080/storage";
                axios.get(urlStorage).then(function(response){
                        let request = response.data;
                      //  store.storageListData = request;
                     //   console.log(response);
                        store.commit('addRequest',request);
                    }).catch(
                        function(error){
                      //  console.log(error.reponse);
                    })
            }
      } 
  
})
