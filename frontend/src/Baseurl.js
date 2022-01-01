require("dotenv").config();

export const baseUrl =
  process.env.REACT_APP_NODE_ENV === "development"
    ? "http://3.145.180.84:4001/api"
    : "http://localhost:4001/api/";
