if (typeof TrackrightLoader === 'undefined') {
    const TrackrightLoader = function(options) {
        if (!(this instanceof TrackrightLoader)) return new TrackrightLoader(options);

        this.options = options;
        this.initialized = false;
        this.core = null;

        if (!document.querySelectorAll('[src="' + "https:\/\/cdn.trackright.com\/trackright-analytics.min.js" + '"]').length > 0) {
            const script = document.createElement("script");
            script.src = "https:\/\/cdn.trackright.com\/trackright-analytics.min.js";
            script.async = true;
            script.type = "text/javascript";

            script.onload = this.initialize;

            document.head.appendChild(script);
        };
    };

    (function(TrackrightLoader) {
        TrackrightLoader.prototype.getOptions = function() {
            return this.options;
        };

        /**
        * Function called when the javascript has been loaded
        */
        TrackrightLoader.prototype.initialize = function() {
            const options = window.TrackrightLoader.getOptions();

            window.Trackright = window.Trackright.init(options)
        }

        return TrackrightLoader;
    })(TrackrightLoader);

    window.TrackrightLoader = TrackrightLoader({"token":"abpuk3r3cb","domain":"8fd8e2af-7c74-45e6-94c3-0a4bd19cd59c","trackPageViews":true,"trackSubmissions":true});
}
