const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list .nav-ul');
const menuItem = document.querySelectorAll('.menu-item');
const megaMenu = document.querySelector('.mega-menu')
const header = document.querySelector('#header')
const headerClass = document.getElementsByClassName('.header')
const aboutColLeft = document.querySelector('.about .about-content .col-left');
const counters = document.querySelectorAll('.counter');
const speed = 100;
// NAV BAR
/*for(var i= 0;i<menuItem.length;i++){
    menuItem[i].addEventListener('mouseover',()=>{
        console.log('hey')
        header.style.backgroundColor = "#282828";
    })
    menuItem[i].addEventListener('mouseout',()=>{
        console.log('hello')
        header.style.backgroundColor = 'transparent';
    })
    //megamenu
    megaMenu.addEventListener('mouseover',()=>{
        header.style.backgroundColor = "#282828";
    })
    megaMenu.addEventListener('mouseout',()=>{
        header.style.backgroundColor = 'transparent';
    })
}*/
document.addEventListener('scroll',()=>{
    var scroll_y = window.scrollY;
    if(scroll_y>250){
        headerClass.style.backgroundColor = "#29323c";
    }else{
        headerClass.style.backgroundColor = "transparent";
    }
});
// OUR WORKS
function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("our-works-link-content");
    
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("our-works-link-tab");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
      tablinks[i].style.borderBottom = ".5px solid white";
    }
    document.getElementById(pageName).style.display = "grid";
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
  
// Hamburger 
hamburger.addEventListener('click',()=>{
    console.log('heey')
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');

});
// navbar mov
document.addEventListener('scroll',()=>{
    // var scrollY = window.scrollY;
    // if(scroll<100){
        header.style.display = "none";
    // }else{
        // header.style.display = "flex";
    // }
});
// COUNTERS

    counters.forEach(counter=>{
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;
    
            if (count < target) {
                counter.innerText = count + inc;
                setTimeout(updateCount,1)
            }else{
                count.innerText = target;
            }
        }
        updateCount();
    
 }) 



// counters.forEach(counter=>{
//             const updateCount = () => {
//                 const target = +counter.getAttribute('data-target');
//                 const count = +counter.innerText;
//                 const inc = target / speed;
        
//                 if (count < target) {
//                     counter.innerText = count + inc;
//                     setTimeout(updateCount,1)
//                 }else{
//                     count.innerText = target;
//                 }
//             }
//             updateCount();
        
// }) 