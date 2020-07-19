define({ 

 //Type your controller code here 
imageArray:"http://www.hotel-chinzanso-tokyo.com/wp-content/uploads/sites/225/2015/11/Hotel-Chinzanso-Tokyo_spa1.jpg,https://media-cdn.tripadvisor.com/media/photo-s/08/20/75/0d/hotel-contessa.jpg,http://www.coralseahotels.com.pg/images/uploads/gateway-12.jpg",  

setData: function() {
    var imagesString = this.imageArray; 
    var ArrayOfImages = imagesString.split(',');
    var self = this.view;
    if (self.cordTravelAds.evaluateJavaScript === undefined) {
      return;
    }
    ArrayOfImages.forEach(function(image) {
      var innerhtml = "<img class= 'mySlides' src= '" + image + "' style='width:100%'>";
      var js = "document.getElementById('slideshowdiv').innerHTML +=\"" + innerhtml + "\"";
      self.cordTravelAds.evaluateJavaScript(js);
    });
    self.cordTravelAds.evaluateJavaScript("showSlides()");
  }
 });