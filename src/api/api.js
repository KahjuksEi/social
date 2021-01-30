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
};
