/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import Modal2 from "../Modal/Modal2";

const FeedPost = ({ item }) => {
  return (
    <article className="itemCard min-w-[300px] bg-gray-700 p-4 rounded-xl flex flex-col hover:scale-10 cursor-pointer bg-[#232a32]">
      <div className="mb-4 rounded-xl w-full h-40">
        {item.imageURL && (
          <img
            src={item.imageURL}
            alt={"Feed Post image"}
            className="rounded-md object-fit w-full h-full"
          />
        )}
      </div>
      <h2 className="text-xl font-bold text-gray-300">{item.title}</h2>
      <p className="text-slate-700 text-sm font-medium overflow-hidden line-clamp-3">
        {item.description}
      </p>
      <div className=" mt-auto">
        <Modal2 />
      </div>
    </article>
  );
};

FeedPost.propTypes = {
  item: PropTypes.shape({
    imageURL: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default FeedPost;
