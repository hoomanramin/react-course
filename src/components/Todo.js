import {useState} from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const Todo = ({title}) => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };
  const closeModalHandler = () => {
    setShowModal(false);
  };
  const confirmHandler = () => {
    console.log("ssss");
  };
  return (
    <>
      <div className="card">
        <h2>{title}</h2>
        <div className="actions">
          <button onClick={handleClick} className="btn">
            Delete
          </button>
          {showModal && (
            <>
              <Modal
                onCancelClick={closeModalHandler}
                onConfirm={confirmHandler}
              />
              <Backdrop onClick={closeModalHandler} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Todo;
