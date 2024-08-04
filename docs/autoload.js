function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(function () {
    const app = {
        AccessibilityWidget: null,
        Settings: {"acOnTab":true,"customWrapper":"body","desktopCustomTrigger":null,"mobileCustomTrigger":null,"enabled":true,"localization":"en","showLogo":true,"showZoom":true,"showCursor":true,"showInvertColors":true,"showContrast":true,"showGrayScale":true,"showBrightness":true,"showHighlightLinks":true,"showHideImages":true,"showTooltip":true,"showReadingLine":true,"showReadableFonts":true,"showVoiceOverText":true,"showReadingMask":true,"showStopAnimations":false,"showPageStructure":true,"showSaturation":true,"showDyslexicFont":true,"showLineHeight":true,"showHideForever":false,"position":"bottom-right","iconSize":"medium","iconCustomSize":null,"iconColor":"#574cd5","themeColor":"#574cd5","widgetLang":"en","voiceLanguage":"Albert","voiceLanguageCode":"en-US","statementLink":null,"fixedPosition":true,"initialHide":false,"isGoogleFontDisabled":false,"isDomObserverEnabled":false,"topBottomPosition":"10","rightLeftPosition":"10","backlinkUrl":"https:\/\/accessiblyapp.com","experimentalAltTags":1},
        Name: "OTMAccessibilityWidget",
        Run: function () {
            window.AccessiblySettings = app.Settings;
            //Append Accessibility Widget
            app.AppendAccessibilityWidget(function () {
                //Configure Accessibility Widget
                app.AccessibilityWidget = app.ConfigurePlugin(app.Settings);
            });
        },
        AppendAccessibilityWidget: function (callback) {
            //Build the script element
            const scriptSrc = "https://cdn.accessibly.app/accessibility-widget-v2.min.js";

            if (!document.querySelectorAll('[src="' + scriptSrc + '"]').length > 0) {
                var script = document.createElement("script");
                script.setAttribute('data-accessibly-domain', 'df78635d-6e72-4b99-a230-bf49fd606873');

                script.src = scriptSrc;
                script.async = true;
                script.type = "text/javascript";

                script.onload = callback;
                document.head.appendChild(script);
            }
        },
        ConfigurePlugin: function (settings) {
            Accessibly.init(settings);
        },
    };

    if (typeof window["OTMAccessibilityWidget"] !== "undefined") {
        return;
    }

    app.Run();
});
