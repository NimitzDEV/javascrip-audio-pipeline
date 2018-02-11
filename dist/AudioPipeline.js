!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.AudioPipeline=t()}(this,function(){"use strict";var e=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();return function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.source=null,this.nodes=[],this.audioCtx=new(window.AudioContext||window.webkitAudioContext)}return e(t,[{key:"loadArrayBuffer",value:function(e){var t=this;return new Promise(function(n,o){t.audioCtx.decodeAudioData(e,function(e){t.source=t.audioCtx.createBufferSource(),t.source.buffer=e,n()})})}},{key:"control",value:function(){var e=Array.prototype.slice.call(arguments),t=e[0];e.shift(),this.source[t].apply(this.source,e)}},{key:"fullConnect",value:function(){for(var e=0;e<this.nodes.length-1;e++)this.nodes[e].connect(this.nodes[e+1])}},{key:"fullDisconnect",value:function(){for(var e=0;e<this.nodes.length-1;e++)this.nodes[e].disconnect(this.nodes[e+1])}},{key:"addNode",value:function(e,t){return arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&this.nodes.length&&(t<0&&(t=0),t>this.nodes.length&&(t=this.nodes.length),0!==t&&t<this.nodes.length&&(this.nodes[t-1].disconnect(this.nodes[t]),this.nodes[t-1].connect(e),e.connect(this.nodes[t])),0===t&&e.connect(this.nodes[0]),t===this.nodes.length&&this.nodes[this.nodes.length-1].connect(e)),"number"!=typeof t&&(t=this.nodes.length),this.nodes.splice(t,0,e)}},{key:"deleteNode",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return"number"==typeof e&&(!(e>this.nodes.length-1)&&(t&&this.nodes.length>1&&(e<0&&(e=0),0!==e&&e<this.nodes.length-1&&(this.nodes[e].disconnect(this.nodes[e+1]),this.nodes[e-1].disconnect(this.nodes[e]),this.nodes[e-1].connect(this.nodes[e+1])),0===e&&this.nodes[0].disconnect(this.nodes[1]),e===this.nodes.length-1&&this.nodes[e-1].disconnect(this.nodes[e])),this.nodes.splice(e,1)))}},{key:"switchNodes",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("number"!=typeof e||"number"!=typeof t)return!1;if(e>this.nodes.length-1||t>this.nodes.length-1)return!1;e<0&&(e=0),t<0&&(t=0);var o=this.deleteNode(e,n),i=this.deleteNode(t,n);return e>t?(this.addNode(o[0],t,n),this.addNode(i[0],e,n)):(this.addNode(i[0],e,n),this.addNode(o[0],t,n)),!1}},{key:"getNode",value:function(e){return e=e<0?0:e,this.nodes[e]}},{key:"clearNodes",value:function(){this.nodes=[]}},{key:"getBiquadFilterNode",value:function(e){var t=this.audioCtx.createBiquadFilter();return t.type=e,t}},{key:"getOscillatorNode",value:function(e){var t=this.audioCtx.createOscillator();return t.type=e||"sine",t}},{key:"getGainNode",value:function(e){e=e||0;var t=this.audioCtx.createGain();return t.gain.value=e,t}},{key:"getDelayNode",value:function(e){e=e||0;var t=this.audioCtx.createDelay();return t.delayTime.value=e,t}},{key:"getPannerNode",value:function(){return this.audioCtx.createPanner()}},{key:"getPeriodicWave",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=this.audioCtx.createOscillator(),i=this.audioCtx.createPeriodicWave(e,t,n);return o.setPeriodicWave(i),o}},{key:"getWaveShaperNode",value:function(){return this.audioCtx.createWaveShaper()}},{key:"getDestinationNode",value:function(){return this.audioCtx.destination}},{key:"getSourceNode",value:function(){return this.source}},{key:"getContext",value:function(){return this.audioCtx}}]),t}()});
