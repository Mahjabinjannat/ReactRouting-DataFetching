import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Posts() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const {
          data: { posts },
        } = await axios.get("https://dummyjson.com/posts");
        setData(posts);
      } catch (error) {
        console.log(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          <h2>Doing stuff with data</h2>
          {data.map((item, index) => {
            // return <li key = {index}>{item.title}</li>;
            return (
              <div style={{ padding: "5px", margin: "5px" }}>
                <Link to={`/posts/${item.id}`} key={item.id}>
                  {item.title}
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Posts;
