function calculateTip() {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    const numPeople = parseFloat(document.getElementById('numPeople').value);
    
    if (isNaN(billAmount) || isNaN(tipPercentage) || isNaN(numPeople) || numPeople <= 0) {
        alert("Please enter valid inputs.");
        return;
    }

    const totalTip = billAmount * (tipPercentage / 100);
    const totalBill = billAmount + totalTip;
    const tipPerPerson = totalTip / numPeople;
    const totalPerPerson = totalBill / numPeople;

    document.getElementById('tipPerPerson').innerText = `Tip per person: $${tipPerPerson.toFixed(2)}`;
    document.getElementById('totalPerPerson').innerText = `Total amount per person: $${totalPerPerson.toFixed(2)}`;
}