const yesBtn = document.querySelector(".yesBtn");
const noBtn = document.querySelector(".noBtn");
const text = document.querySelector(".text");
const img = document.querySelector(".mainImg");

const noBtnContent = ["Are you sure?", "Really sure?", "Last Chance!",
                       "Think again", "Surely Not?", "You might regret it!", "This could be mistake",
                       "Have a heart", "Don't be cold", "Think again ;(", "Are you really really sure?"];

  
let flag = 0; 
let i = 0;
let initalPadding = 10;
let marginRightInc = 10;
let fontSizeInc = 18;

yesBtn.addEventListener("click", ()=>{
    noBtn.style.display = "none";
    yesBtn.style.display = "none";
    text.innerHTML = "Oh yes, Let's meet!!";
    text.style.fontSize = "55px";
    img.src = "./cat3.gif";
})

noBtn.addEventListener("click", (e)=>{
    if(i >= noBtnContent.length){
        noBtn.innerHTML = "Fine then :(";
    }
    else{
        noBtn.innerHTML = noBtnContent[i++];
        if(i%3 == 0){
            img.src = "./cat2.gif"
        }
        else{
            img.src = "./cat1.gif"
        }
        yesBtn.style.padding = `${initalPadding += 8}px`;
        yesBtn.style.marginRight = `${marginRightInc += 2}px`;
        yesBtn.style.fontSize = `${fontSizeInc += 6}px`
    }
})
