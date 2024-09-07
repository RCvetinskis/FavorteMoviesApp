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

export const getMovieLists = async (
  type: string = "popular",
  page: string = "1"
) => {
  try {
    const { data } = await axios.get(
      `${process.env.THE_MOVIE_DB_API_URL}/movie/${type}?language=en-US&page=${page}`,
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
export const getTvLists = async (
  type: string = "popular",
  page: string = "1"
) => {
  try {
    const { data } = await axios.get(
      `${process.env.THE_MOVIE_DB_API_URL}/tv/${type}?language=en-US&page=${page}`,
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
export const getGenres = async (type: "movie" | "tv") => {
  try {
    const { data } = await axios.get(
      `${process.env.THE_MOVIE_DB_API_URL}/genre/${type}/list?language=en`,
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
export const getLanguages = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.THE_MOVIE_DB_API_URL}/configuration/languages`,
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
export const getKeyWords = async (query: string) => {
  try {
    const { data } = await axios.get(
      `${process.env.THE_MOVIE_DB_API_URL}/search/keyword?query=${query}&page=1`,
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
export const getDiscover = async (
  type: string = "movie",
  page: string = "1",
  sort_by: string = "",
  with_original_language: string = "",
  vote_average_gte: string = "",
  vote_average_lte: string = "",
  with_genres: string = "",
  with_keywords: string = "",
  release_date_gte: string = "",
  release_date_lte: string = ""
) => {
  // Build the query parameters dynamically
  const queryNameDateGte =
    type === "movie" ? "release_date.gte" : "first_air_date.gte";
  const queryNameDateLte =
    type === "movie" ? "release_date.lte" : "first_air_date.lte";
  const queryParams = new URLSearchParams({
    language: "en",
    page,
    ...(sort_by && { sort_by }),
    ...(with_original_language && { with_original_language }),
    ...(vote_average_gte && { "vote_average.gte": vote_average_gte }),
    ...(vote_average_lte && { "vote_average.lte": vote_average_lte }),
    ...(with_genres && { with_genres }),
    ...(with_keywords && { with_keywords }),
    ...(release_date_gte && { [queryNameDateGte]: release_date_gte }),
    ...(release_date_lte && { [queryNameDateLte]: release_date_lte }),
  });

  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/${type}?${queryParams.toString()}`,
      options
    );

    if (!data || data.errors) {
      throw new Error("Something went wrong!");
    }
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
