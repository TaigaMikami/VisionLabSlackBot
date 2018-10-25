function myFunction() {
  var response = UrlFetchApp.fetch("http://weather.livedoor.com/forecast/webservice/json/v1?city=120010"); //URL+cityID
  var json=JSON.parse(response.getContentText());
  Logger.log(json["description"]);
 
}
