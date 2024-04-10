// FeedPosts.js
// import React from "react";

import useGetRents from "../../hooks/useGetRents";
import FeedRent from "./FeedRent";

const FeedRents = () => {
  const { isLoading, items } = useGetRents();

  return (
    <div className="flex gap-10">
      {!isLoading &&
        items.length > 0 &&
        items.map((item) => (
          <FeedRent key={item.id} item={item} /> // Pass each item as `item` prop
        ))}

      {!isLoading && items.length === 0 && (
        <>Dayuum. Looks like you don&apos;t have any adds now.</>
      )}
    </div>
  );
};

export default FeedRents;
