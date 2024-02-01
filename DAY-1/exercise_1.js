const show=document.getElementById('show')
const add=document.getElementById("add")
const add2=document.getElementById("addTwo")
const add3=document.getElementById("addThree")
const reset=document.getElementById("reset")

let cartvalue=0;

// ! CREATING THE RESPECTIVE FUNCTIONS 


const toShow = () =>
{
    console.log(cartvalue);
}

const toAdd = () =>
{
    cartvalue+=1
    alert("item added to cart")
}
const toAddTwo = () =>
{
    cartvalue+=2
    alert("2 items added to cart")

}
const toAddThree = () =>
{
    cartvalue+=3
    alert("3 items added to cart")

}
const toReset = () =>
{
    cartvalue=0;
    alert("cart is empty");
}

// ! aading the event listner

show.addEventListener("click",toShow);
add.addEventListener("click",toAdd);
add2.addEventListener("click",toAddTwo);
add3.addEventListener("click",toAddThree);
reset.addEventListener("click",toReset);


