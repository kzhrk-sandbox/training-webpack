import $ from 'jquery';
import useJquery from './modules/use-jquery';

$(function () {
  $('body').append('require');

  useJquery();

  $('body').append('jquery version: ' + $.fn.jquery);
  $('body').append('jquery version: ' + window.$.fn.jquery);
});