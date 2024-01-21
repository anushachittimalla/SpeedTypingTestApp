let speedTypingTestEl = document.getElementById("speedTypingTest");
let timerEl = document.getElementById("timer");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let quoteInputEl = document.getElementById("quoteInput");
let resultEl = document.getElementById("result");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let spinnerEl = document.getElementById("spinner");
let seconds = 0;
let timerId;




function getSearchResults(event) {
    spinnerEl.classList.remove("d-none");
    let url = "https://apis.ccbp.in/random-quote";
    let options = {
        method: "GET"
    };

    fetch(url, options).then(function(response) {
        return response.json();
    }).then(function(jsonData) {
        let content = jsonData.content;
        spinnerEl.classList.add("d-none");
        quoteDisplayEl.textContent = content;

        setTimerAndShow();
    });

    function setTimerAndShow() {
        timerId = setInterval(function() {
            seconds = seconds + 1;
            timerEl.textContent = seconds + " seconds";
            timerEl.classList.add("time");
        }, 1000);
    }


}
submitBtnEl.addEventListener("click", function(event) {
    if (quoteDisplayEl.textContent === quoteInputEl.value) {
        clearInterval(timerId);
        resultEl.textContent = "You typed in " + seconds;
    } else {
        resultEl.textContent = "You typed incorrect sentense";
    }

})
resetBtnEl.addEventListener("click", function(event) {
    getSearchResults(event);
    clearInterval(timerId);

    seconds = 0;
    quoteInputEl.value = "";
    resultEl.textContent = "";

})