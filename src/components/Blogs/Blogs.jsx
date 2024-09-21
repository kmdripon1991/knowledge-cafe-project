import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Card from "../Card/Card";

export default function Blogs({ handleBookmark, handleReadTime }) {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/blogs.json");
        const result = await response.json();
        setBlogs(result);
      } catch (error) {
        console.log("Data fetching error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="col-span-8">
      {blogs.map((blog) => (
        <Card
          key={blog._id}
          blog={blog}
          handleBookmark={handleBookmark}
          handleReadTime={handleReadTime}
        ></Card>
      ))}
    </div>
  );
}

Blogs.propTypes = {
  handleBookmark: PropTypes.func.isRequired,
  handleReadTime: PropTypes.func.isRequired,
};
