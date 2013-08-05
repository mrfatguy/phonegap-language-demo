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

```js
document.addEventListener('deviceready', deviceReadyHandler, false);

function deviceReadyHandler()
{
    ln.init();
}
```

3. You're done. Your application should detect current language upon startup and should self-translate to desired language (in proper locale file exists), using _i18next_ library.

4. Change, if you wish, default language and/or default _i18next_ library settings in the beginning of `ln.js` file.

5. Don't forget to add proper locale files to `locales` folder. Consult [i18next library documentation](http://i18next.com/pages/doc_init.html) and examples in this project, for more info.

Note, that main reasons for writing this example was:

- show demo of PhoneGap's language detection functions,
- provide language code fixup for these languages, for which first two letters are not equal to ISO language code (for example: "polski" = "po" != "pl").

For this reason, I wrote `nativeLanguageNameToISOCode` function. Some time later, I also wrote `nativeLanguageNameToEnglishName`. But due to time limits, it is not complete. It bases on previous one and therfore provides English (international) language names only for those few languages that doesn't have first two letters in name equal to language code. If you need to extend this function, to support all other languages, good source of data and JS escaping tool will be useful for you. Here you have some links:

* [JavaScript escapes](http://www.rishida.net/tools/conversion/),
* [ISO 639-1 codes](http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

Remember, this is only the beginning. Much more work is required to use this solution in a complex projects. Have fun!