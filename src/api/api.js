import * as axios from "axios";

/*делаем инстанс чтоб не дублироваться*/
const instance = axios.create({
  withCredentials: true,
  /*baseURL: "https://social-network.samuraijs.com/api/1.0/",*/
  headers: {
    "API-KEY": "9d339b31-96cf-4a17-b83a-20f7aa16f051",
  },
});
export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(
        /*baseURL + */ `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`
      )
      .then((response) => {
        return response.data;
      });
  },
  follow(userId) {
    return instance.post(
      `https://social-network.samuraijs.com/api/1.0/follow/${userId.id}`
    );
  },
  unfollow(userId) {
    return instance.delete(
      `https://social-network.samuraijs.com/api/1.0/follow/${userId.id}`
    );
  },
  getProfile(userId) {
    console.warn("Obsolete method");
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(
      `https://social-network.samuraijs.com/api/1.0/profile/` + userId
    );
  },
  getStatus(userId) {
    return instance.get(
      `https://social-network.samuraijs.com/api/1.0/profile/status/` + userId
    );
  },
  updateStatus(status) {
    return instance.put(
      `https://social-network.samuraijs.com/api/1.0/profile/status/`,
      { status: status }
    );
  },
};

export const authAPI = {
  me() {
    return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`);
  },
};
