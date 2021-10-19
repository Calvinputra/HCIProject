
const left = $("#prevbtn");
const right = $("#nextbtn");
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