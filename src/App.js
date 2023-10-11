import "./styles/App.css";

import { assets } from "./assets-database";

import { Header } from "./components/Header";
import { Assets } from "./components/Assets";
import { Searchbar } from "./components/Searchbar";
import { useState } from "react";
import { Tags } from "./components/Tags";

function App() {
  const [searchFieldInput, setSearchFieldInput] = useState("");
  const [selectedTag, setSelectedTag] = useState(0);

  const searchedAssets = assets.filter((asset) => {
    return asset.name
      .toLocaleLowerCase()
      .includes(searchFieldInput.toLowerCase());
  });

  const filteredAssets = searchedAssets.filter((asset) => {
    if (selectedTag === 0) {
      return asset;
    } else {
      return asset.tags.includes(selectedTag);
    }
  });

  return (
    <div className="app">
      <Header />
      <Searchbar setSearchFieldInput={setSearchFieldInput} />
      <Tags selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
      {filteredAssets.length === 0 ? (
        <div>Your search did not return any results.</div>
      ) : (
        <Assets assets={filteredAssets} />
      )}
    </div>
  );
}

export default App;