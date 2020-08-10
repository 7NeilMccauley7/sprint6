console.log("Hello this is a console massage");

function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.show-amount");
    let amountNumber = parseInt(amountInput.value);


    /*isNan parancs beépített fügvény. Adunk neki egy változót és megmondja róla hogy Nan vagy nem NaN*/
    /*
    if (isNaN(amountNumber)) {
        amountNumber = 0;
    }

*/
        /*3 operandusos kifejezés. azt mondja ki az isNaN(amountNumber)-ban hogy igaz e az hogy isNaN az amountNumber.
        HA igaz akkor a ? után értéket fogja visszadni. Ha NEM igaz akkor a : pont utánit. */ 

    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
  
    
    if (amountNumber > 10) {
        alert("Maximum 10 terméket vásárolhat!");
       
    } else if (amountNumber < 1) {
        alert("Minimum 1 terméket kell vásárolnia!");
    } else {

    let amount = amountNumber * price;
    showAmount.innerHTML = amount;
    }

    
    /*alert("Fizetendő: " + amount + "Ft");*/ /*- alert*/
}

