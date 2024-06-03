import axios from "axios";

const fetchAllJew = () =>
     axios.get("http://localhost:5188/api/Jewelry");


export { fetchAllJew };


