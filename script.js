// ==================== MASTER DATA SET (120+ items) ====================
const MASTER_ITEMS = [
    // Basic numbers
    { display: "23", spoken: "twenty-three" },
    { display: "150", spoken: "one hundred fifty" },
    { display: "4,000", spoken: "four thousand" },
    { display: "4,500", spoken: "forty five hundred" },
    { display: "78,900", spoken: "seventy-eight thousand nine hundred" },
    { display: "1,000,000", spoken: "one million" },
    { display: "3,450,000", spoken: "three point four five million" },
    { display: "1,500,000,000", spoken: "one point five billion" },
    { display: "612", spoken: "six hundred twelve" },
    { display: "880", spoken: "eight hundred eighty" },
    { display: "425", spoken: "four hundred twenty-five" },
    { display: "1765", spoken: "seventeen sixty-five" },
    { display: "1969", spoken: "nineteen sixty-nine" },
    { display: "1985", spoken: "nineteen eighty-five" },
    { display: "2045", spoken: "twenty forty-five" },
    { display: "2032", spoken: "twenty thirty-two" },
    { display: "2027", spoken: "twenty twenty-seven" },
    { display: "1929", spoken: "nineteen twenty-nine" },
    { display: "1970s", spoken: "the nineteen seventies" },
    { display: "1960s", spoken: "the nineteen sixties" },

    // Years & dates
    { display: "1990", spoken: "nineteen ninety" },
    { display: "2001", spoken: "two thousand one" },
    { display: "2010", spoken: "twenty ten" },
    { display: "2023", spoken: "twenty twenty-three" },
    { display: "1950s", spoken: "the nineteen fifties" },
    { display: "Q1 2023", spoken: "the first quarter of twenty twenty-three" },
    { display: "Jan. 2020", spoken: "January twenty twenty" },
    { display: "Mar. 1999", spoken: "March nineteen ninety-nine" },
    { display: "1998", spoken: "nineteen ninety-eight" },
    { display: "2008", spoken: "two thousand eight" },
    { display: "2015", spoken: "twenty fifteen" },
    { display: "2020", spoken: "twenty twenty" },
    { display: "1980s", spoken: "the nineteen eighties" },
    { display: "1990s", spoken: "the nineteen nineties" },
    { display: "2000s", spoken: "the two thousands" },
    { display: "Q2 2024", spoken: "the second quarter of twenty twenty-four" },
    { display: "Q4 2022", spoken: "the fourth quarter of twenty twenty-two" },
    { display: "Feb. 2018", spoken: "February twenty eighteen" },
    { display: "Oct. 2005", spoken: "October two thousand five" },
    { display: "Nov. 1995", spoken: "November nineteen ninety-five" },
    { display: "2023-2024", spoken: "twenty twenty-three to twenty twenty-four" },
    { display: "2010-2016", spoken: "twenty ten to twenty sixteen" },
    { display: "2000-2005", spoken: "two thousand to two thousand five" },

    // Percentages
    { display: "25%", spoken: "twenty-five percent" },
    { display: "0.5%", spoken: "point five percent" },
    { display: "7.38%", spoken: "seven point three eight percent" },
    { display: "150%", spoken: "one hundred fifty percent" },
    { display: "0.75%", spoken: "point seven five percent" },
    { display: "0.3%", spoken: "point three percent" },
    { display: "65%", spoken: "sixty-five percent" },
    { display: "125%", spoken: "one hundred twenty-five percent" },
    { display: "41.7%", spoken: "forty-one point seven percent" },
    { display: "8.25%", spoken: "eight point two five percent" },
    { display: "33.3%", spoken: "thirty-three point three percent" },
    { display: "87%", spoken: "eighty-seven percent" },
    { display: "99.9%", spoken: "ninety-nine point nine percent" },
    { display: "12.5%", spoken: "twelve point five percent" },
    { display: "66.6%", spoken: "sixty-six point six percent" },
    { display: "3.7%", spoken: "three point seven percent" },
    { display: "0.01%", spoken: "point zero one percent" },
    { display: "100%", spoken: "one hundred percent" },
    { display: "250%", spoken: "two hundred fifty percent" },

    // Decimals
    { display: "0.5", spoken: "point five" },
    { display: "15.73", spoken: "fifteen point seven three" },
    { display: "4.25", spoken: "four point two five" },
    { display: "0.08", spoken: "point zero eight" },
    { display: "-2.1", spoken: "minus two point one" },
    { display: "1.5", spoken: "one point five" },
    { display: "18.05", spoken: "eighteen point zero five" },
    { display: "-22.8", spoken: "minus twenty-two point eight" },
    { display: "31.1", spoken: "thirty-one point one" },
    { display: "39.4", spoken: "thirty-nine point four" },
    { display: "7.5", spoken: "seven point five" },
    { display: "91.406", spoken: "ninety-one point four zero six" },
    { display: "0.25", spoken: "point two five" },
    { display: "-3.14", spoken: "minus three point one four" },
    { display: "6.02", spoken: "six point zero two" },
    { display: "9.8", spoken: "nine point eight" },
    { display: "-10.01", spoken: "minus ten point zero one" },
    { display: "0.99", spoken: "point nine nine" },
    { display: "100.5", spoken: "one hundred point five" },

    // Temperatures
    { display: "25°C", spoken: "twenty-five degrees Celsius" },
    { display: "-5°C", spoken: "minus five degrees Celsius" },
    { display: "32°F", spoken: "thirty-two degrees Fahrenheit" },
    { display: "-12°F", spoken: "minus twelve degrees Fahrenheit" },
    { display: "-15°C", spoken: "minus fifteen degrees Celsius" },
    { display: "-40°C", spoken: "minus forty degrees Celsius" },
    { display: "-104°F", spoken: "minus one hundred four degrees Fahrenheit" },
    { display: "0°F", spoken: "zero degrees Fahrenheit" },
    { display: "5°F", spoken: "five degrees Fahrenheit" },
    { display: "18.5°C", spoken: "eighteen point five degrees Celsius" },
    { display: "-37°C", spoken: "minus thirty-seven degrees Celsius" },
    { display: "98.6°F", spoken: "ninety-eight point six degrees Fahrenheit" },
    { display: "-30°C", spoken: "minus thirty degrees Celsius" },
    { display: "100°C", spoken: "one hundred degrees Celsius" },
    { display: "212°F", spoken: "two hundred twelve degrees Fahrenheit" },
    { display: "-20°F", spoken: "minus twenty degrees Fahrenheit" },

    // Money
    { display: "$14,800", spoken: "fourteen thousand eight hundred dollars" },
    { display: "$125,000", spoken: "one hundred twenty-five thousand dollars" },
    { display: "£6,800", spoken: "sixty-eight hundred pounds" },
    { display: "$850 million", spoken: "eight hundred fifty million dollars" },
    { display: "$9,999", spoken: "ninety-nine hundred ninety-nine dollars" },
    { display: "£5,100,000", spoken: "five point one million pounds" },
    { display: "$13,750,000", spoken: "thirteen million seven hundred fifty thousand dollars" },
    { display: "$255,000", spoken: "two hundred fifty-five thousand dollars" },
    { display: "$475,000", spoken: "four hundred seventy-five thousand dollars" },
    { display: "£45,100", spoken: "forty-five thousand one hundred pounds" },
    { display: "£91,400", spoken: "ninety-one thousand four hundred pounds" },
    { display: "$2.5 million", spoken: "two point five million dollars" },
    { display: "£7.8 billion", spoken: "seven point eight billion pounds" },
    { display: "$12.2 million", spoken: "twelve point two million dollars" },
    { display: "£1.875 million", spoken: "one point eight seven five million pounds" },
    { display: "$0.5 million", spoken: "five hundred thousand dollars" },  // alternative
    { display: "£3.2 billion", spoken: "three point two billion pounds" },
    { display: "$99.9 million", spoken: "ninety-nine point nine million dollars" },
    { display: "£1,234", spoken: "twelve hundred thirty-four pounds" },
    { display: "$50,000", spoken: "fifty thousand dollars" },
    { display: "$1 million", spoken: "one million dollars" },
    { display: "£2 billion", spoken: "two billion pounds" },

    // Large numbers (no currency)
    { display: "8.4 billion", spoken: "eight point four billion" },
    { display: "12.2 million", spoken: "twelve point two million" },
    { display: "1.875 million", spoken: "one point eight seven five million" },
    { display: "5,100,000", spoken: "five million one hundred thousand" },
    { display: "13,750,000", spoken: "thirteen point seven five million" },
    { display: "255,000", spoken: "two hundred fifty-five thousand" },
    { display: "475,000", spoken: "four hundred seventy-five thousand" },
    { display: "45,102", spoken: "forty-five thousand one hundred two" },
    { display: "91,406", spoken: "ninety-one thousand four hundred six" },
    { display: "9.7 billion", spoken: "nine point seven billion" },
    { display: "3.4 trillion", spoken: "three point four trillion" },

    // Fractions and mixed numbers
    { display: "1/2", spoken: "one half" },
    { display: "1/3", spoken: "one third" },
    { display: "2/3", spoken: "two thirds" },
    { display: "1/4", spoken: "one quarter" },
    { display: "3/4", spoken: "three quarters" },
    { display: "5/8", spoken: "five eighths" },
    { display: "1 1/2", spoken: "one and a half" },
    { display: "2 3/4", spoken: "two and three quarters" },

    // Ratios, proportions and rates
    { display: "3:1", spoken: "three to one" },
    { display: "1:4", spoken: "one to four" },
    { display: "$35 per capita", spoken: "thirty-five dollars per capita" },

    // Clock times and durations
    { display: "9:30 a.m.", spoken: "nine thirty a m" },
    { display: "2:45 p.m.", spoken: "two forty-five p m" },
    { display: "1 hr 45 min", spoken: "one hour forty-five minutes" },
    { display: "90 min", spoken: "ninety minutes" },
    { display: "3.5 hours", spoken: "three point five hours" },
    { display: "45 sec", spoken: "forty-five seconds" },

    // Ranges and intervals
    { display: "10–15%", spoken: "ten to fifteen percent" },
    { display: "2.5–3.0%", spoken: "two point five to three point zero percent" },
    { display: "18–24", spoken: "eighteen to twenty-four" },
    { display: "$20–$30", spoken: "twenty to thirty dollars" },
    { display: "-5 to 5", spoken: "minus five to five" },

    // Rankings, multipliers and comparisons
    { display: "21st", spoken: "twenty-first" },
    { display: "2×", spoken: "two times" },
    { display: "1.5 times", spoken: "one point five times" },

    // Measurements and scientific units
    { display: "5 km", spoken: "five kilometres" },
    { display: "12.5 km", spoken: "twelve point five kilometres" },
    { display: "80 km/h", spoken: "eighty kilometres per hour" },
    { display: "1,250 m", spoken: "one thousand two hundred fifty metres" },
    { display: "3.2 kg", spoken: "three point two kilograms" },
    { display: "750 g", spoken: "seven hundred fifty grams" },
    { display: "2.5 tonnes", spoken: "two point five tonnes" },
    { display: "1.8 L", spoken: "one point eight litres" },
    { display: "500 mL", spoken: "five hundred millilitres" },
    { display: "250 people/km²", spoken: "two hundred fifty people per square kilometre" },
    { display: "40 kWh", spoken: "forty kilowatt hours" },
    { display: "120 MW", spoken: "one hundred twenty megawatts" },

    // Angles, coordinates and scientific notation
    { display: "45°", spoken: "forty-five degrees" },
    { display: "180°", spoken: "one hundred eighty degrees" },
    { display: "35°N", spoken: "thirty-five degrees north" },
    { display: "120°S", spoken: "one hundred twenty degrees south" },

    // Common chart abbreviations and reporting periods
    { display: "1.2K", spoken: "one point two thousand" },
    { display: "3.5M", spoken: "three point five million" },
    { display: "2.1B", spoken: "two point one billion" },
    { display: "2019/20", spoken: "twenty nineteen to twenty twenty" },

    // Additional currencies and prices
    { display: "$12.50", spoken: "twelve dollars fifty cents" },
    { display: "£8.99", spoken: "eight pounds ninety-nine pence" },
    { display: "€3.5 million", spoken: "three point five million euros" },
    { display: "¥2,500", spoken: "two thousand five hundred yen" }
];

// ==================== SETTINGS ====================
const ROUND_SIZE = 100;

// Shuffle an array in place.
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// ==================== STATE ====================
let practiceItems = [];
let currentIndex = 0;
let timerSeconds = 0;
let timerInterval = null;
let timerRunning = false;
let timerStartedAt = null;

// ==================== DOM ELEMENTS ====================
const dataFigure = document.getElementById("data-figure");
const speakBtn = document.getElementById("speak-btn");
const actionBtn = document.getElementById("action-btn");
const progressSpan = document.getElementById("progress");
const timerDisplay = document.getElementById("timer-display");
const messageDiv = document.getElementById("message");

// ==================== INITIALIZATION ====================
function initPractice() {
    stopSpeech();

    const shuffled = shuffleArray([...MASTER_ITEMS]);
    const itemCount = Math.min(ROUND_SIZE, shuffled.length);

    practiceItems = shuffled.slice(0, itemCount);
    currentIndex = 0;

    resetTimer();
    setMessage("");
    actionBtn.disabled = practiceItems.length === 0;
    speakBtn.disabled = practiceItems.length === 0;

    if (practiceItems.length === 0) {
        dataFigure.textContent = "—";
        progressSpan.textContent = "0/0";
        setMessage("没有可练习的数据。", "error");
        return;
    }

    loadItem(0);
}

function loadItem(index) {
    const item = practiceItems[index];

    if (!item) {
        setMessage("无法加载当前数据。", "error");
        return;
    }

    dataFigure.textContent = item.display;
    progressSpan.textContent = `${index + 1}/${practiceItems.length}`;
    setMessage("");

    // Browsers may block autoplay until the user has interacted with the page.
    // The speaker button remains available for manual replay.
    speakItem(item.spoken, false);
}

// ==================== SPEECH ====================
function speechIsSupported() {
    return "speechSynthesis" in window
        && typeof SpeechSynthesisUtterance !== "undefined";
}

function stopSpeech() {
    if (speechIsSupported()) {
        window.speechSynthesis.cancel();
    }
}

function speakItem(text, showUnsupportedMessage = true) {
    if (!speechIsSupported()) {
        speakBtn.disabled = true;
        speakBtn.title = "当前浏览器不支持语音朗读";

        if (showUnsupportedMessage) {
            setMessage("当前浏览器不支持语音朗读。", "error");
        }
        return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.85;

    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(voice =>
        voice.lang.toLowerCase().startsWith("en-us")
    ) || voices.find(voice =>
        voice.lang.toLowerCase().startsWith("en")
    );

    if (preferredVoice) {
        utterance.voice = preferredVoice;
    }

    window.speechSynthesis.speak(utterance);
}

// ==================== TIMER ====================
function startTimer() {
    if (timerRunning) return;

    timerRunning = true;
    timerStartedAt = Date.now() - timerSeconds * 1000;

    timerInterval = window.setInterval(() => {
        timerSeconds = Math.floor((Date.now() - timerStartedAt) / 1000);
        updateTimerDisplay();
    }, 250);
}

function stopTimer() {
    if (timerInterval !== null) {
        window.clearInterval(timerInterval);
    }

    timerInterval = null;
    timerRunning = false;
    timerStartedAt = null;
}

function resetTimer() {
    stopTimer();
    timerSeconds = 0;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;

    timerDisplay.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

// ==================== MESSAGES ====================
function setMessage(text, type = "") {
    messageDiv.textContent = text;
    messageDiv.classList.remove("success", "error");

    if (type) {
        messageDiv.classList.add(type);
    }
}

// ==================== EVENT HANDLERS ====================
speakBtn.addEventListener("click", () => {
    const item = practiceItems[currentIndex];

    if (item) {
        speakItem(item.spoken);
    }
});

actionBtn.addEventListener("click", () => {
    if (practiceItems.length === 0) return;

    // Match the documented behavior: timing begins with the first click on “Next”.
    if (!timerRunning) {
        startTimer();
    }

    if (currentIndex < practiceItems.length - 1) {
        currentIndex += 1;
        loadItem(currentIndex);
        return;
    }

    finishRound();
});

function finishRound() {
    stopTimer();
    stopSpeech();

    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    const completedCount = practiceItems.length;

    window.alert(
        `🎉 Congratulations!\n`
        + `You've completed all ${completedCount} items.\n`
        + `Time spent: ${minutes}分${seconds}秒`
    );

    // Preserve the original design: immediately prepare a new random round.
    // The new round timer remains at 00:00 until the first “Next” click.
    initPractice();
}

// Stop queued speech when the user leaves or reloads the page.
window.addEventListener("beforeunload", stopSpeech);

// ==================== START ====================
initPractice();
