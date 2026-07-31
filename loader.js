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
} else {
    document.body.innerHTML = `
        <h1 style="
            color:white;
            font-family:Arial;
            text-align:center;
            margin-top:20%;
        ">
            Loading ${game}...
        </h1>
    `;

    console.log("Loading:", game);
}