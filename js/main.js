$('#fwlink a').click
  (
    function()
    {
      if($('#refiabattles').is(":visible"))
      {
        $('#refialink a').css("color","#FFF0D5");
        $('#battles').slideToggle();
        $('#refiabattles').slideToggle();
      }
      else if($('#fwbattles').is(":visible"))
      {
        $('#fwlink a').css("color","#FFF0D5");
        $('#battles').slideToggle();
        $('#fwbattles').slideToggle();
      }
      else
      {
        $('#fwlink a').css("color","#AD3149");
        $('#battles').slideToggle();
        $('#fwbattles').slideToggle();
      }
    }
  )

$('#refialink a').click
  (
    function()
    {
      if($('#fwbattles').is(":visible"))
      {
        $('#fwlink a').css("color","#FFF0D5");
        $('#battles').slideToggle();
        $('#fwbattles').slideToggle();
      }
      else if($('#refiabattles').is(":visible"))
      {
        $('#refialink a').css("color","#FFF0D5");
        $('#battles').slideToggle();
        $('#refiabattles').slideToggle();
      }
      else
      {
        $('#refialink a').css("color","#1E97BF");
        $('#battles').slideToggle();
        $('#refiabattles').slideToggle();
      }
    }
  )
