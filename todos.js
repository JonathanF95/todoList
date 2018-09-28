//Check off specific todos by clicking
$('li').click(function(){
  $(this).toggleClass('completed');
});

$('span').click(function(e){
  $(this).parent().fadeOut(1000, function(){
    $(this).remove();
  });
  e.stopPropagation();
});
