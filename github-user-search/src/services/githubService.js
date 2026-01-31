 import axios from "axios";

// Fetch advanced search results
export const fetchUsers = async ({ username, location, minRepos }) => {
  // Construct query
  let query = username || "";
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${query}&per_page=10`
  );

  return response.data.items; // array of users
};

// Optional: fetch individual user details
export const fetchUserDetails = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};
