function doPost(e) {
  // 天気取得
  var response = UrlFetchApp.fetch("http://weather.livedoor.com/forecast/webservice/json/v1?city=120010"); //URL+cityID
  var json=JSON.parse(response.getContentText());
  
  var token = PropertiesService.getScriptProperties().getProperty('SLACK_ACCESS_TOKEN');
  var bot_name = "やまぞえ天気予報";
  var bot_icon = "http://www.kisode.com/wp2013/wp-content/uploads/2015/03/40_yamazoe_p.jpg";
  
  var app = SlackApp.create(token);
  var message = "やまぞえの今日の天気予報です\n" + ":japan:" + json["forecasts"][0]["telop"] + "\n" 
                 + ":thermometer:" + json["forecasts"][0]["temperature"]["max"]["celsius"] + "℃です\n"
                 + "明日の天気は " + json["forecasts"][1]["telop"] + " 気温は " + json["forecasts"][0]["temperature"]["max"]["celsius"] + "℃ です\n"
                 + "\n"
                 + ":y::y::y::y::y::y::y::y::y::y::y::y::y::y::y::y::y:\n"
                 + "ちなみに、詳しい天気予報は以下の通りです\n"
                 + json["description"]["text"]
    Logger.log(message);
  
  return app.postMessage("#暇つぶしチャンネル", message, {
    username: bot_name,
    icon_url: bot_icon
  });
}
