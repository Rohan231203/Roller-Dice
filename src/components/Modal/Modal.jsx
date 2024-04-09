/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import useSellitems from "../../hooks/useSellitems";
import usePreviewImg from "../../hooks/usePreviewImg";
import toast from "react-hot-toast";

const Modal = () => {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    category: "",
  });
  const { isLoading, handleSellItem } = useSellitems();
  const imageRef = useRef(null);
  const { handleImageChange, selectedFile, setSelectedFile } = usePreviewImg();

  const handleSellingItem = async () => {
    try {
      await handleSellItem(
        selectedFile,
        inputs.title,
        inputs.description,
        inputs.category
      );
      setSelectedFile(null);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="w-full">
      <button
        className="btn btn-primary bg-transparent border-0 w-full flex items-center gap-6 text-[#b6b5b5] text-base font-semibold cursor-pointer rounded-xl hover:bg-slate-200 hover:text-black px-[1.4rem] h-[2.5rem] hover:bg-transparent"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Post item
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
            value={inputs.title}
            onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
          />
          <textarea
            placeholder="Describe Your Product"
            className="textarea textarea-bordered textarea-lg w-full max-w-xs mt-5"
            value={inputs.description}
            onChange={(e) =>
              setInputs({ ...inputs, description: e.target.value })
            }
          ></textarea>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">
                Pick the best fantasy franchise
              </span>
              <span className="label-text-alt">Alt label</span>
            </div>
            <select
              className="select select-bordered"
              id=""
              onChange={(e) =>
                setInputs({ ...inputs, category: e.target.value })
              }
              value={inputs.category}
            >
              <option disabled value="">
                Pick one
              </option>
              <option>Electrical And Mechanics</option>
              <option>Academics</option>
              <option>Ameneties</option>
              <option>Sports And Gym</option>
              <option>Others</option>
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
              ref={imageRef}
              onChange={handleImageChange}
            />
            <button
              type="submit"
              className="btn btn-primary mt-3"
              onClick={handleSellingItem}
            >
              Submit
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
