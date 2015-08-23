module griffin{
	//enum theme using class
	interface IThemeDetails{
		palatte:string[]
	}
	class theme{
		public static BLACK:IThemeDetails={
		  palatte:['A','B','C']
		};
		public static MATERIAL:IThemeDetails={
		  palatte:['X','Y','Z']	
		};
	}
}