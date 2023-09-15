import React from "react";

interface Props {
  onSearch: (name: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [inputValue, setInputValue] = React.useState("");

  const handleSearch = () => {
    onSearch(inputValue);
  };

  return (
    <div className="flex items-center">
      <input
        className="p-2 border rounded"
        type="text"
        placeholder="Search Pokemon..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="ml-2 p-2 bg-blue-500 text-white rounded"
        onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
