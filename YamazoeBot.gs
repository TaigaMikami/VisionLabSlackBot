function doPost(e) {
  var token = PropertiesService.getScriptProperties().getProperty('SLACK_ACCESS_TOKEN');
  var bot_name = "やまぞえさん";
  var bot_icon = "http://www.kisode.com/wp2013/wp-content/uploads/2015/03/40_yamazoe_p.jpg";
  
  var app = SlackApp.create(token);
  var messages =["はい、こんにちは","あの、ですね","ぞええええええええええええ","崇感激！","ファイおｈｊぢフォjはおいホイアホイfはい", "山添を呼びましたか？"];
  var message = messages[Math.floor(Math.random()*6)]
  
  
  return app.postMessage("#暇つぶしチャンネル", message, {
    username: bot_name,
    icon_url: bot_icon
  });
}
