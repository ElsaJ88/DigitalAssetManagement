import "../styles/assets.css";
import { assets } from "../assets-database";

import { useState } from "react";

import { Modal } from "./Modal";
import { Asset } from "./Asset";

export const Assets = () => {
  const [modal, setModal] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(0);

  const handleImageClick = (asset) => {
    setSelectedAsset(asset);
    setModal(true);
  };

  return (
    <div className="assets-container">
      {assets.map((asset) => (
        <Asset key={asset.id} asset={asset} onClick={handleImageClick} />
      ))}

      {modal && <Modal asset={selectedAsset} onClick={setModal} />}
    </div>
  );
};
