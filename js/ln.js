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
        dict["bahasa indonesia"] = "id"; //Indonesian
        dict["indonesian"] = "id"; //Indonesian
        dict["bahasa melayu"] = "ms"; //Malay
        dict["bosnian"] = "bs"; //Bosnian
        dict["filipino"] = "fil"; //Filipino
        dict["galego"] = "gl"; //Galician
        dict["\u00EDslenska"] = "is"; //Icelandic
        dict["javanese"] = "jv"; //Javanese
        dict["latvie\u0161u"] = "lv"; //Latvian
        dict["lietuvi\u0173"] = "lt"; //Lithuanian
        dict["magyar"] = "hu"; //Hungarian
        dict["nederlands"] = "nl"; //Dutch
        dict["norsk bokm\u00E5l"] = "nb"; //Norwegian Bokmal
        dict["polski"] = "pl"; //Polish
        dict["portugu\u00EAs"] = "pt"; //Portuguese
        dict["shqipe"] = "sq"; //Albanian
        dict["sloven\u010Dina"] = "sk"; //Slovak
        dict["suomi"] = "fi"; //Finnish
        dict["tagalog"] = "tl"; //Tagalog
        dict["t\u00FCrk\u00E7e"] = "tr"; //Turkish
        dict["ti\u1EBFng vi\u1EC7t"] = "vi"; //Vietnamese
        dict["\u010De\u0161tina"] = "cs"; //Czech
        dict["\u09AC\u09BE\u0982\u09B2\u09BE"] = "bn";
        dict["\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD"] = "ta";
        dict["\u0C95\u0CA8\u0CCD\u0CA8\u0CA1"] = "kn";
        dict["\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41"] = "te";
        dict["\u0D2E\u0D32\u0D2F\u0D3E\u0D23\u0D4D\u0D2E"] = "ml";
        dict["\u049B\u0430\u0437\u0430\u049B \u0442\u0456\u043B\u0456"] = "kk"; //Kazakh
        dict["\u043C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438"] = "mk"; //Macedonian
        dict["\u03B5\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC"] = "el"; //Modern Greek
        dict["\u0431\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438"] = "bg"; //Bulgarian
        dict["\u0440\u0443\u0441\u0441\u043A\u0438\u0439"] = "ru"; //Russian
        dict["\u0441\u0440\u043F\u0441\u043A\u0438"] = "sr"; //Serbian
        dict["\u092E\u0930\u093E\u0920\u0940"] = "mr"; //Marathi
        dict["\u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430"] = "uk"; //Ukrainian
        dict["\u05E2\u05D1\u05E8\u05D9\u05EA"] = "he"; //Modern Hebrew
        dict["\u0627\u0644\u0639\u0631\u0628\u064A\u0629"] = "ar"; //Arabic
        dict["\u0641\u0627\u0631\u0633\u06CC"] = "fa"; //Persian
        dict["\u0E44\u0E17\u0E22"] = "th"; //Thai
        dict["\u4E2D\u6587"] = "zh"; //Chinese
        dict["\u65E5\u672C\u8A9E"] = "ja"; //Japanese
        dict["\uD55C\uAD6D\uC5B4"] = "ko"; //Korean

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
        dict["bahasa indonesia"] = "Indonesian";
        dict["indonesian"] = "Indonesian";
        dict["bahasa melayu"] = "Malay";
        dict["bosnian"] = "Bosnian";
        dict["filipino"] = "Filipino";
        dict["galego"] = "Galician";
        dict["\u00EDslenska"] = "Icelandic";
        dict["javanese"] = "Javanese";
        dict["latvie\u0161u"] = "Latvian";
        dict["lietuvi\u0173"] = "Lithuanian";
        dict["magyar"] = "Hungarian";
        dict["nederlands"] = "Dutch";
        dict["norsk bokm\u00E5l"] = "Norwegian Bokm\u00E5l";
        dict["polski"] = "Polish";
        dict["portugu\u00EAs"] = "Portuguese";
        dict["shqipe"] = "Albanian";
        dict["sloven\u010Dina"] = "Slovak";
        dict["suomi"] = "Finnish";
        dict["tagalog"] = "Tagalog";
        dict["t\u00FCrk\u00E7e"] = "Turkish";
        dict["ti\u1EBFng vi\u1EC7t"] = "Vietnamese";
        dict["\u010De\u0161tina"] = "Czech";
        dict["\u09AC\u09BE\u0982\u09B2\u09BE"] = "Bengali";
        dict["\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD"] = "Tamil";
        dict["\u0C95\u0CA8\u0CCD\u0CA8\u0CA1"] = "Kannada";
        dict["\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41"] = "Telugu";
        dict["\u0D2E\u0D32\u0D2F\u0D3E\u0D23\u0D4D\u0D2E"] = "Malayalam";
        dict["\u049B\u0430\u0437\u0430\u049B \u0442\u0456\u043B\u0456"] = "Kazakh";
        dict["\u043C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438"] = "Macedonian";
        dict["\u03B5\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC"] = "Modern Greek";
        dict["\u0431\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438"] = "Bulgarian";
        dict["\u0440\u0443\u0441\u0441\u043A\u0438\u0439"] = "Russian";
        dict["\u0441\u0440\u043F\u0441\u043A\u0438"] = "Serbian";
        dict["\u092E\u0930\u093E\u0920\u0940"] = "Marathi";
        dict["\u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430"] = "Ukrainian";
        dict["\u05E2\u05D1\u05E8\u05D9\u05EA"] = "Modern Hebrew";
        dict["\u0627\u0644\u0639\u0631\u0628\u064A\u0629"] = "Arabic";
        dict["\u0641\u0627\u0631\u0633\u06CC"] = "Persian";
        dict["\u0E44\u0E17\u0E22"] = "Thai";
        dict["\u4E2D\u6587"] = "Chinese";
        dict["\u65E5\u672C\u8A9E"] = "Japanese";
        dict["\uD55C\uAD6D\uC5B4"] = "Korean";

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