document.querySelector('button[onclick="runMapDemo()"]').addEventListener('click', () => {
    const map = new Map();
    map.set('name', 'Alice');
    map.set('age', 30);
    map.set('country', 'Wonderland');
  
    const outputElement = document.querySelector('#mapOutput');
    outputElement.innerHTML = ''; // Очистить предыдущий вывод
  
    map.forEach((value, key) => {
      const div = document.createElement('div');
      div.textContent = `Key: ${key}, Value: ${value}`;
      outputElement.appendChild(div);
    });
  });
  
  document.querySelector('button[onclick="runSetDemo()"]').addEventListener('click', () => {
    const set = new Set();
    set.add('Apple');
    set.add('Banana');
    set.add('Cherry');
  
    const outputElement = document.querySelector('#setOutput');
    outputElement.innerHTML = ''; // Очистить предыдущий вывод
  
    set.forEach((value) => {
      const div = document.createElement('div');
      div.textContent = `Value: ${value}`;
      outputElement.appendChild(div);
    });
  });
  