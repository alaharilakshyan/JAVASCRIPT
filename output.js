const inputName = document.getElementById('name');
const inputAge = document.getElementById('age');

document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    const name = inputName.value;
    const age = inputAge.value;
    const p = document.createElement('p');
    p.textContent = `Name: ${name}, Age: ${age}`;
    document.body.appendChild(p);
    inputName.value = '';
    inputAge.value = '';
});
