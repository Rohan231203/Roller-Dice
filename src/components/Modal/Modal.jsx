const Modal = () => {
    return (
      <div>
        <button
          className="btn btn-primary"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          open modal
        </button>
        <dialog id="my_modal_3" className="modal ">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-primary absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Enter Inputs For Listing Item</h3>
  
            <input
              type="text"
              placeholder="Enter Title"
              className="input input-bordered border-2 input-ghost w-full max-w-xs mt-5"
            />
            <textarea
              placeholder="Describe Your Product"
              className="textarea textarea-bordered textarea-lg w-full max-w-xs mt-5"
            ></textarea>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">
                  Pick the best fantasy franchise
                </span>
                <span className="label-text-alt">Alt label</span>
              </div>
              <select className="select select-bordered" id="">
                <option disabled selected>
                  Pick one
                </option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
              </select>
              <div className="label">
                <span className="label-text-alt">Alt label</span>
              </div>
            </label>
  
            <div className="input-submit-container flex flex-col justify-between ">
              <input
                type="file"
                className="py-4"
                placeholder="Enter Image of Item here"
              />
              <button type="submit" className="btn btn-primary mt-3">
                Submit
              </button>
            </div>
          </div>
        </dialog>
      </div>
    );
  };
  
  export default Modal;
  