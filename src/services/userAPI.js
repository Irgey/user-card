import axios from "axios";

const per_page = 6;

axios.defaults.baseURL = "https://646401a5043c103502b0afc1.mockapi.io";

export const fetchUsers = async (page) => {
  const response = await axios.get(`/users?page=${page}&limit=${per_page}`);
  return response.data;
};

export const followUser = async (user) => {
  return await axios.put(`/users/${user.id}`, {
    ...user,
    followers: user.followers + 1,
    following: true,
  });
};
export const unfollowUser = async (user) => {
  return await axios.put(`/users/${user.id}`, {
    ...user,
    followers: user.followers - 1,
    following: false,
  });
};
