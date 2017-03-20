// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require_tree .
function flip_dialog(message, html) {

  // fix backstyle
  $('.flip-container .back').height($('.flip-container .front').height());

  // scroll to top
  $(window).scrollTop(0)

  if(html)
    $('.flip-container .back p').html(message);
  else
    $('.flip-container .back p').text(message);


  // then flip that side
  $('.flip-container').addClass('hover');
  $('.flip-container .back button').click(function(){
    $('.flip-container').removeClass('hover');
  });

}

$(function() {
  $('#menu li').click(function() {
    flip_dialog("this is Spartaaaaaaaaaaaaaa !!!!! ");
  });

  $('.large-buttons').click(function() {
    flip_dialog("Another Message for the greate spartians !!!!! ");
  });

});
