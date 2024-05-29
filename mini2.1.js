const questions=[
    {
        question:"Which is the largest animal in the world?",
        answers:[
            {text:'Shark',correct: false},
            { text: "Blue whale",correct:true},
            { text:'Elephant',correct :false},
            {text: "Giraffe",correct: false},
        ]
                
            },
            {
                question:"Which is the largest desert in the world?",
                answers:[
                    {text:'Kalhari',correct: false},
                    { text: "Gobi",correct:false},
                    { text:'Sahara',correct :false},
                    {text: "Antartica",correct: true},
                ]
                    },
                    {
                        question:"Which is the smallest continent in the world?",
                        answers:[
                            {text:'Asia',correct: false},
                            { text: "Australia",correct:true},
                            { text:'Arctic',correct :false},
                            {text: "Africa",correct: false},
                        ]
                            },
                            {
                                question:"Which is the smallest country in the world?",
                                answers:[
                                    {text:'Vatican City',correct:true},
                                    { text: "India",correct:false},
                                    { text:'Nepal',correct :false},
                                    {text: "Bhutan",correct: false},
                                ]
                                    }
                                ]

const questionelement=document.getElementById('question')
const answerbutton=document.getElementById('answer-buttons');
const nextbutton=document.getElementById('nextbtn');

let questionindex=0;
let score=0;

function startquiz(){
    questionindex=0;
    score=0;
    showquestion();
}

function showquestion(){

    resetstate();
    const currentquestion=questions[questionindex];
    const questionNo=questionindex+1;
    questionelement.innerHTML=questionNo+'.'+currentquestion.question;

    currentquestion.answers.forEach(answer=>{
        const button=document.createElement('button');
        button.innerHTML=answer.text;
        button.classList.add('btn');
        answerbutton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;

            }
            button.addEventListener('click',selectanswer)
            
        
        
        })
    }
function selectanswer(e){
            const selectedbtn=e.target;
            const correctans=selectedbtn.dataset.correct===`true`;
            if(correctans){
                selectedbtn.classList.add('correct');
                score++;
            }
            else{
                selectedbtn.classList.add('incorrect')
            }
            Array.from(answerbutton.children).forEach(button=>{
                if(button.dataset.correct==='true'){
                    button.classList.add('correct')
                }
                button.disabled=true;
            });
            nextbutton.style.display='block';


            
         }
         
         nextbutton.addEventListener('keypress', function(event) {
            // Check if the pressed key is Enter (keyCode 13)
            if (event.key === 'Enter') {
                // Perform the same operation as when the Next button is clicked
                if (questionindex < questions.length) {
                    handlenextbtn();
                } else {
                    startquiz();
                }
                event.preventDefault();
            }
        });


            nextbutton.addEventListener('click',()=>{
              
               if(questionindex<questions.length){
                handlenextbtn();}
                else{
                    startquiz();
                }
                
})
// Add event listener for keypress on the document



            
            function handlenextbtn(){
                questionindex++;
                if(questionindex<questions.length){
                    showquestion();
                }
                else{
                    showscore();
                }
            }

            function showscore(){
                resetstate();
                nextbutton.innerHTML='Play again';
                questionelement.innerHTML=`Your score is ${score} out of ${
                    questions.length}!`
                }

            
         
function resetstate(){
    nextbutton.style.display='none';
    while(answerbutton.firstChild){
        answerbutton.removeChild(answerbutton.firstChild);
    }
}


startquiz();

                            