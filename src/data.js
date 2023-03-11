// Dodać id, pytania, odpowiedzi, podpowiedź
const data = [
  {
    name: "Klasa 1 -3",
    quizzes: [
      {
        quizName: "Quiz 0",
        questions: [
          {
            hint: "lorem ipsum dolor sit amet, consectetur adip locus, sed do eiusmod tempor incididunt lore lorem ipsum dolor lorem ipsum dolorlorem ipsum lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
            question: "Pytanie 1",
            answers: [
              {
                text: "A: <script>",
                correct: true,
              },
              {
                text: "B: <javascript>",
                correct: false,
              },
              {
                text: "C: <source>",
                correct: false,
              },
              {
                text: "D: <src>",
                correct: false,
              },
            ],
          },
          {
            hint: "lorem ipsum dolor sit amet, consectetur adip locus, sed do eiusmod tempor incididunt lore lorem ipsum dolor lorem ipsum dolorlorem ipsum lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",

            question: "Pytanie 2",
            answers: [
              {
                text: "A: <script>",
                correct: true,
              },
              {
                text: "B: <javascript>",
                correct: false,
              },
              {
                text: "C: <source>",
                correct: false,
              },
              {
                text: "D: <src>",
                correct: false,
              },
            ],
          },
          {
            hint: "lorem ipsum dolor sit amet, consectetur adip locus, sed do eiusmod tempor incididunt lore lorem ipsum dolor lorem ipsum dolorlorem ipsum lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",

            question: "Pytanie 3",
            answers: [
              {
                text: "A: <script>",
                correct: true,
              },
              {
                text: "B: <javascript>",
                correct: false,
              },
              {
                text: "C: <source>",
                correct: false,
              },
              {
                text: "D: <src>",
                correct: false,
              },
            ],
          },
          {
            hint: "lorem ipsum dolor sit amet, consectetur adip locus, sed do eiusmod tempor incididunt lore lorem ipsum dolor lorem ipsum dolorlorem ipsum lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",

            question: "Pytanie 4",
            answers: [
              {
                text: "A: <script>",
                correct: true,
              },
              {
                text: "B: <javascript>",
                correct: false,
              },
              {
                text: "C: <source>",
                correct: false,
              },
              {
                text: "D: <src>",
                correct: false,
              },
            ],
          },
        ],
      },
      {
        quizName: "Quiz 1",
        questions: [
          {
            hint: "lorem ipsum dolor sit amet, consectetur adip locus, sed do eiusmod tempor incididunt lore lorem ipsum dolor lorem ipsum dolorlorem ipsum lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
            question: "Pytanie 1",
            answers: [
              {
                text: "A: <script>",
                correct: true,
              },
              {
                text: "B: <javascript>",
                correct: false,
              },
              {
                text: "C: <source>",
                correct: false,
              },
              {
                text: "D: <src>",
                correct: false,
              },
            ],
          },
          {
            hint: "lorem ipsum dolor sit amet, consectetur adip locus, sed do eiusmod tempor incididunt lore lorem ipsum dolor lorem ipsum dolorlorem ipsum lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",

            question: "Pytanie 2",
            answers: [
              {
                text: "A: <script>",
                correct: true,
              },
              {
                text: "B: <javascript>",
                correct: false,
              },
              {
                text: "C: <source>",
                correct: false,
              },
              {
                text: "D: <src>",
                correct: false,
              },
            ],
          },
          {
            hint: "lorem ipsum dolor sit amet, consectetur adip locus, sed do eiusmod tempor incididunt lore lorem ipsum dolor lorem ipsum dolorlorem ipsum lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",

            question: "Pytanie 3",
            answers: [
              {
                text: "A: <script>",
                correct: true,
              },
              {
                text: "B: <javascript>",
                correct: false,
              },
              {
                text: "C: <source>",
                correct: false,
              },
              {
                text: "D: <src>",
                correct: false,
              },
            ],
          },
          {
            hint: "lorem ipsum dolor sit amet, consectetur adip locus, sed do eiusmod tempor incididunt lore lorem ipsum dolor lorem ipsum dolorlorem ipsum lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",

            question: "Pytanie 4",
            answers: [
              {
                text: "A: <script>",
                correct: true,
              },
              {
                text: "B: <javascript>",
                correct: false,
              },
              {
                text: "C: <source>",
                correct: false,
              },
              {
                text: "D: <src>",
                correct: false,
              },
            ],
          },
        ],
      },
      {
        quizName: "Quiz 2",
        questions: [
          {
            hint: "lorem ipsum dolor sit amet, consectetur adip locus, sed do eiusmod tempor incididunt lore lorem ipsum dolor lorem ipsum dolorlorem ipsum lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
            question: "Pytanie 1",
            answers: [
              {
                text: "A: <script>",
                correct: true,
              },
              {
                text: "B: <javascript>",
                correct: false,
              },
              {
                text: "C: <source>",
                correct: false,
              },
              {
                text: "D: <src>",
                correct: false,
              },
            ],
          },
          {
            hint: "lorem ipsum dolor sit amet, consectetur adip locus, sed do eiusmod tempor incididunt lore lorem ipsum dolor lorem ipsum dolorlorem ipsum lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",

            question: "Pytanie 2",
            answers: [
              {
                text: "A: <script>",
                correct: true,
              },
              {
                text: "B: <javascript>",
                correct: false,
              },
              {
                text: "C: <source>",
                correct: false,
              },
              {
                text: "D: <src>",
                correct: false,
              },
            ],
          },
          {
            hint: "lorem ipsum dolor sit amet, consectetur adip locus, sed do eiusmod tempor incididunt lore lorem ipsum dolor lorem ipsum dolorlorem ipsum lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",

            question: "Pytanie 3",
            answers: [
              {
                text: "A: <script>",
                correct: true,
              },
              {
                text: "B: <javascript>",
                correct: false,
              },
              {
                text: "C: <source>",
                correct: false,
              },
              {
                text: "D: <src>",
                correct: false,
              },
            ],
          },
          {
            hint: "lorem ipsum dolor sit amet, consectetur adip locus, sed do eiusmod tempor incididunt lore lorem ipsum dolor lorem ipsum dolorlorem ipsum lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",

            question: "Pytanie 4",
            answers: [
              {
                text: "A: <script>",
                correct: true,
              },
              {
                text: "B: <javascript>",
                correct: false,
              },
              {
                text: "C: <source>",
                correct: false,
              },
              {
                text: "D: <src>",
                correct: false,
              },
            ],
          },
        ],
      },
      {
        quizName: "Quiz 3",
        questions: [
          {
            hint: "lorem ipsum dolor sit amet, consectetur adip locus, sed do eiusmod tempor incididunt lore lorem ipsum dolor lorem ipsum dolorlorem ipsum lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
            question: "Pytanie 1",
            answers: [
              {
                text: "A: <script>",
                correct: true,
              },
              {
                text: "B: <javascript>",
                correct: false,
              },
              {
                text: "C: <source>",
                correct: false,
              },
              {
                text: "D: <src>",
                correct: false,
              },
            ],
          },
          {
            hint: "lorem ipsum dolor sit amet, consectetur adip locus, sed do eiusmod tempor incididunt lore lorem ipsum dolor lorem ipsum dolorlorem ipsum lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",

            question: "Pytanie 2",
            answers: [
              {
                text: "A: <script>",
                correct: true,
              },
              {
                text: "B: <javascript>",
                correct: false,
              },
              {
                text: "C: <source>",
                correct: false,
              },
              {
                text: "D: <src>",
                correct: false,
              },
            ],
          },
          {
            hint: "lorem ipsum dolor sit amet, consectetur adip locus, sed do eiusmod tempor incididunt lore lorem ipsum dolor lorem ipsum dolorlorem ipsum lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",

            question: "Pytanie 3",
            answers: [
              {
                text: "A: <script>",
                correct: true,
              },
              {
                text: "B: <javascript>",
                correct: false,
              },
              {
                text: "C: <source>",
                correct: false,
              },
              {
                text: "D: <src>",
                correct: false,
              },
            ],
          },
          {
            hint: "lorem ipsum dolor sit amet, consectetur adip locus, sed do eiusmod tempor incididunt lore lorem ipsum dolor lorem ipsum dolorlorem ipsum lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",

            question: "Pytanie 4",
            answers: [
              {
                text: "A: <script>",
                correct: true,
              },
              {
                text: "B: <javascript>",
                correct: false,
              },
              {
                text: "C: <source>",
                correct: false,
              },
              {
                text: "D: <src>",
                correct: false,
              },
            ],
          },
        ],
      },
      {
        quizName: "Quiz 4",
        questions: [
          {
            hint: "lorem ipsum dolor sit amet, consectetur adip locus, sed do eiusmod tempor incididunt lore lorem ipsum dolor lorem ipsum dolorlorem ipsum lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
            question: "Pytanie 1",
            answers: [
              {
                text: "A: <script>",
                correct: true,
              },
              {
                text: "B: <javascript>",
                correct: false,
              },
              {
                text: "C: <source>",
                correct: false,
              },
              {
                text: "D: <src>",
                correct: false,
              },
            ],
          },
          {
            hint: "lorem ipsum dolor sit amet, consectetur adip locus, sed do eiusmod tempor incididunt lore lorem ipsum dolor lorem ipsum dolorlorem ipsum lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",

            question: "Pytanie 2",
            answers: [
              {
                text: "A: <script>",
                correct: true,
              },
              {
                text: "B: <javascript>",
                correct: false,
              },
              {
                text: "C: <source>",
                correct: false,
              },
              {
                text: "D: <src>",
                correct: false,
              },
            ],
          },
          {
            hint: "lorem ipsum dolor sit amet, consectetur adip locus, sed do eiusmod tempor incididunt lore lorem ipsum dolor lorem ipsum dolorlorem ipsum lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",

            question: "Pytanie 3",
            answers: [
              {
                text: "A: <script>",
                correct: true,
              },
              {
                text: "B: <javascript>",
                correct: false,
              },
              {
                text: "C: <source>",
                correct: false,
              },
              {
                text: "D: <src>",
                correct: false,
              },
            ],
          },
          {
            hint: "lorem ipsum dolor sit amet, consectetur adip locus, sed do eiusmod tempor incididunt lore lorem ipsum dolor lorem ipsum dolorlorem ipsum lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",

            question: "Pytanie 4",
            answers: [
              {
                text: "A: <script>",
                correct: true,
              },
              {
                text: "B: <javascript>",
                correct: false,
              },
              {
                text: "C: <source>",
                correct: false,
              },
              {
                text: "D: <src>",
                correct: false,
              },
            ],
          },
        ],
      },
      {
        quizName: "Quiz 5",
        questions: [
          {
            hint: "lorem ipsum dolor sit amet, consectetur adip locus, sed do eiusmod tempor incididunt lore lorem ipsum dolor lorem ipsum dolorlorem ipsum lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
            question: "Pytanie 1",
            answers: [
              {
                text: "A: <script>",
                correct: true,
              },
              {
                text: "B: <javascript>",
                correct: false,
              },
              {
                text: "C: <source>",
                correct: false,
              },
              {
                text: "D: <src>",
                correct: false,
              },
            ],
          },
          {
            hint: "lorem ipsum dolor sit amet, consectetur adip locus, sed do eiusmod tempor incididunt lore lorem ipsum dolor lorem ipsum dolorlorem ipsum lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",

            question: "Pytanie 2",
            answers: [
              {
                text: "A: <script>",
                correct: true,
              },
              {
                text: "B: <javascript>",
                correct: false,
              },
              {
                text: "C: <source>",
                correct: false,
              },
              {
                text: "D: <src>",
                correct: false,
              },
            ],
          },
          {
            hint: "lorem ipsum dolor sit amet, consectetur adip locus, sed do eiusmod tempor incididunt lore lorem ipsum dolor lorem ipsum dolorlorem ipsum lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",

            question: "Pytanie 3",
            answers: [
              {
                text: "A: <script>",
                correct: true,
              },
              {
                text: "B: <javascript>",
                correct: false,
              },
              {
                text: "C: <source>",
                correct: false,
              },
              {
                text: "D: <src>",
                correct: false,
              },
            ],
          },
          {
            hint: "lorem ipsum dolor sit amet, consectetur adip locus, sed do eiusmod tempor incididunt lore lorem ipsum dolor lorem ipsum dolorlorem ipsum lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",

            question: "Pytanie 4",
            answers: [
              {
                text: "A: <script>",
                correct: true,
              },
              {
                text: "B: <javascript>",
                correct: false,
              },
              {
                text: "C: <source>",
                correct: false,
              },
              {
                text: "D: <src>",
                correct: false,
              },
            ],
          },
        ],
      },
      {
        quizName: "Quiz 6",
        questions: [
          {
            hint: "lorem ipsum dolor sit amet, consectetur adip locus, sed do eiusmod tempor incididunt lore lorem ipsum dolor lorem ipsum dolorlorem ipsum lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
            question: "Pytanie 1",
            answers: [
              {
                text: "A: <script>",
                correct: true,
              },
              {
                text: "B: <javascript>",
                correct: false,
              },
              {
                text: "C: <source>",
                correct: false,
              },
              {
                text: "D: <src>",
                correct: false,
              },
            ],
          },
          {
            hint: "lorem ipsum dolor sit amet, consectetur adip locus, sed do eiusmod tempor incididunt lore lorem ipsum dolor lorem ipsum dolorlorem ipsum lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",

            question: "Pytanie 2",
            answers: [
              {
                text: "A: <script>",
                correct: true,
              },
              {
                text: "B: <javascript>",
                correct: false,
              },
              {
                text: "C: <source>",
                correct: false,
              },
              {
                text: "D: <src>",
                correct: false,
              },
            ],
          },
          {
            hint: "lorem ipsum dolor sit amet, consectetur adip locus, sed do eiusmod tempor incididunt lore lorem ipsum dolor lorem ipsum dolorlorem ipsum lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",

            question: "Pytanie 3",
            answers: [
              {
                text: "A: <script>",
                correct: true,
              },
              {
                text: "B: <javascript>",
                correct: false,
              },
              {
                text: "C: <source>",
                correct: false,
              },
              {
                text: "D: <src>",
                correct: false,
              },
            ],
          },
          {
            hint: "lorem ipsum dolor sit amet, consectetur adip locus, sed do eiusmod tempor incididunt lore lorem ipsum dolor lorem ipsum dolorlorem ipsum lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",

            question: "Pytanie 4",
            answers: [
              {
                text: "A: <script>",
                correct: true,
              },
              {
                text: "B: <javascript>",
                correct: false,
              },
              {
                text: "C: <source>",
                correct: false,
              },
              {
                text: "D: <src>",
                correct: false,
              },
            ],
          },
        ],
      },
      {
        quizName: "Quiz 7",
        questions: [
          {
            hint: "lorem ipsum dolor sit amet, consectetur adip locus, sed do eiusmod tempor incididunt lore lorem ipsum dolor lorem ipsum dolorlorem ipsum lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
            question: "Pytanie 1",
            answers: [
              {
                text: "A: <script>",
                correct: true,
              },
              {
                text: "B: <javascript>",
                correct: false,
              },
              {
                text: "C: <source>",
                correct: false,
              },
              {
                text: "D: <src>",
                correct: false,
              },
            ],
          },
          {
            hint: "lorem ipsum dolor sit amet, consectetur adip locus, sed do eiusmod tempor incididunt lore lorem ipsum dolor lorem ipsum dolorlorem ipsum lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",

            question: "Pytanie 2",
            answers: [
              {
                text: "A: <script>",
                correct: true,
              },
              {
                text: "B: <javascript>",
                correct: false,
              },
              {
                text: "C: <source>",
                correct: false,
              },
              {
                text: "D: <src>",
                correct: false,
              },
            ],
          },
          {
            hint: "lorem ipsum dolor sit amet, consectetur adip locus, sed do eiusmod tempor incididunt lore lorem ipsum dolor lorem ipsum dolorlorem ipsum lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",

            question: "Pytanie 3",
            answers: [
              {
                text: "A: <script>",
                correct: true,
              },
              {
                text: "B: <javascript>",
                correct: false,
              },
              {
                text: "C: <source>",
                correct: false,
              },
              {
                text: "D: <src>",
                correct: false,
              },
            ],
          },
          {
            hint: "lorem ipsum dolor sit amet, consectetur adip locus, sed do eiusmod tempor incididunt lore lorem ipsum dolor lorem ipsum dolorlorem ipsum lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",

            question: "Pytanie 4",
            answers: [
              {
                text: "A: <script>",
                correct: true,
              },
              {
                text: "B: <javascript>",
                correct: false,
              },
              {
                text: "C: <source>",
                correct: false,
              },
              {
                text: "D: <src>",
                correct: false,
              },
            ],
          },
        ],
      },
      {
        quizName: "Quiz 8",
        questions: [
          {
            hint: "lorem ipsum dolor sit amet, consectetur adip locus, sed do eiusmod tempor incididunt lore lorem ipsum dolor lorem ipsum dolorlorem ipsum lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
            question: "Pytanie 1",
            answers: [
              {
                text: "A: <script>",
                correct: true,
              },
              {
                text: "B: <javascript>",
                correct: false,
              },
              {
                text: "C: <source>",
                correct: false,
              },
              {
                text: "D: <src>",
                correct: false,
              },
            ],
          },
          {
            hint: "lorem ipsum dolor sit amet, consectetur adip locus, sed do eiusmod tempor incididunt lore lorem ipsum dolor lorem ipsum dolorlorem ipsum lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",

            question: "Pytanie 2",
            answers: [
              {
                text: "A: <script>",
                correct: true,
              },
              {
                text: "B: <javascript>",
                correct: false,
              },
              {
                text: "C: <source>",
                correct: false,
              },
              {
                text: "D: <src>",
                correct: false,
              },
            ],
          },
          {
            hint: "lorem ipsum dolor sit amet, consectetur adip locus, sed do eiusmod tempor incididunt lore lorem ipsum dolor lorem ipsum dolorlorem ipsum lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",

            question: "Pytanie 3",
            answers: [
              {
                text: "A: <script>",
                correct: true,
              },
              {
                text: "B: <javascript>",
                correct: false,
              },
              {
                text: "C: <source>",
                correct: false,
              },
              {
                text: "D: <src>",
                correct: false,
              },
            ],
          },
          {
            hint: "lorem ipsum dolor sit amet, consectetur adip locus, sed do eiusmod tempor incididunt lore lorem ipsum dolor lorem ipsum dolorlorem ipsum lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",

            question: "Pytanie 4",
            answers: [
              {
                text: "A: <script>",
                correct: true,
              },
              {
                text: "B: <javascript>",
                correct: false,
              },
              {
                text: "C: <source>",
                correct: false,
              },
              {
                text: "D: <src>",
                correct: false,
              },
            ],
          },
        ],
      },
      {
        quizName: "Quiz 9",
        questions: [
          {
            hint: "lorem ipsum dolor sit amet, consectetur adip locus, sed do eiusmod tempor incididunt lore lorem ipsum dolor lorem ipsum dolorlorem ipsum lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
            question: "Pytanie 1",
            answers: [
              {
                text: "A: <script>",
                correct: true,
              },
              {
                text: "B: <javascript>",
                correct: false,
              },
              {
                text: "C: <source>",
                correct: false,
              },
              {
                text: "D: <src>",
                correct: false,
              },
            ],
          },
          {
            hint: "lorem ipsum dolor sit amet, consectetur adip locus, sed do eiusmod tempor incididunt lore lorem ipsum dolor lorem ipsum dolorlorem ipsum lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",

            question: "Pytanie 2",
            answers: [
              {
                text: "A: <script>",
                correct: true,
              },
              {
                text: "B: <javascript>",
                correct: false,
              },
              {
                text: "C: <source>",
                correct: false,
              },
              {
                text: "D: <src>",
                correct: false,
              },
            ],
          },
          {
            hint: "lorem ipsum dolor sit amet, consectetur adip locus, sed do eiusmod tempor incididunt lore lorem ipsum dolor lorem ipsum dolorlorem ipsum lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",

            question: "Pytanie 3",
            answers: [
              {
                text: "A: <script>",
                correct: true,
              },
              {
                text: "B: <javascript>",
                correct: false,
              },
              {
                text: "C: <source>",
                correct: false,
              },
              {
                text: "D: <src>",
                correct: false,
              },
            ],
          },
          {
            hint: "lorem ipsum dolor sit amet, consectetur adip locus, sed do eiusmod tempor incididunt lore lorem ipsum dolor lorem ipsum dolorlorem ipsum lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",

            question: "Pytanie 4",
            answers: [
              {
                text: "A: <script>",
                correct: true,
              },
              {
                text: "B: <javascript>",
                correct: false,
              },
              {
                text: "C: <source>",
                correct: false,
              },
              {
                text: "D: <src>",
                correct: false,
              },
            ],
          },
        ],
      },
    ],
  },
];

export default data;
