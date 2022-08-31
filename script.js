const words = [
    {
        word: "addition",
        hint: "The process of adding numbers"
    },

    {
        word: "meeting",
        hint: "Event in which people come together"
    },

    {
        word: "number",
        hint: "Math symbol used for counting"
    },

    {
        word: "exchange",
        hint: "The act of trading"
    },

    {
        word: "canvas",
        hint: "Price of fabric for all painting"
    },

    {
        word: "garden",
        hint: "Space for planting flower and plant"
    },

    {
        word: "position",
        hint: "Location of someone or something"
    },

    {
        word: "feather",
        hint: "Hair like outer covering of bird"
    },

    {
        word: "comfort",
        hint: "A pleasant feeling of relaxation"
    },

    {
        word: "tongue",
        hint: "The muscular organ of mouth"
    },

    {
        word: "expansion",
        hint: "The process of increase or grow"
    },

    {
        word: "country",
        hint: "A politically identified region"
    },

    {
        word: "group",
        hint: "A number of objects or persons"
    },

    {
        word: "taste",
        hint: "Ability of tongue to detect flavour"
    },

    {
        word: "store",
        hint: "Large shop where goods are traded"
    },

    {
        word: "field",
        hint: "Area of land for farming activities"
    },

    {
        word: "friend",
        hint: "Person other than a family member"
    },

    {
        word: "pocket",
        hint: " A bag for carrying small items"
    },

    {
        word: "needle",
        hint: "A thin and sharp metal pin"
    },

    {
        word: "expert",
        hint: "Person with extensive knowledge"
    },

    {
        word: "statement",
        hint: "A declartion od something"
    },

    {
        word: "second",
        hint: "One sixtieth of a minute"
    },

    {
        word: "library",
        hint: "Place containing collection of books"
    },

    {
        word: "sapa",
        hint: "Moment of lack of finance"
    },

    {
        word: "strike",
        hint: "Shutdown of public Universities"
    },
]


const wordText = document.querySelector(".word");
hintText = document.querySelector(".hint span");
inputField = document.querySelector("input");
refreshBtn = document.querySelector(".refresh-word");
checkBtn = document.querySelector(".check-word");

let correctWord;

const initGame = () => {
    let randomObj = words[Math.floor(Math.random() * words.length)]; /*getting random object from words*/
    let wordArray = randomObj.word.split(""); /*splitting each letter of random word*/
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));   //getting random number
        // shuffling and swiping wordArray letters randomly
       [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]]; 
    }

    wordText.innerText = wordArray.join(""); //passing shuffled word as word text
    hintText.innerText = randomObj.hint; // passing random object hint as hint text
    correctWord = randomObj.word.toLowerCase(); // passing random word to correctword
    console.log(randomObj);
} 
initGame();

const checkWord = () => {
    let userWord = inputField.value.toLocaleLowerCase();
    if(!userWord) return alert(`Please enter a word check`)
    if(userWord !== correctWord) return alert(`Oops! ${userWord} is not acorrect word`);
    alert(`Congrats! ${userWord.toUpperCase()} is a correct word`);
    
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);