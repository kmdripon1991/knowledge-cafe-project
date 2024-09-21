import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";
import "./index.css";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);
  const handleReadTime = (id, time) => {
    const remainBookmarks = bookmarks.filter((bookmark) => bookmark._id !== id);
    setBookmarks([...remainBookmarks]);
    setReadTime(readTime + time);
  };
  const handleBookmark = (blog) => {
    const existBookmark = bookmarks.find((item) => item._id === blog._id);
    if (existBookmark) {
      const removeBookmark = bookmarks.filter((item) => item._id !== blog._id);
      setBookmarks([...removeBookmark]);
    } else {
      setBookmarks([...bookmarks, blog]);
    }
  };
  // console.log(bookmarks, typeof bookmarks);
  return (
    <div className="mx-20 my-5">
      <Header />
      <div className="grid grid-cols-12 gap-2">
        <Blogs
          handleBookmark={handleBookmark}
          handleReadTime={handleReadTime}
        />
        <Bookmarks bookmarks={bookmarks} readTime={readTime} />
      </div>
    </div>
  );
}

export default App;
