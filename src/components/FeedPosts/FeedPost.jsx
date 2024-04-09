// FeedPost.js
// import React from 'react';
import PropTypes from 'prop-types';

const FeedPost = ({ item }) => {
    return (
        <div className="item-section py-10 bg-[#141414] px-10">
            <h1 className="text-2xl text-black font-bold mb-8">Products</h1>
            <div className="item-container h-96 w-96 object-contain flex ">
                <article className="itemCard min-w-[300px] bg-blue-100 border-2 p-4 rounded-xl flex flex-col">
                    <div className=" mb-4 rounded-xl h-1/2">
                        <img
                            
                            src={item.imageURL} 
                            alt={'Feed Post image'} 
                            className="rounded-md h-3/4"
                        />
                    </div>
                    <h2 className="text-xl font-bold text-black mb-2">
                        {item.title} 
                    </h2>
                    <p className="text-slate-700 text-sm font-medium">
                        {item.description} 
                    </p>
                    <div className="button-div mt-auto">
                        <button
                            type="button"
                            className="btn text-base text-white w-full mt-6"
                        >
                            Connect To Owner
                        </button>
                    </div>
                </article>
            </div>
        </div>
    );
};

FeedPost.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        imageURL: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
    }),
};

export default FeedPost;
