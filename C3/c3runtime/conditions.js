"use strict";

{
	var CndsObject =
	{
	CompareResult(cmp_, result_)
    {   
    	return cr.do_cmp(this.result, cmp_, result_);
    }
	};	

	C3.Plugins.ValerypopoffUniversalDie.Cnds = {};

	for( var k in CndsObject )
	{
		C3.Plugins.ValerypopoffUniversalDie.Cnds[k] = CndsObject[k];
	}
}

C3.Plugins.ValerypopoffUniversalDie.Instance.prototype.CNDS = C3.Plugins.ValerypopoffUniversalDie.Cnds;
