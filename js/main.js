$('#fwlink a').click
  (
    function()
    {
      if($('#refiabattles').is(":visible"))
      {
        $('#refialink a').css("color","#FFF0D5");
        $('#battles').toggle();
        $('#refiabattles').toggle();
      }
      else if($('#fwbattles').is(":visible"))
      {
        $('#fwlink a').css("color","#FFF0D5");
        $('#battles').toggle();
        $('#fwbattles').toggle();
      }
      else
      {
        $('#fwlink a').css("color","#AD3149");
        $('#battles').toggle();
        $('#fwbattles').toggle();
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
        $('#battles').toggle();
        $('#fwbattles').toggle();
      }
      else if($('#refiabattles').is(":visible"))
      {
        $('#refialink a').css("color","#FFF0D5");
        $('#battles').toggle();
        $('#refiabattles').toggle();
      }
      else
      {
        $('#refialink a').css("color","#1E97BF");
        $('#battles').toggle();
        $('#refiabattles').toggle();
      }
    }
  )