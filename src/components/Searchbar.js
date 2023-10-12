import { AiOutlineSearch } from "react-icons/ai";
import "../styles/searchbar.css";

export const Searchbar = ({ setSearchFieldInput }) => {
  const handleChange = (event) => {
    setSearchFieldInput(event.target.value);
  };
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search assets..."
        onClick={handleChange}
      />

      <button type="search" className="search-button">
        <AiOutlineSearch />
      </button>
    </div>
  );
};
