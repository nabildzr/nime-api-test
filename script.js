let url = "https://reqres.in/api/users";
const content = document.querySelector('#content')
url = 'data.json'
const hitAPI = async (url) => {
    try {   
    const api = await fetch(url)
    const data = await api.json()
    // console.log(data)
    return data
    } catch(error) {
        console.error("Failed to fetch data:", error)
    } finally {
        hideLoading()
    }
    
} 
var stylesheetElem = document.querySelector('head link[rel="stylesheet"]');
var loader = document.querySelector(".loading");

function showLoading() {
  loader.style.visibility = "visible"
    stylesheetElem.disabled = true;
}

function hideLoading() {
    loader.style.visibility = "hidden"
    stylesheetElem.disabled = false;
}


url = "https://kitsu.io/api/edge/anime?filter[categories]=adventure&page[limit]=5"
document.addEventListener('DOMContentLoaded', async () => {
    
    let data = await hitAPI(url);
    
    data = data.data
    console.log(data)
    let teks = ''
    data.forEach(element => {
        let attr = element.attributes
        teks += `


               <div style="margin: 18px 13px 10px;">
                    
                    <a>
                    
                        <img class="image-card" src="${attr.posterImage.small}">
                    </a>
                    <div class="box">
                        <a class="name-9f"> ${attr.titles.en}</a>
                        <a class="description-1">Check Detail</a><br>
    
                        <a class="description-2">Rating: <span class="rating">${attr.averageRating}</span> </a>
                    </div>
                </div>
   
        `

        //* <a class="friend-text">  ${attr.synopsis}</a>
        //* <a> ${attr.ageRating}</a>
        // teks += `<img src="${attr.posterImage.small}"></li>`
        // teks += '</div>'

        // console.log(element.name)
    });

    content.innerHTML = teks
})
