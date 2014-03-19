// Generated by CoffeeScript 1.6.2
/* Demo
*/

var Demo,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Demo = (function() {
  Demo.COLOURS = ['DC0048', 'F14646', '4AE6A9', '7CFF3F', '4EC9D9', 'E4272E'];
  // Demo.COLOURS = ['FF0000', '00FF00', '0000FF', 'FFFFFF', '000000', 'af0923'];

  function Demo() {
    this.mousemove = __bind(this.mousemove, this);
    this.resize = __bind(this.resize, this);    this.physics = new Physics();
    this.mouse = new Particle();
    this.mouse.fixed = true;
    this.height = window.innerHeight;
    this.width = window.innerWidth;
    this.renderTime = 0;
    this.counter = 0;
  }

  Demo.prototype.setup = function(full) {
    if (full == null) {
      return full = true;
    }
    /* Override and add paticles / springs here
    */

  };

  /* Initialise the demo (override).
  */


  Demo.prototype.init = function(container, renderer) {
    var particle, _i, _len, _ref, _ref1;

    this.container = container;
    this.renderer = renderer != null ? renderer : new WebGLRenderer();
    this.setup(renderer.gl != null);
    _ref = this.physics.particles;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      particle = _ref[_i];
      if ((_ref1 = particle.colour) == null) {
        particle.colour = Random.item(Demo.COLOURS);
      }
    }
    document.addEventListener('touchmove', this.mousemove, false);
    document.addEventListener('mousemove', this.mousemove, false);
    document.addEventListener('resize', this.resize, false);
    this.container.appendChild(this.renderer.domElement);
    this.renderer.mouse = this.mouse;
    this.renderer.init(this.physics);
    return this.resize();
  };

  /* Handler for window resize event.
  */


  Demo.prototype.resize = function(event) {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    return this.renderer.setSize(this.width, this.height);
  };

  /* Update loop.
  */


  Demo.prototype.step = function() {
    this.physics.step();
    if ((this.renderer.gl != null) || ++this.counter % 3 === 0) {
      return this.renderer.render(this.physics);
    }
  };

  /* Clean up after yourself.
  */


  Demo.prototype.destroy = function() {
    var error;

    document.removeEventListener('touchmove', this.mousemove, false);
    document.removeEventListener('mousemove', this.mousemove, false);
    document.removeEventListener('resize', this.resize, false);
    try {
      container.removeChild(this.renderer.domElement);
    } catch (_error) {
      error = _error;
    }
    this.renderer.destroy();
    this.physics.destroy();
    this.renderer = null;
    this.physics = null;
    return this.mouse = null;
  };

  /* Handler for window mousemove event.
  */


  Demo.prototype.mousemove = function(event) {
    var touch;

    event.preventDefault();
    if (event.touches && !!event.touches.length) {
      touch = event.touches[0];
      return this.mouse.pos.set(touch.pageX, touch.pageY);
    } else {
      return this.mouse.pos.set(event.clientX, event.clientY);
    }
  };

  return Demo;

})();
