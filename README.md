# GoodSheet
A tiny library that makes it easy to post and get data from a google sheet.

This was built on the work of MANY others. I'll add references soon!

<img src="https://raw.githubusercontent.com/Luxapodular/GoodSheet/master/images/overview.png" alt="Image of demo Google Sheet" width="400" />


## API
	
### postToSheet(act, val, sheet)
Post data to the google sheet. You can edit this function to send different data! 

	act : String | Action you want to store
	val : String | Data you want to store 
	sheet : String | The sub sheet to post to
	
### getColumn(headerName, callback, sheet)
Returns all elements of a column that is headed by "headerName" as an array.

	headerName : String | Header name of the column you want. Must be in the first row of the sheet.
	callback : function | function to send array to when returned.
	sheet : String | The sub sheet to post to
	
### getItem(row, col, callback, sheet)
Returns the alement at a specific cell using A1 notation as a String. Ex. To get the item in row 3 column c, call getItem("3", "c")

	row : String | row of item to retrieve. Should be a number.
	col : String | column of item to retrieve. Should be a letter.
	callback : function | function to send array to when returned.
	sheet : String | The sub sheet to post to


## Getting Started (Setting up the sheet 5-10 minutes). 

### There are quite a few steps, but don't get discouraged! Once you've got it set up it will be worth it! 

1. [Make a copy of this google sheet.](https://docs.google.com/spreadsheets/d/1vjSlMeILJqPGeXxj_Kv6v1m2rZtuSYpBbz6UGlDz45o/edit?usp=sharing) This is where we'll store and retrieve our data.
 
<img src="https://raw.githubusercontent.com/Luxapodular/GoodSheet/master/images/make_copy.png" alt="Make a Copy' Location in google Docs" width="400" />

2. We're going to launch an app from this copied Google Sheet! To do this click on `Tools > Script Editor`.

<img src="https://raw.githubusercontent.com/Luxapodular/GoodSheet/master/images/script_editor.png" alt="'Script Editor' Location" width="400" />

3. This should open a new window. You don't need to understand how this script works, but we do need to deploy a google App using it! The new window should look like this.

<img src="https://raw.githubusercontent.com/Luxapodular/GoodSheet/master/images/demo_overview.png" alt="Demo Script Editor Overview" width="400" />

In the menu bar, find and press `Run > Run function > setup`. This will prepare our sheet for publishing!

<img src="https://raw.githubusercontent.com/Luxapodular/GoodSheet/master/images/run_function.png" alt="Run Function Menu Item" width="400" />

4. We'll need to give our app permissions to run. Select `Review Permissions` from the pop-up window. 

<img src="https://raw.githubusercontent.com/Luxapodular/GoodSheet/master/images/review_permissions.png" alt="review permissions button" width="400" />

If required, select the google account that's hosting the Google Sheet. 

<img src="https://raw.githubusercontent.com/Luxapodular/GoodSheet/master/images/select_account.png" alt="select account image" width="400" />

Now we need to verify our app. Select `Advanced` from the pop-up window. 

<img src="https://raw.githubusercontent.com/Luxapodular/GoodSheet/master/images/not_verified.png" alt="not verified window" width="400" />

Then, select `Go to Good Sheet Demo (unsafe)`  (This should be safe...). 

<img src="https://raw.githubusercontent.com/Luxapodular/GoodSheet/master/images/goto_sheet.png" alt="goto good sheet demo" width="400" />

Finally, we'll press `Allow` and we'll have given our app the permissions it needs to be published!

<img src="https://raw.githubusercontent.com/Luxapodular/GoodSheet/master/images/allow.png" alt="Allow App" width="400" />

5. Phew! Now that we've got permissions all set, we'll deploy our app. Select the menu item `Publish > Deploy as Web App`. 

<img src="https://raw.githubusercontent.com/Luxapodular/GoodSheet/master/images/deploy.png" alt="Deploy as Web App" width="400" />

A new window will popup with options. Make sure that 'Project Version' is "New", 'Execute the App as:' is "Me", and 'Who has access to the app:' is "Anyone, even anonymous.".

<img src="https://raw.githubusercontent.com/Luxapodular/GoodSheet/master/images/anyone.png" alt="Anyone, even anonymous" width="400" />

6. Now that we've launched our app, we should have received a "web app URL" for it. Copy this. 

<img src="https://raw.githubusercontent.com/Luxapodular/GoodSheet/master/images/app_url.png" alt="app_url" width="400" />

Goto `scripts.js` and replace "\<Your App URL\>" with the URL of your app. This must be a string! 

<img src="https://raw.githubusercontent.com/Luxapodular/GoodSheet/master/images/your_url.png" alt="your url" width="400" />

7. You should now be able to use the Good Sheet API with your sheet!

