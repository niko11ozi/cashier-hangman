const words = ["ანი", "გიორგი", "ელენე", "ერეკლე", "თეონა", "თომა", "ლაშა", "ნიკოლოზი", "პატარანიკოლოზი", "სალომე"];
// let words = ["თეონა"];
let wrongGuessesNum = 6;
let wordToGuess = words[Math.floor(Math.random() * words.length)];
let letters = [];
let wrongGuesses = 0;
let hiddenWord = "*".repeat(wordToGuess.length);


function chamoxrchobana(words, wrongGuessesNum) {
    while (hiddenWord !== wordToGuess && wrongGuesses < wrongGuessesNum - 1) {
        let guess = prompt("მოდით ვითამაშოთ ჩამოხრჩობანა! პირველ რიგში, გთხოვთ ასოები ჩაწეროთ ქართულად 🙂 აქვე მინიშნებაც:- ჩაფიქრებული სიტყვა აიტისტეპის გივის ჯგუფის სტუდენტების სახელებია. გამოიცანით სახელი:");
        if (wordToGuess.includes(guess)) {
            hiddenWord = wordToGuess.split('').map((letter, index) => {
                return letter === guess ? guess : hiddenWord[index];
            }).join('');
            console.log(guess, "სწორია! " + "დაშიფრულ სიტყვაში ასე გამოყურება", hiddenWord);
        } else if (!/[ა-ჰ]/.test(guess) && guess.length !== 0) {
            console.log("გთხოვთ მხოლოდ ერთი ასო ჩაწერეთ და მხოლოდ ქართული ფონტი გამოიყენოთ");

        }
        else if (/[ა-ჰ]/.test(guess) && guess.length !== 1)
        {
          console.log("გთხოვთ მხოლოდ ერთი ასო შეიყვანოთ");
        }
        
        else if (letters.includes(guess)) {
            console.log("უკვე ხომ ვერ გამოიცანით ასო", guess, "ეხლა სხვა დაასახელეთ!");

        } else if (wrongGuesses < wrongGuessesNum) {
            wrongGuesses++;
            console.log(guess, "არასწორია! დაგრჩათ", (wrongGuessesNum - wrongGuesses), "ცდა, რომ გადაურჩეთ ჩამოხრჩობას");
            letters.push(guess);
        }
    }

    if (hiddenWord === wordToGuess) {
        console.log("გილოცავთ! ძალიან მაგარი ხართ! თქვენ შეძელით და გამოიცანით სტუდენტის სახელი:", wordToGuess);
    }
    else {
        console.log("ცდა აღარ დაგრჩათ.. ბოდიში მაგრამ... უნდა ჩამოგახრჩოთ.. გამოსაცნობი სახელი კი იყო:", wordToGuess)
    }
}
chamoxrchobana(words, wrongGuessesNum);