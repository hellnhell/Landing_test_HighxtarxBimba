
document.addEventListener("mousemove", (e) => {
    let container = document.querySelector(".container");
    let circle = document.createElement("span");

    circle.style.left = e.clientX + "px";
    circle.style.top = e.clientY + "px";

    let size = Math.random() * 20;
    circle.style.width = 10 + size + "px";
    circle.style.height = 10 + size + "px";
    container.appendChild(circle);
})

document.addEventListener("touchstart", (e) => {
    document.addEventListener("touchmove", (e) => {

        let container = document.querySelector(".container");
        let circle = document.createElement("span");

        circle.style.left = e.touches[0].clientX + "px";
        circle.style.top = e.touches[0].clientY + "px";

        let size = Math.random() * 50;
        circle.style.width = 20 + size + "px";
        circle.style.height = 20 + size + "px";
        container.appendChild(circle);
    })
})


// let index = 0;
// slider();

// function slider(){
//     let slides = document.getElementsByClassName("mySlides");
//     for (let i = 0; i < slides.length; i++){
//         slides[i].style.display = "none";
//     }
//     index++;
//     if (index > slides.length)
//         index = 1;
//     slides[index - 1].style.display = "block";
//     setTimeout(slider, 3000);
// }


