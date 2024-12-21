
    function Christmastest() {
        let correctAnswersCount = 0;

        const answer1 = document.querySelector('input[name="pop1"]:checked');
        const answer2 = document.querySelector('input[name="pop2"]:checked');
        const answer3 = document.querySelector('input[name="pop3"]:checked');

        if (answer1 && answer1.value === "yes") {
            correctAnswersCount++;
        }
        if (answer2 && answer2.value === "AC") {
            correctAnswersCount++;
        }
        if (answer3 && answer3.value === "G") {
            correctAnswersCount++;
        }
        
        if (correctAnswersCount === 3) {
            alert("축하합니다! 3개 다 맞췄네요!");
        } else {
            alert(correctAnswersCount + "개 맞췄습니다!");
        }
    }