function doPost(e) {
  var token = PropertiesService.getScriptProperties().getProperty('SLACK_ACCESS_TOKEN');
  var bot_name = "やまぞえ電車";
  var bot_icon = "http://www.kisode.com/wp2013/wp-content/uploads/2015/03/40_yamazoe_p.jpg";
  
  var app = SlackApp.create(token);
  
  var message = "やまぞえが電車の運行状況をお知らせします\n\ｎ" + scrapingSoubuChuoJR() + "\n\n" + scrapingSoubuKaisokuJR() + "\n\n" + scrapingKeisei()
  
  return app.postMessage("#暇つぶしチャンネル", message, {
    username: bot_name,
    icon_url: bot_icon
  });
}

// 京成線
function scrapingKeisei() {
  var url = "http://www.jikokuhyo.co.jp/search/detail/line_is/kanto_keisei";
  var html = UrlFetchApp.fetch(url).getContentText();

  var doc = Parser.data(html).from('<div class="corner_block top_pad">').to('<div class="corner_block_footer2">').build();
  
  // 運行情報のエリア
  var area = Parser.data(doc).from('<span class="accent_color">').to('</span>').build()

  // 運行状況
  var operateStatus = Parser.data(doc).from('<div class="corner_block_row_detail_d" style="padding-left:5px;">').to('</div>').build()
  Logger.log(operateStatus)
  
  var text = ":train: " + area + " :train:" + operateStatus
  return text
}

// 中央総武線
function scrapingSoubuChuoJR() {
  var url = "http://www.jikokuhyo.co.jp/search/detail/line_is/kanto_chuosobu";
  var html = UrlFetchApp.fetch(url).getContentText();

  var doc = Parser.data(html).from('<div class="corner_block top_pad">').to('<div class="corner_block_footer2">').build();
  
  // 運行情報のエリア
  var area = Parser.data(doc).from('<img class="whiteBatch" src="/static/common/imgs/whitebtn.gif" width="4" height="22">').to('<a href="http://www.jikokuhyo.co.jp/search/detail/line_is/kanto_chuosobu">').build()

  // 運行状況
  var operateStatus = Parser.data(doc).from('<div class="corner_block_row_detail_d" style="padding-left:5px;">').to('</div>').build()
  Logger.log(operateStatus)
  var text = ":railway_car: " + area + " :railway_car:" + operateStatus
  return text
}

// 総武快速線
function scrapingSoubuKaisokuJR() {
  var url = "http://www.jikokuhyo.co.jp/search/detail/line_is/kanto_sobukaisoku";
  var html = UrlFetchApp.fetch(url).getContentText();

  var doc = Parser.data(html).from('<div class="corner_block top_pad">').to('<div class="corner_block_footer2">').build();
  
  // 運行情報のエリア
  var area = Parser.data(doc).from('<img class="whiteBatch" src="/static/common/imgs/whitebtn.gif" width="4" height="22">').to('<a href="http://www.jikokuhyo.co.jp/search/detail/line_is/kanto_sobukaisoku">').build()

  // 運行状況
  var operateStatus = Parser.data(doc).from('<div class="corner_block_row_detail_d" style="padding-left:5px;">').to('</div>').build()
  Logger.log(operateStatus)
  var text = ":light_rail: " + area + " :light_rail:" + operateStatus
  return text
}
