import axios from "axios";

     const fetchAllUsers = () => 
          axios.get("https://663c446717145c4d8c359da1.mockapi.io/api/user/users");



export {fetchAllUsers} ;
