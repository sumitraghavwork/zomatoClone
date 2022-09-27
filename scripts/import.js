import {navbar,addprofile,appendQuery,emptyquery,getData,debounce,main} from '../components/navbar.js'
const nav = document.getElementById('navbar')
nav.innerHTML = navbar()

window.addEventListener('load', () => {
  addprofile()
})
//debounce function event listner
const query = document.getElementById('query');
query.addEventListener('input',()=>{
  debounce(main,1000)
})
//empty query box event listner
const emptyquery1 = document.querySelector('#navbar>div:nth-child(2');
emptyquery1.addEventListener('mouseleave',()=>{
  emptyquery()
})