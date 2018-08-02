"use strict";



{
	// Ignore this: yes
	C3.Plugins.ValerypopoffUniversalDie.Instance = class ValerypopoffUniversalDieInstance extends C3.SDKInstanceBase

	{
		constructor(inst, properties)
		{
			super(inst);
			
			// Backward compatibility for C2 runtime
			this.properties = properties;

				this.result = undefined;
		}
		
		Release()
		{
			super.Release();
		}
		
		SaveToJson()
		{
			return {
				// data to be saved for savegames
			};
		}
		
		LoadFromJson(o)
		{
			// load state for savegames
		}
	};


	var InstanceFunctionsObject = {
	randomfloat(min, max) 
    {
        return Math.random() * (max - min) + min;
    }
}
	for( var k in InstanceFunctionsObject )
	{
		C3.Plugins.ValerypopoffUniversalDie.Instance.prototype[k] = InstanceFunctionsObject[k];
	}
	
}