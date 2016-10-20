$(document).ready(function() {

    function onClick(event) {

        var eventText = $(event.target).text();
        var screenText = $('#screen');
        var oldText = screenText.text();

        if (eventText === 'C' || eventText === '=' || eventText === '÷' || eventText === 'x') {
            if (eventText === '=') {
                var first = oldText.slice(0, 1)
                if (isNaN(first)) {
                    console.log('number');
                } else {
                    $(screenText).text(eval(oldText));
                }
            }
            if (eventText === 'C') {
                $(screenText).text('')
            }
            if (eventText === '÷') {
                $(screenText).text(oldText + '/');
            }
            if (eventText === 'x') {
                $(screenText).text(oldText + '*');
            }
        } else {
            // if (last key === '=') {
            //   $(screenText).text('')
            // }
            $(screenText).text(oldText + eventText);
            console.log(eventText, ' event text');
        }
    }

    // EVENT LISTENER
    $('.buttons span').on('click', onClick)
});
