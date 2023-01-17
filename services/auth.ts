import axios from "axios";
import { LoginTypes } from "./data-types";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

export async function setSignUp(data: any) {
  const URL = "auth/signup";

  const response = await axios
    .post(`${ROOT_API}/${API_VERSION}/${URL}`, data)
    .catch((err) => err.response);

  const axiosResponse = response.data;

  if (axiosResponse.field !== null) {
    return axiosResponse;
  }
  return axiosResponse.data;
}

export async function setLogin(data: LoginTypes) {
  const URL = "auth/signin";

  const response = await axios
    .post(`${ROOT_API}/${API_VERSION}/${URL}`, data)
    .catch((err) => err.response);

  if (response.status !== 200) {
    const res = {
      error: true,
      message: response.data.message,
      data: null,
    };
    return res;
  }

  const res = {
    error: false,
    message: "success",
    data: response.data.data,
  };

  return res;
}
