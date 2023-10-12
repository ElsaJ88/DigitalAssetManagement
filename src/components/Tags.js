import { useState, useEffect } from "react";

import "../styles/tags.css";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export const Tags = ({ selectedTag, setSelectedTag }) => {
  const [showTags, setShowTags] = useState(false);

  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/ElsaJ88/DigitalAssetManagement/asset-tags"
    )
      .then((response) => response.json())
      .then((data) => setTags(data));
  }, []);

  const handleChange = () => {
    showTags ? setShowTags(false) : setShowTags(true);
  };

  const tagClassName = (tag) =>
    showTags
      ? selectedTag === tag
        ? "tag-item visible selected"
        : "tag-item visible"
      : selectedTag === tag
      ? "tag-item selected"
      : "tag-item";

  return (
    <div>
      <div className="show-tags-button" onClick={handleChange}>
        {showTags ? (
          <span>
            <FaArrowUp />
            {"  "}Hide tags
          </span>
        ) : (
          <span>
            <FaArrowDown /> Show tags
          </span>
        )}
      </div>
      <div className="tags-container">
        {tags.map((tag) => {
          return (
            <div
              className={tagClassName(tag.tag)}
              key={tag.id}
              onClick={() => setSelectedTag(tag.tag)}
            >
              {tag.tag}
            </div>
          );
        })}
        <div className={tagClassName(0)} onClick={() => setSelectedTag(0)}>
          All Tags
        </div>
      </div>
    </div>
  );
};
