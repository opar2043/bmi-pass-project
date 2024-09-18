
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
    inputValue.value = '';
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
                    review.innerText = "You are Under Weight"
                    return;
                }
    
                if(calculate< 24 ){
                    review.innerText = "You are Healthy! Sabash"
                    return;
                }
    
                if(calculate< 28 ){
                    review.innerText = "You are Over Weihght. Kom Kha Motko."
                    return;
                }
    
                if(calculate> 28 ){
                    review.innerText = "Motko Khawa Dawa Koma Tui"
                    return;
                }
                    
        
    });


    const quotes = [
        { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
        { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
        { quote: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
        { quote: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
        { quote: "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.", author: "Oprah Winfrey" },
        { quote: "If you set your goals ridiculously high and it’s a failure, you will fail above everyone else’s success.", author: "James Cameron" },
        { quote: "Life is what happens when you’re busy making other plans.", author: "John Lennon" },
        { quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author: "Mother Teresa" },
        { quote: "When you reach the end of your rope, tie a knot in it and hang on.", author: "Franklin D. Roosevelt" },
        { quote: "Always remember that you are absolutely unique. Just like everyone else.", author: "Margaret Mead" },
        { quote: "Don’t judge each day by the harvest you reap but by the seeds that you plant.", author: "Robert Louis Stevenson" },
        { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
        { quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.", author: "Benjamin Franklin" },
        { quote: "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.", author: "Helen Keller" },
        { quote: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
        { quote: "Whoever is happy will make others happy too.", author: "Anne Frank" },
        { quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
        { quote: "In the end, it’s not the years in your life that count. It’s the life in your years.", author: "Abraham Lincoln" },
        { quote: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
        { quote: "Many of life’s failures are people who did not realize how close they were to success when they gave up.", author: "Thomas A. Edison" }
      ];
      
      console.log(btn);
   document.getElementById('quote').addEventListener('click',function(){
    
    let p = document.getElementById('pop');
    let nam = document.getElementById('nam');

    let indexNum = Math.floor(Math.random() * quotes.length);
    console.log(indexNum);
    
    p.innerText = quotes[indexNum].quote;
    nam.innerText = quotes[indexNum].author;

   })