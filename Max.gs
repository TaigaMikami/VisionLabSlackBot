function doPost(e) {
  var token = PropertiesService.getScriptProperties().getProperty('SLACK_ACCESS_TOKEN');
  var bot_name = "マックス";
  var bot_icon = "https://user-images.githubusercontent.com/25325947/47483045-3792b400-d873-11e8-90eb-4eb09eb4b65b.png";
  
  var app = SlackApp.create(token);
  var messages =["ヘルメットじゃねーわ","それはあるかもしんない","マスミックスを略してマックスです！","実験やってくれない？","やまぞえさーん、大丈夫ですか？", "頑張りマックス", "ありがとうございマックス", "ラーメン、つけ麺、俺マックス"];
  var message = messages[Math.floor(Math.random()*8)]
  
  
  return app.postMessage("#暇つぶしチャンネル", message, {
    username: bot_name,
    icon_url: bot_icon
  });
}
