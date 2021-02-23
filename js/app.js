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
function clearactivesection()
{
    listSections.forEach(element=> {
        element.classList.remove("your-active-class");
    })
}
//activ viewport function
function  activeviewport ()
{//change landing--container to section
    //const activediv=document.getElementsByTagName("section")
    listSections.forEach(element=>{
        const rectactive =element.getBoundingClientRect()
        //if statement to get the Active class
        if(rectactive.top>0 && rectactive.top<200)
        {
            clearactivesection();
            element.classList.add("your-active-class");
            //add activ link class to each link so when
            // const linkcontent =document.querySelectorAll("a");
            // linkcontent.forEach(element=>{
            //     element.classList.add("your-active-class");
            // })
        }

    })

}
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
    //click section on nav to scroll down to it
    linkitems.addEventListener('click', function () {
        element.scrollIntoView(true);
        activeviewport()
    });
    listitems.appendChild(linkitems);
    virtualpage.appendChild(listitems);
})
document.querySelector("#navbar__list").appendChild(virtualpage)
        //Add EventListener to the links and use scrollIntoView().
       /* const linkevent =document.querySelectorAll("a");
        linkevent.forEach(element=>
        {
            element.addEventListener('scroll', function () {
                console.log('The nav section was scroll!');
                element.scrollIntoView();
            })
        })*/

// Add class 'active' to section when near top of viewport
activeviewport();



// Scroll to anchor ID using scrollTO event

//scroll page event
 document.addEventListener(scroll,function ()
 {
     clearactivesection();
     activeviewport();
 })

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


//end code here
//thank you for review

