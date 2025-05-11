// script.js
document.getElementById('fuel-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const distance = parseFloat(document.getElementById('distance').value);
    const consumption = parseFloat(document.getElementById('consumption').value);
    const price = parseFloat(document.getElementById('price').value);
    const people = parseInt(document.getElementById('people').value);
  
    if (distance > 0 && consumption > 0 && price > 0 && people > 0) {
      const fuelUsed = (distance * consumption) / 100;
      const totalCost = fuelUsed * price;
      const costPerPerson = totalCost / people;
  
      document.getElementById('result').innerHTML =
        `<strong>Całkowity koszt:</strong> ${totalCost.toFixed(2)} zł<br>
         <strong>Na osobę:</strong> ${costPerPerson.toFixed(2)} zł`;
      document.getElementById('result').classList.remove('hidden');
    } else {
      alert('Wprowadź poprawne dane!');
    }
  });
  