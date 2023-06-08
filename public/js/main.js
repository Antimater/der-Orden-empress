let elementSubmit = document.getElementById("sendValues");
elementSubmit.addEventListener("click", submitData);

function submitData() {
    let url = "https://github.com/Antimater/mengen/blob/master/data/data.json";

    let selectedProduct = document.getElementById("selectProduct").value;
    let inputAmount = document.getElementById("inputMenge").value;
    let inputPassword = document.getElementById("inputPassword").value;

    console.log(selectedProduct);
    console.log(inputAmount);
    console.log(inputPassword);

    fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            console.log("inputPassword");
        })

}