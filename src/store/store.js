import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        countNum:0
    },
    getter:{
        getNum(state){
            return state.countNum
        }
    },
    mutation:{
        updateCountNum(state,payload){
            state.countNum=payload;
        }
    }
})