const bill = document.getElementById("bill");
const tip = document.getElementById("tip");
const btn = document.getElementById("btn");
const total = document.getElementById("total");


btn.addEventListener("click", () => {
    const billValue = bill.value;
    const tipValue = tip.value;

    if(isNaN(billValue) || isNaN(tipValue)) {
        alert("Please enter a valid number!");
    } else {
        let percentage = billValue * (1 + tipValue / 100);
        total.innerHTML = `${percentage.toFixed(2)}`;
    }
})