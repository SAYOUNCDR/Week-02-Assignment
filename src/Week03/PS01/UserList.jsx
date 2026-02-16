const UserList = ({ users }) => (
  <ul style={{ listStyle: "none", padding: 0 }}>
    {users.map((user) => (
      <li
        key={user.id}
        style={{ padding: "10px", borderBottom: "1px solid #eee" }}
      >
        {user.name}
      </li>
    ))}
    {users.length === 0 && <li>No users found.</li>}
  </ul>
);

export default UserList;
