import { useState, useEffect } from "react";

export const useUserSearch = (initialUsers) => {
  const [query, setQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(initialUsers);

  useEffect(() => {
    const results = initialUsers.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredUsers(results);
  }, [query, initialUsers]);

  return { query, setQuery, filteredUsers };
};
