/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/notes/index.js":
/*!****************************!*\
  !*** ./src/notes/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/notes/style.scss");


// Lightweight WYSIWYG Editor Class
class DevNotesEditor {
  constructor() {
    this.editor = null;
    this.saveButton = null;
    this.statusElement = null;
    this.currentVisibility = this.getVisibilityFromHash();
  }
  init() {
    // Set initial title immediately
    this.updateTitle(this.currentVisibility);
    this.setupEventListeners();
  }
  setupEventListeners() {
    // Wait for TinyMCE to be ready
    if (typeof tinymce !== 'undefined') {
      this.initTinyMCE();
    } else {
      // Wait for TinyMCE to load
      const checkTinyMCE = setInterval(() => {
        if (typeof tinymce !== 'undefined') {
          clearInterval(checkTinyMCE);
          this.initTinyMCE();
        }
      }, 100);

      // Timeout after 10 seconds
      setTimeout(() => {
        clearInterval(checkTinyMCE);
      }, 10000);
    }
  }
  initTinyMCE() {
    // Wait a bit longer for TinyMCE to be fully initialized
    setTimeout(() => {
      // Get the TinyMCE editor instance
      this.editor = tinymce.get('devnotes-content');
      if (!this.editor) {
        // Retry after a short delay
        setTimeout(() => {
          this.editor = tinymce.get('devnotes-content');
          if (this.editor) {
            this.setupEditor();
          }
        }, 2000);
        return;
      }
      this.setupEditor();
    }, 500);
  }
  setupEditor() {
    // Setup save button
    this.setupSaveButton();

    // Setup visibility selector
    this.setupVisibilitySelector();

    // Load initial content based on stored preference
    this.loadContent(this.currentVisibility);
    this.setupSaveShortcut();
    this.addEditorSaveShortcut();

    // Add change event listener
    this.editor.on('change', () => {
      // Content changed - could add auto-save functionality here
    });

    // Setup custom image button
    this.setupImageButton();
  }
  setupSaveButton() {
    this.saveButton = document.getElementById('devnotes-save');
    this.statusElement = document.getElementById('devnotes-status');
    if (this.saveButton) {
      this.saveButton.addEventListener('click', () => {
        this.saveContent();
      });
    }
  }
  setupVisibilitySelector() {
    const visibilitySelect = document.getElementById('devnotes-visibility');
    if (visibilitySelect) {
      // Set the stored value
      visibilitySelect.value = this.currentVisibility;
      visibilitySelect.addEventListener('change', e => {
        const newVisibility = e.target.value;
        this.switchVisibility(newVisibility);
      });
    }
  }
  switchVisibility(newVisibility) {
    // Save current content before switching
    this.saveCurrentContent();

    // Switch to new visibility
    this.currentVisibility = newVisibility;

    // Update URL hash
    this.updateHash(newVisibility);

    // Update the title based on visibility
    this.updateTitle(newVisibility);

    // Load content for the new visibility
    this.loadContent(newVisibility);
  }
  updateTitle(visibility) {
    const titleElement = document.querySelector('.tabcontent-card-title');
    if (titleElement) {
      if (visibility === 'private') {
        titleElement.textContent = 'Private Notes';
      } else {
        titleElement.textContent = 'Shared Notes';
      }
    }
  }
  getVisibilityFromHash() {
    const hash = window.location.hash;
    if (hash === '#shared') {
      return 'shared';
    } else if (hash === '#private') {
      return 'private';
    }
    return 'private'; // default
  }
  updateHash(visibility) {
    const newHash = visibility === 'shared' ? '#shared' : '#private';
    if (window.location.hash !== newHash) {
      window.location.hash = newHash;
    }
  }
  saveCurrentContent() {
    if (!this.editor) return;
    const content = this.editor.getContent();

    // Save to the appropriate storage based on current visibility
    if (this.currentVisibility === 'private') {
      // Store in memory for now, will be saved when user clicks save
      this.privateContent = content;
    } else {
      this.sharedContent = content;
    }
  }
  async loadContent(visibility) {
    try {
      const response = await fetch(window.devnotesData.ajaxUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          action: 'DPDEV_load_devnotes',
          nonce: window.devnotesData.nonce,
          visibility: visibility
        })
      });
      const data = await response.json();
      if (data.success) {
        this.editor.setContent(data.data);
      } else {
        this.showNotification(data.data, 'error');
      }
    } catch (error) {
      this.showNotification('Failed to load notes', 'error');
    }
  }
  setupImageButton() {
    if (this.editor && typeof wp !== 'undefined' && wp.media) {
      this.editor.addButton('wpimage', {
        icon: 'image',
        tooltip: 'Insert/edit image',
        onclick: () => {
          const frame = wp.media({
            title: 'Select or Upload Media',
            button: {
              text: 'Use this media'
            },
            multiple: false
          });
          frame.on('select', () => {
            const attachment = frame.state().get('selection').first().toJSON();
            const imageUrl = attachment.url;
            const imageAlt = attachment.alt || '';
            const imageTitle = attachment.title || '';

            // Insert the image into the editor
            this.editor.insertContent(`<img src="${imageUrl}" alt="${imageAlt}" title="${imageTitle}" style="max-width: 100%; height: auto;" />`);
          });
          frame.open();
        }
      });
    }
  }
  addEditorSaveShortcut() {
    if (!this.editor) return;
    const saveFn = () => {
      this.saveButton?.click();
      return false; // prevent default TinyMCE behavior
    };

    // Register Cmd+S for macOS
    this.editor.addShortcut('meta+s', 'Save Notes', saveFn);

    // Register Ctrl+S for Windows/Linux
    this.editor.addShortcut('ctrl+s', 'Save Notes', saveFn);
  }
  setupSaveShortcut() {
    document.addEventListener('keydown', e => {
      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
      const isSaveShortcut = isMac && e.metaKey && e.key === 's' || !isMac && e.ctrlKey && e.key === 's';
      if (isSaveShortcut) {
        e.preventDefault();
        this.saveButton?.click(); // Triggers the same logic as clicking the button
      }
    });
  }
  async saveContent() {
    if (!this.editor) {
      this.showNotification('Editor not initialized', 'error');
      return;
    }
    try {
      this.saveButton.disabled = true;
      this.saveButton.textContent = 'Saving...';
      const content = this.editor.getContent();
      const visibility = document.getElementById('devnotes-visibility').value;
      const response = await fetch(window.devnotesData.ajaxUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          action: 'DPDEV_save_devnotes',
          nonce: window.devnotesData.nonce,
          content: content,
          visibility: visibility
        })
      });
      const data = await response.json();
      if (data.success) {
        this.showNotification(data.data, 'success');
      } else {
        this.showNotification(data.data, 'error');
      }
    } catch (error) {
      this.showNotification('Failed to save notes', 'error');
    } finally {
      this.saveButton.disabled = false;
      this.saveButton.textContent = 'Save Notes';
    }
  }
  showNotification(message, type = 'success') {
    if (this.statusElement) {
      this.statusElement.textContent = message;
      this.statusElement.className = `devnotes-status devnotes-${type}`;

      // Clear notification after 3 seconds
      setTimeout(() => {
        this.statusElement.textContent = '';
        this.statusElement.className = 'devnotes-status';
      }, 3000);
    }
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const devNotesEditor = new DevNotesEditor();
  devNotesEditor.init();
});

/***/ }),

/***/ "./src/notes/style.scss":
/*!******************************!*\
  !*** ./src/notes/style.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"notes/index": 0,
/******/ 			"notes/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkdevkit_pro"] = globalThis["webpackChunkdevkit_pro"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["notes/style-index"], () => (__webpack_require__("./src/notes/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map