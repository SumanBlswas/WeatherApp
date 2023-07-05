import axios from "axios";
import {
  GET_API_ERR,
  GET_API_REQ,
  GET_API_SUC,
  GET_API_SUC2,
} from "./weather.types";
import { AppDispatch } from "../store";

const getApiReq = () => {
  return {
    type: GET_API_REQ,
  };
};

const getApiSuc = (el: string, weatherData: []) => {
  return {
    type: GET_API_SUC,
    payload: {
      el,
      weatherData,
    },
  };
};

const getApiSuc2 = (payload: string) => {
  return {
    type: GET_API_SUC2,
    payload,
  };
};

const getApiErr = () => {
  return {
    type: GET_API_ERR,
  };
};

const getAPiWeather = (data: string) => async (dispatch: AppDispatch) => {
  const el = data.substring(data.lastIndexOf("/") + 1);
  dispatch(getApiReq());
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_WEATHER_API_LINK}${data}&key=${
        import.meta.env.VITE_APP_WEATHER_API_KEY
      }`
    );
    dispatch(getApiSuc(el, response.data?.data));
    dispatch(getApiSuc2(response.data?.city_name));
  } catch (error) {
    dispatch(getApiErr());
  }
};

export { getAPiWeather };
