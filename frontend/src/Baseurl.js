require("dotenv").config();

export const baseUrl =
  process.env.REACT_APP_NODE_ENV === "development"
    ? "http://localhost:4001/api"
    : "https://songslyrics.me/api";
