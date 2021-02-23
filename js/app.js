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
// Scroll to anchor ID using scrollTO event
// Set sections as active
activeviewport();







/**
 * End Main Functions
 * Begin Events
 * 
*/
//scroll event
document.addEventListener("scroll", activeviewport)

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
            }

if(getrect(element) >0 && getrect(element) <200)
{
    clearactivesection();
    element.classList.add("your-active-class");

}

})
  //function but in event lestener scroll
function scrollfunction()
{

}
 */
//end code here
//thanks you for review

