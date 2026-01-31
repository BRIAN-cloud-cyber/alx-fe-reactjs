 import { useState } from "react";
import { fetchUsers, fetchUserDetails } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username && !location && !minRepos) return;

    setLoading(true);
    setError(false);
    setUsers([]);

    try {
      const results = await fetchUsers({ username, location, minRepos });

      // Optional: fetch extra details for each user
      const detailedUsers = await Promise.all(
        results.map(async (user) => {
          const details = await fetchUserDetails(user.login);
          return details;
        })
      );

      setUsers(detailedUsers);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">GitHub Advanced Search</h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-2 mb-6 justify-center items-center"
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded w-full md:w-1/4"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded w-full md:w-1/4"
        />
        <input
          type="number"
          placeholder="Min Repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 rounded w-full md:w-1/4"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">Looks like we cant find users</p>}

      {users.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {users.map((user) => (
            <div
              key={user.login}
              className="border rounded p-4 flex flex-col items-center text-center"
            >
              <img
                src={user.avatar_url}
                alt="avatar"
                className="rounded-full w-24 h-24 mb-2"
              />
              <h3 className="font-semibold">{user.name || user.login}</h3>
              {user.location && <p className="text-sm">{user.location}</p>}
              <p className="text-sm">Repos: {user.public_repos}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 mt-1"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
