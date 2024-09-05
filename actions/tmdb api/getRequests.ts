"use server";
import axios from "axios";
import { options } from "./utils/options";

export const getAuthorization = async () => {
  try {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/authentication",
      options
    );
    if (!data || data.errors) {
      throw new Error("Something went wrong!");
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};
