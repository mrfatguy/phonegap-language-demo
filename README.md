PhoneGap Demo Language
======================
Example of PhoneGap 2.9.0 / PhoneGap Build multi-language application, using [i18next ](http://i18next.com/) library.

Tested on four different devices and Android versions:

- Samsung Galaxy Nexus with Android 4.3,
- Sony Xperia E with Android 4.1.1,
- LG GT540 with Android 2.3.3 and CyanogenMod, 
- GSmart Rola G1317D with Android 2.2.2.

Seems fine on all of them.

To use it in your own project, follow these steps:

1. Include jQuery, i18next and `ln.js` in your project and add reference all of them in your `index.html`.

2. Add `deviceready` event handler and init `ln` in it:

    document.addEventListener('deviceready', deviceReadyHandler, false);

    function deviceReadyHandler()
    {
        ln.init();
    }

3. You're done. Your application should detect current language upon startup and should self-translate to desired language (in proper locale file exists), using _i18next_ library.

4. Change, if you wish, default language and/or default _i18next_ library settings in the beginning of `ln.js` file.

5. Don't forget to add proper locale files to `locales` folder. Consult [i18next library documentation](http://i18next.com/pages/doc_init.html) and examples in this project, for more info.