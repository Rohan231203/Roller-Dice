const Modal = () => {
  return (
    <div className="w-full">
      <button
        className="flex w-full px-[1.5rem] items-center gap-0 text-[#b6b5b5] text-md font-semibold cursor-pointer rounded-xl hover:bg-slate-300 hover:text-black active:bg-slate-400  h-[2.5rem]"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        {/* <FaPlus /> */}
        <span className="w-full">Post item</span>
      </button>
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-primary absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg text-gray-300">
            Enter Inputs For Listing Item
          </h3>

          <input
            type="text"
            placeholder="Enter Title"
            className="input input-bordered border-2 input-ghost w-full max-w-xs mt-5"
          />
          <textarea
            placeholder="Describe Your Product"
            className="textarea textarea-bordered textarea-lg w-full max-w-xs mt-5 px-4 py-2"
          ></textarea>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-gray-300">
                Pick the best fantasy franchise
              </span>
            </div>
            <select className="select select-bordered" id="">
              <option disabled selected className="text-gray-300">
                Pick one
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
            <div className="label">
              <span className="label-text-alt"></span>
            </div>
          </label>

          <div className="input-submit-container flex flex-col justify-between ">
            <input
              type="file"
              className="py-4"
              placeholder="Enter Image of Item here"
            />
            <button type="submit" className="btn btn-primary mt-3 text-lg">
              Submit
            </button>
          </div>
        </div>{" "}
      </dialog>
    </div>
  );
};

export default Modal;
