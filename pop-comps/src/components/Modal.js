import { createPortal } from "react-dom";

const Modal = ({ onClose, header, description, onDiscard, onAccept }) => {
  return createPortal(
    <div className="modal-mine">
      <div className="modal-content-mine">
        <h1 className="ui header">
          {header}
          <span className="close-mine" onClick={onClose}>
            &times;
          </span>
        </h1>
        <p>{description}</p>
        <div className="actions">
          <div className="ui black deny button" onClick={onDiscard}>
            Nope
          </div>
          <div
            className="ui positive right labeled icon button"
            onClick={onAccept}
          >
            Yes
            <i className="checkmark icon"></i>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-screen-portal")
  );
};

export default Modal;
