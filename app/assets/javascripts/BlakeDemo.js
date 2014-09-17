angular.module('BlakeDemo', [
  'Demo',
  'Attraction',
  'Wander',
  'physUtils'
  ])
.factory('BlakeDemo', function (
  Demo,
  Attraction,
  Wander,
  __hasProp,
  __extends
  ) {
  
  __extends(BlakeDemo, Demo);

  var _ref;
  function BlakeDemo() {
    _ref = BlakeDemo.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  BlakeDemo.prototype.mousemove = function(event, x, y) {
    var touch;

    event.preventDefault();
    if (event.touches && !!event.touches.length) {
      touch = event.touches[0];
      return this.mouse.pos.set(touch.pageX, touch.pageY);
    } else {
      if (!this.inside && (x == null || y == null)) {
        return this.mouse.pos.set(this.width / 2, this.height / 3);
      } else if (event.type === "mouseenter") {
        this.inside = true;
        if (this.mouse != null) {
          return this.mouse.pos.set(x, y);
        }
      }
    }

  };

  BlakeDemo.prototype.setup = function(full) {
    var attraction, i, max, p, s, _i, _results;

    if (full === null) {
      full = true;
    }
    this.physics.integrator = new ImprovedEuler();
    attraction = new Attraction(this.mouse.pos);
    max = full ? 400 : 200;
    _results = [];
    for (i = _i = 0; 0 <= max ? _i <= max : _i >= max; i = 0 <= max ? ++_i : --_i) {
      p = new Particle(Random(0.25, 4.0));
      p.setRadius(p.mass * 8);
      p.behaviours.push(new Wander(0.2));
      p.behaviours.push(attraction);
      p.moveTo(new Vector(Random(this.width), Random(this.height)));
      s = new Spring(this.mouse, p, Random(30, 300), 1.0);
      this.physics.particles.push(p);
      _results.push(this.physics.springs.push(s));
    }
    return _results;
  };

  BlakeDemo.prototype.init = function(container, renderer) {
    Demo.COLOURS = ['22242D', '3D4153', '485072', '6673A3', '97A3D3'];
    var particle, _i, _len, _ref, _ref1;
    this.container = container;
    this.renderer = renderer !== null ? renderer : new WebGLRenderer();
    this.setup(renderer.gl !== null);
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
    this.mousemove({'preventDefault' : function (){}} );

    var $balloonInstance = this;
    $balloonInstance.inside = false;
    // $(function () {
    //   $('.focusOnHover').hover(function (event) {
    //     var element = $(this);
    //     var percentage = element.offset().top / document.body.clientHeight;
    //     var screenPosition = percentage * document.documentElement.clientHeight;
    //     $balloonInstance.mousemove(event,
    //                                element.offset().left + (element.width() / 2),
    //                                screenPosition + (element.height() / 2));
    //   }, function(event) {
    //     // Reset to center.
    //     $balloonInstance.mousemove(event);
    //   });

    //   /// Re-set when hovering over main image
    //   $('.profile-image').hover(function (event) {
    //     $balloonInstance.inside = false;
    //   });
    // });

    return this.resize();
  };


  return BlakeDemo;

});

