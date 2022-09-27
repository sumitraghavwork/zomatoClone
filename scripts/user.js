let userArr = JSON.parse(localStorage.getItem('users')) || []
let loginStatus = JSON.parse(localStorage.getItem('loggedUser')) || []
class User{
    constructor(name){
        this.name = name
    }
    signup(email,password){
        let isDupicate = this.#isDupicate(email)
        if(!isDupicate){
            alert('User Aready Exists')
            return
        }        
        this.email = email
        this.password = password
        alert('Signed Up Successfully')
        userArr.push(this)
        localStorage.setItem('users',JSON.stringify(userArr))
        window.location.href='./login.html'
    }
    login(useremail,userpassword){
        let userArr = JSON.parse(localStorage.getItem('users')) || []
        for(let ele of userArr){
            let {email,password} = ele
            if(email == useremail && password == userpassword){
                alert('Login successful!')
                loginStatus=[ele]
                localStorage.setItem('loggedUser',JSON.stringify(loginStatus));                
                window.location.href = './index.html'
                return
            }else if(email == useremail && userpassword !=password){
                alert('Wrong credentials')
                return
            }
        }
        alert("User doesn't exist, Sign Up")
        return
    }
    #isDupicate(email){
        let userArr = JSON.parse(localStorage.getItem('users')) || []
        for(let ele of userArr){
            let {email:useremail} = ele
            if(email==useremail){
                return false
            }
        }
        return true
    }
}