// Dynamic Scoping
// let movie = "tamasha";

// function otherMovies(movieName) {
//   console.log(movie, movieName);
// }

// function otherOtherMovies() {
//   let movie = "yeh jawani hai deewani";
//   otherMovies("brahmastra");
// }

// otherOtherMovies();

function otherMovie(movieName) {
  console.log(this.movie, movieName);
}

function otherOtherMovie() {
  let myContext = {
    movie: "Tamasha",
  };
  otherMovie.call(myContext, "is coming");
}

// otherOtherMovie();
