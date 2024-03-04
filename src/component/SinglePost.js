import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SinglePost() {
  const params = useParams();
  console.log("params: ", params);
  //   return <div>Hello world {params.id}</div>;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          `https://dummyjson.com/posts/${params.postId}`
        );
        console.log("response : ", response);

        setData(response);
      } catch (error) {
        console.log(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          <div> ID: {data.id}</div>
          <div>Title: {data.title}</div>
          <div>Body: {data.body}</div>
        </div>
      )}
    </div>
  );
}

export default SinglePost;
