// ======================================
// EMOJI YANG AKAN TERBANG
// ======================================

const emojis = [
    "♡",
    "💗",
    "✨",
    "🌸",
    "🫧",
    "🥺",
    "🤍",
    "🌷"
];


// ======================================
// BINTANG DI LANGIT
// ======================================

const stars = document.getElementById("stars");

for (let i = 0; i < 50; i++) {

    const star = document.createElement("span");

    star.style.left =
        ((i * 37) % 100) + "%";

    star.style.top =
        ((i * 17) % 57) + "%";

    star.style.animationDelay =
        ((i % 8) * 0.3) + "s";

    stars.appendChild(star);
}


// ======================================
// EMOJI BURST
// ======================================

function emojiBurst(x, y, emoji) {

    for (let i = 0; i < 9; i++) {

        const element =
            document.createElement("span");

        element.textContent =
            emoji ||
            emojis[
                Math.floor(
                    Math.random() *
                    emojis.length
                )
            ];

        element.style.position = "fixed";

        element.style.left = x + "px";
        element.style.top = y + "px";

        element.style.zIndex = "9999";

        element.style.pointerEvents =
            "none";

        element.style.fontSize = "24px";

        element.style.transition =
            "all 900ms cubic-bezier(.2,.8,.2,1)";

        document.body.appendChild(element);


        requestAnimationFrame(() => {

            const angle =
                (i / 9) *
                Math.PI *
                2;

            const distance =
                45 +
                Math.random() * 80;

            const moveX =
                Math.cos(angle) *
                distance;

            const moveY =
                Math.sin(angle) *
                distance -
                55;

            const rotation =
                Math.random() * 80 -
                40;


            element.style.transform =
                `translate(${moveX}px,
                ${moveY}px)
                rotate(${rotation}deg)
                scale(1.2)`;

            element.style.opacity = "0";

        });


        setTimeout(() => {

            element.remove();

        }, 1000);

    }

}


// ======================================
// TUKAR TEXT RESPONSE
// ======================================

function response(text, emoji) {

    const box =
        document.getElementById("response");

    box.textContent = text;


    emojiBurst(
        window.innerWidth / 2,
        window.innerHeight / 2,
        emoji
    );

}


// ======================================
// BUTTON PEYUK
// ======================================

function hug() {

    response(
        "Meh sini wifey… peyuk dulu 🫂❤️",
        "🫂"
    );

}


// ======================================
// BUTTON CAPYBARA
// ======================================

function capybara() {

    response(
        "Capybara: Meowww meowwww…anang anuk ako lagi aok 🥺❤️",
        "🦫"
    );

}


// ======================================
// BUTTON MINTA MAAF
// ======================================

function sorry() {

    response(
        "Hubby minta maaf, syg. ❤️",
        "💌"
    );

}


// ======================================
// SECRET BUTTON
// ======================================

function secretMessage() {

    response(
        "Mmmmmuuuuuuaaaaahhhhhhh! 😘❤️",
        "✨"
    );


    const secret =
        document.getElementById("secret");


    secret.innerHTML = `

        <div class="secret">

            🌅

            I LOVE YOU SOOO MUCHHH
            MOREE WIFEYY!!!! ❤️🥺

            <br><br>

            Stay cute,
            stay bajik,
            stay healthy.

            God bless you
            isteri ako. ❤️

            <br><br>

            kan dah kena cium.....HAHAHAHHA
            😘❤️

        </div>

    `;

}


// ======================================
// SENTUH MANA-MANA
// ======================================
document.addEventListener(
    "pointerdown",
    function(event) {

        // Jangan buat effect
        // apabila tekan button

        if (
            event.target.closest("button")
        ) {
            return;
        }


        emojiBurst(
            event.clientX,
            event.clientY
        );

    }
);