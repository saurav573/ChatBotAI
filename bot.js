let btn = document.querySelector("#btn");
let content = document.querySelector("#content");

// ---------- SPEAK ----------
function speek(text){
    let msg = new SpeechSynthesisUtterance(text);
    msg.lang = "en-IN";
    msg.rate = 1;
    msg.pitch = 1;
    msg.volume = 1;

    msg.onend = () => {
        btn.innerHTML = `🎙 Click Here!`;
    };

    speechSynthesis.speak(msg);
}

// ---------- GREET ----------
function greet(){
    let h = new Date().getHours();
    if(h < 12) speek("Good morning sir");
    else if(h < 16) speek("Good afternoon sir");
    else speek("Good evening sir");
}
// window.addEventListener("load", () => greet());

// ---------- SPEECH RECOGNITION ----------
let SR = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SR();
recognition.lang = "en-IN";
recognition.interimResults = false;
recognition.maxAlternatives = 1;
recognition.continuous = false;

// Flag to detect whether we received any result for the current session
let gotResult = false;

// UI updates
recognition.onstart = () => {
    btn.innerHTML = `🎤 Listening...`;
};
recognition.onend = () => {
    btn.innerHTML = `🎙 Click Here!`;
};

recognition.onresult = (e) => {
    gotResult = true;
    let text = e.results[0][0].transcript;
    content.innerText = text;
    takeCommand(text);
};

recognition.onnomatch = (e) => {
    console.log("onnomatch:", e);
    // Speech was detected but couldn't be matched
    speek("Sorry sir, I did not understand.");
};

recognition.onerror = (e) => {
    // Handle specific errors more gracefully
    if (e.error === 'no-speech' || e.error === 'audio-capture') {
        // User didn't speak or no audio device available — not an exceptional error
        console.log("No speech detected (or audio capture failed):", e.error);
        btn.innerHTML = `🎙 Click Here!`;
        // don't auto-speak here to avoid annoying repeated TTS when user is silent
        return;
    } else if (e.error === 'not-allowed' || e.error === 'service-not-allowed') {
        console.error("recognition error:", e.error);
        speek("Microphone permission denied. Please allow microphone access.");
    } else {
        console.error("recognition error:", e.error);
        speek("Sorry, there was an error with speech recognition.");
    }
};

// ---------- BUTTON ----------
btn.addEventListener("click", () => {
    if (speechSynthesis.speaking) speechSynthesis.cancel();

    // Request mic permission on click, then start recognition after a short delay
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        try { recognition.start(); } catch(e) { console.error(e); }
        return;
    }

    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            // stop immediate tracks (we only needed permission)
            stream.getTracks().forEach(track => track.stop());

            // use default language (en-IN)
            recognition.lang = 'en-IN';

            // short delay to give user a moment to start speaking and avoid immediate no-speech
            setTimeout(() => {
                try { recognition.start(); } catch (err) { console.error('Failed to start recognition:', err); }
            }, 300);
        })
        .catch(err => {
            console.error('Mic permission denied or error:', err);
            speek('Microphone access denied. Please allow microphone access.');
        });
});

// ---------- COMMANDS ----------
function takeCommand(message){
    let text = (message || '').toLowerCase().trim();

    if(text.includes("hello shipra") || text.includes("hello sara")){
        speek("Hello sir, how can I help you?");
    }
    else if(text.includes("who are you")){
        speek("I am your virtual assistant created by Saurav.");
    }
    else if(text.includes("open youtube")){
        speek("opening youtube.....");
        window.open("https://www.youtube.com/","_blank")

    }
    else if(text.includes("goodbye") || text.includes("bye")){
        speek("Goodbye sir");
    }
    else {
        speek("Sorry sir, I did not understand.");
    }
}
