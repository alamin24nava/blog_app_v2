import Button from "./Button";
import Input from "./Input";

const Modal = ({isOpen}) => {
  return (
    <>
      <dialog id="my_modal_1" className="modal" open={isOpen}>
        <div className="modal-box">
          <form className="flex flex-col gap-3">
            <Input
              name="categoryName"
              type="text"
              placeholder="Type here"
              className="input-bordered w-full"
            />
            <Button
              className="btn-primary"
              type="submit"
              value="Update Category"
            />
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
