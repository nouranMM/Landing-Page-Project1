/* 
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
let ulList = document.querySelector("#navbar__list");
let allSections = document.querySelectorAll("main section");
/**
 * End Global Variables
 * 
*/

/**
 * Begin Main Functions
 * 
*/

// Build menu 
allSections.forEach(function (sec) {

    let liList = document.createElement("li");
    let sectionLink = document.createElement("A");
    sectionLink.className = "menu__link";
    sectionLink.setAttribute('id', 'anchor' + sec.getAttribute('id'));

    // Scroll to section on link click
    sectionLink.addEventListener('click', function (evt) {
        evt.stopPropagation();
        evt.preventDefault();
        sec.scrollIntoView({behavior:"smooth"});
    });

    sectionLink.innerHTML = sec.getAttribute('data-nav');
    sectionLink.setAttribute("href", "#");

    // build the nav
    liList.appendChild(sectionLink);
    ulList.appendChild(liList);

  
});

// Scroll to anchor ID using scrollTO event
window.addEventListener('scroll', function (evt) {

    allSections.forEach(function (secelement) {
        let sectionAnchor = document.querySelectorAll('#navbar__list A');

        let y = secelement.getBoundingClientRect().y;
        let h = secelement.getBoundingClientRect().height;

        if (y <= 150) {


            // Add class 'active' to section when near top of viewport

            sectionAnchor.forEach(function (anchorHover) {
                anchorHover.setAttribute('class', 'menu__link');
            });

            allSections.forEach(function (deActiveSec) {
                deActiveSec.setAttribute('class', "");
            });

            // Set sections as active
            secelement.setAttribute('class', 'your-active-class');

            let secanchor = document.querySelector('#anchor' + secelement.getAttribute("id"));
            secanchor.setAttribute("class", "menu__link active");
        }
    });

});

//Responsive Navbar


window.addEventListener('click',function ()
{
    if(ulList.className ==="responsiveMenu" )
    {
        ulList.className="";
    }
    else
    {
        ulList.className ="responsiveMenu";

    }

});

/**
 * 
 * 
 * End Main Functions
*/