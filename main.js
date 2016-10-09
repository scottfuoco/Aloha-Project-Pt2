$(function() {

    $('input[name=submitBtn]').on('click', function(e){
        var validEmail = $('input[name=emailInput]')[0].checkValidity();
        
        if (validEmail)
        {
            alert('Perpare to be spammed.');
        }
        else
        {
            e.preventDefault();
            alert('Please enter a valid email address.');
        }
    });
    
});