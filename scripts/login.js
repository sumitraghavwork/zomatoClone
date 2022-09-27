document.getElementById('user_data').addEventListener('submit',()=>{
    login()
});
let login = ()=>{
    event.preventDefault()
    let form = document.getElementById('user_data')
    let email = form.email.value
    let password = form.password.value  
    if(email==''||password==''){
        alert('Invalid Details')
        return
    }
    let user = new User(email)
    user.login(email,password)    
}