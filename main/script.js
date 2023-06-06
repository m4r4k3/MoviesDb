const section = document.querySelector("section");
const urlForTrending = "https://api.themoviedb.org/3/trending/movie/week?language=en-US"
const urlForSearchQuery = "https://api.themoviedb.org/3/search/movie?query="
const parameters = {
    method:"GET" ,
    "headers":{
        accept:"application/json" ,
        Authorization:"bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWJmYTQ3NGI2NzhiMzA5N2QwZDZiZmVmZjQ3NjcxZiIsInN1YiI6IjY0NTkwMzlkNzdkMjNiMDExOWUwY2M0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BmOUS3QjRdRKHXAl-xXCy3F4pV3vCnAyhAi6b-Bv3sU"
    }
}

document.querySelector("nav span").addEventListener("click",
    trend

)
document.body.onload = trend
document.querySelector("input").addEventListener("input",search)
async function trend ()
{   
    section.innerHTML=""
    let response =  await fetch(urlForTrending , parameters)
    let data = await response.json()
    MySectionManager(data.results , 0)
}

async function search(){
    section.innerHTML=""
    const value = document.querySelector("input").value.split(" ").join("%20")

if(value.length > 0){
    let response = await fetch(urlForSearchQuery+value , parameters)
    let data = await response.json()
    MySectionManager(data.results , 1)
}else{
    trend()
}
}

function MySectionManager(data , c){
    document.querySelector(".sectionTitle").innerHTML = c== 0 ? "Popular This Week :" : "The Result Of Your Search :" ;
    for(i of data){
        let  image = !i.poster_path ? "https://cdn.discordapp.com/attachments/1072446923866382347/1105503556401905774/e404.jpg" : "https://image.tmdb.org/t/p/w500" + i.poster_path
        section.innerHTML+= `
        <a data-title ="${i.title}" href = "../page/index.html?id=${i.id}">
        <img src="${image}" alt="">
        </a>`
      

    }

}