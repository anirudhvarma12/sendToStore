function AppStoreConfig() {

};

AppStoreConfig.prototype.redirect = function () {
    var sendToStore = function (url, noApp) {
        if (url) {
            window.location.href = url;
        } else {
            window.location.href = noApp;
        }
    };

    sendToStore(this.getStoreLink(), this.noApp);
};

AppStoreConfig.prototype.getStoreLink = function () {
    if (this.isDevice("windows")) {
        return (this.windows);
    } else if (this.isDevice("android")) {
        return (this.android);
    } else if (this.isDevice("ipad")) {
        return (this.ios);
    } else if (this.isDevice("iphone")) {
        return (this.iphone);
    }
};



AppStoreConfig.prototype.isDevice = function (name) {
    return (navigator.userAgent.toLowerCase().indexOf(name) > -1);
};