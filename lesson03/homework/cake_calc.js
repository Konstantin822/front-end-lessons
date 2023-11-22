function calc(){
    const energyValue = 481;
    const quantity = parseInt(document.getElementById("quantity").value);
    const exercise = document.getElementById("exercise").value;
    
    let energyTotal = 0;
    let result = '';
    
    if(exercise === '') {
      alert("Оберіть вправу");
      return false;
    }
    
    energyTotal = energyValue * quantity;
    
    if(exercise === 'walk') {
      const steps = Math.round(energyTotal * 1000 / 35);
      result = `Прогулка пішки на ${steps} кроків`;
    } else if(exercise === 'run') {
      const distance = (energyTotal / 250).toFixed(2);
      result = `Пробіжка на відстань ${distance} кілометрів`;
    } else if(exercise === 'fitness') {
      const minutes = Math.round(energyTotal * 60 / 500);
      result = `Інтенсивне заняття фітнесом протягом ${minutes} хвилин`;
    }
    
    document.getElementById("total_kkal").innerText = `${energyTotal} ккал`;
    document.getElementById("result").innerText = result;
  }