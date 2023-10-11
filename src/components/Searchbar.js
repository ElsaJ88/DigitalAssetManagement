import { FaSearch } from "react-icons/fa";
import "../styles/searchbar.css";

export const Searchbar = ({ setSearchFieldInput }) => {
  return (
    <div className="wrap">
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="Search assets..."
        />
        <button
          type="search"
          className="searchButton"
          onChange={(event) => setSearchFieldInput(event.target.value)}
        >
          <FaSearch />
        </button>
      </div>
    </div>
  );
};
