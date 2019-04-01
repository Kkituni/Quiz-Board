$(document).ready(function() {
    $('#results form').submit(function(e) {

      e.preventDefault();
      const form = $(this);
      const score = form.find(':checked[correct-choice]').length;
      const scorePercent = parseFloat(score/5*100);
      if(scorePercent >= 80 ) {
        document.getElementById('myComment').innerHTML = 'EXCELLENT!!';
      } else if(scorePercent <80 && scorePercent >= 50 ) {
        document.getElementById('myComment').innerHTML = 'FAIR';
      }else {
        document.getElementById('myComment').innerHTML = 'POOR. RETAKE THE TEST';
      }
    });


  });


  function clearInputs(){
    $('#results form').trigger('reset');
    document.getElementById('myComment').innerHTML = '';
  }
