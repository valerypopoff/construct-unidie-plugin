"use strict";

{
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

	C3.Plugins.ValerypopoffUniversalDie.Acts = {};

	for( var k in ActsObject )
	{
		C3.Plugins.ValerypopoffUniversalDie.Acts[k] = ActsObject[k];
	}
}

C3.Plugins.ValerypopoffUniversalDie.Instance.prototype.ACTS = C3.Plugins.ValerypopoffUniversalDie.Acts;
