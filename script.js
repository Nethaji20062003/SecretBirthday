/* =========================================
   SECRET BIRTHDAY WEBSITE
   ========================================= */

const screens = [
    document.getElementById("screen1"),
    document.getElementById("screen2"),
    document.getElementById("screen3"),
    document.getElementById("midnightScreen")
];


/* =========================================
   SCREEN NAVIGATION
   ========================================= */

function goToScreen(number) {

    screens.forEach(screen => {
        if (screen) {
            screen.classList.remove("active");
        }
    });

    const nextScreen = document.getElementById("screen" + number);

    if (nextScreen) {
        nextScreen.classList.add("active");
    }
}


/* =========================================
   STARS
   ========================================= */

const starsContainer = document.querySelector(".stars");

if (starsContainer) {

    for (let i = 0; i < 120; i++) {

        const star = document.createElement("span");

        star.className = "star";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        star.style.animationDelay =
            Math.random() * 5 + "s";

        star.style.animationDuration =
            2 + Math.random() * 4 + "s";

        starsContainer.appendChild(star);
    }
}


/* =========================================
   FIREFLIES
   ========================================= */

const firefliesContainer =
    document.querySelector(".fireflies");

if (firefliesContainer) {

    for (let i = 0; i < 25; i++) {

        const firefly =
            document.createElement("span");

        firefly.className = "firefly";

        firefly.style.left =
            Math.random() * 100 + "%";

        firefly.style.top =
            Math.random() * 100 + "%";

        firefly.style.animationDelay =
            Math.random() * 5 + "s";

        firefly.style.animationDuration =
            4 + Math.random() * 5 + "s";

        firefliesContainer.appendChild(firefly);
    }
}


/* =========================================
   COUNTDOWN
   ========================================= */

/*
   ACTUAL BIRTHDAY DATE

   03 October 2026
   12:00 AM
   India Standard Time (IST)
*/

const targetDate =
    new Date("2026-10-03T00:00:00+05:30").getTime();


let countdownFinished = false;


function updateCountdown() {

    const now = new Date().getTime();

    const difference =
        targetDate - now;


    /* =====================================
       BIRTHDAY TIME REACHED
       ===================================== */

    if (difference <= 0) {

        if (!countdownFinished) {

            countdownFinished = true;

            startMidnightReveal();
        }

        return;
    }


    /* =====================================
       CALCULATE TIME
       ===================================== */

    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );

    const hours =
        Math.floor(
            (difference %
                (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (difference %
                (1000 * 60 * 60)) /
            (1000 * 60)
        );

    const seconds =
        Math.floor(
            (difference %
                (1000 * 60)) /
            1000
        );


    /* =====================================
       UPDATE HTML
       ===================================== */

    const daysElement =
        document.getElementById("days");

    const hoursElement =
        document.getElementById("hours");

    const minutesElement =
        document.getElementById("minutes");

    const secondsElement =
        document.getElementById("seconds");


    if (daysElement) {

        daysElement.textContent =
            String(days).padStart(2, "0");
    }


    if (hoursElement) {

        hoursElement.textContent =
            String(hours).padStart(2, "0");
    }


    if (minutesElement) {

        minutesElement.textContent =
            String(minutes).padStart(2, "0");
    }


    if (secondsElement) {

        secondsElement.textContent =
            String(seconds).padStart(2, "0");
    }
}


/* =========================================
   START COUNTDOWN
   ========================================= */

updateCountdown();

setInterval(
    updateCountdown,
    1000
);


/* =========================================
   MIDNIGHT REVEAL
   ========================================= */

function startMidnightReveal() {

    document.body.classList.add("midnight");


    /* Small delay for magical transition */

    setTimeout(() => {

        createParticleBurst();

    }, 100);


    setTimeout(() => {

        screens.forEach(screen => {

            if (screen) {
                screen.classList.remove("active");
            }

        });


        const midnightScreen =
            document.getElementById(
                "midnightScreen"
            );


        if (midnightScreen) {

            midnightScreen.classList.add(
                "active"
            );
        }

    }, 500);
}


/* =========================================
   PARTICLE BURST
   ========================================= */

function createParticleBurst() {

    const container =
        document.body;

    for (let i = 0; i < 100; i++) {

        const particle =
            document.createElement("span");

        particle.className =
            "burst-particle";


        const angle =
            Math.random() *
            Math.PI *
            2;


        const distance =
            100 +
            Math.random() * 350;


        particle.style.setProperty(
            "--x",
            Math.cos(angle) *
            distance +
            "px"
        );


        particle.style.setProperty(
            "--y",
            Math.sin(angle) *
            distance +
            "px"
        );


        particle.style.left =
            "50%";

        particle.style.top =
            "50%";


        container.appendChild(
            particle
        );


        setTimeout(() => {

            particle.remove();

        }, 1800);
    }
}


/* =========================================
   TOUCH / CLICK SPARKLES
   ========================================= */

document.addEventListener(
    "click",
    function (event) {

        createSparkle(
            event.clientX,
            event.clientY
        );
    }
);


document.addEventListener(
    "touchstart",
    function (event) {

        if (
            event.touches &&
            event.touches.length > 0
        ) {

            createSparkle(
                event.touches[0].clientX,
                event.touches[0].clientY
            );
        }
    }
);


function createSparkle(x, y) {

    const sparkle =
        document.createElement("span");

    sparkle.className =
        "click-sparkle";


    sparkle.style.left =
        x + "px";

    sparkle.style.top =
        y + "px";


    document.body.appendChild(
        sparkle
    );


    setTimeout(() => {

        sparkle.remove();

    }, 1000);
}