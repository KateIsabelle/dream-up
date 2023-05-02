const domain = window.location.hostname;
export const inDevelopment = process.env.NODE_ENV === "development";
export const SERVER_URL = `http://${domain}:1337/`;
