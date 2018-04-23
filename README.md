# GoodSheet
A tiny library that makes it easy to post and get data from a google sheet.

This was built on the work of MANY others. I'll add references soon!

![Image of demo Google Sheet](https://raw.githubusercontent.com/Luxapodular/GoodSheet/master/images/overview.png)

Getting Started (Setting up the sheet 5-10 minutes). 

There are quite a few steps, but don't get discouraged! Once you've got it set up it will be worth it! 

1. [Make a copy of this google sheet.](https://docs.google.com/spreadsheets/d/1vjSlMeILJqPGeXxj_Kv6v1m2rZtuSYpBbz6UGlDz45o/edit?usp=sharing) This is where we'll store and retrieve our data. 

!['Make a Copy' Location in google Docs](https://raw.githubusercontent.com/Luxapodular/GoodSheet/master/images/make_copy.png)

2. We're going to launch an app from this copied Google Sheet! To do this click on `Tools > Script Editor`.

!['Script Editor' Location](https://raw.githubusercontent.com/Luxapodular/GoodSheet/master/images/script_editor.png)

3. This should open a new window. You don't need to understand how this script works, but we do need to deploy a google App using it! The new window should look like this.

!['Demo Script Editor Overview'](https://raw.githubusercontent.com/Luxapodular/GoodSheet/master/images/demo_overview.png)

In the menu bar, find and press `Run > Run function > setup`. This will prepare our sheet for publishing!

!['Run Function Menu Item'](https://raw.githubusercontent.com/Luxapodular/GoodSheet/master/images/run_function.png)

4. We'll need to give our app permissions to run. Select `Review Permissions` from the pop-up window. 

!['review permissions button'](https://raw.githubusercontent.com/Luxapodular/GoodSheet/master/images/review_permissions.png)

If required, select the google account that's hosting the Google Sheet. 

!['select account image'](https://raw.githubusercontent.com/Luxapodular/GoodSheet/master/images/select_account.png)

Now we need to verify our app. Select `Advanced` from the pop-up window. 

!['not verified window'](https://raw.githubusercontent.com/Luxapodular/GoodSheet/master/images/not_verified.png)

!['advanced option'](https://raw.githubusercontent.com/Luxapodular/GoodSheet/master/images/advanced.png)

Then, select `Go to Good Sheet Demo (unsafe)`. 

!['goto good sheet demo'](https://raw.githubusercontent.com/Luxapodular/GoodSheet/master/images/goto_sheet.png)

Finally, we'll press `Allow` and we'll have given our app the permissions it needs to be published!

!['Allow App'](https://raw.githubusercontent.com/Luxapodular/GoodSheet/master/images/allow.png)

5. Phew! Now that we've got permissions all set, we'll deploy our app. Select the menu item `Publish > Deploy as Web App`. 

!['Deploy as Web App'](https://raw.githubusercontent.com/Luxapodular/GoodSheet/master/images/deploy.png)

A new window will popup with options. Make sure that 'Project Version' is "New", 'Execute the App as:' is "Me", and 'Who has access to the app:' is "Anyone, even anonymous.".

!['Anyone, even anonymous'](https://raw.githubusercontent.com/Luxapodular/GoodSheet/master/images/anyone.png)

6. Now that we've launched our app, we should have received a "web app URL" for it. Copy this. 

!['app_url'](https://raw.githubusercontent.com/Luxapodular/GoodSheet/master/images/app_url.png)

Goto `scripts.js` and replace "<Your App URL>" with the URL of your app. This must be a string! 

!['your url'](https://raw.githubusercontent.com/Luxapodular/GoodSheet/master/images/your_url.png)

7. You should now be able to call the functions inside of `scripts.js`!

