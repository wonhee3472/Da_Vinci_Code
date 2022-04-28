function check() {
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question3.value;
    var question5 = document.quiz.question3.value;

    var correct = 0;

    if (question1 == 'star') {
        correct++;
    }
    if (question2 == 'star') {
        correct++;
    }
    if (question3 == 'star') {
        correct++;
    }
    if (question4 == 'star') {
        correct++;
    }
    if (question5 == 'star') {
        correct++;
    }

    document.getElementById("after_submit").style.visibility="visible";
    document.getElementById("number_correct").innerHTML = 'You got ' + correct + ' correct.';
}


function myFunction() {
    location.reload();
}