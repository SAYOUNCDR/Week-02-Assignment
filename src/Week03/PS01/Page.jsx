import { useUserSearch } from "./useUserSearch";
import SearchBar from "./Searchbar";
import UserList from "./UserList";

const mockUsers = [
  { id: 1, name: "Sayoun Parui" },
  { id: 2, name: "Dhruva Maheshwari" },
  { id: 3, name: "Dhiraj Dubey" },
  { id: 4, name: "Subham Maurya" },
  { id: 5, name: "Pranav Kakade" },
];

const Page = () => {
  const { query, setQuery, filteredUsers } = useUserSearch(mockUsers);

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>User Directory</h1>

      <SearchBar query={query} onSearchChange={setQuery} />

      <p>
        <strong>Total Results:</strong> {filteredUsers.length}
      </p>

      <UserList users={filteredUsers} />
    </div>
  );
};

export default Page;
