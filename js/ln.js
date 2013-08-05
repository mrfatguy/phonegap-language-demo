var ln = 
{
    language:
    {
        //Default values
        code: 'en',
        local: 'English',
        international: 'English'
    },
    
    init: function()
	{
        /**
         * i18next -- http://i18next.com/
         */
        i18n.init
        ({
            lng: ln.language.code,
            ns: 'general',
            useCookie: false,
            fallbackLng: 'en',
            resGetPath: 'locales/__ns__.__lng__.json'
        }, function()
        {
            $('body').i18n();
            
            ln.getLanguage();
        });
    },
    
    getLanguage: function()
    {
        navigator.globalization.getPreferredLanguage
        (
            function(lang)
            {
                //For debug purpose only!
                //var lang = {value: '\u4E2D\u6587'};
                
                ln.language.local = lang.value;
                ln.language.code = ln.nativeLanguageNameToISOCode(lang.value);
                ln.language.international = ln.nativeLanguageNameToEnglishName(lang.value);

                i18n.setLng(ln.language.code, function(t)
                {
                    $('body').i18n();
                });
            },
            function(error)
            {
                console.log(error);

                alert(i18n.t('messages.error'));
            }
        );
    },

    nativeLanguageNameToISOCode: function(lang)
    {
        var
            dict = {},
            llang = lang.toLocaleLowerCase(),
            code = lang.toLocaleLowerCase().substring(0, 2);

        /**
         * Fix certain languages' codes
         * 
         * JavaScript escapes: http://www.rishida.net/tools/conversion/
         * More languages (ISO 639-1 codes): http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
         */
        dict["polski"] = "pl"; //Polish
        dict["suomi"] = "fi"; //Finnish
        dict["nederlands"] = "nl"; //Dutch
        dict["magyar"] = "hu"; //Hungarian
        dict["filipino"] = "fil"; //Filipino
        dict["\u4E2D\u6587"] = "zh"; //Chinese
        dict["latvie\u0161u"] = "lv"; //Latvian
        dict["sloven\u010Dina"] = "sk"; //Slovak
        dict["\u010De\u0161tina"] = "cs"; //Czech
        dict["\u0E44\u0E17\u0E22"] = "th"; //Thai
        dict["t\u00FCrk\u00E7e"] = "tr"; //Turkish
        dict["lietuvi\u0173"] = "lt"; //Lithuanian
        dict["portugu\u00EAs"] = "pt"; //Portuguese
        dict["\uD55C\uAD6D\uC5B4"] = "ko"; //Korean
        dict["bahasa indonesia"] = "id"; //Indonesian
        dict["\u65E5\u672C\u8A9E"] = "id"; //Japanese
        dict["ti\u1EBFng vi\u1EC7t"] = "vi"; //Vietnamese
        dict["norsk bokm\u00E5l"] = "nb"; //Norwegian Bokmål
        dict["\u0641\u0627\u0631\u0633\u06CC"] = "fa"; //Persian
        dict["\u05E2\u05D1\u05E8\u05D9\u05EA"] = "he"; //Modern Hebrew
        dict["\u0441\u0440\u043F\u0441\u043A\u0438"] = "sr"; //Serbian
        dict["\u0627\u0644\u0639\u0631\u0628\u064A\u0629"] = "ar"; //Arabic
        dict["\u0440\u0443\u0441\u0441\u043A\u0438\u0439"] = "ru"; //Russian
        dict["\u03B5\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC"] = "el"; //Modern Greek
        dict["\u0431\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438"] = "bg"; //Bulgarian
        dict["\u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430"] = "uk"; //Ukrainian

        for(key in dict)
        {
            if(dict.hasOwnProperty(key))
            {
                if(key === llang) code = dict[key];
            }
        }

        return code;
    },

    nativeLanguageNameToEnglishName: function(lang)
    {
        var
            dict = {},
            llang = lang.toLocaleLowerCase();

        /**
         * Fix certain languages' codes
         * 
         * JavaScript escapes: http://www.rishida.net/tools/conversion/
         * More languages: http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
         */
        dict["polski"] = "Polish";
        dict["suomi"] = "Finnish";
        dict["nederlands"] = "Dutch";
        dict["magyar"] = "Hungarian";
        dict["filipino"] = "Filipino";
        dict["\u4E2D\u6587"] = "Chinese";
        dict["latvie\u0161u"] = "Latvian";
        dict["sloven\u010Dina"] = "Slovak";
        dict["\u010De\u0161tina"] = "Czech";
        dict["\u0E44\u0E17\u0E22"] = "Thai";
        dict["t\u00FCrk\u00E7e"] = "Turkish";
        dict["lietuvi\u0173"] = "Lithuanian";
        dict["portugu\u00EAs"] = "Portuguese";
        dict["\uD55C\uAD6D\uC5B4"] = "Korean";
        dict["bahasa indonesia"] = "Indonesian";
        dict["\u65E5\u672C\u8A9E"] = "Japanese";
        dict["ti\u1EBFng vi\u1EC7t"] = "Vietnamese";
        dict["norsk bokm\u00E5l"] = "Norwegian Bokm\u00E5l";
        dict["\u0641\u0627\u0631\u0633\u06CC"] = "Persian";
        dict["\u05E2\u05D1\u05E8\u05D9\u05EA"] = "Modern Hebrew";
        dict["\u0441\u0440\u043F\u0441\u043A\u0438"] = "Serbian";
        dict["\u0627\u0644\u0639\u0631\u0628\u064A\u0629"] = "Arabic";
        dict["\u0440\u0443\u0441\u0441\u043A\u0438\u0439"] = "Russian";
        dict["\u03B5\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC"] = "Modern Greek";
        dict["\u0431\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438"] = "Bulgarian";
        dict["\u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430"] = "Ukrainian";

        for(key in dict)
        {
            if(dict.hasOwnProperty(key))
            {
                if(key === llang) lang = dict[key];
            }
        }

        return lang;
    }
};

ln.init();