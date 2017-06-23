$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 1700,
        fade: true,
        autoplay: true,
        cssEase: 'linear'
    });

    $('.menu-about-us').on('click', function () {
        $('.link').hide();
        $('#aboutUs').show();
    });

    $('.menu-service').on('click', function () {
        $('.link').hide();
        $('#service').show();
    });

    $('#scheduleList a').on('click', function (e) {
        $('.link').hide();
        var newEl = $(e.target).attr("href");
        $(newEl).show();
    });

    /* $('#serviceList a').on('click', function (e) {
         $('.link').hide();
         var newEl = $(e.target).attr("href");
         $(newEl).show();
     });*/


    $('.contacts-close').on('click', function (e) {
        var newEll = $(e.target).parent(".contacts-map-inf");
        $(newEll).hide();
    });

    $('.rink-service').on('click', function () {
        $('.link').hide();
        $('#iceRink').show();
    });

    $('.sports-base-service').on('click', function () {
        $('.link').hide();
        $('#sportsBase').show();
    });

    $('.gym-service').on('click', function () {
        $('.link').hide();
        $('#gym').show();
    });

    $('.sport-gym-service').on('click', function () {
        $('.link').hide();
        $('#sportGym').show();
    });

    $('.cycletrack-service').on('click', function () {
        $('.link').hide();
        $('#cycleTrack').show();
    });

    $('.hall-service').on('click', function () {
        $('.link').hide();
        $('#hall').show();
    });

    $('.btn-primary-schedule').on('click', function (e) {
        $('.link').hide();
        $($(e.target).attr("href")).show();
    });


    /* $('.menu').on('click', function (e) {
         $('.link').hide();
         $($(e.target).attr("href")).show();
     });*/

    $('.navbar-brand').on('click', function () {
        $('.link').hide();
        $('#mainPage, #banner, #all-news').show();
    });

    $('.menu-main-page').on('click', function () {
        $('.link').hide();
        $('#mainPage, #banner, #all-news').show();
    });

    $('.menu-our-team').on('click', function () {
        $('.link').hide();
        $('#ourTeam').show();
    });

    $('.menu-contacts').on('click', function () {
        $('.link').hide();
        $('#contacts').show();
    });

    $('.map-min').on('click', function () {
        $('.link').hide();
        $('#contacts').show();
    });

    $('.menu-photo-gallery').on('click', function () {
        $('.link').hide();
        $('#photoGallery').show();
    });

    $('.gallery-foto-mini').on('click', function () {
        $('.link').hide();
        $('#photoGallery').show();
    });

    /*календарь каток*/
    function Calendar3(id, year, month) {
        var Dlast = new Date(year, month + 1, 0).getDate(),
            D = new Date(year, month, Dlast),
            DNlast = D.getDay(),
            DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
            calendar = '<tr>',
            m = document.querySelector('#' + id + ' option[value="' + D.getMonth() + '"]'),
            g = document.querySelector('#' + id + ' input');
        if (DNfirst != 0) {
            for (var i = 1; i < DNfirst; i++) calendar += '<td>';
        } else {
            for (var i = 0; i < 6; i++) calendar += '<td>';
        }
        for (var i = 1; i <= Dlast; i++) {
            if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
                calendar += '<td class="today">' + i;
            } else {
                if (  // список официальных праздников
                    (i == 1 && D.getMonth() == 0 && ((D.getFullYear() > 1897 && D.getFullYear() < 1930) || D.getFullYear() > 1947)) || // Новый год
                    (i == 2 && D.getMonth() == 0 && D.getFullYear() > 1992) || // Новый год
                    ((i == 3 || i == 4 || i == 5 || i == 6 || i == 8) && D.getMonth() == 0 && D.getFullYear() > 2004) || // Новый год
                    (i == 7 && D.getMonth() == 0 && D.getFullYear() > 1990) || // Рождество Христово
                    (i == 23 && D.getMonth() == 1 && D.getFullYear() > 2001) || // День защитника Отечества
                    (i == 8 && D.getMonth() == 2 && D.getFullYear() > 1965) || // Международный женский день
                    (i == 1 && D.getMonth() == 4 && D.getFullYear() > 1917) || // Праздник Весны и Труда
                    (i == 9 && D.getMonth() == 4 && D.getFullYear() > 1964) || // День Победы
                    (i == 12 && D.getMonth() == 5 && D.getFullYear() > 1990) || // День России (декларации о государственном суверенитете Российской Федерации ознаменовала окончательный Распад СССР)
                    (i == 7 && D.getMonth() == 10 && (D.getFullYear() > 1926 && D.getFullYear() < 2005)) || // Октябрьская революция 1917 года
                    (i == 8 && D.getMonth() == 10 && (D.getFullYear() > 1926 && D.getFullYear() < 1992)) || // Октябрьская революция 1917 года
                    (i == 4 && D.getMonth() == 10 && D.getFullYear() > 2004) // День народного единства, который заменил Октябрьскую революцию 1917 года
                   ) {
                    calendar += '<td class="holiday">' + i;
                } else {
                    calendar += '<td>' + i;
                }
            }
            if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
                calendar += '<tr>';
            }
        }
        for (var i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
        document.querySelector('#' + id + ' tbody').innerHTML = calendar;
        g.value = D.getFullYear();
        m.selected = true;
        if (document.querySelectorAll('#' + id + ' tbody tr').length < 6) {
            document.querySelector('#' + id + ' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
        }
        document.querySelector('#' + id + ' option[value="' + new Date().getMonth() + '"]').style.color = 'rgb(220, 0, 0)'; // в выпадающем списке выделен текущий месяц
    }
    Calendar3("calendar3", new Date().getFullYear(), new Date().getMonth());
    document.querySelector('#calendar3').onchange = function Kalendar3() {
        Calendar3("calendar3", document.querySelector('#calendar3 input').value, parseFloat(document.querySelector('#calendar3 select').options[document.querySelector('#calendar3 select').selectedIndex].value));
    }
    /*календарь каток*/

    /*календарь спортбаза*/
    function Calendar4(id, year, month) {
        var Dlast = new Date(year, month + 1, 0).getDate(),
            D = new Date(year, month, Dlast),
            DNlast = D.getDay(),
            DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
            calendar = '<tr>',
            m = document.querySelector('#' + id + ' option[value="' + D.getMonth() + '"]'),
            g = document.querySelector('#' + id + ' input');
        if (DNfirst != 0) {
            for (var i = 1; i < DNfirst; i++) calendar += '<td>';
        } else {
            for (var i = 0; i < 6; i++) calendar += '<td>';
        }
        for (var i = 1; i <= Dlast; i++) {
            if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
                calendar += '<td class="today">' + i;
            } else {
                if (  // список официальных праздников
                    (i == 1 && D.getMonth() == 0 && ((D.getFullYear() > 1897 && D.getFullYear() < 1930) || D.getFullYear() > 1947)) || // Новый год
                    (i == 2 && D.getMonth() == 0 && D.getFullYear() > 1992) || // Новый год
                    ((i == 3 || i == 4 || i == 5 || i == 6 || i == 8) && D.getMonth() == 0 && D.getFullYear() > 2004) || // Новый год
                    (i == 7 && D.getMonth() == 0 && D.getFullYear() > 1990) || // Рождество Христово
                    (i == 23 && D.getMonth() == 1 && D.getFullYear() > 2001) || // День защитника Отечества
                    (i == 8 && D.getMonth() == 2 && D.getFullYear() > 1965) || // Международный женский день
                    (i == 1 && D.getMonth() == 4 && D.getFullYear() > 1917) || // Праздник Весны и Труда
                    (i == 9 && D.getMonth() == 4 && D.getFullYear() > 1964) || // День Победы
                    (i == 12 && D.getMonth() == 5 && D.getFullYear() > 1990) || // День России (декларации о государственном суверенитете Российской Федерации ознаменовала окончательный Распад СССР)
                    (i == 7 && D.getMonth() == 10 && (D.getFullYear() > 1926 && D.getFullYear() < 2005)) || // Октябрьская революция 1917 года
                    (i == 8 && D.getMonth() == 10 && (D.getFullYear() > 1926 && D.getFullYear() < 1992)) || // Октябрьская революция 1917 года
                    (i == 4 && D.getMonth() == 10 && D.getFullYear() > 2004) // День народного единства, который заменил Октябрьскую революцию 1917 года
                   ) {
                    calendar += '<td class="holiday">' + i;
                } else {
                    calendar += '<td>' + i;
                }
            }
            if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
                calendar += '<tr>';
            }
        }
        for (var i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
        document.querySelector('#' + id + ' tbody').innerHTML = calendar;
        g.value = D.getFullYear();
        m.selected = true;
        if (document.querySelectorAll('#' + id + ' tbody tr').length < 6) {
            document.querySelector('#' + id + ' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
        }
        document.querySelector('#' + id + ' option[value="' + new Date().getMonth() + '"]').style.color = 'rgb(220, 0, 0)'; // в выпадающем списке выделен текущий месяц
    }
    Calendar4("calendar4", new Date().getFullYear(), new Date().getMonth());
    document.querySelector('#calendar4').onchange = function Kalendar4() {
        Calendar4("calendar4", document.querySelector('#calendar4 input').value, parseFloat(document.querySelector('#calendar4 select').options[document.querySelector('#calendar4 select').selectedIndex].value));
    }
    /*календарь спортбаза*/

    /*calendar gym*/
    function Calendar5(id, year, month) {
        var Dlast = new Date(year, month + 1, 0).getDate(),
            D = new Date(year, month, Dlast),
            DNlast = D.getDay(),
            DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
            calendar = '<tr>',
            m = document.querySelector('#' + id + ' option[value="' + D.getMonth() + '"]'),
            g = document.querySelector('#' + id + ' input');
        if (DNfirst != 0) {
            for (var i = 1; i < DNfirst; i++) calendar += '<td>';
        } else {
            for (var i = 0; i < 6; i++) calendar += '<td>';
        }
        for (var i = 1; i <= Dlast; i++) {
            if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
                calendar += '<td class="today">' + i;
            } else {
                if (  // список официальных праздников
                    (i == 1 && D.getMonth() == 0 && ((D.getFullYear() > 1897 && D.getFullYear() < 1930) || D.getFullYear() > 1947)) || // Новый год
                    (i == 2 && D.getMonth() == 0 && D.getFullYear() > 1992) || // Новый год
                    ((i == 3 || i == 4 || i == 5 || i == 6 || i == 8) && D.getMonth() == 0 && D.getFullYear() > 2004) || // Новый год
                    (i == 7 && D.getMonth() == 0 && D.getFullYear() > 1990) || // Рождество Христово
                    (i == 23 && D.getMonth() == 1 && D.getFullYear() > 2001) || // День защитника Отечества
                    (i == 8 && D.getMonth() == 2 && D.getFullYear() > 1965) || // Международный женский день
                    (i == 1 && D.getMonth() == 4 && D.getFullYear() > 1917) || // Праздник Весны и Труда
                    (i == 9 && D.getMonth() == 4 && D.getFullYear() > 1964) || // День Победы
                    (i == 12 && D.getMonth() == 5 && D.getFullYear() > 1990) || // День России (декларации о государственном суверенитете Российской Федерации ознаменовала окончательный Распад СССР)
                    (i == 7 && D.getMonth() == 10 && (D.getFullYear() > 1926 && D.getFullYear() < 2005)) || // Октябрьская революция 1917 года
                    (i == 8 && D.getMonth() == 10 && (D.getFullYear() > 1926 && D.getFullYear() < 1992)) || // Октябрьская революция 1917 года
                    (i == 4 && D.getMonth() == 10 && D.getFullYear() > 2004) // День народного единства, который заменил Октябрьскую революцию 1917 года
                   ) {
                    calendar += '<td class="holiday">' + i;
                } else {
                    calendar += '<td>' + i;
                }
            }
            if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
                calendar += '<tr>';
            }
        }
        for (var i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
        document.querySelector('#' + id + ' tbody').innerHTML = calendar;
        g.value = D.getFullYear();
        m.selected = true;
        if (document.querySelectorAll('#' + id + ' tbody tr').length < 6) {
            document.querySelector('#' + id + ' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
        }
        document.querySelector('#' + id + ' option[value="' + new Date().getMonth() + '"]').style.color = 'rgb(220, 0, 0)'; // в выпадающем списке выделен текущий месяц
    }
    Calendar5("calendar5", new Date().getFullYear(), new Date().getMonth());
    document.querySelector('#calendar5').onchange = function Kalendar5() {
        Calendar5("calendar5", document.querySelector('#calendar5 input').value, parseFloat(document.querySelector('#calendar5 select').options[document.querySelector('#calendar5 select').selectedIndex].value));
    }
    /*calendar gym*/

    /*calendar sportGym*/
    function Calendar6(id, year, month) {
        var Dlast = new Date(year, month + 1, 0).getDate(),
            D = new Date(year, month, Dlast),
            DNlast = D.getDay(),
            DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
            calendar = '<tr>',
            m = document.querySelector('#' + id + ' option[value="' + D.getMonth() + '"]'),
            g = document.querySelector('#' + id + ' input');
        if (DNfirst != 0) {
            for (var i = 1; i < DNfirst; i++) calendar += '<td>';
        } else {
            for (var i = 0; i < 6; i++) calendar += '<td>';
        }
        for (var i = 1; i <= Dlast; i++) {
            if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
                calendar += '<td class="today">' + i;
            } else {
                if (  // список официальных праздников
                    (i == 1 && D.getMonth() == 0 && ((D.getFullYear() > 1897 && D.getFullYear() < 1930) || D.getFullYear() > 1947)) || // Новый год
                    (i == 2 && D.getMonth() == 0 && D.getFullYear() > 1992) || // Новый год
                    ((i == 3 || i == 4 || i == 5 || i == 6 || i == 8) && D.getMonth() == 0 && D.getFullYear() > 2004) || // Новый год
                    (i == 7 && D.getMonth() == 0 && D.getFullYear() > 1990) || // Рождество Христово
                    (i == 23 && D.getMonth() == 1 && D.getFullYear() > 2001) || // День защитника Отечества
                    (i == 8 && D.getMonth() == 2 && D.getFullYear() > 1965) || // Международный женский день
                    (i == 1 && D.getMonth() == 4 && D.getFullYear() > 1917) || // Праздник Весны и Труда
                    (i == 9 && D.getMonth() == 4 && D.getFullYear() > 1964) || // День Победы
                    (i == 12 && D.getMonth() == 5 && D.getFullYear() > 1990) || // День России (декларации о государственном суверенитете Российской Федерации ознаменовала окончательный Распад СССР)
                    (i == 7 && D.getMonth() == 10 && (D.getFullYear() > 1926 && D.getFullYear() < 2005)) || // Октябрьская революция 1917 года
                    (i == 8 && D.getMonth() == 10 && (D.getFullYear() > 1926 && D.getFullYear() < 1992)) || // Октябрьская революция 1917 года
                    (i == 4 && D.getMonth() == 10 && D.getFullYear() > 2004) // День народного единства, который заменил Октябрьскую революцию 1917 года
                   ) {
                    calendar += '<td class="holiday">' + i;
                } else {
                    calendar += '<td>' + i;
                }
            }
            if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
                calendar += '<tr>';
            }
        }
        for (var i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
        document.querySelector('#' + id + ' tbody').innerHTML = calendar;
        g.value = D.getFullYear();
        m.selected = true;
        if (document.querySelectorAll('#' + id + ' tbody tr').length < 6) {
            document.querySelector('#' + id + ' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
        }
        document.querySelector('#' + id + ' option[value="' + new Date().getMonth() + '"]').style.color = 'rgb(220, 0, 0)'; // в выпадающем списке выделен текущий месяц
    }
    Calendar6("calendar6", new Date().getFullYear(), new Date().getMonth());
    document.querySelector('#calendar6').onchange = function Kalendar6() {
        Calendar6("calendar6", document.querySelector('#calendar6 input').value, parseFloat(document.querySelector('#calendar6 select').options[document.querySelector('#calendar6 select').selectedIndex].value));
    }
    /*calendar sportGym*/


    /*calendar cycleTrack*/
    function Calendar7(id, year, month) {
        var Dlast = new Date(year, month + 1, 0).getDate(),
            D = new Date(year, month, Dlast),
            DNlast = D.getDay(),
            DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
            calendar = '<tr>',
            m = document.querySelector('#' + id + ' option[value="' + D.getMonth() + '"]'),
            g = document.querySelector('#' + id + ' input');
        if (DNfirst != 0) {
            for (var i = 1; i < DNfirst; i++) calendar += '<td>';
        } else {
            for (var i = 0; i < 6; i++) calendar += '<td>';
        }
        for (var i = 1; i <= Dlast; i++) {
            if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
                calendar += '<td class="today">' + i;
            } else {
                if (  // список официальных праздников
                    (i == 1 && D.getMonth() == 0 && ((D.getFullYear() > 1897 && D.getFullYear() < 1930) || D.getFullYear() > 1947)) || // Новый год
                    (i == 2 && D.getMonth() == 0 && D.getFullYear() > 1992) || // Новый год
                    ((i == 3 || i == 4 || i == 5 || i == 6 || i == 8) && D.getMonth() == 0 && D.getFullYear() > 2004) || // Новый год
                    (i == 7 && D.getMonth() == 0 && D.getFullYear() > 1990) || // Рождество Христово
                    (i == 23 && D.getMonth() == 1 && D.getFullYear() > 2001) || // День защитника Отечества
                    (i == 8 && D.getMonth() == 2 && D.getFullYear() > 1965) || // Международный женский день
                    (i == 1 && D.getMonth() == 4 && D.getFullYear() > 1917) || // Праздник Весны и Труда
                    (i == 9 && D.getMonth() == 4 && D.getFullYear() > 1964) || // День Победы
                    (i == 12 && D.getMonth() == 5 && D.getFullYear() > 1990) || // День России (декларации о государственном суверенитете Российской Федерации ознаменовала окончательный Распад СССР)
                    (i == 7 && D.getMonth() == 10 && (D.getFullYear() > 1926 && D.getFullYear() < 2005)) || // Октябрьская революция 1917 года
                    (i == 8 && D.getMonth() == 10 && (D.getFullYear() > 1926 && D.getFullYear() < 1992)) || // Октябрьская революция 1917 года
                    (i == 4 && D.getMonth() == 10 && D.getFullYear() > 2004) // День народного единства, который заменил Октябрьскую революцию 1917 года
                   ) {
                    calendar += '<td class="holiday">' + i;
                } else {
                    calendar += '<td>' + i;
                }
            }
            if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
                calendar += '<tr>';
            }
        }
        for (var i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
        document.querySelector('#' + id + ' tbody').innerHTML = calendar;
        g.value = D.getFullYear();
        m.selected = true;
        if (document.querySelectorAll('#' + id + ' tbody tr').length < 6) {
            document.querySelector('#' + id + ' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
        }
        document.querySelector('#' + id + ' option[value="' + new Date().getMonth() + '"]').style.color = 'rgb(220, 0, 0)'; // в выпадающем списке выделен текущий месяц
    }
    Calendar7("calendar7", new Date().getFullYear(), new Date().getMonth());
    document.querySelector('#calendar7').onchange = function Kalendar7() {
        Calendar7("calendar7", document.querySelector('#calendar7 input').value, parseFloat(document.querySelector('#calendar7 select').options[document.querySelector('#calendar7 select').selectedIndex].value));
    }
    /*calendar cycleTrack*/

    /*calendar hall*/
    function Calendar8(id, year, month) {
        var Dlast = new Date(year, month + 1, 0).getDate(),
            D = new Date(year, month, Dlast),
            DNlast = D.getDay(),
            DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
            calendar = '<tr>',
            m = document.querySelector('#' + id + ' option[value="' + D.getMonth() + '"]'),
            g = document.querySelector('#' + id + ' input');
        if (DNfirst != 0) {
            for (var i = 1; i < DNfirst; i++) calendar += '<td>';
        } else {
            for (var i = 0; i < 6; i++) calendar += '<td>';
        }
        for (var i = 1; i <= Dlast; i++) {
            if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
                calendar += '<td class="today">' + i;
            } else {
                if (  // список официальных праздников
                    (i == 1 && D.getMonth() == 0 && ((D.getFullYear() > 1897 && D.getFullYear() < 1930) || D.getFullYear() > 1947)) || // Новый год
                    (i == 2 && D.getMonth() == 0 && D.getFullYear() > 1992) || // Новый год
                    ((i == 3 || i == 4 || i == 5 || i == 6 || i == 8) && D.getMonth() == 0 && D.getFullYear() > 2004) || // Новый год
                    (i == 7 && D.getMonth() == 0 && D.getFullYear() > 1990) || // Рождество Христово
                    (i == 23 && D.getMonth() == 1 && D.getFullYear() > 2001) || // День защитника Отечества
                    (i == 8 && D.getMonth() == 2 && D.getFullYear() > 1965) || // Международный женский день
                    (i == 1 && D.getMonth() == 4 && D.getFullYear() > 1917) || // Праздник Весны и Труда
                    (i == 9 && D.getMonth() == 4 && D.getFullYear() > 1964) || // День Победы
                    (i == 12 && D.getMonth() == 5 && D.getFullYear() > 1990) || // День России (декларации о государственном суверенитете Российской Федерации ознаменовала окончательный Распад СССР)
                    (i == 7 && D.getMonth() == 10 && (D.getFullYear() > 1926 && D.getFullYear() < 2005)) || // Октябрьская революция 1917 года
                    (i == 8 && D.getMonth() == 10 && (D.getFullYear() > 1926 && D.getFullYear() < 1992)) || // Октябрьская революция 1917 года
                    (i == 4 && D.getMonth() == 10 && D.getFullYear() > 2004) // День народного единства, который заменил Октябрьскую революцию 1917 года
                   ) {
                    calendar += '<td class="holiday">' + i;
                } else {
                    calendar += '<td>' + i;
                }
            }
            if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
                calendar += '<tr>';
            }
        }
        for (var i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
        document.querySelector('#' + id + ' tbody').innerHTML = calendar;
        g.value = D.getFullYear();
        m.selected = true;
        if (document.querySelectorAll('#' + id + ' tbody tr').length < 6) {
            document.querySelector('#' + id + ' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
        }
        document.querySelector('#' + id + ' option[value="' + new Date().getMonth() + '"]').style.color = 'rgb(220, 0, 0)'; // в выпадающем списке выделен текущий месяц
    }
    Calendar8("calendar8", new Date().getFullYear(), new Date().getMonth());
    document.querySelector('#calendar8').onchange = function Kalendar8() {
        Calendar8("calendar8", document.querySelector('#calendar8 input').value, parseFloat(document.querySelector('#calendar8 select').options[document.querySelector('#calendar8 select').selectedIndex].value));
    }
    /*calendar hall*/
        });

/*fancybox*/
/*gallery*/

$("a.fancyimage").fancybox({
});

$("a.more").fancybox({
    'hideOnContentClick': true,
});

/*gallery*/
/*fancybox*/

$(".contacts-list a").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $('body').animate({ scrollTop: destination - 160 }, 1100);
    return false;
});

$('.img').hover(function () {

    $(this).children('img').stop().animate({ width: "1100px", height: "1000px" }, 700);

}, function () { $(this).children('img').stop().animate({ width: "900px", height: "800px" }, 700); });


