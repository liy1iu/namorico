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
        backgroundStart: "#f6d1dc",
        backgroundEnd: "#dce9e2",
        buttonBackground: "#c97c8a",
        buttonHover: "#d99aa6",
        textColor: "#3f2b30"
    },

    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://res.cloudinary.com/dajbnawz8/video/upload/v1770382629/snaptik_7376594310633950496_v3_nariov.mp3",
        startText: "musiquinha",
        stopText: "para a musica!!!!!!!",
        volume: 0.5
    }
};

// Não modifique abaixo desta linha
window.VALENTINE_CONFIG = CONFIG;
