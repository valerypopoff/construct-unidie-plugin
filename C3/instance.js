"use strict";

{
	const PLUGIN_CLASS = SDK.Plugins.ValerypopoffUniversalDie;

	// Ignore this: yes
	PLUGIN_CLASS.Instance = class ValerypopoffUniversalDieInstance extends SDK.IInstanceBase

	{
		constructor(sdkType, inst)
		{
			super(sdkType, inst);
		}
		
		Release()
		{
		}
		
		OnCreate()
		{
		}
		
		OnPropertyChanged(id, value)
		{
		}
		
		LoadC2Property(name, valueString)
		{
			return false;		// not handled
		}
	};
}