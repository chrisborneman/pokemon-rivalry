$('#fwlink a').click
  (
    function()
    {
      if($('#refiabattles').is(":visible"))
      {
        $('#battles').slideToggle("slow", function()
          {
            $('#refiabattles').toggle();
            $('#battles').slideToggle("slow");
            $('#fwbattles').toggle();
          });
      }
      else if($('#fwbattles').is(":visible")) 
      {
        $('#fwbattles').slideToggle("slow", function()
          {
            $('#battles').toggle();
          }
        );
      }
      else
      {
        $('#battles').toggle(0, function()
          {
            $('#fwbattles').slideToggle("slow");
          }
        );
      }
    }
  )

$('#refialink a').click
  (
    function()
    {
      if($('#fwbattles').is(":visible"))
      {
        $('#battles').slideToggle("slow", function()
          {
            $('#fwbattles').toggle();
            $('#battles').slideToggle("slow");
            $('#refiabattles').toggle();
          }
        );
      }
      else if($('#refiabattles').is(":visible")) 
      {
        $('#refiabattles').slideToggle("slow", function()
          {
            $('#battles').toggle();
          }
        );
      }
      else
      {
        $('#battles').toggle(0, function()
          {
            $('#refiabattles').slideToggle("slow");
          }
        );
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