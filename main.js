
//  initialize the count
// /listen for click on the increment button

// increment the count variable when the butten is clicked

// change the count-p in the HTML


// function count(){
//     console.log("the button is clecked")
// }


// function countdown(){
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
//     console.log("Go")
// }
// countdown()

// function myFun(){
//     console.log(42)
// }
// myFun()


/*



*/

// challege
 
// let lap1 = 43
// let lap2 = 23
// let lap3 = 33

// function myFun(){
//     let total = lap1 + lap2 + lap3

//     console.log(lap1 + lap2 + lap3)
//     console.log(total)
// }

// myFun()

let lapComplete = 0


function myFun(){

    lapComplete = lapComplete + 1

  a = 0

  a += lapComplete

    document.getElementById("count-p").innerHTML = a
}

// myFun()


function myFunClear(){

 lapComplete = 0
 alert("You AreAbout To Reset")
 document.getElementById("count-p").innerHTML = 0

}

function save(){
  document.getElementById("log").innerHTML = a + "<br>"+ "Total Number Of passengers"
}

function clearlog(){
  document.getElementById("log").innerHTML = null
}






// console.log(lapComplete)