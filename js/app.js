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
function clearactivesection()
{
    listSections.forEach(element=> {
        element.classList.remove("your-active-class");
    })
}
//function use getboundingclint rect
function getrect(elemsec)
{
        const secposition =elemsec.getBoundingClientRect();
        return (secposition.top);//&&secposition.top >=200
}
//activ viewport function
function  activeviewport ()
{//change landing--container to section
    //const activediv=document.getElementsByTagName("section")
        //if statement to get the Active class
        listSections.forEach(element=>
        {
            /*if(getrect(element))
            {
                //element.classList.toggle("your-active-class")
               // const elementcontain=
                if(!element.classList.contains("your-active-class"))
                {
                    element.classList.add("your-active-class");
                }
            }*/

            if(getrect(element) >0 && getrect(element) <200)
            {
                clearactivesection();
                element.classList.add("your-active-class");

            }
            /*else {
                element.classList.remove("your-active-class")
            }*/
        })
/*        if(rectactive.top>0 && rectactive.top<200)
        {
            //clearactivesection();
            element.classList.add("your-active-class");
            /!*!//add activ link class to each link so when
            const linkcontent =document.querySelectorAll("a");
            linkcontent.forEach(element=>{
                element.classList.add("your-active-class");
            })*!/
        }*/

}
//function create nav items
function createnavitems()
{
    const virtualpage = document.createDocumentFragment();
// const listSections=document.querySelectorAll("section");
    listSections.forEach(element=>{
        const section_id=element.getAttribute("id");
        const section_name =element.getAttribute("data-nav");
        const listitems=document.createElement("li");
        listitems.innerHTML=`<a class=menu__link href=#${section_id}>${section_name}</a> `
         // const linkitems=element.querySelectorAll("a");
        // linkitems.textContent=element.getAttribute("data-nav");

         //click section on nav to scroll down to it
         /*linkitems.addEventListener('click', function () {
             /!*element.scrollIntoView({
                 behavior: 'smooth'})*!/
             activeviewport();
         });*/
         //listitems.appendChild(linkitems);
        virtualpage.appendChild(listitems);
    })
    document.querySelector("#navbar__list").appendChild(virtualpage)
}

/*//function but in event lestener scroll
function scrollfunction()
{

}*/
// build the nav
    //build nav dynamically

//call fun

//call create nav items
createnavitems();



// Add class 'active' to section when near top of viewport
//activeviewport();



// Scroll to anchor ID using scrollTO event

//scroll page event
//  document.addEventListener(scroll,function ()
//  {
//      clearactivesection();
//      activeviewport();
//  })

/**
 * End Main Functions
 * Begin Events
 * 
*/
//scroll event
document.addEventListener("scroll", activeviewport)

// Build menu 

// Scroll to section on link click

// Set sections as active

//code Archive
/*
*
//build nav dynamically
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
*
// Scroll to anchor ID using scrollTO event

//scroll page event
//  document.addEventListener(scroll,function ()
//  {
//      clearactivesection();
//      activeviewport();
//  })

*         //Add EventListener to the links and use scrollIntoView().
       /* const linkevent =document.querySelectorAll("a");
        linkevent.forEach(element=>
        {
            element.addEventListener('scroll', function () {
                console.log('The nav section was scroll!');
                element.scrollIntoView();
            })
        })
 */
//end code here
//thanks you for review

