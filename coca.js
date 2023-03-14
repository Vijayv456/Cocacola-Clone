const menulist=document.querySelector(".menu-list")
const menubtn=document.getElementById("menu-btn")

menubtn.addEventListener("click",()=>{
    menulist.classList.toggle("menu-list1")
})

const detailsbtn=document.getElementById("details");
const nutritionfactsbtn=document.getElementById("nutrition-facts");
const detailscont=document.getElementById("details-cont");
const nutritionfactscont=document.getElementById("nutrition-facts-cont");

detailsbtn.addEventListener("click",()=>{
    detailscont.classList.toggle("details-cont12")
})
nutritionfactsbtn.addEventListener("click",()=>{
    nutritionfactscont.classList.toggle("nutrition-facts-cont12")
   
})