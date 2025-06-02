import { useState } from "react";

function SearchHeader({ search }) {
  const [value, setValue] = useState("ca");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    search(value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="searchDiv">
      <form onSubmit={handleFormSubmit}>
        <label>Ne Arıyorsunuz?</label>
        <input value={value} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchHeader;
