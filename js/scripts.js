/* global $, console */
$(document).ready(function () {
    'use strict';

    
    var date = new Date();
    // console.log(date.getDate());
    
    var selectDayMenu       = $('#Day'),
        selectMonthNameMenu = $('#Month'),
        selectYearMenu      = $('#Year');
    // console.log(selectMenu);
    
    // Days
    // for (var i = 1; i >= 1; i++) {
    for (var i = 1; i < 32; i++) {
        // console.log(i);
        // if (i === 32) {
        //     break;
        // }
        
        // Autoselecting the current day
        if (i === date.getDate()) {
            selectDayMenu.append('<option selected value="' + i + '">' + i + '</option>');
        } else {
            selectDayMenu.append('<option value="' + i + '">' + i + '</option>');
        }
            
    }
    
    
    // Months
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    // console.log(date.toLocaleDateString('default', {month:'long'}));
    // console.log(months.indexOf('Mar'));
    // console.log(date.getMonth());
    // for (i = 0; i >= 0; i++) {
    for (i = 0; i < 12; i++) {
        // console.log(months[i]);
        // console.log(months.indexOf(months[i]));
        
        // if (i === 12) {
        //     break;
        // }
        
        // Autoselecting the current month
        if (months.indexOf(months[i]) === date.getMonth()) {
            selectMonthNameMenu.append('<option selected value="' + i + '">' + months[i] + '</option>');
        } else {
            selectMonthNameMenu.append('<option value="' + i + '">' + months[i] + '</option>');
        }
    }
    
    
    // Years
    // console.log(date.getFullYear());
    // console.log(date.getFullYear() + 1);
    
    // for (var i = 1905; i >= 1905; i++) {
    for (var i = date.getFullYear(); i <= date.getFullYear(); i--) { // To preview the years reversed (Descending sort)
        // console.log(i);
        /* if (i === date.getFullYear() + 1) {
            break;
        } */
        if (i === 1904) {// To preview the years reversed (Descending order/sort)
            break;
        }
        
        // Autoselecting the current year
        if (i === date.getFullYear()) {
            selectYearMenu.append('<option selected value="' + i + '">' + i + '</option>');
        } else {
            selectYearMenu.append('<option value="' + i + '">' + i + '</option>');
        }
    }



    // Displaying the input fields exclamation marks when blurring
    $('.middle-part form div input').on('blur', function() {
        // console.log($(this).val().length);
        if ($(this).val().length < 1) {// If the input field left empty, show the exclamation mark and make red border
            $(this).css('border-color', 'red').next().css('display', 'block');// Or use .siblings('i') instead of .next('')
        } else {// If the input field is filled, remove the exclamation mark and get the original border color
            $(this).css('border-color', '#bdc7d8').next().css('display', 'none');// Or use .siblings('i') instead of .next('')
        }
    });



    // Showing the speech bubbles when focusing if input fields are empty, and hiding them if they are filled
    $('.middle-part form div input').on('focus', function() {
        if ($(this).val().length < 1) {// If the input field left empty, show the speech bubble
            // console.log($(this).nextAll('div.speech-bubble1'));
            $(this).nextAll('div.speech-bubble1').show();// Or use .siblings('i') instead of .nextAll('')
        } else {// If the input field is filled, remove the speech bubble
            $(this).nextAll('div.speech-bubble1').hide();// Or use .siblings('i') instead of .nextAll('')
        }
    }).on('blur', function() {
        // console.log($(this).nextAll('div.speech-bubble1'));
        $(this).nextAll('div.speech-bubble1').hide();// Or use .siblings('i') instead of .nextAll('')
        // console.log($(this).parent().find('div.speech-bubble1'));
    });

});