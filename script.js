const score_txt = document.getElementById("score_text");
const time_text = document.getElementById("time_in_seconds");
const speed_text = document.getElementById("speed_count");
const reset_but = document.getElementById("reset_but");
const status_but = document.getElementById("status1");
const box = document.getElementById("box");
const height = document.getElementById("play_board").clientHeight - 60; //trying to get exact height and width of div
const width = document.getElementById("play_board").offsetWidth - 90;
const u_input = document.getElementById("user_input");
var pos_left = 0;
var pos_top = 0;
//The speed the box moves randomly 
var random_number = (Math.random().toFixed(1) * 100).toFixed(0);
let running = true;
let set_interval;
let set_interval2;
let score = 0;
let timer = 0
var x = 1;
var y = 2;


alert("NOTE: The higher the speed the slower the box moves");
alert("Guess number of times box will bounce, game lasts for ONLY 60SECS ");
alert("Good luck!");
display_game();



function display_game() {
    box.style.left = 0 + "px";
    box.style.top = 0 + "px";
    speed_text.textContent = random_number;
}

function check_game_start() {
    if (u_input.value.length <= 0) {
        alert("Guess a Number");
    }
    else {
        running = true;
        u_input.textContent = u_input.value;
        u_input.value = null;
        set_interval = setInterval(time, 1000);
        set_interval2 = setInterval(move_box, random_number);
    }

}


function move_box() {
    box.style.left = pos_left + "px";
    box.style.top = pos_top + "px";
    if ((pos_left + x) >= width || (pos_left + x) <= 0) {
        x = -x;
    }

    if ((pos_top + y) >= height || (pos_top + y) <= 0) {
        y = -y;
    }

    pos_left += x;
    pos_top += y;
    //checking if it hits the border on all four sides
    if ((pos_left + x) == width || (pos_left + x) == 0 || (pos_top + y) == 0 || (pos_top + y) == height) {
        score++;
        score_txt.textContent = score;
    }


}

function time() {
    timer++;
    time_text.textContent = timer;
    if (time_text.textContent == "60") {
        clearInterval(set_interval);
        clearInterval(set_interval2);
        display_game_over();
    }
}


function display_game_over() {
    if (u_input.textContent == score) {
        status_but.innerHTML = "WOW!! great guess";
    }
    else if (u_input.textContent < (score - 10)) {
        status_but.innerHTML = "That was so close";
    }
    else if (u_input.textContent > (score + 10)) {
        status_but.innerHTML = "So close but too high";
    }
    else if (u_input.textContent < (score - 20)) {
        status_but.innerHTML = "A good try";
    }
    else if (u_input.textContent > (score + 20)) {
        status_but.innerHTML = "good try, too high";
    }
    else if (isNaN(u_input.textContent)) {
        status_but.innerHTML = "Not a number";
    }
    else {
        status_but.innerHTML = "OOPS! bad guess";
    }
    setTimeout(clear_board, 10000);

}



function reset_game() {
    location.reload();

}



function clear_board() {
    alert("Double-click the RESET BUTTON to play again");
    running = false;
    score_txt.textContent = 0;
    time_text.textContent = 0;
    status_but.innerHTML = "Guessing Time!";
    speed_text.textContent = random_number;
}









//reset_but.addEventListener("click", reset_game);
