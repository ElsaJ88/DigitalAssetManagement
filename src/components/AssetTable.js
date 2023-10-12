import { AiFillTags } from "react-icons/ai";
import { MdFormatSize, MdDownloading } from "react-icons/md";
import "../styles/assettable.css";

export const AssetTable = ({ asset }) => {
  return (
    <table clasName="asset-details-table">
      <thead>
        <tr className="table-row-2">
          <th colspan="2">{asset.name}</th>
        </tr>
      </thead>
      <tbody>
        <tr className="table-row-1">
          <td className="table-col-1">
            <MdFormatSize /> Asset details:
          </td>
          <td className="table-col-2">
            {asset.details.map((detail) => (
              <span>{detail} </span>
            ))}
          </td>
        </tr>

        <tr className="table-row-2">
          <td className="table-col-1">
            <MdDownloading /> Usage:
          </td>
          <td className="table-col-2">
            {asset.usage.map((usage) => (
              <span>{usage} </span>
            ))}
          </td>
        </tr>
        <tr className="table-row-1">
          <td className="table-col-1">
            <AiFillTags /> Tags:
          </td>
          <td className="table-col-2">
            {asset.tags.map((tag) => (
              <span className="tag">{tag}</span>
            ))}
          </td>
        </tr>
      </tbody>
    </table>
  );
};
