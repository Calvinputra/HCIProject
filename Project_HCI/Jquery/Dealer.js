// const search = $(".search");
// console.log(search);
// search.click(() => {
//     alert('Waiting');
// });


function validate()
{
    var provinsi =
     document.forms["searchingform"]["Nama Provinsi"]
 
    var city =
     document.forms["searchingform"]["City"]
 
     if(provinsi.value == "")
     {
         alert("Please Enter Your Provinsi !");
         provinsi.focus();
         return false;
     }

     if(city.value == "")
     {
         alert("Please Enter Your City !");
         city.focus();
         return false;
     }

     else{
        alert("Finding Nearest Dealer !");
         return true;
     }
} 