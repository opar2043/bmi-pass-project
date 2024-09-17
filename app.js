
document.getElementById('btn').addEventListener('click',function(){


    let inputValue = document.getElementById('input');
    input = inputValue.value;

    if (input === '') {
        alert('Please enter a password length.');
        return;
    }

    if(input > 30 ){
        alert('Too Long! Write a Small Digit');
        return;
    }

    let charPass = 'qwertyuuiopasdfghjklmnbvcxz0123456789@#$$&'
    let newPass = '';

    for(let i = 0 ; i<input ; i++){

        let passIndex = Math.round(Math.random()*charPass.length);

        let randomPass = charPass[passIndex];
        newPass = newPass + randomPass;
    }
    document.getElementById('pass').innerText = newPass;
    inputValue = '';
    document.getElementById('copyBtn').style.display = 'block';
    
})

document.getElementById('copyBtn').addEventListener('click', function() {
    let password = document.getElementById('pass').innerText;
    navigator.clipboard.writeText(password).then(function() {
        alert('Password copied to clipboard!');
    }, function(err) {
        alert('Failed to copy password: ', err);
    });
});


// code 2===============



    document.getElementById('btn2').addEventListener('click', function() {
        let height = document.getElementById('height');
        let heightValue = height.value;
        let kg = document.getElementById('kg');
        let kgValue = kg.value;

        // Validation checks
        if (heightValue === '' || kgValue === '') {
            alert('Please enter both height and weight.');
            return;
        }

        heightValue = parseFloat(heightValue);
        kgValue = parseFloat(kgValue);

        if (isNaN(heightValue) || isNaN(kgValue) || heightValue <= 0 || kgValue <= 0) {
            alert('Please enter valid positive numbers for height and weight.');
            return;
        }

        // Convert height in feet to meters (approximate conversion)
        heightValue = 0.3 * heightValue;

        // Calculate BMI
        let calculate = kgValue / (heightValue * heightValue);

        // Display BMI
        let show = document.getElementById('show');
        show.innerText = calculate.toFixed(2);

            
        kg.value = '';
        height.value = '';

            if(calculate< 18.5 ){
                    review.innerText = "you are Under Weight"
                    return;
                }
    
                if(calculate< 24 ){
                    review.innerText = "you are Healthy! Sabash"
                    return;
                }
    
                if(calculate< 28 ){
                    review.innerText = "you are Over Weihght. Kom Kha Motko."
                    return;
                }
    
                if(calculate> 28 ){
                    review.innerText = "Motko Khawa Dawa Koma Tui"
                    return;
                }
                    
        
    });

