

function submit(){
    e.preventDefault();
    let name = document.getElementById("username").value
    let alert = document.getElementById("alert")

    if(name.length <5 ){
        alert = "Username Must consist of atleast 5 Characters";
    }
    return false;
    }

    function agree() {
        document.getElementById("Submit").disabled = true;
       }
      
        function activateButton(element) {
      
            if(element.checked) {
              document.getElementById("Submit").disabled = false;
             }
             else  {
              document.getElementById("Submit").disabled = true;
            }      
        }


function validate(event){
    event.preventDefault()


    let name = document.getElementById('username').value
    let email = document.getElementById('email').value +""
    let address = document.getElementById('address').value
    let PhoneNumber = document.getElementById('phonenumber').value

    let error = document.getElementById('error')
    error.innerText =''
   
    if(name.length <5 ){
        error.innerText = "Username Must consist of atleast 5 Characters";
        return false;
    }
    else if (PhoneNumber == "") 
    {
        error.innerText = "Phone Number Must be Input"
        return false;
    }
    else if (PhoneNumber.length <10 || PhoneNumber.length >13)
    {
            error.innerText = "Phone Number Must fill >10 & <13 Number"
        
    }
     else if(!address.endsWith(" street")){
        error.innerText ="Address must end with ' street'"
        return false;
    }  
    else if(!email.endsWith('.com') || !email.includes('@')){
        error.innerText="Email must include .com And @"
        return false;
    }

    else {
        
        agree();
        alert("Successfuly Input !")
        return true ;
    }
   
   
}



