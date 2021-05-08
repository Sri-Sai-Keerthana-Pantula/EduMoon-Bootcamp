import axios from 'axios';

const KEY = "AIzaSyD6l8LpVUQi3ZSDxI6gv6oSymqeMQiF9Cw";

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type:'video',
        maxResults: 8,
        key: KEY
    }
})


// AIzaSyD6l8LpVUQi3ZSDxI6gv6oSymqeMQiF9Cw