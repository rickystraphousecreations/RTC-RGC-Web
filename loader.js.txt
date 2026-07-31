const params = new URLSearchParams(window.location.search);

const game = params.get("g");

if (!game) {

    document.body.innerHTML =
        "<h1 style='color:white;text-align:center;margin-top:20%'>No Game Selected</h1>";

    throw new Error("No game selected.");

}

console.log("Loading:", game);