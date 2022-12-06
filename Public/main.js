//getUsers button 
document.getElementById("btn-users").addEventListener('click', getUsers);
function getUsers() {
fetch("http://localhost:3000/users/")
  .then((res)=> res.json())
  .then((data) => console.log(data))
  .catch((err)=> console.log(err))
}

const login = document.getElementById("login-page");
const register = document.getElementById("Nregister");
const note = document.getElementById("textarea1")

if(login) login.addEventListener('submit',loginpageFunction)
if(register) register.addEventListener('submit',registerpageFunction)
if(note) note.addEventListener('submit',notepageFunction)

function loginpageFunction(e)
{
    e.preventDefault();
    let username=document.getElementById('username').value;
    let password=document.getElementById('password').value;


    class User{
        constructor(username,password)
        {
            this.userName=username;
            this.Password=password;
        }
    
    
    
    getuname(){
        return this.userName;
    }
    setuname(newusername){
        this.userName= username;
    }
    getpword(){
        return this.Password;
    }
    setpword(newpassword){
        this.Password= password
    }

    }

    const Userl=new User(username,password);
    console.log(Userl);

}


function registerpageFunction(e)
{
    e.preventDefault()
    let fname=document.getElementById('fname').value;
    let lname=document.getElementById('Lname').value;
    let email=document.getElementById('email').value;
    let password=document.getElementById('psw').value;

    class User{
        constructor(fname,lname,email,password)
        {
            this.firstname=fname;
            this.lastname=lname;
            this.email=email;
            this.password=password;
        }
        getemail(){
            return this.email;
        }
        setemail(newemail){
            this.email = newemail;
        }
        getpassword(){
            return this.password;
        }
        setpassword(newpassword){
            this.password=newpassword
        }
        getfirstname(){
            return this.firstname;
        }
        setfirstname(newfirstname){
            this.firstname = newfirstname;
        }
        getlastname(){
            return this.lastname;
        }
        setlastname(newlastname){
            this.lastname=newlastname;
        }
    }

    const user1=new User(fname,lname,email,password);
    console.log(user1);
}


function notepageFunction(e)
{
    e.preventDefault();
    let note=document.getElementById('note').value;

    class User{
        constructor(note)
        {
            this.textarea=note;
        }
    
    
    gettnotes(){
        return this.textarea;
    }
    settnotes(note){
        this.textarea = note;
    }
   

    }

    const Usernote=new User(note);
    console.log(Usernote);

}