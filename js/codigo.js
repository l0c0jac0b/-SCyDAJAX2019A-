$(function() {
  var conf= {
    func: function(resp){
      if (resp!=1) {
        $.liga('mensaje','Hubo Un Error');

      }
      else {
        $('#divTabla').load('enrutador/Usuarios');
        $('#algocual').load('slector.php');
      }
    }
  };
  $('form').liga('AJAX', conf);
});
