function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}

var typed = new Typed('.element',{
    strings: ['B.Tech CSE Student','Software Engineer','Aspiring Data Scientist'],
    typeSpeed: 50,
    backSpeed: 20,
    loop: true,
    showCursor: false
});
