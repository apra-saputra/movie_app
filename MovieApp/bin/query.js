import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://localhost:4004",
  cache: new InMemoryCache(),
});

export const GET_ALL_MOVIE = gql`
  query GetMovies($category: String) {
    getMovies(category: $category) {
      id
      title
      poster_path
      vote_average
    }
  }
`;

export const GET_MOVIE_BY_ID = gql`
  query GetMovieById($getMovieByIdId: ID!) {
    getMovieById(id: $getMovieByIdId) {
      id
      title
      overview
      release_date
      poster_path
      homepage
      popularity
      vote_average
      vote_count
      genres {
        name
        id
      }
      cast {
        name
        character
        id
      }
    }
  }
`;

export const GET_ALL_CASTS = gql`
  query GetCast {
    getCast {
      id
      name
      profile_path
    }
  }
`;

export const GET_CAST_BY_ID = gql`
  query GetCastById($getCastByIdId: ID!) {
    getCastById(id: $getCastByIdId) {
      id
      name
      character
      biography
      profile_path
      movie {
        id
        title
        poster_path
      }
    }
  }
`;
