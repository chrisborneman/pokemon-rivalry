$('#fwlink a').click
  (
    function()
    {
      if($('#refiabattles').is(":visible"))
      {
        $('#refialink a').css("color","#FFF0D5");
        $('#battles').slideToggle("slow");
        $('#refiabattles').slideToggle("slow");
      }
      else if($('#fwbattles').is(":visible"))
      {
        $('#fwlink a').css("color","#FFF0D5");
        $('#battles').slideToggle("slow");
        $('#fwbattles').slideToggle("slow");
      }
      else
      {
        $('#fwlink a').css("color","#AD3149");
        $('#battles').toggle();
        $('#fwbattles').slideToggle("slow");
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
        $('#battles').slideToggle("slow");
        $('#fwbattles').slideToggle("slow");
      }
      else if($('#refiabattles').is(":visible"))
      {
        $('#refialink a').css("color","#FFF0D5");
        $('#battles').slideToggle("slow");
        $('#refiabattles').slideToggle("slow");
      }
      else
      {
        $('#refialink a').css("color","#1E97BF");
        $('#battles').slideToggle("slow");
        $('#refiabattles').slideToggle("slow");
      }
    }
  )
