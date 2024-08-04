let images=document.querySelector(".images");
let backButton=document.querySelector(".previous");
let nextButton=document.querySelector(".next");

const imgArr=["image1.jpg", "image2.png", "image3.webp", "image4.jpg"];
let count=0;


nextButton.addEventListener("click",()=>{
    count++;
    if (count>=imgArr.length) {
      count = 0;
    }
    image.src = imgArr[count];
  
});

backButton.addEventListener("click",()=>{
    count--;
    if (count< 0) {
      count = imgArr.length - 1;
    }
    image.src = imgArr[count];
  
});