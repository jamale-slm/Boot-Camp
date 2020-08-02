const main = document.querySelector('main');
const voicesSelect = document.getElementById('voices');
const textarea = document.getElementById('text');
const readBtn = document.getElementById('read');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');

const data = [
    {
        image:'./img/drink.jpg',
        text: "I'm thirsty"
    },
    {
        image:'./img/food.jpg',
        text: "I'm hungry"
    },
    {
        image:'./img/happy.jpg',
        text: "I'm happy"
    },
    {
        image:'./img/hurt.jpg',
        text: "I'm hurt"
    },
    {
        image:'./img/angry.jpg',
        text: "I'm angry"
    },
    {
        image:'./img/sad.jpg',
        text: "I'm sad"
    },
    {
        image:'./img/scared.jpg',
        text: "I'm scared"
    },
    {
        image:'./img/tired.jpg',
        text: "I'm tired"
    },
    {
        image:'./img/school.jpg',
        text: "I want to go to the school"
    },
    {
        image:'./img/outside.jpg',
        text: "I want to go outside"
    },
    {
        image:'./img/home.jpg',
        text: "I want to go home"
    },
    {
        image:'./img/grandma.jpg',
        text: "I want to go to grandmas"
    }
];

data.forEach(createBox);

//Create speech box
function createBox(item){
    const box = document.createElement('div');
    const {image, text}=item;
    box.classList.add('box');
    box.innerHTML = `
        <img src="${image}" alt="${text}"/>
        <p class="info">${text}</p>
    `;
    box.addEventListener('click', ()=>{
        setTextMessage(text);
        speakText();

        //Ad active effect
        box.classList.add('active');
        setTimeout(() => box.classList.remove('active'), 800);
    });
    main.appendChild(box);
}

//Init speech synth
const message = new SpeechSynthesisUtterance();

//Store the voices
let voices =[];

function getVoices(){
    voices = speechSynthesis.getVoices();
    voices.forEach(voice => {
        const option = document.createElement('option');
        option.value= voice.name;
        option.innerText = `${voice.name} ${voice.lang}`;
        voicesSelect.appendChild(option);
    });
}

//Set text
function setTextMessage(text){
    message.text = text;
}

//Speak text
function speakText(){
    speechSynthesis.speak(message);
}

//Set voice
function setVoice(e){
    message.voice = voices.find(voice => voice.name === e.target.value);
}

//Voices chnaged
speechSynthesis.addEventListener('voiceschanged', getVoices);

//Toggle text box
toggleBtn.addEventListener('click', ()=> document.getElementById('text-box').classList.toggle('show'));

//Close button
closeBtn.addEventListener('click', ()=> document.getElementById('text-box').classList.remove('show'));

//Change voice
voicesSelect.addEventListener('change', setVoice);

//Read text button
readBtn.addEventListener('click', ()=> {
    setTextMessage(textarea.value);
    speakText();
})

getVoices();

