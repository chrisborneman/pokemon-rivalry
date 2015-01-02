$('#fwlink a').click
  (
    function()
    {
      if($('#refiabattles').is(":visible"))
      {
        $('#battles').toggle();
        $('#refiabattles').toggle();
      }
      else
      {
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
        $('#battles').toggle();
        $('#fwbattles').toggle();
      }
      else
      {
        $('#battles').toggle();
        $('#refiabattles').toggle();
      }
    }
  )