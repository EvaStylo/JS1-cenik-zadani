// Obor platnosti proměnných

const selectPlan = (planNumber)  =>  {

    planOne = document.getElementById("plan1");

    planTwo = document.getElementById("plan2");

    planThree = document.getElementById("plan3");


    planNumber = prompt("Zadej číslo plánu")

    while (planNumber !== "1" && planNumber !== "2" && planNumber !== "3"){
        alert("Zmáčkni 1 pro základní, 2 pro rozšířený, nebo 3 pro maxi")
        planNumber = prompt("Zadej číslo plánu")
    }

    if (planNumber === "1") {
        planOne.classList.add("plan--selected");
        planTwo.classList.remove("plan--selected");
        planThree.classList.remove("plan--selected");
    } 

    if (planNumber === "2") {
        planOne.classList.remove("plan--selected");
        planTwo.classList.add("plan--selected");
        planThree.classList.remove("plan--selected");
    } 

    if (planNumber === "3") {
        planOne.classList.remove("plan--selected");
        planTwo.classList.remove("plan--selected");
        planThree.classList.add("plan--selected");
    } 

}