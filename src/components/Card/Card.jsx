import PropTypes from "prop-types";
import { useState } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa6";
const Card = ({ blog, handleBookmark, handleReadTime }) => {
  const {
    _id,
    cover,
    reading_time,
    author_img,
    author,
    posted_date,
    title,
    hash_tag,
  } = blog;
  const [isBookmark, setIsBookmark] = useState(false);
  return (
    <div className="mb-5 border-b-2">
      <img className="rounded-md" src={cover} alt="cover" />
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center my-5">
          <img className=" h-16" src={author_img} alt="" />
          <div>
            <h1 className="font-semibold text-2xl">{author}</h1>
            <p className="text-gray-500">{posted_date}</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <p>{reading_time} min read</p>
          <button
            onClick={() => {
              handleBookmark(blog), setIsBookmark(!isBookmark);
            }}
          >
            {isBookmark ? <FaBookmark /> : <FaRegBookmark />}
          </button>
        </div>
      </div>
      <div className="space-y-3 mb-5">
        <h1 className="text-3xl font-bold w-8/12">{title}</h1>
        <p>
          {hash_tag.map((tag, idx) => (
            <span className="mr-5 text-sm text-gray-400" key={idx}>
              {tag}
            </span>
          ))}
        </p>
        <p
          className="text-violet-500 underline cursor-pointer"
          onClick={() => {
            handleReadTime(_id, +reading_time), setIsBookmark(!isBookmark);
          }}
        >
          Mark as read
        </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmark: PropTypes.func.isRequired,
  handleReadTime: PropTypes.func.isRequired,
};

export default Card;
