
// for mainpage button

const button = document.querySelector(".circle") ;

// for content page backgroundColor change 

const content = document.querySelector(".qc") ;

// for mainpage button's cicle color change

const circle = document.querySelector(".circle") ;

//for conatent page's content 
const quran = document.querySelector(".qc") ;
const sunnah = document.querySelector(".sc") ;

// for body color
const color = document.querySelector("body") ;


var positionchanged = false ;

var screenWidth = window.innerWidth ;
function buttonfunction(){
    if(positionchanged){
        if(screenWidth <= 428) {
            button.style.left = "4.5vw" ;
        }else if(screenWidth >= 428  && screenWidth > 500 && screenWidth <= 700){
            button.style.left = "3.5vw" ;
        }else if(screenWidth > 428 && screenWidth <= 500){
            button.style.left = "4.5vw" ;
        }
        else if(screenWidth >= 428  && screenWidth > 500 && screenWidth >= 700 && screenWidth <=800 ){
            button.style.left = "4vw" ;
        }
        else if(screenWidth >= 428  && screenWidth > 500 && screenWidth >= 700 && screenWidth >=800 && screenWidth <=900){
            button.style.left = "2.5vw" ;
        }else if(screenWidth >= 428  && screenWidth > 500 && screenWidth >= 700 && screenWidth >=800 && screenWidth >=900 && screenWidth <= 1300){
            button.style.left = "8vw" ;
        }
        else{
            button.style.left = "1.5vw" ;
        }
        // content.style.backgroundColor = "#41766f" ; (didn't continue to use cuz the same property 
        //worked the way)
        /*here both the values for left and backgroundColor property are enclosed in quotes to make 
        sure that they are treated as strings, which is neccesary . 
        backgroundColor -- > "C" for backgroundColor must be capital otherwise it will be counted 
        as syntax error. */
        color.style.backgroundColor = "#b8dad9"
        quran.style.visibility = "visible" ;
        quran.style.display = "block" ;
        sunnah.style.display = "none" ;
        sunnah.style.visibility = "hidden" ;
        circle.style.backgroundColor = "#b8dad9" ;
        positionchanged = false ;
    }
    else{
        if(screenWidth <= 428){
            button.style.left = "27.5vw" ;
        }
        else if(screenWidth > 428  && screenWidth > 500 && screenWidth <= 700){
            button.style.left = "18.5vw" ;
        }else if(screenWidth > 428 && screenWidth <= 500){
            button.style.left = "22vw" ;
        }else if(screenWidth >= 428  && screenWidth > 500 && screenWidth >= 700 && screenWidth <=800 ){
            button.style.left = "15.5vw" ;
        }
        else if(screenWidth >= 428  && screenWidth > 500 && screenWidth >= 700 && screenWidth >=800 && screenWidth <=900){
            button.style.left = "11.5vw" ;
        }
        else if(screenWidth >= 428  && screenWidth > 500 && screenWidth >= 700 && screenWidth >=800 && screenWidth >=900 && screenWidth <= 1300){
            button.style.left = "11.5vw" ;
        }
        else{
            button.style.left = "12.5vw" ;
        }
        color.style.backgroundColor = "#ffd3d6" ;
        circle.style.backgroundColor = "#ffd3d6" ;
        quran.style.display = "none" ;
        quran.style.visibility = "hidden" ;
        sunnah.style.visibility = "visible" ;
        sunnah.style.display = "block" ;
        positionchanged = true ;
    }

}

button.addEventListener("click" , buttonfunction) ;
button.addEventListener("tap" , buttonfunction) ;



const list = document.querySelector(".qc .contents span") ;  // .contents span
const index = document.querySelector(".qc .contents .list");
var spantapped = false ;

function indexhide(){
    if(spantapped){
        index.style.display = "none" ;
        spantapped = false ;
    }
    else{
        index.style.display = "grid" ;
        spantapped = true ;
    }
}

list.addEventListener("click" , indexhide);
list.addEventListener("tap" , indexhide);

// for scrolling quranic chapters' portion smoothly

document.querySelectorAll('.scroll').forEach(anchor => {
    anchor.addEventListener('click' , function (e){
        e.preventDefault();
//  this prevents the default behavior of the click action
        const target = document.querySelector(this.getAttribute('href')) ;
    //   this above line of code will collect the value of href attribute of the link on which the client
    //   clicked and will down that spectific value holder element
        target.scrollIntoView({
            behavior : 'smooth' 
        });
        // console.log('working!??') ;
        // this funciton is a built-in function used to scroll the page, and the behavior property will
        // make the page scoll smoothly 
    });
});

