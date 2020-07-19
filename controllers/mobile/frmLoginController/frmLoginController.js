define({ 

 //Type your controller code here 
loginSucess: function(response) {
  var navObj = new kony.mvc.Navigation("frmHome");
  navObj.navigate();
}
 });