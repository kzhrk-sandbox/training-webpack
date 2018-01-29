import $ from 'jquery';
import useJquery from './modules/use-jquery';

$(function () {
  $('#js-entry').append('commons.bundle.js');

  useJquery();

  $('#js-import').append($.fn.jquery);
  $('#js-window').append(window.$.fn.jquery);
});

