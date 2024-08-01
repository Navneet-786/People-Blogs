import React, { useContext, useEffect } from "react";
import bg from "./assets/Blog_bg.jpg";
import BlogPosts from "./components/BlogPosts";
import Footer from "./components/Footer";
import { AppContext } from "./context/AppContextProvider";
const App = () => {
  const { fetchData } = useContext(AppContext);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="w-full h-screen relative ">
      <img
        src={bg}
        alt="bg"
        className="fixed h-min-[100vh] z-[-20]  object-cover"
      />
      <div className="w-full h-screen bg-black fixed opacity-70 z-[-1]"></div>
      {/* Header */}
      <div className="fixed text-white text-center w-full py-2 bg-slate-800 capitalize text-2xl z-[500]">
        Peoples <span className="text-red-600">Blog</span>
      </div>
      <div>
        <BlogPosts />
      </div>

      <Footer />
    </div>
  );
};

export default App;
