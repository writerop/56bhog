const present=document.getElementById("present");
const options={
    colors:[
    "#34d963",
    "#068c2c",
    "#ff5757",
    "#8c1414",
    "#d9d74a",
    "#1e91d9",
    "#1b608c",
    ],
};

present.addEventListener("mouseenter", ()=>{
    confetti(options);
});

present.addEventListener("touchstart", ()=>{
    confetti(options);
});