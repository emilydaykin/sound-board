const buttons = document.querySelectorAll('.sound');
const audio = document.querySelector('audio');
const lyricsSpan = document.querySelector('.lyrics');
const reset = document.querySelector('.reset');
const playAll = document.querySelector('.play-all');

function playClickedSound(event) {
  const soundFile = event.target.classList[0];
  audio.src = `./sounds/${soundFile}.wav`;
  audio.play();
}

function playChorus() {
  const lyrics = {
    work_it: 'Work It',
    make_it: 'Make It',
    do_it: 'Do It',
    makes_us: 'Makes Us',
    harder: 'Harder',
    better: 'Better',
    faster: 'Faster',
    stronger: 'Stronger',
    more_than: 'More Than',
    hour: 'Hour',
    our: 'Our',
    never: 'Never',
    ever: 'Ever',
    after: 'After',
    work_is: 'Work Is',
    over: 'Over'
  };

  let index = 0;
  while (audio.paused && index < 13) {
    // not playing
    audio.src = `./sounds/${Object.keys(lyrics)[index]}.wav`;
    audio.play();
    lyricsSpan.innerHTML = `${lyrics[Object.keys(lyrics)[index]]}`;
    reset.classList.remove('hide');
    audio.addEventListener('ended', function () {
      if (index < 15) {
        index++;
        audio.src = `./sounds/${Object.keys(lyrics)[index]}.wav`;
        audio.play();
        lyricsSpan.innerHTML += `, ${lyrics[Object.keys(lyrics)[index]]}`;
      }
    });
  }
}

function isPlaying(audioFile) {
  return !audioFile.paused;
}

function addLyrics(event) {
  const buttonLyric = event.target.innerHTML;

  if (lyricsSpan.innerHTML === '') {
    lyricsSpan.innerHTML = buttonLyric;
  } else {
    lyricsSpan.innerHTML += `, ${buttonLyric}`;
  }
  reset.classList.remove('hide');
}

buttons.forEach((button) => {
  button.addEventListener('click', playClickedSound);
  button.addEventListener('click', addLyrics);
});

playAll.addEventListener('click', playChorus);

reset.addEventListener('click', () => {
  window.location.reload();
});
