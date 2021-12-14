import axios  from "axios"
import { response } from "express"

export default {
    getAllStates (){
        return axios.get('/api/states').then( response => {
            return response.data
        })
    },
    setVisited(stateName, visited) { //
        return axios.patch(`/api/state/${stateName}`, {visited: visited} ).then(response => {
            return response.data 
        })
    },
    getOneState(stateName) {
        return axios.get(`/api/state/${stateName}`).then( response => {
            return response.data
        })
    }
}
