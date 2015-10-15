var AppStoreConfig = function () {

};

AppStoreConfig.prototype.redirect = function () {
    var sendToStore = function (url, noApp) {
        if (url) {
            window.location.href = url;
        } else {
            window.location.href = noApp;
        }
    }

    if (this.isDevice("windows")) {
        sendToStore(this.windows, this.noApp);
    } else if (this.isDevice("android")) {
        sendToStore(this.android, this.noApp);
    } else if (this.isDevice("ipad")) {
        sendToStore(this.ios, this.noApp);
    } else if (this.isDevice("iphone")) {
        sendToStore(this.iphone, this.noApp);
    }
}



AppStoreConfig.prototype.isDevice = function (name) {
    if (navigator.userAgent.toLowerCase().indexOf(name) > -1) {
        return true;
    } else {
        return false;
    }
}