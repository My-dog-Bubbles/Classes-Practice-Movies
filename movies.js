const info = document.getElementById('movie-info')
// Define the Movie class
class Movies{
  title;
  cast;
  description;
  rating;
  // title, cast, description, rating
  constructor(title,cast,description,rating){
    this.title = title
    this.cast = cast
    this.description = description
    this.rating = rating
  }
  // Method to update the rating of the movie
  addRating(rating){
    this.rating = rating
  }

  // Method to display the movie's information
  display(){
    info.innerHTML = `<strong>Title:</strong> ${this.title} <br> <strong>Cast:</strong> ${this.cast} <br> <strong>Description:</strong> ${this.description} <br> <strong>Rating:</strong> ${this.rating}`
  }


}
 
let myMovie = new Movies('nine',['Daniel Day-Lewis','Marion Cotillard','Penelope Cruz'], ' When 9 (Elijah Wood) springs to life, it finds itself in a post-apocalyptic world where humans no longer exist, and the only signs of life are sentient rag dolls like itself and the machines that hunt them. Though it is the youngest of the group, 9 convinces comrades that the only way to survive against the machines is to stop hiding, go on the offensive, and find out why the machines want to destroy them. As 9 and the group learn, civilization hinges on their success or failure.',100)

// Test your implementation
// Display the initial information of the movie
myMovie.display()


let movies = [myMovie]
console.log(myMovie.title)

// Update the rating of the movie
function updateMovieRating(title,newRating){
  for(key in movies){
    console.log(movies[key].title)
    if(movies[key].title==title){
      myMovie.addRating(newRating)
    } else{
      console.log('no match found')
    }
  }

}

// Display the updated information of the movie
updateMovieRating('nine',80)
myMovie.display()