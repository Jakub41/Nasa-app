import { API_KEY } from "../Config";

export const NasaApiQuery = (urlGenerator, method = "GET") => async (
  body,
  ...params
) => {
  try {
    const url = urlGenerator(...params);
    const request = {
      method: method,
      body: body,
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
    };

    const response = await fetch(url + API_KEY, request);

    if (!response.ok) throw new Error();

    const json = await response.json();

    return {
      success: true,
      ...json,
    };
  } catch (err) {
    return {
      success: false,
      result: [],
      message:
        "There is an issue to get data from server. Please try again later.",
      error: err
    };
  }
};
