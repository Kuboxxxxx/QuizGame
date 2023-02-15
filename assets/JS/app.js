const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ffadc9d626msh05c18e6769c905cp150beajsn82f9725fd877',
		'X-RapidAPI-Host': 'ases-quiz-api1.p.rapidapi.com'
	}
};

//Getting html elements
const usernameInput = document.getElementById("username")
const questionCard = document.getElementById("questionCard")
const userFrom = document.getElementById("getQuestions")
const questionContent = document.getElementById("questionText")
const categoryContent = document.getElementById("category")
const firstAnswer = document.getElementById("firstAnswer")
const secondAnswer = document.getElementById("secondAnswer")
const thirdAnswer = document.getElementById("thirdAnswer")
const fourthAnswer = document.getElementById("fourthAnswer")
const gameArea = document.getElementById("gameArea")

const startGame = async (event) => {
    //Prevents default submit function
    event.preventDefault()
    
    //Send request to API
    const getData = await fetch('https://ases-quiz-api1.p.rapidapi.com/questions/random/20', options)

    //Transform data
    const transformData = await getData.json()

    // if (transformData.resultcode !== 200){
    //     console.log("error")
    // }
    // else{
    // }
    //rendering question card
    const printQuestion = ({text, category, options}) => {
        gameArea.innerHTML += `<div class="card" style="width: 18rem;">
        <div class="card-body" id="questionCard">
            <h5 class="card-title" id="questionText">${text}</h5>
            <h6 class="card-subtitle mb-2 text-muted" id="category">${category.name}</h6>
            <button type="button" class="btn btn-outline-primary" id="firstAnswer" isCorrect="${options[0].isCorrect}">${options[0] .option}</button>
            <button type="button" class="btn btn-outline-primary" id="secondAnswer" isCorrect="${options[1].isCorrect}">${options[1].option}</button>
            <button type="button" class="btn btn-outline-primary" id="thirdAnswer" isCorrect="${options[2].isCorrect}">${options[2].option}</button>
            <button type="button" class="btn btn-outline-primary" id="fourthAnswer" isCorrect="${options[3].isCorrect}">${options[3].option}</button>
        </div>
    </div>`
    }

    transformData.questions.forEach(printQuestion)
}

// const countPoints = (event) => {
//     if (event.target.getAttribute("isCorrect") == true) {
//         alert("Good answer!")
//     }
// }

userFrom.addEventListener("click", startGame)
// firstAnswer.addEventListener("click", countPoints)
// secondAnswer.addEventListener("click", countPoints)
// thirdAnswer.addEventListener("click", countPoints)
// fourthAnswer.addEventListener("click", countPoints)
// const questions = [
//     {
//         id: 3904819048120,
//         text: "question",
//         options: [
//             {
//                 option: "answer",
//                 isCorrect: "boolean",
//             },
//             {
//                 option: "answer",
//                 isCorrect: "boolean",
//             },
//             {
//                 option: "answer",
//                 isCorrect: "boolean",
//             },
//             {
//                 option: "answer",
//                 isCorrect: "boolean",
//             },
//         ],
//         category: {
//             id: 982483202384,
//             name: "cat name",
//         },
//         diff: {
//             id: 984329084032984,
//             degree: "how diff",
//         } ,
//     }
// ]