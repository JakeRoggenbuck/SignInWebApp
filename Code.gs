function doGet(e){

  Logger.log(e);
  return HtmlService.createHtmlOutputFromFile("page");
}


function userClicked(username, password){
  var url = "https://docs.google.com/spreadsheets/d/16LpaaV4dFf6kiMjzpXen2YyMHXoQ85-Pm-ZBouVjH4M/edit#gid=0"
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Data");
  //ws.appendRow([username, password]);
  
  var sheet = SpreadsheetApp.openByUrl(url);
  var data = sheet.getDataRange().getValues();
  for (var i = 0; i < data.length; i++) {
    if(username == (data[i][0]) && password == (data[i][1])){
      Logger.log("Yeah");
    }
  }
}function doGet(e){

  Logger.log(e);
  return HtmlService.createHtmlOutputFromFile("page");
}


function userClicked(username, password){
  var url = "https://docs.google.com/spreadsheets/d/16LpaaV4dFf6kiMjzpXen2YyMHXoQ85-Pm-ZBouVjH4M/edit#gid=0"
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Data");
  //ws.appendRow([username, password]);

  var sheet = SpreadsheetApp.openByUrl(url);
  var data = sheet.getDataRange().getValues();
  for (var i = 0; i < data.length; i++) {
    if(username == (data[i][0]) && password == (data[i][1])){
      Logger.log("Yeah");
    }
  }
}
