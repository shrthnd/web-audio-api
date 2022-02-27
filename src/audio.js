// create web audio api context
const audio = new (window.AudioContext || window.webkitAudioContext)();
var gainNode = audio.createGain();
gainNode.connect(audio.destination);

let soft, sostenuto, damper;
let sustain = 3000; 

// https://pages.mtu.edu/~suits/NoteFreqCalcs.html
const A4 = Math.pow(2, 1/12);

// frequency
const frequency = (n) => {
  return 440 * Math.pow(A4, n);
}

// sound generator
// @string type - sine, square, sawtooth, custom
// @int frequency - in hertz
// @object webAudioContext
// @returns webAudioContext
const oscillator = (type, frequency) => {
  const oscillator = audio.createOscillator();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, audio.currentTime); // value in hertz
  // oscillator.connect(audio.destination);
  oscillator.playing = true; 
  oscillator.start();
  oscillator.connect(gainNode);

  setTimeout(() => {
    oscillator.stop(); 
  }, sustain);
  return oscillator; 
}
const gain = (value) => {
  gainNode.gain.setValueAtTime(parseFloat(value), audio.currentTime);
}

export {
    frequency,
    oscillator,
    gain,
};