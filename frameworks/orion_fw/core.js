// ==========================================================================
// OrionFw Framework
// ==========================================================================

OrionFw = SC.Object.create({
  
  // When you are in development mode, this array will be populated with 
  // any fixtures you create for testing and loaded automatically in your
  // main method.  When in production, this will be an empty array.
  //
  // You will use this most often when running unit tests in dev mode.
  //
  FIXTURES: [],
  
  // Add any global constants or other properties used by the entire
  // framework:
  // CONSTANT_NAME:  'some-value'

  server: SC.RestServer.create({ prefix: ['OrionFw'], postFormat: SC.JSON_FORMAT}),
 
  standardResource: "/~maurits/sproutcore_orion/"
  
}) ;


/*
OrionFw.getLoginCookie = function(){
	if(document.cookie.length>0){
		var cookieName = "OrionLoginCookie";
		var nameStart = document.cookie.indexOf(cookieName + "=");
		if(nameStart != -1){
			nameStart = nameStart + cookieName.length+1;
			var nameEnd = document.cookie.indexOf(";",nameStart);
			if(nameEnd == -1) nameEnd=document.cookie.length;
			return unescape(document.cookie.substring(nameStart,nameEnd));	
		}
			
	}
	return "";
}

OrionFw.setLoginCookie = function(logintype){
	var expdate = new Date();
	expdate.setDate(expdate.getDate() + 60);
	var expiry = ";expires=" + expdate.toGMTString();
	var typedata = "OrionLoginCookie=" + logintype;
	var endcookie = [typedata,expiry].join("");
	document.cookie = endcookie;
}

*/