import { useEffect, useState } from "react"; // continued on next slide
import axios from "axios"; // first do 'npm install axios' - alternative to fetch

export async function PostListState() {
  const [loading, setLoading] = useState(true); // true when loading and no data in posts
  const [posts, setPosts] = useState([]); // empty until data is fetched
  const [error, setError] = useState(""); // empty unless there was an error

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=5") // modify this URL to test the error case
      .then((response) => {
        setLoading(false);
        setPosts(response.data);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  }, []);

  return (
    <div className="PostList componentBox">
      {loading ? (
        <div>Loading posts...</div>
      ) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h3>
              Post #{post.id}: {post.title}
            </h3>
            <p>{post.body}</p>
          </div>
        ))
      )}
      <div className="error">{error}</div>
    </div>
  );
}
