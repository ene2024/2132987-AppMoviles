const recommendations = document.getElementById('recomendaciones');
let typingTimer;

const dummyRecommendations = ['Stranger Things', 'La sociedad de la nieve', 'Merlina', 'La leyenda de Aang', 'La Leyenda de Korra', 'Cobra Kai', 'Karate Kid'];

function mostrarRecomendaciones() {
    recommendations.innerHTML = ''; 
    const ul = document.createElement('ul');
    dummyRecommendations.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });
    recommendations.appendChild(ul);
    recommendations.style.display = 'block';
}

function esconderRecomendaciones() {
  recommendations.style.display = 'none';
}


searchInput.addEventListener('input', function() {
  clearTimeout(typingTimer);
  mostrarRecomendaciones();
  typingTimer = setTimeout(esconderRecomendaciones, 1000); 
});


searchInput.addEventListener('blur', function() {
  clearTimeout(typingTimer);
  esconderRecomendaciones();
});

