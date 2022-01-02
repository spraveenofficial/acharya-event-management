require("dotenv").config();

export const baseUrl =
  process.env.REACT_APP_NODE_ENV === "development"
    ? "https://songslyrics.me/api"
    : "http://localhost:4001/api/";
