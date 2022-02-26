const screen = document.getElementById("app");

// create web audio api context
const audio = new (window.AudioContext || window.webkitAudioContext)();
const compressor = audio.createDynamicsCompressor();
const outputs = [];
let sustain = 3000; 
let playing = false;


// https://pages.mtu.edu/~suits/NoteFreqCalcs.html
const A4 = Math.pow(2, 1/12);

// frequency is the base
const frequency = (n) => {
  return 440 * Math.pow(A4, n);
}

// sound generator
// @string type - sine, square, sawtooth, custom
// @int frequency - in hertz
// @object webAudioContext - is returned
const oscillator = (type, frequency, audio) => {
  const oscillator = audio.createOscillator();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, audio.currentTime); // value in hertz
  oscillator.connect(audio.destination);
  oscillator.playing = true; 
  oscillator.start();
  setTimeout(() => {
    oscillator.stop(); 
  }, sustain);
  return oscillator; 
}

const handleInput = (e) => {
  const key = e.key;
  let note;
  let tone;

  outputs.map(o => o.stop());

  switch (key) {
    case "Escape":
      playing = !playing;
      break;
    case " ":
      // stop current sounds
      // add random to outputs array and begin playing
      note = Math.floor(Math.random() * 11); 
      tone = frequency(note); 
      outputs.push(oscillator('square', tone, audio));
      break;
    default:
      if (Number.isInteger(parseInt(key))) {
        note = Math.floor(key); 
        tone = frequency(note); 
        outputs.push(oscillator('square', tone, audio));
      } else {
        // note = Math.floor(key.charCodeAt(0) / 10); 
        // tone = frequency(note); 
        // outputs.push(oscillator('square', tone, audio));
      }    
      break;
  } 

  app.innerText = `${key.replace(" ", "Spacebar")}\n${tone} hz`;
}
window.addEventListener("keydown", handleInput);

// var oscillator_volume = audioCtx.createGain();
// oscillator_volume.gain.setValueAtTime(1, 0);
// oscillator_volume.gain.linearRampToValueAtTime(0, 10000);
// oscillator.connect(oscillator_volume);
// oscillator_volume.connect(audioCtx.destination);
