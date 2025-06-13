import axios from "axios";

export default function () {
  const MOVIE_DETAIL = "https://api.themoviedb.org/3/movie";
  const TV_DETAIL = "https://api.themoviedb.org/3/tv";
  const AUTH_KEY = import.meta.env.VITE_TMDB_AUTH_KEY;

  async function goDetail(media_type: string, movie_id: string) {
    let data = null;
    let status = 200;

    if (media_type == "tv") {
      const [tvRes, tvCredit] = await Promise.all([
        axios.get(TV_DETAIL + "/" + movie_id, {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + AUTH_KEY,
          },
        }),
        axios.get(TV_DETAIL + "/" + movie_id + "/credits", {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + AUTH_KEY,
          },
        }),
      ]);

      data = {
        info: tvRes.data,
        cast: tvCredit.data.cast.slice(0, 7),
      };

      if (tvRes.status !== 200 || tvCredit.status !== 200) {
        console.warn("API 有錯誤，請檢查 status");
        status = 0;
      }

      // const res = await axios.get(TV_DETAIL + "/" + movie_id, {
      //   headers: {
      //     Accept: "application/json",
      //     Authorization: "Bearer " + AUTH_KEY,
      //   },
      // });

      // data = res.data;
      // status = res.status;
    } else {
      const [movieRes, movieCredit] = await Promise.all([
        axios.get(MOVIE_DETAIL + "/" + movie_id, {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + AUTH_KEY,
          },
        }),
        axios.get(MOVIE_DETAIL + "/" + movie_id + "/credits", {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + AUTH_KEY,
          },
        }),
      ]);

      // const res = await axios.get(MOVIE_DETAIL + "/" + movie_id, {
      //   headers: {
      //     Accept: "application/json",
      //     Authorization: "Bearer " + AUTH_KEY,
      //   },
      // });

      data = {
        info: movieRes.data,
        cast: movieCredit.data.cast.slice(0, 7),
      };

      if (movieRes.status !== 200 || movieCredit.status !== 200) {
        console.warn("API 有錯誤，請檢查 status");
        status = 0;
      }
    }

    if (status === 200) {
      return data;
    } else {
      return {};
    }
  }

  return { goDetail };
}
