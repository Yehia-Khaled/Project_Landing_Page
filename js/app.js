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
var listSections=document.querySelectorAll("section");

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

// build the nav
    //build nav dynamically
/*
const sections_length= document.querySelectorAll("section").length
const virtualpage = document.createDocumentFragment();
for(let i=1;i<=sections_length;i++)
{
    const list_section = document.createElement('li');
    //list_section.innerHTML = '<a href="#"> Section </a>'+i;
    const newurl=document.createElement('a')
    newurl.textContent="Section "+i;
    //list_section.textContent=newurl.getAttribute('data-nav')
    list_section.appendChild(newurl);
    //list_section.textContent = 'Section ' + i;

    virtualpage.appendChild(list_section);
}
document.querySelector("#navbar__list").appendChild(virtualpage)
*/
//call fun
const virtualpage = document.createDocumentFragment();
// const listSections=document.querySelectorAll("section");
listSections.forEach(element=>{
    const listitems=document.createElement("li");
    const linkitems=document.createElement("a");
    linkitems.textContent=element.getAttribute("data-nav");
    listitems.appendChild(linkitems);
    virtualpage.appendChild(listitems);
})
document.querySelector("#navbar__list").appendChild(virtualpage)
// Add class 'active' to section when near top of viewport
function  activeviewport ()
{//change landing--container to section
    const activediv=document.getElementsByTagName("section")
    const rectactive =activediv.getBoundingClientRect()
    if(rectactive.top>0 && rectactive.top<250)
    {
        // create clear function
        //call clear func
        /*listSections.forEach(element=> {
            document.querySelectorAll("section").classList.remove("your-active-class");


        })*/
        // rectactive.classList.add("your-active-class")
    }
}

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


