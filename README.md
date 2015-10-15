# sendToStore
A very small Javascript to send your users to their device specific app store. Currently support for Android, iOS and Windows app stores. Also has a fallback option incase the redirection fails or a user visits your site from an unsupported platform.

# Usage
## Import the file
```
<script type="text/javascript" src="appredir.min.js"></script>
```
## Configure the object
```
var asConfig = new AppStoreConfig();
asConfig.windows = "https://www.microsoft.com/en-us/store/games/crowdspell-beta/9nblggh1jtls";
asConfig.android = "https://play.google.com/store/apps/details?id=com.lambda.crowdspell";
asConfig.noApp = "http://lambdaapps.in/";
```
## Send to store
```
asConfig.redirect();
```
* For the sake of the users sanity, its recommended that you redirect on click of a button, instead of redirecting them when the page loads *

# LICENSE
The MIT License (MIT), see `License` for details.