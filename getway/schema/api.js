const movieDefs = `#GraphQL
  type Movie {
    id: ID
    title: String
    overview: String
    release_date: String
    poster_path: String
    homepage: String
    popularity: Int
    vote_average: Int
    vote_count: Int
    genres: [Genre]
    cast : [Cast]
  }
  type Genre {
    id: ID
    name: String
  }
  type Cast {
    id: ID
    name: String
    character: String
    biography: String
    profile_path: String
    movie: [Movie]
  }
  type Query {
    getMovies(category: String): [Movie]
    getMovieById(id:ID!): Movie
    getCast: [Cast]
    getCastById(id:ID!): Cast
  }
`;

module.exports = {
  typeDefs: movieDefs,
};
