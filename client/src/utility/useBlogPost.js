import axios from "axios";
import { useState, useEffect } from "react";

function useBlogPost() {
  const [posts, setPosts] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const getPost = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      let result = await axios.get("http://localhost:4000/posts");
      setPosts(result.data.data);
      setIsLoading(false);
    } catch (errors) {
      setIsError(true);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return {
    posts,
    isError,
    isLoading,
  };
}

export default useBlogPost;
