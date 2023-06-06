let moviesId = window.location.href.split("?")[1].split("=")[1]

document.body.onload = async function (){
    console.log("jdflqjlmfjq")
    let res = await fetch(`https://api.themoviedb.org/3/movie/${moviesId}?api_key=6ebfa474b678b3097d0d6bfeff47671f`)
    let data = await res.json()
    document.querySelector("section").innerHTML = `<img src="${!data.poster_path ? "https://cdn.discordapp.com/attachments/1072446923866382347/1105503556401905774/e404.jpg" : "https://image.tmdb.org/t/p/w500" + data.poster_path}" alt=""> ` +"<span>"+ data.overview + "</span>"
}