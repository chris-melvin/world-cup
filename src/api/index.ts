const API_KEY = import.meta.env.VITE_SPORTSDB_API;

export const API_ENDPOINTS = {
  teams: `https://www.thesportsdb.com/api/v1/json/${API_KEY}/lookup_all_teams.php?id=4429`,
};
