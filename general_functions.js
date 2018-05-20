/*
    Copy selected text on web page
    Usage: onclick="copyit(this.form.select1)"
*/
function copy_it(theField) {
    var selectedText = document.selection;
    if (selectedText.type == 'Text') {
        var newRange = selectedText.createRange();
        theField.focus();
        theField.value = newRange.text;
    } else {
        alert('select a text in the page and then press this button');
    }
}

/*
    Get absolute URL
    Usage: getAbsoluteUrl('/something'); -> https://davidwalsh.name/something
*/
var getAbsoluteUrl = (function() {
	var a;

	return function(url) {
		if(!a) a = document.createElement('a');
		a.href = url;

		return a.href;
	};
})();