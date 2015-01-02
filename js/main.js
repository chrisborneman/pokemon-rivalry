$('#fwlink a').click
  (
    function()
    {
      $('#battles').show();
      $('#fwbattles').show();
      $('#refiabattles').hide();
    }
  )
$('#refialink a').click
  (
    function()
    {
      $('#battles').show();
      $('#fwbattles').hide();
      $('#refiabattles').show();
    }
  )