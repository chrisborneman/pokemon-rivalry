$('#fwlink a').click
  (
    function()
    {
      if($('#refiabattles').is(":visible"))
      {
        $('#battles').slideToggle("slow");
        $('#fwbattles').slideToggle("slow");
      }
      else if($('#fwbattles').is(":visible"))
      {
        $('#battles').slideToggle("slow");
        $('#fwbattles').slideToggle("slow");
      }
      else
      {
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
        $('#fwbattles').slideToggle("slow");
        $('#refiabattles').slideToggle("slow");
      }
      else if($('#refiabattles').is(":visible"))
      {
        $('#battles').slideToggle("slow");
        $('#refiabattles').slideToggle("slow");
      }
      else
      {
        $('#battles').toggle();
        $('#refiabattles').slideToggle("slow");
      }
    }
  )

$('#fwlink a').hover
  (
    function()
    {
      $('#fwlink a').animate({"color": "#AD3149"}, 200);
    },
    function()
    {
      $('#fwlink a').animate({"color": "#FFF0D5"}, 200);
    }
  )

$('#refialink a').hover
  (
    function()
    {
      $('#refialink a').animate({"color": "#1E97BF"}, 200);
    },
    function()
    {
      $('#refialink a').animate({"color": "#FFF0D5"}, 200);
    }
  )