import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/loader";
import NewsList from "../components/newsList";
import { AuthContext } from "../context/authContext";

const API_URI = "https://jsonplaceholder.typicode.com/posts";

function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const values = useContext(AuthContext)
  
  const fetchData = async () => {
    const response = await axios.get(API_URI);
    setData(response.data);
    setLoading(false);
  };

  useEffect(fetchData);

  if(loading) return <Loader/>

  return (
    <div className="home">
      <div className="container">
          <NewsList data={data} />
      </div>
    </div>
  );
}

export default Home;



//aybek