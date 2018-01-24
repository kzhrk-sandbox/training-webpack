import $ from 'jquery';
import $2 from 'jquery2';
import $3 from 'jquery3';

$(function () {
  $('#js-jq2').append($2.fn.jquery);
  $('#js-jq3').append($3.fn.jquery);

  console.log('$3: ' + $3.escapeSelector('.test'));
  console.log('$2: ' + $2.escapeSelector('.test'));
});