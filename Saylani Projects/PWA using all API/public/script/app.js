var apikey='3b1c1efcb0994606b617bf6c5b32a669';
const maindiv= document.querySelector('#div');
const selector=document.querySelector('#selector');
const defineDefault = "the-washington-post";
window.addEventListener('load',async e => {
    updateNews();
    await updateSources();
    selector.value=defineDefault;
    selector.addEventListener('change',e => {
        updateNews(e.target.value);
    })
    

});
async function updateSources(){
    const res =await fetch(`https://newsapi.org/v1/sources`);
    const json = await res.json();
    console.log(typeof json.sources);
    selector.innerHTML = json.sources.map(src =>`<option value="${src.id}">${src.name}</option>`).join('\n')
}

async function updateNews(source=defineDefault) {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}`);
    const json=await res.json();
    console.log(json);
    maindiv.innerHTML=json.articles.map(createArticles).join('\n');
}
    
function createArticles(article)
{
    
    return `
    <div class="col-md-8 col-md-offset-2">
            <h2 class='h2'>${article.title}</h2>
            <img class="img-rounded" width='100%' src="${article.urlToImage}"/>
            <p class='h4'>${article.description}</p>
        </div> `

}



