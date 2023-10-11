import "../styles/modal.css";
import { AiOutlineClose } from "react-icons/ai";

export const Modal = ({ asset, onClick }) => {
  return (
    <>
      <div className="modal-overlay" />
      <div className="modal-container">
        <div className="close-button" onClick={() => onClick(false)}>
          <AiOutlineClose /> Close
        </div>
        <img src={asset.image} alt={asset.name} />
      </div>
    </>
  );
};
