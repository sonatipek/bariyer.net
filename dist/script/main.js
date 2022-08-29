// İşveren Button 
const isverenButton = document.querySelector('#isveren-button');
const isverenHover = document.querySelector('.isveren-hover');

// *Events
isverenButton.addEventListener('mouseenter',(e) =>{
    isverenHover.style.display = "inline-block";
    // düzgün calısmıyor
});