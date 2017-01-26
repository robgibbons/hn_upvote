// ==UserScript==
// @name         HN Auto Upvoter
// @namespace    https://news.ycombinator.com/
// @version      0.1
// @description  Hacker News Auto Upvoter
// @author       Rob Gibbons
// @match        https://news.ycombinator.com/item?id=*
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js
// ==/UserScript==

(function($) {
    'use strict';

    // Select all downvoted comments
    var $downvoted = $('.comment span[class^=c]:not(.c00)');
    var $uplinks = $downvoted.closest('tr').find('.votelinks a[id^=up_]');

    // Upvote all downvoted comments
    $uplinks.each(function () {
        var $uplink = $(this);
        var href = $uplink.attr('href');
        // Send request to upvote
        $.get(window.location.origin + '/' + href);
        // Hide used up/down links
        $uplink.closest('.votelinks').find('a').addClass('nosee');
    });

})(jQuery);