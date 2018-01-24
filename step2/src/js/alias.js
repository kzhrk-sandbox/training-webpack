import $ from 'jquery';
import useJquery from './modules/use-jquery';

$(function () {
  $('#js-entry').append('alias.bundle.js');

  useJquery();

  $('#js-import').append($.fn.jquery);
  $('#js-window').append(window.$.fn.jquery);
});

