# tinyAjaxForm.js

## Overview

tinyAjaxForm is a small and simple library that transforms regular forms into ajax forms.

Dependencies: jQuery

## Compared to ajaxForm

**Cons:** No support for file uploads. Doesn't have several ajaxForm features

**Pros:** Really tiny. It's 1.5k (0.8k minified). To compare, ajaxForm is 40k! (17k minified)

## Example

    <form id="show-code" action="tinyAjaxForm.js">
        <input type="submit" value="Show code">
    </form>
    <div id="code-display"></div>

    ...

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
    <script src="tinyAjaxForm.min.js"></script>
    <script>
    $('#show-code').tinyAjaxForm($('#code-display'));   // shortcut
    </script>

Clicking submit will fill the div with the contents of tinyAjaxForm.js.
If Javascript is disabled it will disgrade gracefully, and act like a normal form.

## Usage

Usage:

    $(form-selector).tinyAjaxForm(options)

    $(form-selector).tinyAjaxForm(successCallback)

    $(form-selector).tinyAjaxForm(targetHtmlElementSelector)

'options' is a dictionary object with these attributes:

* success: a function to call if the ajax query is successful (same as jQuery)
* error: a function to be call if it failed (same as jQuery)
* dataType: What data to expect back (text, json, ... same as jQuery)

* beforeSubmit(params, form, options):

    A function to call before submitting the form.
    It may manipulate the params object before the form is submitted.
    If it returns 'false', the submit is aborted.



## Tips

If you want to replace ajaxForm in an existing page, you can place this line right after loading tinyAjaxForm:

    jQuery.fn.ajaxForm=jQuery.fn.tinyAjaxForm;

## License

[MIT](http://malsup.github.com/mit-license.txt)
