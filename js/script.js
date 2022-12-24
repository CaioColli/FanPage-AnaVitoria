// Menu Lateral Mobile

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  
  // Menu Lateral Mobile

  // Player Music 

// Obtenha a referência para o elemento de áudio
var audio = document.getElementById('player');

// Defina uma função para reproduzir ou pausar a música
function playPause() {
  if (audio.paused) {
    audio.play();
    document.getElementById('play-pause').innerHTML = "<img src='icons/pause.svg'>";
  } else {
    audio.pause();
    document.getElementById('play-pause').innerHTML = "<img src='icons/play.svg'>";
  }
}

// Defina uma função para aumentar o volume
function volumeUp() {
  // Verifique se o volume está no máximo
  if (audio.volume < 1) {
    // Aumente o volume em 0.1
    audio.volume += 0.1;
  }
}

// Defina uma função para diminuir o volume
function volumeDown() {
  // Verifique se o volume está no mínimo
  if (audio.volume > 0) {
    // Diminua o volume em 0.1
    audio.volume -= 0.1;
  }
}

// Adicione um evento de mudança de valor ao controlador de volume
volumeControl.addEventListener('input', () => {
  player.volume = volumeControl.value;
});

// Obtém os elementos da página
const player = document.getElementById('player');
const progressBar = document.getElementById('progress-bar');
const progress = document.getElementById('progress');

// Adiciona um manipulador de evento 'timeupdate' ao elemento <audio>
player.addEventListener('timeupdate', () => {
  // Calcula a porcentagem de progresso da música
  const percent = (player.currentTime / player.duration) * 100;

  // Atualiza a largura do elemento <span> com base na porcentagem de progresso
  progress.style.width = `${percent}%`;

  // Atualiza o texto do elemento <span> com o tempo atual e total da música
  progress.textContent = `${formatTime(player.currentTime)} / ${formatTime(player.duration)}`;
});

// Formata o tempo em minutos:segundos
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}