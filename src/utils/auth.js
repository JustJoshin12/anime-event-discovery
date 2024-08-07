import { checkResponse } from "./api";

const baseUrl = "https://b211-67-165-141-227.ngrok-free.app";

export const signin = ({ email, password }) => {
  return fetch(`${baseUrl}/readUserAccount`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    return checkResponse(res);
  });
};
export const register = ({
  firstName,
  lastName,
  userName,
  password,
  email,
  avatar,
  dob,
  createTime,
}) => {
  return fetch(`${baseUrl}/createUserAccount`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName,
      lastName,
      userName,
      password,
      email,
      avatar,
      dob,
      createTime,
    }),
  }).then((res) => {
    return checkResponse(res);
  });
};
