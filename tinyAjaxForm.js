/* tinyAjaxForm.js - By Erez Shinan */

;(function($) {
"use strict";

$.fn.tinyAjaxForm = function(opts) {
    // fail if nothing selected
    if (!this.length || this.length > 1) {
        console.log('tinyAjaxForm: skipping - no element selected');
        return this;
    }

    if (typeof opts == 'function' || (opts && opts.selector)) {
        opts = { success: opts };
    }
    opts = $.extend({
        success: function(){},
        error: function(){},
        dataType: 'text'
    }, opts);

    if (opts.success && opts.success.selector) {
        var success_obj = opts.success;
        opts.success = function(res) {
            success_obj.html(res);
        }
    }

    $(this.selector).on('submit', function(event) {
        event.preventDefault();

        var $this = $(this);
        var params = $this.serializeArray();

        // Callback before submit; may cancel the submit or alter params
        if (opts.beforeSubmit && opts.beforeSubmit(params, this, opts) === false) {
            console.log('tinyAjaxForm: aborting because beforeSubmit returned false');
            return this;
        }

        $.ajax({
            type: this.method,
            url: this.action,
            data: $.param(params),
            dataType: opts.dataType,
            error: opts.error,
            success: opts.success
        });

        return false;
    });
}

})(jQuery);
