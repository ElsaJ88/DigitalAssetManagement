import "../styles/modal.css";
import { AiFillCloseCircle } from "react-icons/ai";

export const Modal = ({ asset, onClick }) => {
  return (
    <>
      <div className="modal-overlay" />
      <div className="modal-container">
        <div className="close-button" onClick={() => onClick(false)}>
          <AiFillCloseCircle />
        </div>
        <img src={asset.image} alt={asset.name} />
      </div>
    </>
  );
};
