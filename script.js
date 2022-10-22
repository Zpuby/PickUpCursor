// window.addEventListener('DOMContentLoaded', () =>
// {
//     const body = document.querySelector('body');
//     body.childNodes.forEach(node=>
//         {
//             console.log(node);
//         })
// })

const API = "FNyRZwr62kLmTIimuITHHz2JuHRbCJ60FdN4mMnX";


const button = document.querySelector(".new-cursor");
let image = document.querySelector("svg");
console.log(image);




button.addEventListener("click", GetIcon)

function getLink() {
    let rand = getRndInteger(10, 1000);

    let authUrl =
        `https://api-icons.icons8.com/publicApi/icons/icon?id=${rand}&token=${API}`;
    return authUrl;
}

function CreateSvgIcon(SVG) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(SVG, "image/svg+xml");
    return doc.children[0];
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

async function GetIcon() {
    const response = await fetch(getLink());
    console.log(response);
    // do {
    // const response = await fetch(getLink());
    // console.log(response);
    // } while (response.success != true);



    let data = await response.json();
    while (data.success != true) {
        const response = await fetch(getLink());
        console.log(response);
        data = await response.json();
    }
    console.log(data);

    // temp svg for test
    // var SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M 1.8125 2 C 1.78125 2.007813 1.75 2.019531 1.71875 2.03125 C 0.746094 2.167969 0 2.992188 0 4 C 0 5.105469 0.894531 6 2 6 C 3.105469 6 4 5.105469 4 4 L 8.65625 4 C 9.902344 4 10.550781 4.257813 11.03125 4.6875 C 11.503906 5.113281 11.886719 5.832031 12.21875 6.9375 L 20.21875 39.21875 C 20.519531 40.363281 20.820313 41.542969 21.65625 42.5 C 22.003906 42.898438 22.441406 43.222656 22.96875 43.46875 C 22.382813 44.164063 22 45.027344 22 46 C 22 48.199219 23.800781 50 26 50 C 28.199219 50 30 48.199219 30 46 C 30 45.265625 29.785156 44.59375 29.4375 44 L 35.5625 44 C 35.214844 44.59375 35 45.265625 35 46 C 35 48.199219 36.800781 50 39 50 C 41.199219 50 43 48.199219 43 46 C 43 44.972656 42.582031 44.054688 41.9375 43.34375 C 42.050781 43.039063 42.003906 42.695313 41.820313 42.429688 C 41.632813 42.160156 41.328125 42 41 42 L 25.71875 42 C 24.175781 42 23.546875 41.671875 23.125 41.1875 C 22.707031 40.707031 22.453125 39.867188 22.15625 38.75 L 22.15625 38.71875 L 21.46875 36 L 39.8125 36 C 40.230469 36 40.609375 35.738281 40.75 35.34375 L 47.9375 16.34375 C 48.054688 16.039063 48.011719 15.695313 47.824219 15.425781 C 47.636719 15.15625 47.328125 14.996094 47 15 L 16.28125 15 L 14.15625 6.46875 C 14.15625 6.449219 14.15625 6.425781 14.15625 6.40625 C 13.773438 5.117188 13.277344 4 12.375 3.1875 C 11.472656 2.375 10.203125 2 8.65625 2 L 2 2 C 1.96875 2 1.9375 2 1.90625 2 C 1.875 2 1.84375 2 1.8125 2 Z M 16.78125 17 L 45.5625 17 L 39.125 34 L 21 34 Z M 26 44 C 27.117188 44 28 44.882813 28 46 C 28 47.117188 27.117188 48 26 48 C 24.882813 48 24 47.117188 24 46 C 24 44.882813 24.882813 44 26 44 Z M 39 44 C 40.117188 44 41 44.882813 41 46 C 41 47.117188 40.117188 48 39 48 C 37.882813 48 37 47.117188 37 46 C 37 44.882813 37.882813 44 39 44 Z"/></svg>`;

    console.log(CreateSvgIcon(data.icon.svg));
    let image = document.querySelector("svg");
    image.parentNode.replaceChild(CreateSvgIcon(data.icon.svg), image);
}

// GetIcon();