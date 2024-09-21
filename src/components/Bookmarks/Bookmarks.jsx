import PropTypes from "prop-types";
const Bookmarks = ({ bookmarks, readTime }) => {
  console.log(bookmarks, typeof bookmarks);
  return (
    <div className="col-span-4">
      <h1 className="text-center text-xl bg-gray-300 text-violet-500 rounded-md py-3 mb-3 font-bold">
        Spent time on read : {readTime} min
      </h1>
      <div className="bg-gray-300 p-3 rounded-md space-y-3 h-screen">
        <h1 className="font-semibold text-xl">
          Bookmarked Blogs : {bookmarks.length}
        </h1>
        {bookmarks.map((bookmark, idx) => (
          <p key={idx} className="bg-white rounded-md p-4 font-semibold">
            {bookmark.title}
          </p>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readTime: PropTypes.number.isRequired,
};

export default Bookmarks;
