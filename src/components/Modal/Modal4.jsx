/* eslint-disable react/no-unescaped-entities */
const Modal4 = () => {
  return (
    <div>
      <button
        className="btn bg-red-500 font-bold text-black text-[15px] hover:text-white"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        Chat with owner
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="profile-details flex gap-5 items-center">
            <div className="profile-pic h-14 w-14 bg-red-500 rounded-full"></div>
            <h3 className="font-bold text-lg">Owner name</h3>
          </div>
          <div className="chat-container w-full h-auto mt-3">
            <div className="chat chat-start">
              <div className="chat-bubble">
                It's over Anakin, <br />I have the high ground.
              </div>
            </div>
            <div className="chat chat-end">
              <div className="chat-bubble mt-2">
                You underestimate my power!
              </div>
              <div className="chat-bubble mt-2">You can't defeat me!</div>
            </div>
            <div className="flex items-center w-full mt-2 rounded-xl">
              <input
                type="text"
                className="flex-1 border rounded-l p-2"
                placeholder="Type a message..."
                // value={message}
                // onChange={handleChange}
              />
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r"
                // onClick={sendMessage}
              >
                Send
              </button>
              <div className="ml-2">
                {/* Example emoji buttons */}
                <button
                  className="px-3 py-1 text-lg"
                  // onClick={() => addEmoji("😊")}
                >
                  😊
                </button>
                <button
                  className="px-3 py-1 text-lg"
                  // onClick={() => addEmoji("👍")}
                >
                  👍
                </button>
                <button
                  className="px-3 py-1 text-lg"
                  // onClick={() => addEmoji("❤️")}
                >
                  ❤️
                </button>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal4;
