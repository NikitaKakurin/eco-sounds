/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./style/media.scss":
/*!**************************!*\
  !*** ./style/media.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./style/style.scss":
/*!**************************!*\
  !*** ./style/style.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./style/normalize.css":
/*!*****************************!*\
  !*** ./style/normalize.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./nativeSounds.js":
/*!*************************!*\
  !*** ./nativeSounds.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EcoSound": () => (/* binding */ EcoSound)
/* harmony export */ });
/* harmony import */ var _assets_eco_sounds_audio_forest_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/eco-sounds/audio/forest.mp3 */ "./assets/eco-sounds/audio/forest.mp3");
/* harmony import */ var _assets_eco_sounds_audio_solovey_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/eco-sounds/audio/solovey.mp3 */ "./assets/eco-sounds/audio/solovey.mp3");
/* harmony import */ var _assets_eco_sounds_audio_slavka_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/eco-sounds/audio/slavka.mp3 */ "./assets/eco-sounds/audio/slavka.mp3");
/* harmony import */ var _assets_eco_sounds_audio_javoronok_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/eco-sounds/audio/javoronok.mp3 */ "./assets/eco-sounds/audio/javoronok.mp3");
/* harmony import */ var _assets_eco_sounds_audio_zarynka_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/eco-sounds/audio/zarynka.mp3 */ "./assets/eco-sounds/audio/zarynka.mp3");
/* harmony import */ var _assets_eco_sounds_audio_drozd_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/eco-sounds/audio/drozd.mp3 */ "./assets/eco-sounds/audio/drozd.mp3");
/* harmony import */ var _assets_eco_sounds_img_forest_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/eco-sounds/img/forest.jpg */ "./assets/eco-sounds/img/forest.jpg");
/* harmony import */ var _assets_eco_sounds_img_solovey_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/eco-sounds/img/solovey.jpg */ "./assets/eco-sounds/img/solovey.jpg");
/* harmony import */ var _assets_eco_sounds_img_slavka_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/eco-sounds/img/slavka.jpg */ "./assets/eco-sounds/img/slavka.jpg");
/* harmony import */ var _assets_eco_sounds_img_javoronok_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/eco-sounds/img/javoronok.jpg */ "./assets/eco-sounds/img/javoronok.jpg");
/* harmony import */ var _assets_eco_sounds_img_zarynka_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/eco-sounds/img/zarynka.jpg */ "./assets/eco-sounds/img/zarynka.jpg");
/* harmony import */ var _assets_eco_sounds_img_drozd_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/eco-sounds/img/drozd.jpg */ "./assets/eco-sounds/img/drozd.jpg");














class EcoSound{
    constructor(selector){
        this.ecoSound = document.querySelector(selector);
        if(!this.ecoSound){
            throw new Error('Eco-sounds not found')
        }
        this.audio = this.ecoSound.querySelector('.eco-main__audio');
        this.mainIcon = this.ecoSound.querySelector('.eco-main__main-icon');
        this.logo = this.ecoSound.querySelector('.eco-logo');
        this.menuButtons = this.ecoSound.querySelectorAll('[data-sound]');
        this.controlsButtons = this.ecoSound.querySelectorAll('[data-sound]');
        this.ecoMain = this.ecoSound.querySelector('.eco-main');
        this.volumeButton = this.ecoSound.querySelector('.eco__controls-volume')
        this.currentVolumePointer = this.ecoSound.querySelector('.eco__controls-volume-range-current');
        this.volumeRangeUp = this.ecoSound.querySelector('.eco__controls-volume-range-up');
        this.volumeRangeDown = this.ecoSound.querySelector('.eco__controls-volume-range-down');
        this.mainText = this.ecoSound.querySelector('.eco-main__text');
        this.btnPlay = this.ecoSound.querySelector('.eco__controls-btn-play');
        this.btnPause = this.ecoSound.querySelector('.eco__controls-btn-pause');
        this.allVolumeHeight = this.volumeRangeDown.clientHeight + 
                                this.volumeRangeUp.clientHeight + 
                                this.currentVolumePointer.clientHeight;
        this.sounds = {
            drozd: _assets_eco_sounds_audio_drozd_mp3__WEBPACK_IMPORTED_MODULE_5__,
            zarynka: _assets_eco_sounds_audio_zarynka_mp3__WEBPACK_IMPORTED_MODULE_4__,
            javoronok: _assets_eco_sounds_audio_javoronok_mp3__WEBPACK_IMPORTED_MODULE_3__,
            slavka: _assets_eco_sounds_audio_slavka_mp3__WEBPACK_IMPORTED_MODULE_2__,
            forest: _assets_eco_sounds_audio_forest_mp3__WEBPACK_IMPORTED_MODULE_0__,
            solovey: _assets_eco_sounds_audio_solovey_mp3__WEBPACK_IMPORTED_MODULE_1__,
        }

        this.pictures = {
            drozd: _assets_eco_sounds_img_drozd_jpg__WEBPACK_IMPORTED_MODULE_11__,
            zarynka: _assets_eco_sounds_img_zarynka_jpg__WEBPACK_IMPORTED_MODULE_10__,
            javoronok: _assets_eco_sounds_img_javoronok_jpg__WEBPACK_IMPORTED_MODULE_9__,
            slavka: _assets_eco_sounds_img_slavka_jpg__WEBPACK_IMPORTED_MODULE_8__,
            solovey: _assets_eco_sounds_img_solovey_jpg__WEBPACK_IMPORTED_MODULE_7__,
            forest: _assets_eco_sounds_img_forest_jpg__WEBPACK_IMPORTED_MODULE_6__,
        }

        this.sound = new Audio(this.sounds.forest);
        this.currentBackground = 'forest';
        this.currentTime = 0;
        this.currentSound = 'forest';
        this.volume=this.sound.volume;
        this.isSoundOn = true;
        this.isSoundPicture = true;
        this.hideTextTimeout=null;
        this.hideMainIconTimeout=null;
        this.changePictureInterval=null;
        this.CurrentMainText = "Лес";
        this.initEventListeners();
        this.setVolume((this.volumeRangeDown.clientHeight+(this.currentVolumePointer.clientHeight/2))/this.allVolumeHeight);
        this.preloadImages();
        this.listenerMouseMove=this.handleMouseMoveOnVolume.bind(this);
        this.listenerMouseUp=this.handleMouseUpOnVolume.bind(this);
    }

    preloadImages(){
        for(let key in this.pictures){
            const img = new Image();
            img.src = this.pictures[key];
        }
    }
    
    initEventListeners(){
        this.ecoSound.addEventListener('click', this.handleClick.bind(this));
        this.sound.addEventListener("volumechange", this.handleVolumeChange.bind(this),{passive:true});
        this.sound.addEventListener("play", this.handlePlaySound.bind(this));
        this.sound.addEventListener("pause", this.handlePauseSound.bind(this));
        this.sound.addEventListener('ended',this.handleEndSound.bind(this));
        this.ecoSound.addEventListener('mousedown', this.handleMouseDown.bind(this));
        this.ecoSound.addEventListener('wheel', this.handleWheel.bind(this));
        this.ecoSound.addEventListener('mousemove', this.handleMouseMoveOnEcoSound.bind(this))
        document.addEventListener("keydown", this.handleKeyDown.bind(this));
    }
    
    handleEndSound(event){
        this.changeOnNextSound(1);
    }

    handleKeyDown(event){
        if(event.code === 'Space'){
            event.preventDefault();
            this.togglePlaySound();
            return;          
        };
        if(event.code === 'ArrowRight'){
            this.changeOnNextSound(1);
            return;
        }
        if(event.code === 'ArrowLeft'){
            this.changeOnNextSound(-1);
            return;
        }
    }

    handleMouseMoveOnEcoSound(event){
        if(this.hideMainIconTimeout){
            clearTimeout(this.hideMainIconTimeout)
        }

        if(this.changePictureInterval){
            clearInterval(this.changePictureInterval)
        }

        if(this.mainIcon.classList.contains('eco-main__main-icon-hide')){
            this.mainIcon.classList.remove('eco-main__main-icon-hide')
        }

        this.hideMainIconTimeout = setTimeout(()=>{
            this.mainIcon.classList.add('eco-main__main-icon-hide')
        },1000)
        
        this.changePictureInterval = setInterval(()=>{
            let fileNames =Object.keys(this.pictures);
            
            const randomPictures = () => {
                let key = fileNames[Math.floor(Math.random()*fileNames.length)]
                while (key===this.currentBackground) {
                    key = fileNames[Math.floor(Math.random()*fileNames.length)] 
                }
                return key;
            }

            this.changeBackgroundMain(randomPictures())
        },5000)
    }

    handleWheel(event){
        this.setVolume(this.sound.volume - event.deltaY/2000)
    }

    handleClick(event){
        let target = event.target;

        if(target.dataset.sound){
            this.changeSound(target);
            return;
        }

        if(target.classList.contains("eco-main__main-icon")){
            this.togglePlaySound();
            return;
        }

        if(target.classList.contains("eco__controls-btn-play")){
            if(this.sound.paused){
                this.playSound();
                return
            }
        }
    
        if(target.classList.contains("eco__controls-btn-pause")){
            if(!this.sound.paused){
                this.pauseSound();
                return
            }
        }

        if(target.classList.contains("eco__controls-volume")){
            this.toggleSoundVolume(target);
            return;
        }

        if(target.classList.contains("eco__controls-btn-download")){
            this.downloadFile(target)
        }
    }

    handleMouseDown(event){
        const target = event.target;
        if(target.classList.contains("eco__controls-volume-range")){
            this.topOfVolume = this.volumeRangeUp.getBoundingClientRect().top
            let level = +(1 - (event.clientY-this.topOfVolume)/this.allVolumeHeight);
            this.setVolume(level)
            this.ecoSound.addEventListener("mousemove",this.listenerMouseMove)
            this.ecoSound.addEventListener("mouseup",this.listenerMouseUp)
        }   
    }

    handleMouseUpOnVolume(event){
        this.ecoSound.removeEventListener("mousemove",this.listenerMouseMove);
        this.ecoSound.removeEventListener("mouseup",this.listenerMouseUp);
    }

    handleMouseMoveOnVolume(event){
        if(event.target.classList.contains("eco__controls-volume-range")||
            event.target.closest(".eco__controls-volume-range-container")){
            let level = +(1 - (event.clientY-this.topOfVolume)/this.allVolumeHeight);
            this.setVolume(level)
        }
    }

    handleVolumeChange(event){
        if(this.sound.volume===0){
            this.setMuteIcon()
            this.isSoundPicture = false;
        }else if(this.isSoundPicture === false){
            this.setVolumeIcon();
            this.isSoundPicture = true;
        }
        this.moveCurrentVolumePointer(+this.sound.volume.toFixed(2))
        this.showMainText();
    }

    handlePlaySound(){
        this.activatePlayBtn()
        this.mainIcon.classList.add("eco-main__main-icon-pause");
        this.showMainText(this.CurrentMainText);
    }

    handlePauseSound(){
        this.activatePauseBtn()
        this.mainIcon.classList.remove("eco-main__main-icon-pause");
    }

    changeOnNextSound(step){
        let nextSound = this.findNextSound(step);
        let target = document.querySelector(`[data-sound = ${nextSound}]`)
        this.changeSound(target);
    }

    findNextSound(step){
        const ArrayOfFileNames = Object.keys(this.sounds);
        let numberOfNextSound = ArrayOfFileNames.indexOf(this.currentSound)+step;
        if(numberOfNextSound>ArrayOfFileNames.length-1){
            numberOfNextSound=0;
        }else if(numberOfNextSound<0){
            numberOfNextSound = ArrayOfFileNames.length-1;
        }
        return ArrayOfFileNames[numberOfNextSound];
    }

    changeSound(target){
        this.setCurrentMainText(target.innerText)
        this.SetSrcAudio(target.dataset.sound);
        this.changeActiveButton(target);
        this.changeBackgroundMain(target.dataset.sound);
    }

    activatePlayBtn(){
            this.btnPause.classList.remove('eco__controls-btn-active');
            this.btnPlay.classList.add('eco__controls-btn-active');
    }

    activatePauseBtn(){
            this.btnPlay.classList.remove('eco__controls-btn-active');
            this.btnPause.classList.add('eco__controls-btn-active');
    }

    downloadFile(target){
        let link = document.createElement('a');
        link.setAttribute('href', this.sounds[this.currentSound]);
        link.setAttribute('download', this.sounds[this.currentSound]);
        link.click();
        return false;
    }

    setCurrentMainText(text){
        if(!text){
            this.CurrentMainText = "Лес";
            return;
        }
        this.CurrentMainText = text;
    }

    showMainText(text){
        let showingText;
        if(this.hideTextTimeout){
            clearTimeout(this.hideTextTimeout);         
        }
        if(this.firstShovingText){
            showingText = this.firstShovingText;
            this.firstShovingText=null;
        }else{
            showingText = text || Math.round(this.sound.volume*100)+"%";
        }

        this.mainText.style.opacity = 1;
        this.mainText.innerText = showingText;
        this.hideTextTimeout = setTimeout(()=>this.mainText.style.opacity = 0,1000)
    }

    moveCurrentVolumePointer(level){
        let fixHeight = (height)=>(height<0)? '0px': (height +'px');
        let halfHeightPointer = this.currentVolumePointer.clientHeight/2;
        this.volumeRangeDown.style.height = fixHeight(this.allVolumeHeight*level-halfHeightPointer);
        this.volumeRangeUp.style.height = fixHeight(this.allVolumeHeight*(1-level)-halfHeightPointer);
    }

    setVolume(VolumeLevel){
        let level=VolumeLevel
        if(level < 0){
            level = 0;
        }else if(level > 1){
            level = 1;
        }
        this.sound.volume = +level.toFixed(2);
    }

    toggleSoundVolume(target){
        if(this.isSoundOn){
            this.volume = this.sound.volume
            this.setVolume(0);
            this.isSoundOn = false;
            return;
        }
        this.setVolume(this.volume);
        this.isSoundOn = true;
    }

    setMuteIcon(){
        this.volumeButton.classList.add("eco__controls-volume-off") 
    }

    setVolumeIcon(){
        this.volumeButton.classList.remove("eco__controls-volume-off") 
    }

    togglePlaySound(){
        if(this.sound.paused){
            this.playSound()
            return;
        }
        this.pauseSound()
    }

    playSound(){
        this.sound.currentTime = this.currentTime;
        this.sound.play();
    }

    pauseSound(){
        this.currentTime = this.sound.currentTime;
        this.sound.pause();
    }
    
    SetSrcAudio(fileName){
        let volume = this.sound.volume;
        this.sound.pause();
        this.sound.src=this.sounds[fileName]
        this.currentSound = fileName;
        this.setVolume(volume);
        this.sound.play();
        this.firstShovingText = `${this.CurrentMainText}\n${Math.floor(volume*100)}%`;
    }



    changeActiveButton(target){
        if(target.classList.contains('eco-menu__btn-active')||
            target.classList.contains('eco-logo-active')){
                return;
        }

        this.removeActiveClassMenuButtons()

        if(target.classList.contains('eco-logo')){
            target.classList.add('eco-logo-active');
            return
        }
        target.classList.add('eco-menu__btn-active');
    }

    removeActiveClassMenuButtons(){
        this.menuButtons.forEach(btn => {
            if(btn.classList.contains('eco-logo-active')){
                btn.classList.remove('eco-logo-active');
                return;
            }
            btn.classList.remove('eco-menu__btn-active')
        });
    }
   
    changeBackgroundMain(fileName){
        if(this.currentBackground===fileName){
            return;
        }
        this.currentBackground=fileName;
        this.ecoMain.style.backgroundImage = `url(${this.pictures[fileName]})`;
    }
}

/***/ }),

/***/ "./assets/eco-sounds/audio/drozd.mp3":
/*!*******************************************!*\
  !*** ./assets/eco-sounds/audio/drozd.mp3 ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c613b7869536b0872699.mp3";

/***/ }),

/***/ "./assets/eco-sounds/audio/forest.mp3":
/*!********************************************!*\
  !*** ./assets/eco-sounds/audio/forest.mp3 ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d5d26885eedab4b66dec.mp3";

/***/ }),

/***/ "./assets/eco-sounds/audio/javoronok.mp3":
/*!***********************************************!*\
  !*** ./assets/eco-sounds/audio/javoronok.mp3 ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "db83795788aecc6eb051.mp3";

/***/ }),

/***/ "./assets/eco-sounds/audio/slavka.mp3":
/*!********************************************!*\
  !*** ./assets/eco-sounds/audio/slavka.mp3 ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7cd9334e33b530e91f22.mp3";

/***/ }),

/***/ "./assets/eco-sounds/audio/solovey.mp3":
/*!*********************************************!*\
  !*** ./assets/eco-sounds/audio/solovey.mp3 ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "12b1b05bcc4078f80336.mp3";

/***/ }),

/***/ "./assets/eco-sounds/audio/zarynka.mp3":
/*!*********************************************!*\
  !*** ./assets/eco-sounds/audio/zarynka.mp3 ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "562ae51ebb0701689f47.mp3";

/***/ }),

/***/ "./assets/eco-sounds/img/drozd.jpg":
/*!*****************************************!*\
  !*** ./assets/eco-sounds/img/drozd.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5c4994f77688806dd5ba.jpg";

/***/ }),

/***/ "./assets/eco-sounds/img/forest.jpg":
/*!******************************************!*\
  !*** ./assets/eco-sounds/img/forest.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3162ea8c9a89630e9bc7.jpg";

/***/ }),

/***/ "./assets/eco-sounds/img/javoronok.jpg":
/*!*********************************************!*\
  !*** ./assets/eco-sounds/img/javoronok.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "81d43c1ddf32fb095fb4.jpg";

/***/ }),

/***/ "./assets/eco-sounds/img/slavka.jpg":
/*!******************************************!*\
  !*** ./assets/eco-sounds/img/slavka.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "19b1b3a98bc484fe8043.jpg";

/***/ }),

/***/ "./assets/eco-sounds/img/solovey.jpg":
/*!*******************************************!*\
  !*** ./assets/eco-sounds/img/solovey.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "94b96fd2e5f2a5c1ce6a.jpg";

/***/ }),

/***/ "./assets/eco-sounds/img/zarynka.jpg":
/*!*******************************************!*\
  !*** ./assets/eco-sounds/img/zarynka.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "61c59367ce37e94afa19.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/normalize.css */ "./style/normalize.css");
/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/style.scss */ "./style/style.scss");
/* harmony import */ var _style_media_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/media.scss */ "./style/media.scss");



const { EcoSound } = __webpack_require__(/*! ./nativeSounds */ "./nativeSounds.js");
const eco = new EcoSound('.eco-container');

console.log(`Привет! Работу оцениваю в 60 баллов.
При отсутствии движения мышки через одну секунду 
исчезает кнопка посреди экрана, через 3 секунды 
начинают рандомно меняться картинки автоматически.

Нажатие пробела работает как пуск/пауза,
стрелками клавиатуры(влево,вправо) можно переключать 
на следующую/предыдущую мелодию.

Колесиком мышки можно регулировать громкость,также 
громкость можно регулировать ползунком громкости 
и отключать звук кликнув по заначку громкости.

После завершения мелодии автоматически начинается
следующая.

Так же возможно скачивание выбранной мелодии`);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map