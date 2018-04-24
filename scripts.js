// Change the "url" value to the url of your web app;
APP_URL = "<YOUR_APP_URL>";

// Post data to the google sheet. You can edit this function to send different data! 

// act : String | Action you want to store
// val : String | Data you want to store 
// sheet : String | The sub sheet to post to
function postToSheet(act, val, sheet) {
  
  // NOTE: The keys in your payload must have headers on the sheet you are sending to!
  payload = {
    timestamp: new Date().getTime(),
    action: act,
    value: val,
    sheetName: sheet,
    post: true,
  }
  
  sendPayload(payload); 
}

// Returns all elements of a column that is headed by "headerName" as an array.

// headerName : String | Header name of the column you want. Must be in the first row of the sheet.
// callback : function | function to send array to when returned.
// sheet : String | The sub sheet to post to
function getColumn(headerName, callback, sheet) {
  payload = {
    getColumn: true,
    headerName: headerName, 
    sheetName: sheet,
  }
  
  sendPayload(payload, callback, "column"); 
}

// Returns the alement at a specific cell using A1 notation. Ex. TO get the item in row 3 column c, call getItem("3", "c")

// row : String | row of item to retrieve. Should be a number.
// col : String | column of item to retrieve. Should be a letter.
// callback : function | function to send array to when returned.
// sheet : String | The sub sheet to post to
function getItem(row, col, callback, sheet) {
  payload = {
    getItem: true,
    cell: col+row,
    sheetName: sheet,
  }
  
  sendPayload(payload, callback, "cell"); 
}

function runColumnCallback(response, callback) {
  callback(response.column); 
}

function sendPayload(payload, callback, key) {
  
  // If no callback supplied, just log the result. 
  if (callback === undefined) {
    callback = console.log; 
  }
  
  response = $.ajax(
    {
      url: APP_URL, 
      method: "GET",
      dataType: "json",
      data: payload,
      success: function(response) { 
        if (key !== undefined){
          callback(response[key]);
        } else {
          callback(response); 
        }
      },
    }).success();
}