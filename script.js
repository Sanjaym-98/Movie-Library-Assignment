const moviesOriginalList = [
    { title: "The Shawshank Redemption", genre: "Drama" },
    { title: "The Godfather", genre: "Crime" },
    { title: "The Godfather: Part II", genre: "Crime" },
    { title: "The Dark Knight", genre: "Action" },
    { title: "12 Angry Men", genre: "Drama" },
    { title: "Schindler's List", genre: "Drama" },
    { title: "The Lord of the Rings: The Return of the King", genre: "Adventure" },
    { title: "Pulp Fiction", genre: "Crime" },
    { title: "The Good, the Bad and the Ugly", genre: "Western" },
    { title: "Fight Club", genre: "Drama" },
    { title: "Forrest Gump", genre: "Drama" },
    { title: "Inception", genre: "Action" },
    { title: "The Lord of the Rings: The Fellowship of the Ring", genre: "Adventure" },
    { title: "Star Wars: Episode V - The Empire Strikes Back", genre: "Action" },
    { title: "The Lord of the Rings: The Two Towers", genre: "Adventure" },
    { title: "The Matrix", genre: "Action" },
    { title: "Goodfellas", genre: "Crime" },
    { title: "One Flew Over the Cuckoo's Nest", genre: "Drama" },
    { title: "Seven Samurai", genre: "Adventure" },
    { title: "Se7en", genre: "Crime" },
    { title: "City of God", genre: "Crime" },
    { title: "The Silence of the Lambs", genre: "Thriller" },
    { title: "It's a Wonderful Life", genre: "Drama" },
    { title: "Life is Beautiful", genre: "Comedy" },
    { title: "The Usual Suspects", genre: "Crime" },
    { title: "Léon: The Professional", genre: "Action" },
    { title: "Spirited Away", genre: "Animation" },
    { title: "Saving Private Ryan", genre: "Drama" },
    { title: "Interstellar", genre: "Adventure" },
    { title: "The Green Mile", genre: "Drama" },
    { title: "The Prestige", genre: "Drama" },
    { title: "The Intouchables", genre: "Comedy" },
    { title: "The Lion King", genre: "Animation" },
    { title: "The Pianist", genre: "Drama" },
    { title: "The Departed", genre: "Crime" },
    { title: "Whiplash", genre: "Drama" },
    { title: "Gladiator", genre: "Action" }
]
let movies = [];
  
  //BONUS: local storage 
  localStorage.setItem('movieListToSave',JSON.stringify(moviesOriginalList));
  movies = JSON.parse(localStorage.getItem('movieListToSave'));
const title = document.getElementById("title");
const genre = document.getElementById("genre");
const search = document.getElementById("search");
const results = document.getElementById("results")

search.addEventListener("click", main);
let result = []
function main() {
    const advs = document.getElementById("advs");

    results.innerHTML = ""
    const titleVal = title.value;
    const genreVal = genre.value;
    if (advs.value=="Search by Title" && titleVal) {
        result = movies.filter((a) => { return a.title.toLowerCase().includes(titleVal.toLowerCase().trim(" ")) });
        console.log(result)
    }
     else if(advs.value=="Search by Genre" && genreVal){
        result = movies.filter((a) => { return a.genre.toLowerCase().includes(genreVal.toLowerCase().trim()) });
        console.log(result)
    }else if(advs.value=="Both" && titleVal && genreVal                    ){
        result = movies.filter((a) => { return a.title.toLowerCase().includes(titleVal.toLowerCase().trim(" ")) &&  a.genre.toLowerCase().includes(genreVal.toLowerCase().trim()) });
    }

    result.map((key) => {
        let litag = `<li>${key.title}(${key.genre})</li>`;
        results.innerHTML += litag;
        console.log(results.length)
    })
    document.getElementById("sortbytitle").addEventListener("click", sortByTitle)
    function sortByTitle() {

        debugger
        const sortT = result.sort((c, d) => c.title.localeCompare(d.title))
        console.log(sortT)
        results.innerHTML = ""
        sortT.map((key) => {
            litag = `<li>${key.title}(${key.genre})</li>`;
            results.innerHTML += litag

        })
    }

    document.getElementById("sortbygenre").addEventListener("click", sortByGenre)

    function sortByGenre() {
        const sortG = result.sort((a, b) => a.genre.localeCompare(b.genre))
        console.log(sortG);
        results.innerHTML = ""
        sortG.map((key) => {
            litag = `<li>${key.title}(${key.genre})</li>`;
            results.innerHTML += litag

        })
    }
    const counttag = document.getElementById("counttag");
    document.getElementById("countByGenre").addEventListener("click", countresult)

    function countresult() {
        let countobject = {};
        result.map(key => {
            if (countobject[key.genre]) {
                countobject[key.genre]++
            } else {
                countobject[key.genre] = 1
            }
        })
        counttag.innerHTML = "";
        for (key in countobject) {
            counttag.innerHTML += `<li>${key}:${countobject[key]}</li>`
        }
    }
  

}