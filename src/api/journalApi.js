import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://vue-demos-9edc5-default-rtdb.firebaseio.com' 
})

export default journalApi