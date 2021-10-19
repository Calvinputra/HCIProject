const kawasako = $("#hide");
const kawasako1 = $(".kawasako");
const vixian = $("#tmblvixian");
const vixian1 = $(".Vixian");
const tombolreserve = $(".tmblreserve");
const form = $(".reserveclick");
const textK = $(".textkawasako");
const textV =$(".textvixian");

kawasako.click(() =>{
    textK.slideToggle("slow");
    kawasako1.slideToggle(1000);
});

vixian.click(() =>{
   
           textV.slideToggle("slow");
             vixian1.slideToggle(1000);
});

tombolreserve.click(()=>{
    form.slideToggle("slow");
});

const left = $(".prevbtn");
const right = $(".nextbtn");
const images = $(".imgslid");
const firstimage = images.first();
let position = 0;


left.click(() => {
    position--;

    if(position < 0)
    {
        position = images.length -1;
    }

    updateSlider();
});

right.click(() => {
    position++;

    if(position >= images.length)
    {
        position = 0;
    }
    updateSlider();
});
    
function updateSlider()
{
    firstimage.animate({
        marginLeft: position* firstimage.width() * -1
        });
}

