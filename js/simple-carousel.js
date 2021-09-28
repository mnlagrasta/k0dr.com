$(document).ready(function() {
    $('head').append('<style> \
    .carousel, .carousel ul { \
        position:relative; \
        clear:both; \
    } \
    \
    .carousel { \
        overflow: hidden; \
    } \
    \
    .carousel .carousel-content { \
        list-style-type:none; \
        position: relative; \
        white-space: nowrap; \
        -webkit-transform: translate3d(0,0,0); \
        -moz-transform: translate3d(0,0,0); \
        -ms-transform: translate3d(0,0,0); \
        -o-transform: translate3d(0,0,0); \
        transform: translate3d(0,0,0); \
        padding: 0; \
        margin: 0; \
        font-size: 0; \
    } \
    .carousel .carousel-content.transition { \
        -webkit-transition: left .6s ease;\
        -moz-transition: left .6s ease;\
        -ms-transition: left .6s ease;\
        -o-transition: left .6s ease;\
        transition: left .6s ease;\
    } \
    \
    .carousel .carousel-item { \
        display: inline-block; \
        vertical-align: top; \
        width: 100%; \
        backface-visibility: hidden; \
    } \
    .carousel .carousel-item .carousel-item-content { \
        margin: 0 auto; \
        white-space: normal; \
        font-size: 13px; \
    } \
    </style>');
});

function Carousel(el) {
    $(el).addClass('carousel');
    $(el).find('> *').addClass('carousel-item');
	$(el).wrapInner('<div class="carousel-content transition">');
	$(el).find('.carousel-item').wrapInner('<div class="carousel-item-content"></div>');
	
    this.el = el;
    this.pos = 0;
    this.count = $(el + ' .carousel-item').length;
    this.index = 0;
    this.t;
    this.auto_next_enabled = false;
    this.auto_prev_enabled = false;
    this.auto_paused = false;
    this.pause_auto_on_mouse_over = true;
    this.rTimeout = false; // whether or not to restart the timeout after move is finished
    
    var instance = this;
    
    $(el + ' .carousel-content').css('left', 0);
    $(el + ' .carousel-item').each(function(index) {
        $(this).attr('data-index', index);
    });
    $(el + ' .carousel-item[data-index=' + this.index + ']').addClass('active');
    
    $(el + ' .carousel-content').on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd KhtmlTransitionEnd", function() {
        if (instance.rTimeout) {
            instance.rTimeout = false;
            instance.auto_restart_timeout();
        } else {
            instance.check_auto();
        }
    });
    
    $(el).resize(function() {
        instance.fix_pos();
    });
    $(window).resize(function(){
        instance.fix_pos();
    });
}

/*----------------------------
	Auto
-----------------------------*/

Carousel.prototype.auto_next = function(interval) {
    this.stop_auto();
    this.auto_next_enabled = true;
    this.interval = interval;
    this.check_auto();
}

Carousel.prototype.auto_previous = function(interval) {
    this.stop_auto();
    this.auto_prev_enabled = true;
    this.interval = interval;
    this.check_auto();
}

Carousel.prototype.auto_set_paused = function(paused) {
    if (this.auto_paused == paused)
        return;
    if (this.auto_next_enabled || this.auto_prev_enabled) {
        this.auto_paused = paused;
        if (paused) {
            clearInterval(this.t);
        } else {
            this.check_auto();
        }
    }
}

Carousel.prototype.auto_restart_timeout = function() {
    if (this.auto_next_enabled || this.auto_prev_enabled) {
        clearInterval(this.t);
        this.auto_paused = false;
        this.check_auto();
    }
}

Carousel.prototype.check_auto = function() {
    var instance = this;
    if (this.auto_next_enabled) {
        clearInterval(this.t);
        this.t = setTimeout(function(){
            if (instance.pause_auto_on_mouse_over && $(instance.el).is(":hover")) {
                instance.check_auto();
            } else {
                instance.next(true);
            }
        }, this.interval);
    }
    if (this.auto_prev_enabled) {
        clearInterval(this.t);
        this.t = setTimeout(function(){
            if (instance.pause_auto_on_mouse_over && $(instance.el).is(":hover")) {
                instance.check_auto();
            } else {
                instance.previous(true);
            }
        }, this.interval);
    }
}

Carousel.prototype.stop_auto = function() {
    this.auto_next_enabled = false;
    this.auto_prev_enabled = false;
    
    clearInterval(this.t);
}

/*----------------------------
	Movement
-----------------------------*/

Carousel.prototype.next = function(rTimeout) {
    this.move_to((this.index == this.count - 1) ? 0 : this.index + 1, rTimeout);
}

Carousel.prototype.previous = function(rTimeout) {
	this.move_to((this.index == 0) ? this.count-1 : this.index-1, rTimeout);
}

Carousel.prototype.move_to = function(index, rTimeout) {
    if (index < 0 || index > (this.count - 1) || index == this.index)
        return;
	this.rTimeout = (typeof rTimeout === 'undefined') ? true : rTimeout;
        
    $(this.el + ' .carousel-item[data-index=' + this.index + ']').removeClass('active');
    $(this.el + ' .carousel-item[data-index=' + index + ']').addClass('active');
	
    this.pos = -($(this.el + ' .carousel-content').outerWidth()) * (this.index = index);
    $(this.el + ' .carousel-content').css('left', this.pos);
}

Carousel.prototype.fix_pos = function() {
    this.pos = -($(this.el + ' .carousel-content').outerWidth()) * this.index;
    $(this.el + ' .carousel-content').css('left', this.pos);
}