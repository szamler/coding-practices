$(document).ready(function() {
  $("#splash").append("<img src='assets/banner.gif"+ Math.random() + "'/>");
})
// external js: masonry.pkgd.js

$('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: 160
  });
  