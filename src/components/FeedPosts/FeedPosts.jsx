// FeedPosts.js
// import React from "react";
import useGetItems from "../../hooks/useGetItems";
import FeedPost from "./FeedPost";

const FeedPosts = () => {
  const { isLoading, items } = useGetItems();

  return (
    <div className="flex gap-10">
      {!isLoading &&
        items.length > 0 &&
        items.map((item) => (
          <FeedPost key={item.id} item={item} /> // Pass each item as `item` prop
        ))}

      {!isLoading && items.length === 0 && (
        <>Dayuum. Looks like you don&apos;t have any adds now.</>
      )}
    </div>
  );
};

export default FeedPosts;
