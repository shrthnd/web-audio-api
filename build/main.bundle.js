/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("const screen = document.getElementById(\"app\");\r\n\r\n// create web audio api context\r\nconst audio = new (window.AudioContext || window.webkitAudioContext)();\r\nconst compressor = audio.createDynamicsCompressor();\r\nconst outputs = [];\r\nlet sustain = 3000; \r\nlet playing = false;\r\n\r\n\r\n// https://pages.mtu.edu/~suits/NoteFreqCalcs.html\r\nconst A4 = Math.pow(2, 1/12);\r\n\r\n// frequency is the base\r\nconst frequency = (n) => {\r\n  return 440 * Math.pow(A4, n);\r\n}\r\n\r\n// sound generator\r\n// @string type - sine, square, sawtooth, custom\r\n// @int frequency - in hertz\r\n// @object webAudioContext - is returned\r\nconst oscillator = (type, frequency, audio) => {\r\n  const oscillator = audio.createOscillator();\r\n  oscillator.type = type;\r\n  oscillator.frequency.setValueAtTime(frequency, audio.currentTime); // value in hertz\r\n  oscillator.connect(audio.destination);\r\n  oscillator.playing = true; \r\n  oscillator.start();\r\n  setTimeout(() => {\r\n    oscillator.stop(); \r\n  }, sustain);\r\n  return oscillator; \r\n}\r\n\r\nconst handleInput = (e) => {\r\n  const key = e.key;\r\n  let note;\r\n  let tone;\r\n\r\n  outputs.map(o => o.stop());\r\n\r\n  switch (key) {\r\n    case \"Escape\":\r\n      playing = !playing;\r\n      break;\r\n    case \" \":\r\n      // stop current sounds\r\n      // add random to outputs array and begin playing\r\n      note = Math.floor(Math.random() * 11); \r\n      tone = frequency(note); \r\n      outputs.push(oscillator('square', tone, audio));\r\n      break;\r\n    default:\r\n      if (Number.isInteger(parseInt(key))) {\r\n        note = Math.floor(key); \r\n        tone = frequency(note); \r\n        outputs.push(oscillator('square', tone, audio));\r\n      } else {\r\n        // note = Math.floor(key.charCodeAt(0) / 10); \r\n        // tone = frequency(note); \r\n        // outputs.push(oscillator('square', tone, audio));\r\n      }    \r\n      break;\r\n  } \r\n\r\n  app.innerText = `${key.replace(\" \", \"Spacebar\")}\\n${tone} hz`;\r\n}\r\nwindow.addEventListener(\"keydown\", handleInput);\r\n\r\n// var oscillator_volume = audioCtx.createGain();\r\n// oscillator_volume.gain.setValueAtTime(1, 0);\r\n// oscillator_volume.gain.linearRampToValueAtTime(0, 10000);\r\n// oscillator.connect(oscillator_volume);\r\n// oscillator_volume.connect(audioCtx.destination);\r\n\n\n//# sourceURL=webpack://audio-api/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	
/******/ })()
;