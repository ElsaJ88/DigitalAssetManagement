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
        onChange={handleChange}
      />

      <button type="submit" className="search-button">
        <AiOutlineSearch />
      </button>
    </div>
  );
};
