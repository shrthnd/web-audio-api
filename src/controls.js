const gainControl = document.createElement('div');
const gainInput = document.createElement('input');
const gainLabel = document.createElement('label');

gainInput.classList.add('controls-input');
gainInput.type = 'range'; 

gainLabel.classList.add('controls-label');
gainLabel.for = 'gain';
gainLabel.innerText = 'Gain:';

gainControl.classList.add('controls-gain');
gainControl.appendChild(gainLabel);
gainControl.appendChild(gainInput);


const typeControl = document.createElement('div');
const typeInput = document.createElement('select');
const typeLabel = document.createElement('label');
typeInput.classList.add('controls-input');
["Sine", "Square", "Sawtooth"].map((option) => {
  const element = document.createElement('option');
  element.textContent = option;
  typeInput.appendChild(element);
});

typeLabel.classList.add('controls-label');
typeLabel.for = 'type';
typeLabel.innerText = 'Waveform:';

typeControl.classList.add('controls-type');
typeControl.appendChild(typeLabel);
typeControl.appendChild(typeInput);


const controls = document.createElement('fieldset');
controls.classList.add('controls');
controls.appendChild(gainControl);
controls.appendChild(typeControl);

export {
  gainInput,
  typeInput
}

export default controls;