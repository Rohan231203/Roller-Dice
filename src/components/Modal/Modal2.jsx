/* eslint-disable no-unused-vars */
import React from "react";

function Modal2() {
  return (
    <div>
      <button
        className="btn bg-red-500 text-black border-0 text-base w-full hover:text-white"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Details
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Modal2;
