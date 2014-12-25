$("#get-time").on('click', function(e){
  e.preventDefault();
  $.ajax({
    url: '/time.json',                        // The page the request is being sent to
    dataType: 'json',
    success: function(data){                  // function that runs if the Ajax request completes successfully
      alert("The time is: " + data.time);
    }
  });
});
