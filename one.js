const form = document.getElementById("form");
// const username = document.getElementById("username");
const email = document.getElementById("emailid");
const password = document.getElementById("password");

form.addEventListener('submit',e =>{
    e.preventDefault();
    checkinput();
});
function checkinput(){
    // const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    // if(usernameValue===''){
    //     setError(username, 'Username cannot be blank');
    // }
    // else{
    //     setSuccess(username);
    // }
    if(emailValue===''){
        setError(email, "Email cannot be blank")
    }
    else{
        setSuccess(email); 
    }
    if(passwordValue===''){
        setError(password, 'Password cannot be blank');
    }
    else{
        setSuccess(password);
    }

    
}
 
function myfunction(){
    const x=document.getElementById("password");
    if(x.type==='password'){
        x.type="text";
    }
    else{
        x.type="password";
    }
    
    
}

    function setError(input, message){
        const inputfield = input.parentElement;
        const small = inputfield.querySelector('small');
        inputfield.className = 'inputfield error';
        small.innerText = message;
    }
    function setSuccess(input){
       const inputfield=input.parentElement;
       inputfield.className='inputfield success';

    }


