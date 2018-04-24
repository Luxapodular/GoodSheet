// Change the "url" value to the url of your web app;
APP_URL = "<YOUR_APP_URL>";

function sendObj(obj) {
    var response = $.ajax(
    {
      url: APP_URL, 
      method: "GET",
      dataType: "json",
      data: obj,
    }).success();
}

function postToSheet(sheet, act, val) {
  
  payload = {
    timestamp: new Date().getTime(),
    action: act,
    value: val,
    sheetName: sheet,
    post: true,
  }
  
  sendObj(payload); 
}

function getColumn(headerName, callback) {
  obj = {
    getColumn: true,
    headerName: headerName, 
  }
  
  // If no callback supplied, just log the result. 
  if (callback === undefined) {
    callback = console.log; 
  }
  
  response = $.ajax(
    {
      url: APP_URL, 
      method: "GET",
      dataType: "json",
      data: obj,
      success: function(response) { callback(response.column) },
    }).success();
}

function runColumnCallback(response, callback) {
  callback(response.column); 
}