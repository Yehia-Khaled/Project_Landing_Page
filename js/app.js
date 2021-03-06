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
//function use getBoundingClientRect rect to get position
function getrect(elemsec)
{
        const secposition =elemsec.getBoundingClientRect();
        return (secposition.top); 
}
//active viewport function
function  activeviewport ()
{
        //if statement true get the Active class
        listSections.forEach(element=> {
            if (getrect(element) > -200 && getrect(element) < 200)
                element.classList.add("your-active-class");
            else//remove active class
                element.classList.remove("your-active-class");
        })
}
//function create nav items
function createnavitems()
{
    const virtualpage = document.createDocumentFragment();
    listSections.forEach(element=>{
        /*add nav bar menu link*/
        const section_id=element.getAttribute("id");
        const section_name =element.getAttribute("data-nav");
        const listitems=document.createElement("li");
        // Scroll to section on link click
        listitems.innerHTML=`<a class=menu__link href=#${section_id}>${section_name}</a> `

        virtualpage.appendChild(listitems);
    })
    // Build menu
    document.querySelector("#navbar__list").appendChild(virtualpage)
}


// build the nav
//build nav dynamically
createnavitems();//call nav function


// Add class 'active' to section when near top of viewport
// Set sections as active
activeviewport();

/**
 * End Main Functions
 * Begin Events
 * 
*/
//start Events
// Scroll to anchor ID using scrollTO event
//scroll event
//i am use cee property to make scroll smooth i don't need to add there too
document.addEventListener("scroll", activeviewport)

//event too click on secton link go to correct section
//i have a proplem with section 1 when i click on it go to section 1 but make  section 2 activ class not section 1
//can you help me know where the problem ,i tried so much and many code but the problem stal consist
const linksection=document.querySelectorAll('a');
linksection.forEach(element=>
{
    element.addEventListener('click', function  (preventlinkclick) {
        preventlinkclick.preventDefault()
        //you need to make code when click on each link go to approperate section ,make comparison between data nav to go there
        //element.scrollIntoView(true);
        const getdatanavlinkcontent =element.textContent;
        listSections.forEach(element=>{
            //get datanav to combare it with datanav of section
            const datanavcontent =element.getAttribute("data-nav");
            //compare data nav
            if(datanavcontent===getdatanavlinkcontent)
            {element.scrollIntoView({behavior:"smooth"});
            activeviewport()}
        })
    });
})


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
//thanks for review

