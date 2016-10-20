$(document).ready(function() {

    function onClick(event) {

        var eventText = $(event.target).text();
        var screenText = $('#screen');
        var oldText = screenText.text();

        if (eventText === '=') {
            var first = oldText.slice(0, 1)
            if (isNaN(first)) {
                $(screenText).text('ERROR')
            }
            else if (eval(oldText) === Infinity || eval(oldText) === -Infinity) {
              // console.log('hi');
              $(screenText).text('ERROR')
            }
            else {
                $(screenText).text(eval(oldText));
            }
        } else if (eventText === 'C') {
            $(screenText).text('')
        } else if (eventText === '÷') {
            $(screenText).text(oldText + '/');
        } else if (eventText === 'x') {
            $(screenText).text(oldText + '*');
        } else {
            // if (last key === '=') {
            //   $(screenText).text('')
            // }
            $(screenText).text(oldText + eventText);
            // console.log(eventText, ' event text');
        }
    }

    // EVENT LISTENER
    $('.buttons span').on('click', onClick)
});
