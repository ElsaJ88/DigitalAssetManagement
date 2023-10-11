import { AssetTable } from "./AssetTable";

export const Asset = ({ asset, onClick }) => {
  return (
    <div className="asset-item">
      <div className="asset-image-container">
        <img
          className="asset-image"
          src={asset.image}
          alt={asset.name}
          onClick={() => onClick(asset)}
        />
      </div>
      <AssetTable asset={asset} />
    </div>
  );
};
