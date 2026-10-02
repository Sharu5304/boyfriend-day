/* =====================================
   PAGE SYSTEM
===================================== */

let currentPage = 1;


/* =====================================
   OPEN ENVELOPE
===================================== */

function openEnvelope() {

    const envelope =
        document.querySelector(".envelope");

    const screen =
        document.getElementById("envelopeScreen");


    if (envelope.classList.contains("opened")) {
        return;
    }


    /* Open envelope */

    envelope.classList.add("opened");


    /* Create celebration hearts */

    createHearts();


    /* Wait for envelope animation */

    setTimeout(() => {

        screen.classList.add("hide");

        currentPage = 1;

        const firstPage =
            document.getElementById("page1");

        firstPage.classList.add("active");

    }, 1000);

}


/* =====================================
   PAGE NAVIGATION
===================================== */

function nextPage() {

    const current =
        document.getElementById(
            "page" + currentPage
        );


    if (current) {

        current.classList.remove("active");

    }


    currentPage++;


    const next =
        document.getElementById(
            "page" + currentPage
        );


    if (next) {

        next.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}


/* =====================================
   GIFT OPENING
===================================== */

function openGift() {

    const current =
        document.getElementById(
            "page" + currentPage
        );


    if (current) {

        current.classList.remove("active");

    }


    currentPage = 8;


    const finalPage =
        document.getElementById("page8");


    if (finalPage) {

        finalPage.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });


        /* Big heart celebration */

        createHearts();

        setTimeout(() => {
            createHearts();
        }, 500);

        setTimeout(() => {
            createHearts();
        }, 1000);

    }

}


/* =====================================
   PHOTO DATA
===================================== */

const memories = [

    {
        image: "images/photo1.jpeg",
        title: "One of my favourite memories ❤️",
        text:
            "A little moment that I would happily experience again. 🥹"
    },

    {
        image: "images/photo2.jpeg",
        title: "Look at us 🥹💕",
        text:
            "This picture will always have a special place in my heart."
    },

    {
        image: "images/photo3.jpeg",
        title: "This one makes me smile 🌸",
        text:
            "Because somehow even the simplest moments become special with you."
    },

    {
        image: "images/photo4.jpeg",
        title: "My favourite person 🫶",
        text:
            "My Baal, my Duggu, my Raja. ❤️"
    },

    {
        image: "images/photo5.jpeg",
        title: "Just us ❤️",
        text:
            "One more memory that I never want to forget."
    },

    {
        image: "images/photo6.jpeg",
        title: "A memory I'll keep forever 🥹",
        text:
            "Some moments are impossible to replace."
    },

    {
        image: "images/photo7.jpeg",
        title: "My Baal 💗",
        text:
            "Six months of memories... and hopefully many more to come."
    },

    {
        image: "images/photo8.jpeg",
        title: "More memories to come ✨",
        text:
            "This isn't the end of our memories. It's only the beginning. ❤️"
    }

];


let currentPhoto = 0;


/* =====================================
   SHOW PHOTO
===================================== */

function showPhoto(index) {

    const image =
        document.getElementById("memoryImage");

    const number =
        document.getElementById("photoNumber");

    const title =
        document.getElementById("memoryTitle");

    const text =
        document.getElementById("memoryText");


    if (!image ||
        !number ||
        !title ||
        !text) {

        return;

    }


    image.classList.add("photo-change");


    setTimeout(() => {

        image.src =
            memories[index].image;

        title.textContent =
            memories[index].title;

        text.textContent =
            memories[index].text;

        number.textContent =
            index + 1;

        image.classList.remove(
            "photo-change"
        );

    }, 200);


    const dots =
        document.querySelectorAll(".dot");


    dots.forEach((dot, i) => {

        dot.classList.toggle(
            "active-dot",
            i === index
        );

    });

}


/* =====================================
   NEXT PHOTO
===================================== */

function nextPhoto() {

    currentPhoto++;

    if (currentPhoto >= memories.length) {

        currentPhoto = 0;

    }

    showPhoto(currentPhoto);

}


/* =====================================
   PREVIOUS PHOTO
===================================== */

function previousPhoto() {

    currentPhoto--;

    if (currentPhoto < 0) {

        currentPhoto =
            memories.length - 1;

    }

    showPhoto(currentPhoto);

}


/* =====================================
   SWIPE SUPPORT
===================================== */

let touchStartX = 0;

let touchEndX = 0;


document.addEventListener(
    "DOMContentLoaded",
    function () {

        const photoViewer =
            document.querySelector(
                ".photo-viewer"
            );


        if (photoViewer) {

            photoViewer.addEventListener(
                "touchstart",
                function (event) {

                    touchStartX =
                        event.changedTouches[0]
                            .screenX;

                }
            );


            photoViewer.addEventListener(
                "touchend",
                function (event) {

                    touchEndX =
                        event.changedTouches[0]
                            .screenX;

                    handleSwipe();

                }
            );

        }

    }
);


function handleSwipe() {

    const difference =
        touchStartX - touchEndX;


    if (difference > 50) {

        nextPhoto();

    }


    if (difference < -50) {

        previousPhoto();

    }

}


/* =====================================
   FLOATING HEARTS
===================================== */

function createHeart() {

    const heart =
        document.createElement("div");


    heart.className =
        "heart";


    const heartList = [

        "❤️",
        "💕",
        "💗",
        "💖",
        "💓",
        "💞"

    ];


    heart.innerHTML =
        heartList[
            Math.floor(
                Math.random() *
                heartList.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        (15 + Math.random() * 25) +
        "px";


    heart.style.animationDuration =
        (4 + Math.random() * 4) +
        "s";


    document.body.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 8000);

}


/* =====================================
   HEART BURST
===================================== */

function createHearts() {

    for (
        let i = 0;
        i < 35;
        i++
    ) {

        setTimeout(() => {

            createHeart();

        }, i * 80);

    }

}


/* =====================================
   CONTINUOUS HEARTS
===================================== */

setInterval(() => {

    createHeart();

}, 1800);