const button=document.getElementById("button");
button.addEventListener("click",function(){
    const heading=document.getElementById("heading");
    heading.textContent="Changed Heading";
    heading.style.color="red";
});