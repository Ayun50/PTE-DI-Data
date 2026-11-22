// ==================== MASTER DATA SET (120+ items) ====================
const MASTER_ITEMS = [
    // Basic numbers
    { display: "23", spoken: "twenty-three" },
    { display: "150", spoken: "one hundred fifty" },
    { display: "4,000", spoken: "four thousand" },
    { display: "4,500", spoken: "forty-five hundred" },
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
    { display: "$13,750,000", spoken: "thirteen point seven five million dollars" },
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
    { display: "£8.99", spoken: "eight pounds ninety-nine" },
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
let cachedVoiceList = [];           // 最近一次 getVoices() 的完整列表
let voicesLoaded = false;           // 语音列表是否成功加载过（区别于“加载好了但没有英文语音”）
const failedVoices = new Map();     // voiceURI -> 失败时间戳，带过期，避免瞬时错误永久拉黑
const VOICE_RETRY_MS = 5 * 60 * 1000;
let speechSessionId = 0;            // 每次朗读的会话 id，用于丢弃过期回调
let pendingSpeech = null;           // 语音列表尚未加载完成时暂存的朗读请求
let pendingSpeechTimer = null;      // 等待 voiceschanged 的兜底定时器
let activeUtterance = null;

// 交互节流：防止连点“下一个”一次跳过两条数据
const NEXT_COOLDOWN_MS = 260;
let lastAdvanceAt = 0;


// ==================== DOM ELEMENTS ====================
const dataFigure = document.getElementById("data-figure");
const speakBtn = document.getElementById("speak-btn");
const actionBtn = document.getElementById("action-btn");
const progressSpan = document.getElementById("progress");
const timerDisplay = document.getElementById("timer-display");
const messageDiv = document.getElementById("message");

// 本轮结算层（替代 window.alert，不再阻塞主线程）
const roundOverlay = document.getElementById("round-overlay");
const roundCountEl = document.getElementById("round-count");
const roundTimeEl = document.getElementById("round-time");
const roundRestartBtn = document.getElementById("round-restart");

// ==================== SPEECH ENGINE SELECTION ====================
// 思路：Web Speech API 本身不提供“声音”，它只是调用系统里安装的语音引擎。
// 不同电脑、不同浏览器拿到的语音列表顺序和质量差异极大，直接取 voices[0]
// 很可能选中机械的 SAPI / eSpeak 语音。
//
// 优先级设计（本地优先，避免云端网络延迟）：
//   1. 本地高质量引擎（localService=true 且未命中低质量关键词）——最高优先
//   2. 云端高质量引擎（Google / Edge Online Natural）——次选
//   3. 本地低质量引擎（Desktop / eSpeak / Compact / SAPI）——兜底
//   4. 趣味 / 老式语音——最低
//
// 排序（打分 + sort）只在页面加载和 voiceschanged 时执行；
// 每次换词只做一次 O(n) filter + find，不做重新排序。

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

function hasAnyHint(name, hints) {
    return hints.some(hint => name.includes(hint));
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

    const isLowQuality = hasAnyHint(name, LOW_QUALITY_HINTS);

    // 2. 本地引擎优先（无网络往返，首字延迟低）
    //    - 本地 + 非低质量：+40
    //    - 本地 + 低质量：不额外加分
    //    - 云端：-30，仍保留为备选
    if (voice.localService === true) {
        if (!isLowQuality) {
            score += 40;
        }
    } else {
        score -= 30;
    }

    // 3. 名称关键词
    if (hasAnyHint(name, HIGH_QUALITY_HINTS)) score += 50;
    if (isLowQuality) score -= 60;
    if (hasAnyHint(name, LEGACY_OR_NOVELTY_HINTS)) score -= 150;

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
    if (!speechIsSupported()) return false;

    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return false; // 尚未加载完成

    // 只要拿到过非空列表，就认为“语音已就绪”。
    // 此时即使没有英文语音（rankedVoices 为空），也不该再等 voiceschanged，
    // 否则每次朗读都会白等 1.2 秒。
    voicesLoaded = true;

    // 缓存完整列表，供 resolveCurrentVoice 做失效检测
    cachedVoiceList = voices;
    rankedVoices = rankEnglishVoices(voices);
    failedVoices.clear(); // 语音列表变化后，重新给之前失败的语音一次机会

    if (DEBUG_SPEECH) {
        console.info(
            "[speech] ranked voices:",
            rankedVoices.map(v =>
                `${v.name} (${v.lang}${v.localService ? ", local" : ", cloud"})`
            )
        );
    }

    return true;
}

function isVoiceFailed(voiceURI) {
    if (!voiceURI) return false;

    const failedAt = failedVoices.get(voiceURI);
    if (failedAt === undefined) return false;

    if (Date.now() - failedAt > VOICE_RETRY_MS) {
        failedVoices.delete(voiceURI); // 过期后重新给一次机会
        return false;
    }

    return true;
}

function markVoiceFailed(voiceURI) {
    if (!voiceURI) return;

    failedVoices.set(voiceURI, Date.now());

    if (DEBUG_SPEECH) {
        console.warn("[speech] voice temporarily blacklisted:", voiceURI);
    }
}

function getCandidateVoices() {
    return rankedVoices.filter(voice => !isVoiceFailed(voice.voiceURI));
}

// 在缓存的语音列表里重新匹配，避免直接使用可能失效的旧引用。
// 不再调用 getVoices()；语音列表变化时由 voiceschanged 刷新缓存。
// 若引用仍失效，speak 会触发 onerror，failedVoices 会剔除它并自动换下一个。
function resolveCurrentVoice(voice) {
    if (!voice) return null;
    return cachedVoiceList.find(v => v.voiceURI === voice.voiceURI) || voice;
}

function handleVoicesChanged() {
    if (!refreshVoices()) return;
    flushPendingSpeech();
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

function clearPendingSpeech() {
    pendingSpeech = null;

    if (pendingSpeechTimer !== null) {
        window.clearTimeout(pendingSpeechTimer);
        pendingSpeechTimer = null;
    }
}

// 语音列表就绪后补发暂存的朗读请求
function flushPendingSpeech() {
    if (!pendingSpeech) return;

    const pending = pendingSpeech;
    clearPendingSpeech();
    doSpeak(pending.text, pending.sessionId, pending.showUnsupportedMessage);
}

function stopSpeech() {
    speechSessionId += 1;
    clearPendingSpeech();
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

// 只有“这条语音本身不可用”才值得拉黑。audio-busy / network 之类的瞬时错误
// 与语音质量无关，拉黑会造成整场练习永久降级成默认语音。
const FATAL_VOICE_ERRORS = ["voice-unavailable", "synthesis-failed"];

function doSpeak(text, sessionId, showUnsupportedMessage, attempt = 1) {
    if (sessionId !== speechSessionId) return; // 已被新的朗读请求取代

    const synth = window.speechSynthesis;
    const candidates = getCandidateVoices();
    const voice = resolveCurrentVoice(candidates[0] || null);

    const utterance = createUtterance(text, voice);
    activeUtterance = utterance;

    let started = false;
    let failed = false;

    utterance.onstart = () => {
        started = true;
    };

    utterance.onerror = (event) => {
        const reason = event.error;
        failed = true;

        // 自己取消导致的中断不算失败
        if (reason === "interrupted" || reason === "canceled") return;

        // 浏览器阻止了自动播放：提示用户手动点击扬声器
        if (reason === "not-allowed") {
            if (showUnsupportedMessage) {
                setMessage("浏览器阻止了自动朗读，请点击扬声器按钮重试。", "error");
            }
            return;
        }

        if (DEBUG_SPEECH) {
            console.warn("[speech] utterance error:", reason, voice && voice.name);
        }

        // 该语音本次确实无法使用（离线、语音包缺失等）：拉黑并立刻换下一个候选
        if (FATAL_VOICE_ERRORS.includes(reason)) {
            markVoiceFailed(voice && voice.voiceURI);

            if (attempt < 2 && sessionId === speechSessionId) {
                doSpeak(text, sessionId, showUnsupportedMessage, attempt + 1);
            }
        }
    };

    // Chrome 在 paused 状态下 speak 可能无声，先恢复
    if (synth.paused) {
        try {
            synth.resume();
        } catch (error) {
            // 忽略不同浏览器实现上的差异
        }
    }

    synth.speak(utterance);

    // 看门狗：Chrome 偶发让 utterance “凭空消失”（既不 onstart 也不报错）。
    // 450ms 内没有任何朗读迹象就补一次，这一次不再 cancel。
    window.setTimeout(() => {
        if (started || failed || sessionId !== speechSessionId) return;
        if (synth.speaking || synth.pending) return;
        if (attempt >= 2) return;

        doSpeak(text, sessionId, showUnsupportedMessage, attempt + 1);
    }, 450);
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

    const synth = window.speechSynthesis;

    // Chrome 的 getVoices() 首次常返回空，需要主动尝试一次
    if (!voicesLoaded) {
        refreshVoices();
    }

    const sessionId = ++speechSessionId;

    // 只有真的有语音在朗读/排队时才 cancel。
    // 关键：cancel 与 speak 必须留在同一个用户手势的调用栈里；
    // 一旦跨进 setTimeout，Safari / iOS 会判定为非用户触发而静默丢弃
    // （连 not-allowed 都不会报，表现为完全没声音）。
    if (synth.speaking || synth.pending || synth.paused) {
        cancelSynthesis();
    }

    // 语音列表还没就绪：等 voiceschanged 再读，
    // 避免第一声用系统默认的低质量语音
    if (!voicesLoaded) {
        clearPendingSpeech();
        pendingSpeech = { text, sessionId, showUnsupportedMessage };

        // 兜底：即使 voiceschanged 不触发，也要发声
        pendingSpeechTimer = window.setTimeout(() => {
            if (!pendingSpeech || pendingSpeech.sessionId !== sessionId) return;
            flushPendingSpeech();
        }, 1200);
        return;
    }

    clearPendingSpeech();

    // 已就绪但没有英文语音时 rankedVoices 为空，
    // doSpeak 会用系统默认语音（voice = null），不再白等 1.2 秒
    doSpeak(text, sessionId, showUnsupportedMessage);
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

function formatDuration(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

let lastTimerText = "";

function updateTimerDisplay() {
    const next = formatDuration(timerSeconds);

    // 秒数没变就不碰 DOM：250ms 轮询里 4 次只有 1 次真的需要重绘
    if (next === lastTimerText) return;

    lastTimerText = next;
    timerDisplay.textContent = next;
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
    lastAdvanceAt = 0; // 新一轮的第一下点击不该被节流吃掉

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

    loadItem(0, false);
}

function loadItem(index, showAutoplayHint = true) {
    const item = practiceItems[index];

    if (!item) {
        setMessage("无法加载当前数据。", "error");
        return;
    }

    dataFigure.textContent = item.display;
    progressSpan.textContent = `${index + 1}/${practiceItems.length}`;
    setMessage("");

    // 页面首次加载时的朗读大概率会被浏览器拦下，这时不弹提示；
    // 之后每一题都由用户点击触发，被拦下就该明确告知。
    speakItem(item.spoken, showAutoplayHint);
}

// ==================== EVENT HANDLERS ====================
function replayCurrent() {
    const item = practiceItems[currentIndex];

    if (item) {
        speakItem(item.spoken);
    }
}

function advance() {
    if (practiceItems.length === 0) return;

    // 连点保护：双指/连击不会一次跳过两条数据
    const now = Date.now();

    if (now - lastAdvanceAt < NEXT_COOLDOWN_MS) return;
    lastAdvanceAt = now;

    // Match the documented behavior: timing begins with the first click on “Next”.
    if (!timerRunning) {
        startTimer();
    }

    if (currentIndex < practiceItems.length - 1) {
        currentIndex += 1;
        loadItem(currentIndex, true);
        return;
    }

    finishRound();
}

speakBtn.addEventListener("click", replayCurrent);
actionBtn.addEventListener("click", advance);

// 键盘：空格 / R 重听，→ / Enter / N 下一题
document.addEventListener("keydown", (event) => {
    if (event.metaKey || event.ctrlKey || event.altKey) return;
    if (!roundOverlay.hidden) return; // 结算层打开时交给它自己处理

    const tag = event.target && event.target.tagName;
    if (tag === "BUTTON" || tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;

    if (event.code === "Space" || event.key === " ") {
        event.preventDefault();
        replayCurrent();
        return;
    }

    if (event.key === "ArrowRight" || event.key === "Enter"
        || event.key === "n" || event.key === "N") {
        event.preventDefault();
        advance();
    }
});

function finishRound() {
    stopTimer();
    stopSpeech();

    // 用页内结算层替代 window.alert：alert 会阻塞主线程，
    // 且确认后立刻重置，用户既看不到成绩也没法重听最后一题。
    roundCountEl.textContent = String(practiceItems.length);
    roundTimeEl.textContent = formatDuration(timerSeconds);
    roundOverlay.hidden = false;
    document.body.classList.add("is-locked");

    window.requestAnimationFrame(() => roundRestartBtn.focus());
}

function closeRoundOverlay() {
    roundOverlay.hidden = true;
    document.body.classList.remove("is-locked");

    // 保持原设计：结算后立即准备新一轮，计时停在 00:00，
    // 直到用户点第一次“下一个”才开始计时。
    initPractice();
}

roundRestartBtn.addEventListener("click", closeRoundOverlay);

document.addEventListener("keydown", (event) => {
    if (roundOverlay.hidden) return;

    if (event.key === "Escape" || event.key === "Enter") {
        event.preventDefault();
        closeRoundOverlay();
    }
});

// Stop queued speech when the user leaves or reloads the page.
window.addEventListener("beforeunload", stopSpeech);
window.addEventListener("pagehide", stopSpeech);

// ==================== START ====================
if (speechIsSupported()) {
    // Chrome / Edge 的语音列表是异步加载的，必须监听 voiceschanged
    window.speechSynthesis.onvoiceschanged = handleVoicesChanged;
    refreshVoices();
}

initPractice();
