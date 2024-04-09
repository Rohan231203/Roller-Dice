import PropTypes from "prop-types";

const FeedPost = ({ item }) => {
  return (
    <article className="itemCard min-w-[300px] bg-blue-100 border-2 p-4 rounded-xl flex flex-col">
      <div className="mb-4 rounded-xl w-full h-40">
        {item.imageURL && (
          <img
            src={item.imageURL}
            alt={"Feed Post image"}
            className="rounded-md object-fit w-full h-full"
          />
        )}
      </div>
      <h2 className="text-xl font-bold text-black">{item.title}</h2>
      <p className="text-slate-700 text-sm font-medium overflow-hidden line-clamp-3">
        {item.description}
      </p>
      <div className="button-div mt-auto">
        <button type="button" className="btn text-base text-white w-full mt-4">
          Connect To Owner
        </button>
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
