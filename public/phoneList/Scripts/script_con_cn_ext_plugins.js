/**
 * @title: A common plug-in that often used in paging list.
 * @date: 2014/2/27
 */
Ext={};
Ext.apply = function(o, c, defaults){
    if(defaults){
        Ext.apply(o, defaults);
    }
    if(o && c && typeof c == 'object'){
        for(var p in c){
            o[p] = c[p];
        }
    }
    return o;
};

(function(){
    Ext.apply(Ext, {
        extend: function(){
            // inline overrides
            var io = function(o){
                for(var m in o){
                    this[m] = o[m];
                }
            };
            return function(sb, sp, overrides){
                if(typeof sp == 'object'){
                    overrides = sp;
                    sp = sb;
                    sb = function(){sp.apply(this, arguments);};
                }
                var F = function(){}, sbp, spp = sp.prototype;
                F.prototype = spp;
                sbp = sb.prototype = new F();
                sbp.constructor=sb;
                sb.superclass=spp;
                if(spp.constructor == Object.prototype.constructor){
                    spp.constructor=sp;
                }
                sb.override = function(o){
                    Ext.override(sb, o);
                };
                sbp.override = io;
                Ext.override(sb, overrides);
                return sb;
            };
        }(),
        override: function(origclass, overrides){
            if(overrides){
                var p = origclass.prototype;
                for(var method in overrides){
                    p[method] = overrides[method];
                }
            }
        },
		replaceVars: function(s, o, d){
			var reg1 = new RegExp(/{([a-zA-Z0-9 ()$+-\\*/]{2,100})}/g);
			var reg2 = new RegExp(/\$([a-zA-Z0-9]{2,100})/g);
			var res = s;
			var arr1, arr2, exp;
			while ((arr1 = reg1.exec(s)) != null){
				exp = arr1[1];
				while ((arr2 = reg2.exec(arr1[1])) != null){
					exp = exp.replace(arr2[0], d[arr2[1]] == null ? o[arr2[1]] : d[arr2[1]]);
				}
				res = res.replace(arr1[0], eval(exp));
			}
			return res;
		}
	});
})();
/**@desc: JQuery pacth (div resize not work) @date: 2014/4/4*/
(function($,window,undefined){
  '$:nomunge'; 
  var elems = $([]),
    jq_resize = $.resize = $.extend( $.resize, {} ),
    timeout_id,
    str_setTimeout = 'setTimeout',
    str_resize = 'resize',
    str_data = str_resize + '-special-event',
    str_delay = 'delay',
    str_throttle = 'throttleWindow';
    jq_resize[ str_delay ] = 250;
    jq_resize[ str_throttle ] = false;
  $.event.special[ str_resize ] = {
    setup: function() {
      
      if ( !jq_resize[ str_throttle ] && this[ str_setTimeout ] ) { return false; }
      var elem = $(this);
      elems = elems.add( elem );
      $.data( this, str_data, { w: elem.width(), h: elem.height() } );
      if ( elems.length === 1 ) {
        loopy();
      }
    },
    teardown: function() {
      
      if ( !jq_resize[ str_throttle ] && this[ str_setTimeout ] ) { return false; }
      var elem = $(this);
      elems = elems.not( elem );
      elem.removeData( str_data );
      if ( !elems.length ) {
        clearTimeout( timeout_id );
      }
    },
    add: function( handleObj ) {
      if ( !jq_resize[ str_throttle ] && this[ str_setTimeout ] ) { return false; }
      var old_handler;
      
      function new_handler( e, w, h ) {
        var elem = $(this),
          data = $.data( this, str_data );
        
        data.w = w !== undefined ? w : elem.width();
        data.h = h !== undefined ? h : elem.height();
        old_handler.apply( this, arguments );
      };
      if ( $.isFunction( handleObj ) ) {
        old_handler = handleObj;
        return new_handler;
      } else {
        old_handler = handleObj.handler;
        handleObj.handler = new_handler;
      }
    }
  };
  function loopy() {
    timeout_id = window[ str_setTimeout ](function(){
      elems.each(function(){
        var elem = $(this),
          width = elem.width(),
          height = elem.height(),
          data = $.data( this, str_data );
        if ( width !== data.w || height !== data.h ) {
          elem.trigger( str_resize, [ data.w = width, data.h = height ] );
        }
      });
      loopy();
    }, jq_resize[ str_delay ] );
  };
})(jQuery,this);
/**@desc: XPagingToolbar @date: 2014/3/5*/
Ext.XPagingToolbar = function(config){
	Ext.apply(this, config);
	if(config.renderTo){
        this.render(config.renderTo);
    }
}

Ext.extend(Ext.XPagingToolbar, Ext.constructor, {
	pageSize: 12, etcSize: 7, total: 0, page: 1,
	render: function(renderTo){
		this.template = $("<div class='x-page-com'>"+
		"<a class='x-first'>&nbsp;</a>"+
		"<a class='x-prev'>&nbsp;</a>"+
		"<span class='x-etc1'></span>"+
		"<span class='x-pseq'></span>"+	
		"<span class='x-etc2'></span>"+
		"<a class='x-next'>&nbsp;</a>"+	
		"<a class='x-last'>&nbsp;</a>"+	
		"</div>");
		var _this = this;
		var total, page, pageTotal, pseqMin, pseqMax, scrollStep = (this.etcSize-1)/2;
		var href1, href2, href3, href4, href5, href6, url = "javascript: void({$page})";
		var xfirst, xlast, xprev, xnext, xpseq;
		
		total = parseInt(this.total);
		page = parseInt(this.page);
		pageTotal = this.pageTotal!=null ? this.pageTotal: Math.ceil(total/this.pageSize);

		if(pageTotal < page||pageTotal==1)return;
		
		if(pageTotal < this.etcSize){
			pseqMin = 1;
			pseqMax = pageTotal;
		}else{
			if(page < this.etcSize){
				pseqMin = 1;
				pseqMax = this.etcSize;
			}else if(page + (this.etcSize-1) > pageTotal){
				if(pageTotal - this.etcSize > 0){
					pseqMin = pageTotal - (this.etcSize-1);
				}else {
					pseqMin = 1;
				}
				pseqMax = pageTotal;
			}else{
				pseqMin = page - scrollStep;
				pseqMax = page + scrollStep;;
			}
		}

		href1 = Ext.replaceVars(url,this,{'page':1});
		href2 = Ext.replaceVars(url,this,{'page':pageTotal});
		href3 = Ext.replaceVars(url,this,{'page':page - 1});
		href4 = Ext.replaceVars(url,this,{'page':page + 1});
		href5 = Ext.replaceVars(url,this,{'page':pseqMin - 1});//etc. boundary val
		href6 = Ext.replaceVars(url,this,{'page':pseqMax + 1});//etc. boundary val
		
		xfirst = this.template.find(".x-first");
		xlast = this.template.find(".x-last");
		xprev = this.template.find(".x-prev");
		xnext = this.template.find(".x-next");
		xpseq = this.template.find(".x-pseq");
		xetc1 = this.template.find(".x-etc1");
		xetc2 = this.template.find(".x-etc2");

		//page sequence
		for(var i=pseqMin; i<=pseqMax; i++){
			if(i==page){
				xpseq.append("<a class='cur'>"+i+"</a>");	
			}else{
				var href =Ext.replaceVars(url,this,{'page':i});
				xpseq.append("<a class='active' href='" + href + "'>"+i+"</a>");
			}
		}
		
		if(pseqMin > 1){
			directionActive(xfirst, {'href': href1, 'cls':'x-first'});
		}					
		if(pseqMax < pageTotal){
			directionActive(xlast, {'href': href2, 'cls':'x-last'});
		}
		if(page == 1){
			directionActive(xnext, {'href': href4, 'cls':'x-next'});
		}
		if(page == pageTotal){
			directionActive(xprev, {'href': href3, 'cls':'x-prev'});
		}
		if(page>1 && page<pageTotal){
			directionActive(xprev, {'href': href3, 'cls':'x-prev'});
			directionActive(xnext, {'href': href4, 'cls':'x-next'});
		}

		this.template.find("a.active").each(function(){
			var pn = this.href.match(/void\(([-\d]{0,8})\)/)[1];
			$(this).click(function(){
				this.handle = _this.handle;
				this.handle(pn);
				_this.page = pn;
				_this.refresh();
			});
		});

		function directionActive(o, c){
			o.addClass("active").attr("href", c.href);
			o.removeClass(c.cls);
			o.addClass(c.cls + "-on");
		}
		$(renderTo).empty().append(this.template);
    },
	refresh: function(){
		this.render(this.renderTo);
	},
	hide: function(){
		this.template.hide();
	},
	show: function(cfg){
		if(cfg){
			$(this.renderTo).empty();
			xpageTool.total = cfg.total;
			xpageTool.page = cfg.page;
			xpageTool.pageSize = cfg.pageSize;
			xpageTool.refresh();
		}
		this.template.show();
	}
});

/**@desc: XFilterToolbar @date: 2014/3/5*/
Ext.XFilterToolbar=function(config){
	Ext.apply(this, config);
	if(config.renderTo){
        this.render(config.renderTo);
    }
}
Ext.extend(Ext.XFilterToolbar, Ext.constructor, {
	render : function(renderTo){
		this.template = $("<div class='x-filter-sub'><ul></ul></div>");
		for(var i=0; i<this.titleArray.length; i++){
			this.template.find("ul").append("<li id='x-"+this.titleArray[i]+"' style='display:none'></li>");
		}
		var _this = this;
		this.template.find("li").each(function(){
			$(this).click(function(){
				$(this).hide().empty();
				_this.removeHandle($(this).attr("id").substring(2));
			});
		});
		$(renderTo).append(this.template);
    },
	refresh: function(){
		$(this.renderTo).empty();
		this.render(this.renderTo);
	},
	selectItem: function(o){
		this.template.find("#x-" + o.id).addClass("cur").text(o.val).show();
	},
	removeItem: function(id){
		this.template.find("#x-" + id).hide().empty();
	}
});
/**@desc: XMask @date: 2014/4/1*/
Ext.XMask = function(config){
	Ext.apply(this, config);
	if(config.renderTo){
		this.render(config.renderTo);
	}
}

Ext.extend(Ext.XMask, Ext.constructor, {
	render: function(renderTo){
		var outer = $(renderTo);
		this.template = $("<div class='x-mask-com'><div class='x-waite'></div></div>");
		var waite = this.template.find(".x-waite");
		var w = outer.width();
		var h =  outer.height();
		waite.offset({top:(h-32)/2, left:(w-32)/2});
		if(renderTo == 'body'){
			this.template.css("top", "0"); 
			this.template.css("left", "0");
			this.template.css("width", "100%");
			this.template.css("height", "100%");
		}else{
			outer.css("position", "relative");
			//this.template.css("top", outer.offset().top + "px");
			var t = this.config.top||outer.offset().top;
			var h = this.config.height||h;
			this.template.css("top", t);
			this.template.css("left", outer.offset().left + "px");
			this.template.css("width", w + "px");
			this.template.css("height", h + "px");
		}
		this.template.hide();
		this.template.appendTo(renderTo);
    },
	reload: function(){
		this.template.remove();
		this.render(this.renderTo);
	},
	bind: function(){
		var	_this = this;
		$(this.renderTo).resize(function(){
			_this.reload();
		});
	}
});

Ext.XMask.prototype.show = function(cfg) {
	if(cfg && cfg.renderTo){
		this.renderTo = cfg.renderTo;
		this.config = cfg;
		this.bind();
	}	
	this.reload();
	this.template.show(); 
}
Ext.XMask.prototype.hide = function() { 
	this.template.hide(); 
}
Ext.xmask = new Ext.XMask({renderTo:'body'});
