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
    { display: "2005", spoken: "two thousand five" },
    { display: "1969", spoken: "nineteen sixty-nine" },
    { display: "2001", spoken: "two thousand one" },
    { display: "1985", spoken: "nineteen eighty-five" },
    { display: "2009", spoken: "two thousand nine" },
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
    { display: "91.06", spoken: "ninety-one point zero six" },
    { display: "0.25", spoken: "point two five" },
    { display: "-3.14", spoken: "minus three point one four" },
    { display: "6.02", spoken: "six point zero two" },
    { display: "9.8", spoken: "nine point eight" },
    { display: "-10.01", spoken: "minus ten point zero one" },
    { display: "0.99", spoken: "point ninety-nine" },
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
    { display: "$13,750,000", spoken: "thirteen point seventy-five thousand dollars" },
    { display: "$255,000", spoken: "two hundred fifty-five thousand dollars" },
    { display: "$475,000", spoken: "four hundred seventy-five thousand dollars" },
    { display: "£45,100", spoken: "forty-five thousand one hundred pounds" },
    { display: "£91,400", spoken: "ninety-one point four thousand pounds" },
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

    // Ratios, proportions and rates
    { display: "$35 per capita", spoken: "thirty-five dollars per capita" },

    // Clock times and durations
    { display: "9:30 a.m.", spoken: "nine thirty a m" },
    { display: "2:45 p.m.", spoken: "two forty-five p m" },
    { display: "90 min", spoken: "ninety minutes" },
    { display: "3.5 hours", spoken: "three point five hours" },
    { display: "45 sec", spoken: "forty-five seconds" },

    // Ranges and intervals
    { display: "10–15%", spoken: "ten to fifteen percent" },
    { display: "2.5–3.0%", spoken: "two point five to three percent" },
    { display: "18–24", spoken: "eighteen to twenty-four" },
    { display: "-5 to 5", spoken: "minus five to five" },

    // Rankings, multipliers and comparisons
    { display: "21st", spoken: "twenty-first" },

    // Measurements and scientific units
    { display: "1,250 m", spoken: "twelve hundred fifty metres" },
    { display: "3.2 kg", spoken: "three point two kilograms" },
    { display: "2.5 tonnes", spoken: "two point five tonnes" },
    { display: "250 people/km²", spoken: "two hundred fifty people per square kilometre" },

    // Angles, coordinates and scientific notation
    { display: "45°", spoken: "forty-five degrees" },
    { display: "180°", spoken: "one hundred eighty degrees" },
    { display: "35°N", spoken: "thirty-five degrees north" },
    { display: "120°S", spoken: "one hundred twenty degrees south" },

    // Common chart abbreviations and reporting periods
    { display: "3.5M", spoken: "three point five million" },
    { display: "2.1B", spoken: "two point one billion" },
    { display: "2019/20", spoken: "twenty nineteen to twenty twenty" },

    // Additional currencies and prices
    { display: "$12.50", spoken: "twelve point five dollars" },
    { display: "£8.99", spoken: "eight point ninety-nine pounds" },
    { display: "€3.5 million", spoken: "three point five million euros" },
];

// ==================== SETTINGS ====================
const ROUND_SIZE = 100;
const SPEECH_RATE = 0.85;
const DEBUG_SPEECH = false; // 设为 true 可在控制台查看选中的语音

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

// Speech state
let rankedVoices = [];              // 按质量从高到低排序的英文语音
const failedVoiceURIs = new Set();  // 朗读失败过的语音（如离线时的云端语音）
let speechSessionId = 0;            // 每次朗读的会话 id，用于丢弃过期回调
let pendingSpeech = null;           // 语音列表尚未加载完成时暂存的朗读请求
let activeUtterance = null;

// ==================== DOM ELEMENTS ====================
const dataFigure = document.getElementById("data-figure");
const speakBtn = document.getElementById("speak-btn");
const actionBtn = document.getElementById("action-btn");
const progressSpan = document.getElementById("progress");
const timerDisplay = document.getElementById("timer-display");
const messageDiv = document.getElementById("message");

// ==================== SPEECH ENGINE SELECTION ====================
// 思路：Web Speech API 本身不提供“声音”，它只是调用系统里安装的语音引擎。
// 不同电脑、不同浏览器拿到的语音列表顺序和质量差异极大，直接取 voices[0]
// 很可能选中机械的 SAPI / eSpeak 语音。下面按“语言 + 名称关键词”给英文语音打分，
// 优先使用自然度高的语音（Google、Edge Natural、macOS Enhanced/Siri 等）。

// 自然度较高的语音名称特征
const HIGH_QUALITY_HINTS = [
    "natural", "neural", "premium", "enhanced", "online",
    "google", "siri",
    "samantha", "alex", "ava", "allison", "susan", "karen", "moira", "tessa", "serena",
    "aria", "jenny", "guy", "emma", "michelle", "ana", "christopher",
    "eric", "roger", "steffan", "andrew", "brian", "sonia", "ryan", "libby",
];

// 已知机械、低质量或非目标语音
const LOW_QUALITY_HINTS = [
    "desktop",   // Windows 旧版 SAPI，如 "Microsoft David Desktop"
    "compact",   // 低质量压缩语音
    "sapi",      // 旧 SAPI 语音
    "espeak",    // Linux 常见机械语音
    "e-speak",
    "festival",
    "flite",
    "pico",      // 低质量嵌入式语音
    "speech dispatcher",
];

// macOS 上的趣味语音和老式语音，读数字效果很差，必须排除
const LEGACY_OR_NOVELTY_HINTS = [
    "albert", "bad news", "bahh", "bells", "boing", "bubbles", "cellos",
    "deranged", "good news", "hologram", "hysterical", "jester", "organ",
    "pipe organ", "superstar", "trinoids", "whisper", "wobble", "zarvox",
    "fred", "junior", "kathy", "ralph", "princess", "agnes", "vicki", "bruce",
];

function normalizeLang(lang) {
    return (lang || "").replace(/_/g, "-").toLowerCase();
}

function scoreVoice(voice) {
    const name = (voice.name || "").toLowerCase();
    const lang = normalizeLang(voice.lang);
    let score = 0;

    // 1. 语言优先级：en-US 最佳，其他英语次之，非英语大幅降权
    if (lang === "en-us") {
        score += 100;
    } else if (/^en-(gb|au|ca|ie|nz|za|in|sg)$/.test(lang)) {
        score += 80;
    } else if (lang.startsWith("en")) {
        score += 60;
    } else {
        score -= 200;
    }

    // 2. 名称关键词
    if (HIGH_QUALITY_HINTS.some(hint => name.includes(hint))) score += 50;
    if (LOW_QUALITY_HINTS.some(hint => name.includes(hint))) score -= 60;
    if (LEGACY_OR_NOVELTY_HINTS.some(hint => name.includes(hint))) score -= 150;

    // 3. 云端语音（localService === false）通常是 Google / Edge Natural 这类
    //    高质量语音，略微加分；离线失败会由 failedVoiceURIs 自动回退
    if (voice.localService === false) score += 10;

    // 4. 系统默认语音通常不是最好的
    if (voice.default) score -= 5;

    return score;
}

function rankEnglishVoices(voices) {
    const englishVoices = voices.filter(v => normalizeLang(v.lang).startsWith("en"));
    if (englishVoices.length === 0) return [];

    return englishVoices
        .map(voice => ({ voice, score: scoreVoice(voice) }))
        .sort((a, b) => b.score - a.score)
        .map(entry => entry.voice);
}

function refreshVoices() {
    if (!speechIsSupported()) return;

    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return; // 尚未加载完成

    rankedVoices = rankEnglishVoices(voices);
    failedVoiceURIs.clear(); // 语音列表变化后，重新给之前失败的语音一次机会

    if (DEBUG_SPEECH) {
        console.info(
            "[speech] ranked voices:",
            rankedVoices.map(v =>
                `${v.name} (${v.lang}${v.localService ? "" : ", cloud"})`
            )
        );
    }
}

function getCandidateVoices() {
    return rankedVoices.filter(voice => !failedVoiceURIs.has(voice.voiceURI));
}

// 缓存的语音对象在部分浏览器上可能失效，speak 前按 voiceURI 重新匹配
function resolveCurrentVoice(voice) {
    if (!voice) return null;
    const current = window.speechSynthesis.getVoices() || [];
    return current.find(v => v.voiceURI === voice.voiceURI) || voice;
}

function handleVoicesChanged() {
    refreshVoices();

    if (pendingSpeech) {
        const pending = pendingSpeech;
        pendingSpeech = null;
        doSpeak(pending.text, pending.sessionId, pending.showUnsupportedMessage);
    }
}

// ==================== SPEECH ====================
function speechIsSupported() {
    return "speechSynthesis" in window
        && typeof SpeechSynthesisUtterance !== "undefined";
}

function cancelSynthesis() {
    if (!speechIsSupported()) return;

    try {
        window.speechSynthesis.cancel();
    } catch (error) {
        // 忽略不同浏览器实现上的差异
    }
}

function stopSpeech() {
    speechSessionId += 1;
    pendingSpeech = null;
    activeUtterance = null;
    cancelSynthesis();
}

function createUtterance(text, voice) {
    const utterance = new SpeechSynthesisUtterance(text);

    if (voice) {
        utterance.voice = voice;
        utterance.lang = voice.lang;
    } else {
        utterance.lang = "en-US";
    }

    utterance.rate = SPEECH_RATE;
    utterance.pitch = 1;
    utterance.volume = 1;

    return utterance;
}

function doSpeak(text, sessionId, showUnsupportedMessage) {
    if (sessionId !== speechSessionId) return; // 已被新的朗读请求取代

    const synth = window.speechSynthesis;
    const candidates = getCandidateVoices();
    const voice = resolveCurrentVoice(candidates[0] || null);

    const utterance = createUtterance(text, voice);
    activeUtterance = utterance;

    utterance.onerror = (event) => {
        const reason = event.error;

        // 自己取消导致的中断不算失败
        if (reason === "interrupted" || reason === "canceled") return;

        // 浏览器阻止了自动播放：提示用户手动点击扬声器
        if (reason === "not-allowed") {
            if (showUnsupportedMessage) {
                setMessage("浏览器阻止了自动朗读，请点击扬声器按钮重试。", "error");
            }
            return;
        }

        // 该语音本次无法使用（离线、语音包缺失等），下次换一个候选
        if (voice && voice.voiceURI) {
            failedVoiceURIs.add(voice.voiceURI);
        }

        if (DEBUG_SPEECH) {
            console.warn("[speech] utterance error:", reason, voice && voice.name);
        }
    };

    // Chrome 在 paused 状态下 speak 可能无声，先恢复
    if (synth.paused) {
        synth.resume();
    }

    synth.speak(utterance);
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

    // Chrome 的 getVoices() 首次常返回空，需要主动尝试一次
    if (rankedVoices.length === 0) {
        refreshVoices();
    }

    const sessionId = ++speechSessionId;
    cancelSynthesis();

    // 语音列表仍然为空：等 voiceschanged 再朗读，
    // 避免首次朗读使用系统默认的低质量语音
    if (rankedVoices.length === 0) {
        pendingSpeech = { text, sessionId, showUnsupportedMessage };

        // 兜底：即使 voiceschanged 不触发，也要发声
        window.setTimeout(() => {
            if (pendingSpeech && pendingSpeech.sessionId === sessionId) {
                const pending = pendingSpeech;
                pendingSpeech = null;
                doSpeak(pending.text, pending.sessionId, pending.showUnsupportedMessage);
            }
        }, 1200);
        return;
    }

    pendingSpeech = null;

    // 让 cancel() 先完成，规避 Chrome 中“cancel 后立即 speak 被吞”的问题
    window.setTimeout(() => {
        doSpeak(text, sessionId, showUnsupportedMessage);
    }, 0);
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
    speakBtn.disabled = practiceItems.length === 0 || !speechIsSupported();

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
if (speechIsSupported()) {
    // Chrome / Edge 的语音列表是异步加载的，必须监听 voiceschanged
    window.speechSynthesis.onvoiceschanged = handleVoicesChanged;
    refreshVoices();
}

initPractice();
