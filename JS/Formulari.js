document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const resposta = document.getElementById('resposta');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nom = document.getElementById('nom').value.trim();
    const correu = document.getElementById('correu').value.trim();
    const missatge = document.getElementById('missatge').value.trim();

    if (!nom || !correu || !missatge) {
      resposta.textContent = 'Siusplau, emplena tots els camps.';
      resposta.style.color = 'red';
      return;
    }p

    // Simular envío (solo demostración)
    resposta.textContent = `¡Gràcies, ${nom}! Hem rebut el vostre missatge de${correu}`;
    resposta.style.color = 'green';

    // Limpiar campos
    form.reset();
  });
});  