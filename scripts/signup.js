document.querySelector('form').addEventListener('submit',()=>{
    adduser()
});

let adduser = ()=>{
    event.preventDefault()
    let form = document.getElementById('user_data')
    let name = form.fullname.value
    let email = form.email.value
    let password = form.password.value  
    if(name==''||email==''||password==''){
        alert('Invalid Details')
        return
    }
    let user = new User(name)
    user.signup(email,password)
}