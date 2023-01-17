import axios from "axios";

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

export async function setLogin() {
  return null;
}
