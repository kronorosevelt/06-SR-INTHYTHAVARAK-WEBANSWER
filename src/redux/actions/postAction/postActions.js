import Axios from 'axios'
import {
    GET_POST,
  
} from './postActionTypes';
export const getPost = () =>{
 Axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log("Get Post")
    return{
        type: GET_POST,
       
        data: [
          {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
          },
             
            ],
        };
    };
