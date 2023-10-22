import "./styles/App.css";
import { Header } from "./components/Header";
import { Assets } from "./components/Assets";
import { Searchbar } from "./components/Searchbar";
import { useState, useEffect } from "react";
import { Tags } from "./components/Tags";

function App() {
  const [searchFieldInput, setSearchFieldInput] = useState("");
  const [selectedTag, setSelectedTag] = useState(0);
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    const fetchAssets = async () => {
      await fetch(
        "https://my-json-server.typicode.com/ElsaJ88/DigitalAssetManagement/assets"
      )
        .then((response) => response.json())
        .then((data) => setAssets(data));
    };
    fetchAssets();
  }, []);

  const searchedAssets = assets.filter((asset) => {
    return asset.name.toLowerCase().includes(searchFieldInput.toLowerCase());
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
        searchFieldInput === "" ? (
          <div>Loading assets...</div>
        ) : (
          <div>Your search did not return any results.</div>
        )
      ) : (
        <Assets assets={filteredAssets} />
      )}
    </div>
  );
}

export default App;
