import { useState, useEffect } from "react";
const GithubUserSearch = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [reposData, setReposData] = useState([]);
  const [input, setInput] = useState("");
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const fetchUserData = async () => {
    try {
      const userResponse = await fetch(
        `https://api.github.com/users/${username}`,
      );
      if (!userResponse.ok) {
        throw new Error("User not found");
      }
      const userData = await userResponse.json();
      console.log("User Data:", userData);
      setUserData(userData);
      const reposResponse = await fetch(
        `https://api.github.com/users/${username}/repos?sort=created&per_page=5`,
      );
      if (!reposResponse.ok) {
        throw new Error("Could not fetch repositories");
      }
      const reposData = await reposResponse.json();
      console.log("Repos Data:", reposData);
      setReposData(reposData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (username) {
      fetchUserData();
    }
  }, [username]);

  return (
    <div className="flex flex-col border-2 border-gray-300 rounded-lg p-4 gap-4 m-10 w-100">
      <div className="flex flex-col">
        <h1 className="text-center">🔍 GitHub User Search</h1>
        <div className="flex flex-row gap-10">
          <input
            type="text"
            placeholder="Enter GitHub username"
            className="border border-gray-400 rounded-md p-2 mt-2 w-90"
            onChange={handleInput}
          />
          <button
            className="border border-yellow-500 bg-amber-500 text-white rounded-md p-2 mt-2 cursor-pointer font-bold"
            onClick={() => setUsername(input)}
          >
            Search
          </button>
        </div>
      </div>

      <div>
        <h1>User {username}</h1>
        {userData && (
          <div className="flex flex-col items-center gap-4">
            <img
              src={userData.avatar_url}
              alt={`${userData.login} avatar`}
              className="w-32 h-32 rounded-full"
            />
            <h2 className="text-xl font-bold">{userData.name}</h2>
            <p className="text-gray-600">{userData.bio}</p>
            <p className="text-gray-600">Followers: {userData.followers}</p>
          </div>
        )}

        <h1>Recent repos</h1>
        {reposData.length > 0 && (
          <ul className="flex flex-col gap-2">
            {reposData.map((repo) => (
              <li
                key={repo.id}
                className="border border-gray-300 rounded-md p-2"
              >
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 font-bold"
                >
                  {repo.name}
                </a>
                <p className="text-gray-600">{repo.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default GithubUserSearch;
