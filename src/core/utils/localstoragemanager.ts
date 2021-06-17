export const LSManager = {
  setToken: (token: string) => {
    return localStorage.setItem("TOKEN", token);
  },
  getToken: () => {
    return localStorage.getItem("TOKEN");
  },
  removeToken: () => {
    return localStorage.remove("TOKEN");
  },
  // clear all data in local storage
  clearSite: () => {
    return localStorage.clear();
  }
};
