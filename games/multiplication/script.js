let input = document.getElementById("answerInput");
let button = document.getElementById("button");
let container = document.getElementById("questionContainer");
let nextBtn = document.getElementById("nextBtn");

nextBtn.disabled = true;

function getQuestion() {
    val1 = Math.floor(Math.random() * 5);
    val2 = Math.floor(Math.random() * 10);

    var question = val1.toString() + " × " + val2.toString();
    document.getElementById("question").innerHTML = question.toString();
    console.log("Generated a Question");
    container.style.border = "none";
    button.disabled = false;
    input.disabled = false;
    nextBtn.disabled = true;
    input.value = "";
    if ((val1 * val2) < 0) {
        getQuestion();
    }
}

function submit() {
    console.log("User submitted.")
    
    if(input.value.toString() == val1 * val2) {
        console.log("Correct answer!")
        document.getElementById("question").innerHTML = "Correct!"; 
        input.disabled = true;
        button.disabled = true;
        container.style.border = "6px solid #36F443";
        nextBtn.disabled = false;
    } else {
        console.log(`Incorreect answer.\nThe correct answer is ${(val1 * val2).toString()}\nUser answered ${(input.value).toString()}`)
        document.getElementById("question").innerHTML = `Incorreect.<br>Correct answer: <strong>${(val1 * val2).toString()}</strong>`; 
        input.disabled = true;
        button.disabled = true;
        container.style.border = "6px solid #F44336";
        nextBtn.disabled = false;
    }
}

getQuestion();