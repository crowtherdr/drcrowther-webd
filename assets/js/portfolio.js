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

// class ImageVignette extends HTMLElement {
//   constructor() {
//     super();
//     this._imagePath = null;
//   }

//   static get observedAttributes() { return ["height", "src", "width"]; }

//   attributeChangedCallback(wcAttributeName, oldValue, newValue) {
// console.log('wcAttributeName', wcAttributeName);
//     // switch (wcAttributeName) {
//     //   case "height":
//     //     this._height = newValue;
//     //     break;

//     //   case "src":
//     //     this._imagePath = newValue;
//     //     break;

//     //   case "width":
//     //     this._width = newValue;
//     //     break;
//     // }

//     this._updateRendering(wcAttributeName, newValue);
//   }
//   connectedCallback() {
// console.log("LAST");
//     this._whenDoesThisFire();
//   }

//   get src() {
//     return this._imagePath;
//   }
//   set src(v) {
//     this.setAttribute("src", v);
//   }

//   _whenDoesThisFire() {
//   }

//   _updateRendering(attributeName, attributeValue) {
// console.log("FIRST");
//     if (this.ownerDocument && this.ownerDocument.defaultView && !this.hasChildNodes()) {
//       this.imgNode = document.createElement("img");
//       this.appendChild(this.imgNode);
//     }

//     this.childNodes[0][attributeName] = attributeValue;
//   }
// }

// customElements.define("image-vignette", ImageVignette);


class ImageVignette extends HTMLElement {
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

  constructor() {
    // Always call super first in constructor
    super();

    // Create a shadow root
    var shadow = this.attachShadow({mode: 'open'});

    shadow.innerHTML = '<style>img { display: block;}</style>';


    var div = document.createElement('div');
    div.className = 'fade';
    // Add the div to the shadow root.
    shadow.appendChild(div);

    // Create a standard img element and set it's attributes.
    var img = document.createElement('img');
    img.alt = this.getAttribute('alt') || "";
    img.height = this.getAttribute('height') || "";
    img.src = this.getAttribute('src');
    img.width = this.getAttribute('width') || "";
    // img.className = 'product-img';

    // Add the image to the shadow root.
    shadow.appendChild(img);
    this.addCSS();

    // Add an event listener to the image.
    // img.addEventListener('click', () => {
    //   window.location = this.getAttribute('data-url');
    // });

    // Create a link to the product.
    // var link = document.createElement('a');
    // link.innerText = this.getAttribute('data-name');
    // link.href = this.getAttribute('data-url');
    // link.className = 'product-name';

    // Add the link to the shadow root.
    // shadow.appendChild(link);
  }
}

// Define the new element
customElements.define('image-vignette', ImageVignette);



// class VignetteImg extends HTMLImageElement {
//   constructor() {
//     super();

//     console.log('this', this);

//     this.style = 'border: 2px solid black; border-radius: 100%; display: block;';
//   }
// }

// customElements.define("vignette-img", VignetteImg, { extends: "img" });


$(document).ready(function () {
});
