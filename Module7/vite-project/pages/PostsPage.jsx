import { Outlet, useParams, useSearchParams, Link } from "react-router-dom";
import { useData } from "../hooks/UseData";

// save as pages/PostsPage.jsx
export default function PostsPage() {
  return (
    <div className="Posts">
      <h1>Posts</h1>
      <Outlet />
    </div>
  );
}

export function PostList() {
  const [searchParams, setSearchParams] = useSearchParams(); // import this hook
  const limit = searchParams.get("limit") ? searchParams.get("limit") : 5;

  const postsData = useData(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
  );

  const handleChangeLimit = (e) => {
    setSearchParams({ limit: e.target.value });
  };

  // the ? means only call map if postsData is not null
  const postList = postsData?.map((post) => (
    <li key={post.id}>
      <Link to={"/posts/" + post.id}>
        Post #{post.id}: {post.title}
      </Link>
    </li>
  ));
  return (
    <>
      <ul>{postList}</ul>
      <select id="limit" value={limit} onChange={handleChangeLimit}>
        <option value="5">5 Posts</option>
        <option value="10">10 Posts</option>
        <option value="20">20 Posts</option>
      </select>
    </>
  );
}

export function Post() {
  const { id } = useParams(); // custom hook to access dynamic params
  const post = useData("https://jsonplaceholder.typicode.com/posts/" + id);
  return (
    <div className="Post">
      {post ? (
        <>
          <h3>
            Post #{post.id}: {post.title}
          </h3>
          <p>{post.body}</p>
        </>
      ) : (
        "Loading ..."
      )}
    </div>
  );
}
