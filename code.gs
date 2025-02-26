function doGet(e) {
  var x = HtmlService.createTemplateFromFile("loginregister");
  var y = x.evaluate();
  var z = y.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  return z;
}

function checkLogin(username, password) {
  var url = 'https://docs.google.com/spreadsheets/d/1zuBGJ9vozW3j9HMI24I6OB0A9keSvMIPeq9y3t-Y-AM/edit?gid=0#gid=0';
  var ss= SpreadsheetApp.openByUrl(url);
  var webAppSheet = ss.getSheetByName("simple");
  var getLastRow =  webAppSheet.getLastRow();
  var found_record = '';
  for(var i = 1; i <= getLastRow; i++)
  {
   if(webAppSheet.getRange(i, 1).getValue().toUpperCase() == username.toUpperCase() && 
     webAppSheet.getRange(i, 2).getValue().toUpperCase() == password.toUpperCase())
   {
     found_record = 'TRUE';
   }    
  }
  if(found_record == '')
  {
    found_record = 'FALSE'; 
  }
  
  return found_record;
  
}

function AddRecord(usernamee, passwordd, email, phone) {
  var url = 'https://docs.google.com/spreadsheets/d/1zuBGJ9vozW3j9HMI24I6OB0A9keSvMIPeq9y3t-Y-AM/edit?gid=0#gid=0';
  var ss= SpreadsheetApp.openByUrl(url);
  var webAppSheet = ss.getSheetByName("loginregister");
  webAppSheet.appendRow([usernamee,passwordd,email,phone]);
  
}
