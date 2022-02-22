window.addEventListener('DOMContentLoaded', showTime());


function showTime(){
    // Display Time
    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    document.getElementById("DisplayClock").innerHTML = `${h}:${m}.<small>${s}</small>`;
    setTimeout(showTime, 1000);

    // Change body background

    let bg;

    const userName = "Florian";
    const user = document.getElementById("User");

    if (h < 8){
        bg = `url(https://source.unsplash.com/G_a9JhmiZFk)`;
        user.innerHTML= `Good morning ${userName}`;
    }else if (h < 11){
        bg = `url(https://source.unsplash.com/XGzW_tr_8YI)`;
        user.innerHTML = `Good day ${userName}`;
    }else if (h < 20){
        bg = `url(https://source.unsplash.com/Cjz1UAz8VBs)`;
        user.innerHTML = `Good afternoon ${userName}`;
    }else{
        bg = `url(https://source.unsplash.com/ln5drpv_ImI)`;
        user.innerHTML = `Good night ${userName}`
    }

    document.querySelector("body").style.background = `${bg} center/cover`;

}

document.querySelector(".focus-container input").addEventListener("keypress", function(event){
    if (event.key==="Enter"){
        const focus = document.querySelector(".focus-container input");
        document.querySelector(".focus-container").innerHTML=`<h6>TODAY: </h6><h1>${focus.value}</h1>`;
    }
})