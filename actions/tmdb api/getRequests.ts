"use server";
import axios from "axios";
import { options } from "./utils/options";

export const getSearchResults = async (
  query: string,
  category: string = "multi",
  page: string = "1"
) => {
  try {
    const searchCategory =
      category === "All" ? "multi" : category.toLowerCase();

    const { data } = await axios.get(
      `${process.env.THE_MOVIE_DB_API_URL}/search/${searchCategory}?query=${query}&include_adult=false&language=en-US&page=${page}`,
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
export const getTrending = async (date: string = "day") => {
  try {
    const { data } = await axios.get(
      `${process.env.THE_MOVIE_DB_API_URL}/trending/all/${date}?language=en-US`,
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
export const getPopularMovies = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.THE_MOVIE_DB_API_URL}/movie/popular`,
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
export const getTopRatedMovies = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.THE_MOVIE_DB_API_URL}/movie/top_rated`,
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
