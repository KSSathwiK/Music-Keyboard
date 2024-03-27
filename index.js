// detecting button press
var numberOfTimes = document.querySelectorAll(".key").length;

for(var i = 0; i < numberOfTimes; i++){
    document.querySelectorAll(".key")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}


// detecting keyboard press
document.addEventListener("keypress", function(event){
    makeSound(event.key);

    buttonAnimation(event.key);
});


function makeSound(key){
    switch(key){
        case "1":
            var s1 = new Audio("sounds/key01.mp3");
            s1.play();
            break;
        case "2":
            var s2 = new Audio("sounds/key02.mp3");
            s2.play();
            break;
        case "3":
            var s3 = new Audio("sounds/key03.mp3");
            s3.play();
            break;
        case "4":
            var s4 = new Audio("sounds/key04.mp3");
            s4.play();
            break;
        case "5":
            var s5 = new Audio("sounds/key05.mp3");
            s5.play();
            break;
        case "6":
            var s6 = new Audio("sounds/key06.mp3");
            s6.play();
            break;
        case "7":
            var s7 = new Audio("sounds/key07.mp3");
            s7.play();
            break;
        case "8":
            var s8 = new Audio("sounds/key08.mp3");
            s8.play();
            break;
        case "9":
            var s9 = new Audio("sounds/key09.mp3");
            s9.play();
            break;
        case "10":
            var s10 = new Audio("sounds/key10.mp3");
            s10.play();
            break;
        case "11":
            var s11 = new Audio("sounds/key11.mp3");
            s11.play();
            break;
        case "12":
            var s12 = new Audio("sounds/key12.mp3");
            s12.play();
            break;
        case "13":
            var s13 = new Audio("sounds/key13.mp3");
            s13.play();
            break;
        case "14":
            var s14 = new Audio("sounds/key14.mp3");
            s14.play();
            break;
        case "15":
            var s15 = new Audio("sounds/key15.mp3");
            s15.play();
            break;
        case "16":
            var s16 = new Audio("sounds/key16.mp3");
            s16.play();
            break;
        case "17":
            var s17 = new Audio("sounds/key17.mp3");
            s17.play();
            break;
        case "18":
            var s18 = new Audio("sounds/key18.mp3");
            s18.play();
            break;
        case "19":
            var s19 = new Audio("sounds/key19.mp3");
            s19.play();
            break;
        case "20":
            var s20 = new Audio("sounds/key20.mp3");
            s20.play();
            break;
        case "21":
            var s21 = new Audio("sounds/key21.mp3");
            s21.play();
            break;
        case "22":
            var s22 = new Audio("sounds/key22.mp3");
            s22.play();
            break;
        case "23":
            var s23 = new Audio("sounds/key23.mp3");
            s23.play();
            break;
        case "24":
            var s24 = new Audio("sounds/key24.mp3");
            s24.play();
            break;
        default: console.log("buttonInnerHTML");
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector(".a"+currentKey);
    activeButton.classList.add("pressed");
    
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);

}