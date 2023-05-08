const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY >0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

// window.onscroll = () => {
// 	menu.classList.remove('bx-x');
// 	navbar.classList.remove('active');
// };

const sr = ScrollReveal ({
	distance: '25px',
	duration: 2500,
	reset: true
})

sr.reveal('.home-text',{delay:190, origin:'bottom'})

sr.reveal('.about,.services,.portfolio,.contact',{delay:200, origin:'bottom'})

// let button = document.querySelector("#download");
// button.addEventListener("click",()=>{
// 	alert("Downloded Successfully");
// 	const span = document.querySelector("")
// })

let resumeSec = document.querySelectorAll(".drive")
resumeSec.forEach((el)=> el.addEventListener("click",()=>{
    window.open(
        'https://drive.google.com/file/d/1gRGPY--iLNKflls24xzLRTAQ8Yfm7aIA/view?usp=share_link',
        '_blank'
      );
})) 


let resumed = document.querySelectorAll(".btn")
resumed.forEach((el)=> el.addEventListener("click",()=>{
    window.open(
        'https://drive.google.com/file/d/1gRGPY--iLNKflls24xzLRTAQ8Yfm7aIA/view?usp=share_link',
        '_blank'
      );
})) 
