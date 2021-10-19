function validate()
{
    var name =
     document.forms["form"]["name"]
    var phone =
     document.forms["form"]["phone"]
     var email =
     document.forms["form"]["email"]
     var message =
     document.forms["form"]["message"]
 
     if(name.value == "")
     {
         alert("Please Enter Your Name !");
         name.focus();
         return false;
     }

     if(phone.value == "")
     {
         alert("Please Enter Your Phone !");
         phone.focus();
         return false;
     }
     if(email.value == "")
     {
         alert("Please Enter Your Email !");
         email.focus();
         return false;
     }
     if(message.value == "")
     {
         alert("Please Enter Your Message !");
         message.focus();
         return false;
     }

     else{
        alert("Your Message has been sent !");
         return true;
     }
} 