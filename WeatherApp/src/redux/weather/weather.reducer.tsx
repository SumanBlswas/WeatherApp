import {
  GET_API_ERR,
  GET_API_REQ,
  GET_API_SUC,
  GET_API_SUC2,
} from "./weather.types";

const oldState = {
  weather: [],
  place: "",
  isLoding: false,
  isError: false,
};

export const reducer = (
  state = oldState,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  action: { type: string; payload: { el: string; weatherData: [] } } | any
) => {
  const { type, payload } = action;
  switch (type) {
    case GET_API_REQ: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_API_SUC: {
      const { el, weatherData } = payload;

      return {
        ...state,
        isLoading: false,
        weather: {
          ...state.weather,
          [el]: weatherData,
        },
      };
    }
    case GET_API_SUC2: {
      return {
        ...state,
        place: payload,
      };
    }
    case GET_API_ERR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default:
      return state;
  }
};
