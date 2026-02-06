// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "emelie MIa amoreca",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "você por acaso quer namorar comigo?",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis                
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "oi, voce me ama?",                                    // First interaction
            yesBtn: "sim",                                             // Text for "Yes" button
            noBtn: "naaaaaao",                                               // Text for "No" button
            secretAnswer: "MUITO MUITO MESMO"           // Secret hover message
        },
        second: {
            text: "voce me ama quantos assim?",                          // For the love meter
            startText: "tudo isso",                                   // Text before the percentage
            nextBtn: "proximo"                                         // Text for the next button
        },
        third: {
            text: "voce quer ficar comigo pra sempre ever entao? 🌹", // The big question!
            yesBtn: "siiiiiiiiiiiiim :)",                                             // Text for "Yes" button
            noBtn: "nao :("                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "nossa voce quer me beijar ne",  // Shows when they go past 5000%
        high: "obaaaaaaaaa",              // Shows when they go past 1000%
        normal: "podia ser mais"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "obrigado por ficar comigo💓",
        message: "vou te dar um presente e um abraço e um beijinho",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#f6d1dc",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#dce9e2",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#c97c8a",     // Button color (should stand out against the background)
        buttonHover: "#d99aa6",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#3f2b30"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dajbnawz8/video/upload/v1770382629/snaptik_7376594310633950496_v3_nariov.mp4", // Music streaming URL
        startText: "coloca musica aqui",        // Button text to start music
        stopText: "se quiser tirar a musica é aqui",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
