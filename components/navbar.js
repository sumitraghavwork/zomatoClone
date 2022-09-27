let  navbar=()=>{
    return `<div onclick="window.location.href='./index.html'">
                <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="">
            </div>
            <div >
                <input type="text" id="query" placeholder="Search Your Favourite Dishes">
                <div id="queries"></div>
            </div>
            <div>
                <div onclick="window.location.href='./day.html'">Receipe of the Day</div>
                <div onclick="window.location.href='./random.html'">Random Receipes</div>
            </div>
            <div id="login_status">
                <div onclick="window.location.href='./login.html'">Log in</div>
                <div onclick="window.location.href='./signup.html'">Sign up</div>
            </div>`
}
// export {navbar,addprofile,appendQuery}
export {navbar,addprofile,appendQuery,emptyquery,getData,debounce,main,addRecipe,addiframesrc}

let addprofile=()=> {
    let loginStatus = JSON.parse(localStorage.getItem('loggedUser')) || []
    if (loginStatus.length != 0) {
      let [{ name }] = loginStatus
      const login = document.getElementById('login_status')
      login.innerHTML = null
      const profile = document.createElement('div')
      profile.setAttribute('class', 'profile')
      const logout = document.createElement('div')
      profile.innerText = name
      logout.innerText = 'Log Out'
      logout.addEventListener('click', () => {
        loginStatus = []
        localStorage.setItem('loggedUser', JSON.stringify(loginStatus))
        window.location.reload()
      })
      login.append(profile, logout)
    }
  }
  var id
  let debounce=(fn, delay)=> {
    if (id) {
      clearTimeout(id)
    }
    id = setTimeout(() => {
      fn()
    }, delay)
  }
  let main = async ()=> {    
    let query = document.getElementById('query').value
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    let data = await getData(url)    
    appendQuery(data)
  }
  let getData = async (url)=>{    
    let res = await fetch(url)
    let data = await res.json()
    console.log(data)
    return data.meals
  }
  let appendQuery=(arr)=> {
    const queries = document.getElementById('queries')
    queries.innerHTML = null
    if (!arr) {
      return
    }
    console.log(arr)
    let len = arr.length
    len >= 3 ? (len = 2) : (len = len)
    queries.parentNode.style.height = `${len * 110}px`
    arr.forEach((ele) => {
      let { strMeal } = ele
      const card = document.createElement('div')
      const name = document.createElement('p')
      name.innerText = strMeal
      card.append(name)
      card.addEventListener('click', () => {
        let arr = [ele]
        localStorage.setItem('selectedRecipe', JSON.stringify(arr))
        window.location.href = './recipe.html'
      })
      queries.append(card)
    })
  }
  let emptyquery=()=> {
    const queries = document.getElementById('queries')
    queries.innerHTML = null
    queries.parentNode.style.height = '1px'
    const query = document.getElementById('query')
    query.value = null
  }
  let addRecipe=(arr)=>{
    const recipe = document.getElementById('recipe');
    recipe.innerHTML = null
    arr.forEach((ele) => {
        console.log(ele)
        let {strMeal,strYoutube,strMealThumb,strCategory,strArea} = ele
        const meal = document.createElement('div');
        const thumb = document.createElement('img');
        thumb.src = strMealThumb
        const name = document.createElement('h2');
        name.innerText = strMeal
        const category = document.createElement('h3');
        category.innerText = `Category: ${strCategory}`
        const area = document.createElement('h4');
        area.innerText = `Area: ${strArea}`
        meal.append(thumb,name,category,area)
        recipe.append(meal)
        addiframesrc(strYoutube.substring(strYoutube.length-11))
    });
}
let addiframesrc=(source)=>{
    const iframe = document.getElementById('iframe_video');
    let url = `https://www.youtube.com/embed/${source}`
    iframe.src = url
}



