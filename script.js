const trackNameElement = document.getElementById('trackName');
const albumImageElement = document.getElementById('albumImage');

async function fetchNowPlaying() {
  try {
    const response = await fetch('http://status.rcast.net/71275');
    const trackName = await response.text();
    trackNameElement.textContent = trackName;

    const imageUrl = 'https://players.rcast.net/artistimageonly/71275';
    albumImageElement.src = imageUrl;
  } catch (error) {
    console.error('Erro ao buscar informações da música:', error);
  }
}

fetchNowPlaying();
setInterval(fetchNowPlaying, 30000); // Atualiza a cada 30 segundos
