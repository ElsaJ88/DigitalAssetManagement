import { FaTags } from "react-icons/fa";
import { MdFormatSize, MdDownloading } from "react-icons/md";

export const AssetTable = ({ asset }) => {
  return (
    <table clasName="asset-details-table">
      <thead>
        <tr>
          <th colspan="2">{asset.name}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <MdFormatSize /> Asset details:
          </td>
          <td>
            {asset.details.map((detail) => (
              <span>{detail} </span>
            ))}
          </td>
        </tr>

        <tr>
          <td>
            <MdDownloading /> Usage:
          </td>
          <td>
            {" "}
            {asset.usage.map((usage) => (
              <span>{usage} </span>
            ))}
          </td>
        </tr>
        <tr>
          <td>
            <FaTags /> Tags:
          </td>
          <td>
            {" "}
            {asset.tags.map((tag) => (
              <span className="tag">{tag}</span>
            ))}
          </td>
        </tr>
      </tbody>
    </table>
  );
};
