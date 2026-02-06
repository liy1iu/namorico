// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    valentineName: "emelie MIa amoreca",
    pageTitle: "você por acaso quer namorar comigo?",

    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
    },

    questions: {
        first: {
            text: "oi, voce me ama?",
            yesBtn: "sim",
            noBtn: "naaaaaao",
            secretAnswer: "MUITO MUITO MESMO"
        },
        second: {
            text: "voce me ama quantos assim?",
            startText: "tudo isso",
            nextBtn: "proximo"
        },
        third: {
            text: "voce quer ficar comigo pra sempre ever entao? 🌹",
            yesBtn: "siiiiiiiiiiiiim :)",
            noBtn: "nao :("
        }
    },

    loveMessages: {
        extreme: "nossa voce quer me beijar ne",
        high: "obaaaaaaaaa",
        normal: "podia ser mais"
    },

    celebration: {
        title: "obrigado por ficar comigo💓",
        message: "vou te dar um presente e um abraço e um beijinho",
        emojis: "🎁💖🤗💝💋❤️💕"
    },

    colors: {
         backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"    
    },

    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Não modifique abaixo desta linha
window.VALENTINE_CONFIG = CONFIG;
