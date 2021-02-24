//test js connect with html file
//console.log("seccess")
/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const listSections=document.querySelectorAll("section");
//const listSections=Array.from(document.querySelectorAll("section"));
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * create clean active class
 * create nav bar fun ,don't forget call it
 * Begin Main Functions
 * 
*/
//clear activ class dection before add new class to selected item
function clearactivesection()
{
    /*listSections.forEach(element=> {
        element.classList.remove("your-active-class");
    })*/
    for(section of listSections)
    {
        section.classList.remove("your-active-class");
    }
}
//function use getBoundingClientRect rect to get position
function getrect(elemsec)
{
        const secposition =elemsec.getBoundingClientRect();
        return (secposition.top);//&&secposition.top >=200
}
//active viewport function
function  activeviewport ()
{//change landing--container to section
    //const activediv=document.getElementsByTagName("section")
        //if statement to get the Active class
        listSections.forEach(element=>
        {
            if(getrect(element) >0 && getrect(element) <200)
            {
                clearactivesection();
                element.classList.add("your-active-class");
            }
        })


}
//function create nav items
function createnavitems()
{
    const virtualpage = document.createDocumentFragment();
    listSections.forEach(element=>{
        const listitems=document.createElement("li");
        const linkitems=document.createElement("a");
        linkitems.textContent=element.getAttribute("data-nav");
        linkitems.classname="menu__link";
        //click section on nav to scroll down to it
        linkitems.addEventListener('click', function  (preventlinkclick) {
            preventlinkclick.preventDefault()
            element.scrollIntoView(true);
             activeviewport()
        });
        listitems.appendChild(linkitems);
        virtualpage.appendChild(listitems);
    })
    // Build menu
    document.querySelector("#navbar__list").appendChild(virtualpage)
}


// build the nav
//build nav dynamically
createnavitems();//call nav function


// Add class 'active' to section when near top of viewport
// Scroll to anchor ID using scrollTO event
// Set sections as active
activeviewport();

/**
 * End Main Functions
 * Begin Events
 * 
*/
//start Events
 //scroll event
//i am use cee property to make scroll smooth i don't need to add there too
document.addEventListener("scroll", activeviewport)
/*
//create nav event click,us udacity tips
const linkitems=document.querySelectorAll("a");
linkitems.forEach(element=>
{
    element.addEventListener("click", function () {
         activeviewport();
    })
})*/
//edit css style to be flex nav menu (container no element)

//crate event to button to go top page
//event when click button
const buttonevent=document.getElementById("button")
buttonevent.addEventListener("click", function() {
    // document.scrollTop(0);
    document.documentElement.scrollTop = 0;
})
//event when scroll page
buttonevent.addEventListener("scroll", function() {
 if(document.documentElement.scrollTop > 20)
 {
     buttonevent.style.display="block";
 }
 else
     buttonevent.style.display="none";
})

//end code here
//thanks you for review

