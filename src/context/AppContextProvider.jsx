import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../components/BaseUrl";
export const AppContext = createContext();
export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const fetchData = async (page = 1) => {
    setLoading(true);
    const url = `${baseUrl}?page=${page}`;
    try {
      const res = await fetch(url);
      const result = await res.json();
      setPosts(result.posts);
      setTotalPages(result.totalPages);

      console.log(result);
    } catch (err) {
      setPage(1);
      setPosts([]);
      setTotalPages(null);
      setLoading(false);
    }
    setLoading(false);
  };

  const handlePageChange = (page) => {
    setPage(page);
    fetchData(page);
  };

  const value = {
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalPages,
    setTotalPages,
    handlePageChange,
    fetchData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
