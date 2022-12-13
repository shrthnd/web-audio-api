import styles from './app.css'; 
import { oscillator, frequency, gain } from './audio.js'; 
import controls, { gainInput, typeInput } from './controls.js'; 

const outputs = [];
let playing = false;
let waveform = 'sine';
let sustenuto = false; 

const body = document.getElementsByTagName('body')[0];
const screen = document.createElement('main');
const title = document.createElement('h3'); 
const subtitle = document.createElement('p');

const start = () => {
  screen.appendChild(title);
  screen.appendChild(subtitle);
  screen.appendChild(controls);
  body.appendChild(screen);
  window.addEventListener('keydown', handleKeyboardInput);
  gainInput.addEventListener('input', handleGain);
  typeInput.addEventListener('input', handleWaveform);
}

const handleWaveform = (e) => {
  const value = e.target.value.toLowerCase();
  waveform = value; 
}

const handleSustain = (e) => {
  
}

const handleGain = (e) => {
  gain(e.target.value / 100);
}

const handleKeyboardInput = (e) => {
  const key = e.key;
  let note;
  let tone;
  if (!sustenuto) {
    outputs.map(o => o.stop());
  }
  switch (key) {
    case 'Escape':
      tone = '';
      playing = !playing;
      outputs.map(o => o.stop());
      break;
    case ' ':
      // stop current sounds
      // add random to outputs array and begin playing
      note = Math.floor(Math.random() * 11); 
      tone = frequency(note); 
      outputs.push(oscillator(waveform, tone));
      break;
    case 'Shift':
      sustenuto = !sustenuto;
      break;
    default:
      if (Number.isInteger(parseInt(key))) {
        note = Math.floor(key); 
        tone = frequency(note); 
        // outputs.push(oscillator('sine', tone));
        outputs.push(oscillator(waveform, tone));
      } else {
        note = Math.floor(key.charCodeAt(0) / 10); 
        tone = frequency(note); 
        outputs.push(oscillator(waveform, tone));
      }    
      break;
  }

  title.innerText = key.replace(' ', 'Spacebar'); 
  subtitle.innerText = tone.toString().replace('undefined', '');
}

start(); 