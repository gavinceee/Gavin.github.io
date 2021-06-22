var form = document.querySelector('#a');
form.Fact1.addEventListener("click", display1);
function display1(){
    document.querySelector('#b').innerHTML = "<img src='images/moon.jpg' alt='animated poodle gif'><p>The moon has moonquakes.</p>";
}

form.Fact2.addEventListener("click", display2);
function display2(){
    document.querySelector('#b').innerHTML = "Goosebumps are meant to ward off predators.";
}

form.Fact3.addEventListener("click", display3);
function display3(){
    document.querySelector('#b').innerHTML = "The first person convicted of speeding was going eight mph.";
}

form.Fact4.addEventListener("click", display4);
function display4(){
    document.querySelector('#b').innerHTML = "Humans are the only animals that blush.";
}

form.Fact5.addEventListener("click", display5);
function display5(){
    document.querySelector('#b').innerHTML = "The feeling of getting lost inside a mall is known as the Gruen transfer.";
}