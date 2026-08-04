const params = new URLSearchParams(window.location.search);

const game = params.get("g");

if (!game) {
    document.body.innerHTML = `
        <h1 style="
            color:white;
            font-family:Arial;
            text-align:center;
            margin-top:20%;
        ">
            No Game Selected
        </h1>
    `;
    throw new Error("No game selected.");
}

const CDN = "https://pub-565dc742bafc4ce98e66a8ee199afad0.r2.dev";

// EmulatorJS Configuration
window.EJS_player = "#game";
window.EJS_core = "pcsx_rearmed";
window.EJS_pathtodata = "data/";

window.EJS_startOnLoaded = true;

window.EJS_gameUrl = `${CDN}/ps1/${game}.chd`;
window.EJS_biosUrl = `${CDN}/bios/scph5501.bin`;

console.log("Launching:", game);
console.log("ROM:", window.EJS_gameUrl);
console.log("BIOS:", window.EJS_biosUrl);

window.EJS_DEBUG_XX = true;

// Load EmulatorJS
const script = document.createElement("script");
script.src = "data/loader.js";
document.body.appendChild(script);