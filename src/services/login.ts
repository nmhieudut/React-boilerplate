import axiosClient from "core/api";
import { Services } from "core/api/List";
// import { LSManager } from "utils/localstoragemanager";
const login = async (username: string, password: string) => {
  const userPayload = {
    username,
    password
  };
  try {
    const res = await axiosClient.post(Services.login, userPayload);
    // LSManager.setToken(res);
    return res.data;
  } catch (error) {
    throw error("Error when login");
  }
};

export default {
  login
};
