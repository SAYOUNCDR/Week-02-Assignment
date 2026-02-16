const SearchBar = ({ query, onSearchChange }) => (
  <div style={{ marginBottom: "20px" }}>
    <input
      type="text"
      placeholder="Search users by name..."
      value={query}
      onChange={(e) => onSearchChange(e.target.value)}
      style={{
        padding: "8px",
        width: "250px",
        borderRadius: "4px",
        border: "1px solid #ccc",
      }}
    />
  </div>
);

export default SearchBar;
