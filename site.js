let questions = [
  {
    id: 0,
    question: "Do you like your lashes to...",

    options: [
      "Look Natural.",
      "Give you fierce a cat eye look!",
      'Be full of volume, "I love glamorous".',
      "Brighten and open your eyes beautifully.",
    ],
  },
  {
    id: 1,
    question: "How often do you wear lashes?",

    options: [
      '"Everyday girl"!',
      "Only on special occasions.",
      "Not much at all, I'm new here.",
      'Date nights, "I love to dress up"!',
    ],
  },
  {
    id: 2,
    question: "What is your expeience with lashes?",

    options: [
      "I speak lashes fluently.",
      "I do okay, I could use some help",
      "I can never put them on myself",
      "Ive never even tried, help me!",
    ],
  },
  {
    id: 3,
    question: "What is your eye shape?",

    options: [
      "Almond",
      "Monolid",
      "Hooded",
      "Round",
      "Prominent",
      "Downturned",
    ],
  },
];

let question_count = 0;
//let points = 0;
Max_Questions = 4;

let firstPoints = 0;
let secondPoints = 0;
let thirdPoints = 0;
let fourthPoints = 0;

window.onload = function () {
  show(question_count);
};

function next(e) {
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    location.href = "mailchimpform.html";
  }

  let user_answer = document.querySelector(".option.active").innerHTML;

  //check answer
  // for (let i = 0; i < questions.length; i++) {
  //n
  if (
    user_answer == questions[0].options[0] ||
    user_answer == questions[1].options[1] ||
    user_answer == questions[1].options[2] ||
    user_answer == questions[2].options[2] ||
    user_answer == questions[2].options[3] ||
    user_answer == questions[3].options[3]
  ) {
    //n
    firstPoints += 1;
  }
  //m
  if (
    user_answer == questions[0].options[3] ||
    user_answer == questions[1].options[3] ||
    user_answer == questions[2].options[1] ||
    user_answer == questions[3].options[1] ||
    user_answer == questions[3].options[5]
  ) {
    //m
    secondPoints += 1;
  }
  if (
    user_answer == questions[0].options[1] ||
    user_answer == questions[1].options[0] ||
    user_answer == questions[2].options[0] ||
    user_answer == questions[3].options[0] ||
    user_answer == questions[3].options[2] ||
    user_answer == questions[3].options[4]
  ) {
    //md
    thirdPoints += 1;
  }
  if (user_answer == questions[0].options[2]) {
    //d
    fourthPoints += 1;
  }
  // }
  // if (user_answer == questions[0].options[1]) {
  //   firstPoints += 1;
  // }
  // if (user_answer == questions[0].options[2]) {
  //   thirdPoints += 1;
  // }

  // if (user_answer == questions[1].options[0]) {
  //   firstPoints += 1;
  //   fourthPoints += 1;
  // }
  // if (user_answer == questions[1].options[1]) {
  //   secondPoints += 1;
  // }
  // if (user_answer == questions[1].options[2]) {
  //   thirdPoints += 1;
  // }

  // }
  // for (let i = 0; i < questions.length; i++) {
  //   if (user_answer == questions[i].options[0]) {
  //     firstPoints += 1;
  //   }
  // }
  // for (let i = 0; i < questions.length; i++) {
  //   if (user_answer == questions[i].options[1]) {
  //     secondPoints += 1;
  //   }
  // }
  // for (let i = 0; i < questions.length; i++) {
  //   if (user_answer == questions[i].options[2]) {
  //     thirdPoints += 1;
  //   }
  // }
  // for (let i = 0; i < questions.length; i++) {
  //   if (user_answer == questions[i].options[3]) {
  //     //console.log("hana")
  //     fourthPoints += 1;
  //   }
  // }

  if (
    firstPoints > secondPoints &&
    firstPoints > thirdPoints &&
    firstPoints > fourthPoints
  ) {
    sessionStorage.setItem("user_type", "N");
  }
  // secondPoints
  else if (
    secondPoints > firstPoints &&
    secondPoints > thirdPoints &&
    secondPoints > fourthPoints
  ) {
    sessionStorage.setItem("user_type", "M");
  }
  //thirdPoints
  else if (
    thirdPoints > secondPoints &&
    thirdPoints > firstPoints &&
    thirdPoints > fourthPoints
  ) {
    sessionStorage.setItem("user_type", "MD");
  }
  //fourthPoints
  else if (
    fourthPoints > secondPoints &&
    fourthPoints > thirdPoints &&
    fourthPoints > firstPoints
  ) {
    sessionStorage.setItem("user_type", "D");
  }
  //firstPoints === secondPoints
  else if (
    firstPoints == secondPoints &&
    firstPoints > thirdPoints &&
    firstPoints > fourthPoints
  ) {
    sessionStorage.setItem("user_type", "N&M");
  }
  //secondPoints == thirdPoints
  else if (
    secondPoints == thirdPoints &&
    secondPoints > firstPoints &&
    secondPoints > fourthPoints
  ) {
    sessionStorage.setItem("user_type", "M&MD");
  }
  //thirdPoints == firstPoints
  else if (
    thirdPoints == firstPoints &&
    thirdPoints > secondPoints &&
    thirdPoints > fourthPoints
  ) {
    sessionStorage.setItem("user_type", "N&MD");
  } else if (
    firstPoints == fourthPoints &&
    firstPoints > thirdPoints &&
    firstPoints > secondPoints
  ) {
    sessionStorage.setItem("user_type", "N&D");
  } else if (
    secondPoints == fourthPoints &&
    secondPoints > firstPoints &&
    secondPoints > thirdPoints
  ) {
    sessionStorage.setItem("user_type", "M&D");
  } else if (
    thirdPoints == fourthPoints &&
    secondPoints > firstPoints &&
    thirdPoints > secondPoints
  ) {
    sessionStorage.setItem("user_type", "MD&D");
  } else {
    sessionStorage.setItem("user_type", "N");
  }

  // let user_result = user_answer;
  // sessionStorage.setItem("user_result", user_result);
  sessionStorage.setItem("firstPoints", firstPoints);
  sessionStorage.setItem("secondPoints", secondPoints);
  sessionStorage.setItem("third", thirdPoints);
  sessionStorage.setItem("fourth", fourthPoints);
  // sessionStorage.setItem("firstPoints", firstPoints);
  // sessionStorage.setItem("secondPoints", secondPoints);
  // sessionStorage.setItem("thirdPoints", thirdPoints);

  //let coloranswer = document.querySelector("li.option.active");
  //e.target.coloranswer.classList.add("correct");

  question_count++;
  show(question_count);
  toggleActive();
  //Update the progress Bar

  const progressBarFull = document.getElementById("progressBarFull");

  progressBarFull.style.width = ` ${
    (question_count / Max_Questions) * 100 + 10
  }%`;
}

function show(count) {
  //progress text
  const progressText = document.getElementById("progressText");

  progressText.innerText = ` ${count + 1}/${Max_Questions}`;

  let question = document.getElementById("questions");
  let quizImage = document.getElementById("quizImage");
  if (question_count == 3) {
    let [first, second, third, fourth, fifth, sixth] = questions[count].options;
    question.innerHTML = `
    <p class="iamquestion"> ${questions[count].question}</p>
     <ul class="option_group">
    <li><span class="option">${first}</span></li>
    <li ><span class="option">${second}</span></li>
    <li ><span class="option">${third}</span></li>
    <li ><span class="option">${fourth}</span></li>
    <li ><span class="option">${fifth}</span></li>
    <li ><span class="option">${sixth}</span></li>

  </ul>
    `;
  } else {
    let [first, second, third, fourth] = questions[count].options;
    quizImage.innerHTML = `  <img src="./Assets/${questions[count].id}.jpg" class="img-quiz-page" alt="" height="350" width="400" />`;
    ///////no of questions

    question.innerHTML = `
      <p class="iamquestion"> ${questions[count].question}</p>
       <ul class="option_group">
      <li><span class="option">${first}</span></li>
      <li ><span class="option">${second}</span></li>
      <li ><span class="option">${third}</span></li>
      <li ><span class="option">${fourth}</span></li>
     
     
    </ul> 
      `;
  }

  /* question.innerHTML = questions[question_count].options.map((single) => {
    (
    `<li><span class="option">${single}</span></li>`
    )
  }) */

  //   if(question_count == 11 ){
  //     let [first, second , third , fourth , fifth] = questions[count].options;
  //     question.innerHTML = `
  //   <p class="iamquestion"> ${questions[count].question}</p>
  //    <ul class="option_group">
  //   <li><span class="option">${first}</span></li>
  //   <li ><span class="option">${second}</span></li>
  //   <li ><span class="option">${third}</span></li>
  //   <li ><span class="option">${fourth}</span></li>
  //   <li ><span class="option">${fifth}</span></li>

  // </ul>
  //   `;
  //   }

  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll(".option");

  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
