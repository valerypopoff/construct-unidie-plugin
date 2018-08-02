// ECMAScript 5 strict mode
"use strict";

	var __CONSTRUCT2_RUNTIME2__ = true;
	var __CONSTRUCT3_RUNTIME2__ = false;
	var __CONSTRUCT3_RUNTIME3__ = false;


assert2(cr, "cr namespace not created");
assert2(cr.plugins_, "cr.plugins_ not created");

/////////////////////////////////////
// Plugin class
cr.plugins_.ValerypopoffUniversalDie = function(runtime)
{
	this.runtime = runtime;
};

(function ()
{
	var pluginProto = cr.plugins_.ValerypopoffUniversalDie.prototype;
		
	/////////////////////////////////////
	// Object type class
	pluginProto.Type = function(plugin)
	{
		this.plugin = plugin;
		this.runtime = plugin.runtime;
	};

	var typeProto = pluginProto.Type.prototype;

	// called on startup for each object type
	typeProto.onCreate = function()
	{
	};

	/////////////////////////////////////
	// Instance class
	pluginProto.Instance = function(type)
	{
		this.type = type;
		this.runtime = type.runtime;
		
		// any other properties you need, e.g...
		// this.myValue = 0;
	};
	
	var instanceProto = pluginProto.Instance.prototype;

	instanceProto.onCreate = function()
	{
			this.result = undefined;
	};
	
	// only called if a layout object - draw to a canvas 2D context
	instanceProto.draw = function(ctx)
	{
	};
	
	// only called if a layout object in WebGL mode - draw to the WebGL context
	// 'glw' is not a WebGL context, it's a wrapper - you can find its methods in GLWrap.js in the install
	// directory or just copy what other plugins do.
	instanceProto.drawGL = function (glw)
	{
	};

	
	
	var InstanceFunctionsObject = {
	randomfloat(min, max) 
    {
        return Math.random() * (max - min) + min;
    }
}
	for( var k in InstanceFunctionsObject )
	{
		instanceProto[k] = InstanceFunctionsObject[k];
	}


	//////////////////////////////////////
	// Conditions
	function Cnds() {};

	var CndsObject =
	{
	CompareResult(cmp_, result_)
    {   
    	return cr.do_cmp(this.result, cmp_, result_);
    }
	};

	for( var k in CndsObject )
	{
		Cnds.prototype[k] = CndsObject[k];
	}
	
	pluginProto.cnds = new Cnds();


	//////////////////////////////////////
	// Actions
	function Acts() {};

	var ActsObject =
	{
	RollDie(params_)
	{
        //console.log("LENGTH: " + params_.length);
        //console.log("FIRST: " + params_[0]);

        var number = this.randomfloat(0,100);
        
        var cumm = 0;
        this.result = 0;
        for( var i=0; i<params_.length; i++ )
        {
            cumm += params_[i];
            
            if( number <= cumm )
            break;
            
            this.result++;
        }
	}
	};

	for( var k in ActsObject )
	{
		Acts.prototype[k] = ActsObject[k];
	}

	
	pluginProto.acts = new Acts();


	//////////////////////////////////////
	// Expressions
	function Exps() {};

	var ExpsObject =
	{
	Result() 
    {
	    //- C2-C3 COMPATIBILITY -------------------------
	    var params_ = Array.from(arguments);
	    var ret;

	    if( __CONSTRUCT3_RUNTIME3__ )
	    	ret = {set_int(){}, set_float(){}, set_string(){}, set_any(){}};
		else
			ret = params_[0];		
		//----------------------------------------------

	    
    	ret.set_any( this.result );
    	
    	if( __CONSTRUCT3_RUNTIME3__ )
    	return this.result;
    }
	};

	for( var k in ExpsObject )
	{
		Exps.prototype[k] = ExpsObject[k];
	}
	
	pluginProto.exps = new Exps();

	instanceProto.EXPS = pluginProto.exps;
	instanceProto.CNDS = pluginProto.cnds;
	instanceProto.ACTS = pluginProto.acts;
}());