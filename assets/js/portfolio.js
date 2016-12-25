var animateMe = function() {
  $(".css-animations p.button-wrapper button").addClass("animate-me");
  window.setTimeout(function() {
    $(".css-animations p.button-wrapper button").removeClass("animate-me");
  }, 4000)
}

var scrollContainer = function(container) {
  $(container).scrollTop(200);
}

var changeToOverflow = function(container) {
  $(container).css("overflow", "hidden");
}

var toggleBoxDisplay = function(container) {
  var container = $(container);

  if (!container.css("box-supress") || container.css("box-supress") === "show") {
    container.css("overflow", "hide");
  }
  else {
    container.css("overflow", "show");
  }
}

var animateFish = function() {
  var positionKeyframes = [ {motionOffset: "0%"}, {motionOffset: "100%"} ];
  var positionTiming = {duration: 12000, iterations: 3};
  fish.animate(positionKeyframes, positionTiming);
}

// https://w3c.github.io/webcomponents/spec/custom/
class ImageVignette extends HTMLElement {
  constructor() {
    super();
    this._imagePath = null;
  }

  static get observedAttributes() { return ["height", "src", "width"]; }

  addCSS() {
    var cssId = 'ImageVignette';  // you could encode the css path itself to generate id..
    if (!document.getElementById(cssId))
    {
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.id   = cssId;
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = '/css/image-vignette.css';
        link.media = 'all';
        head.appendChild(link);
    }
  }

  attributeChangedCallback(wcAttributeName, oldValue, newValue) {
    this._updateRendering(wcAttributeName, newValue);
  }

  connectedCallback() {
console.log("LAST"); // Trying to figure out what this event means.
    this.addCSS();
    this._whenDoesThisFire();
  }

  get src() {
    return this._imagePath;
  }

  set src(v) {
    this.setAttribute("src", v);
  }

  _whenDoesThisFire() {
  }

  _updateRendering(attributeName, attributeValue) {
    if (this.ownerDocument && this.ownerDocument.defaultView && !this.shadowRoot) {

      this.imgNode = document.createElement("img");
      this.createShadowRoot();
      this.shadowRoot.appendChild(this.imgNode);
    }

    this.shadowRoot.childNodes[0][attributeName] = attributeValue;
  }
}

customElements.define("image-vignette", ImageVignette);


// https://developer.mozilla.org/en-US/docs/Web/Web_Components/Custom_Elements
// This seems easier to understand, but does not have the callbacks.
// class ImageVignette extends HTMLElement {
//   addCSS() {
//     var cssId = 'ImageVignette';  // you could encode the css path itself to generate id..
//     if (!document.getElementById(cssId))
//     {
//         var head  = document.getElementsByTagName('head')[0];
//         var link  = document.createElement('link');
//         link.id   = cssId;
//         link.rel  = 'stylesheet';
//         link.type = 'text/css';
//         link.href = '/css/image-vignette.css';
//         link.media = 'all';
//         head.appendChild(link);
//     }
//   }

//   constructor() {
//     // Always call super first in constructor
//     super();

//     // Create a shadow root
//     var shadow = this.attachShadow({mode: 'open'});

//     shadow.innerHTML = '<style>img { display: block;}</style>';


//     var div = document.createElement('div');
//     div.className = 'fade';
//     // Add the div to the shadow root.
//     shadow.appendChild(div);

//     // Create a standard img element and set it's attributes.
//     var img = document.createElement('img');
//     img.alt = this.getAttribute('alt') || "";
//     img.height = this.getAttribute('height') || "";
//     img.src = this.getAttribute('src');
//     img.width = this.getAttribute('width') || "";
//     // img.className = 'product-img';

//     // Add the image to the shadow root.
//     shadow.appendChild(img);
//     this.addCSS();

//     // Add an event listener to the image.
//     // img.addEventListener('click', () => {
//     //   window.location = this.getAttribute('data-url');
//     // });

//     // Create a link to the product.
//     // var link = document.createElement('a');
//     // link.innerText = this.getAttribute('data-name');
//     // link.href = this.getAttribute('data-url');
//     // link.className = 'product-name';

//     // Add the link to the shadow root.
//     // shadow.appendChild(link);
//   }
// }

// // Define the new element
// customElements.define('image-vignette', ImageVignette);

// class VignetteImg extends HTMLImageElement {
//   constructor() {
//     super();

//     console.log('this', this);

//     this.style = 'border: 2px solid black; border-radius: 100%; display: block;';
//   }
// }

// customElements.define("vignette-img", VignetteImg, { extends: "img" });

document.registerElement('vignette-img',  {
  extends: 'img',
  prototype: Object.create(HTMLImageElement.prototype, {
    createdCallback: {
      value: function() {
        this.style = 'border: 2px solid blue; -moz-border-radius: 100%; -webkit-border-radius: 100%; border-radius: 100%;';
      }
    },
    attributeChangedCallback: {
      value: function() {
        this.style = 'border: 2px solid green; -moz-border-radius: 100%; -webkit-border-radius: 100%; border-radius: 100%;';
      }
    },
    _updateTemplate: {
      value: function(data) {
      }
    }
  })
});

// var ImageVignette = Object.create(HTMLElement.prototype, {
//   observedAttributes: {
//     value: function() {
//       return ["height", "src", "width"];
//     }
//   },

//   createdCallback: {
//     value: function() {
// debugger;
//       this.imgNode = document.createElement("img");
//       this.createShadowRoot().appendChild(this.imgNode);
//     }
//   },

//   attributeChangedCallback: {
//     value: function(wcAttributeName, oldValue, newValue) {
//       this._updateRendering(wcAttributeName, newValue);
//     }
//   },

//   _updateRendering: {
//     value: function(attributeName, attributeValue) {
// console.log("FIRST");
//       // if (this.ownerDocument && this.ownerDocument.defaultView && !this.hasChildNodes()) {
//       //   this.imgNode = document.createElement("img");
//       //   this.appendChild(this.imgNode);
//       // }
// debugger;
//       this.shadowRoot.childNodes[0][attributeName] = attributeValue;
//     }
//   }
// });
// document.registerElement('image-vignette', {prototype: ImageVignette});

var ImageVignetteT = Object.create(HTMLElement.prototype, {
  createdCallback: {
    value: function() {
      var t = document.querySelector('#imgvtemplate');
      var clone = document.importNode(t.content, true);
      this.createShadowRoot().appendChild(clone);

      this.setAttributes();
    }
  },

  setAttributes: {
    value: function() {
      var imageVignetteAttributes = this.attributes;

      for (var attrKey in imageVignetteAttributes) {
          if (!isNaN(attrKey)) {
            var obj = imageVignetteAttributes[attrKey];
            this.shadowRoot.children[1][obj.name] = obj.value;
          }
      }

    }
  }
});

document.registerElement('image-vignetteT', {prototype: ImageVignetteT});

$(document).ready(function () {
  var javascriptImageVignette = document.getElementById("JavascriptImageVignette") || null;

  if (javascriptImageVignette) {
    const imageVignette = document.createElement("image-vignette");
    imageVignette.setAttribute('height', 100);
    imageVignette.setAttribute('src', '/img/casual-me.jpg');
    imageVignette.setAttribute('width', 100);
    javascriptImageVignette.appendChild(imageVignette);
  }
});
