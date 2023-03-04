// Dodać id, pytania, odpowiedzi, podpowiedź
const data = [
  {
    name: "Klasa 1 -3",
    quizzes: [
      {
        quizName: "Quiz 0",
        questions: [
          {
            question: "Pytanie 1",
            answers: [
              {
                text: "A: <script>",
                correct: true,
                score: 1,
              },
              {
                text: "B: <javascript>",
                correct: false,
                score: 0,
              },
              {
                text: "C: <source>",
                correct: false,
                score: 0.5,
              },
              {
                text: "D: <src>",
                correct: false,
                score: 0,
              },
            ],
          },
          {
            question: "Pytanie 2",
            answers: [
              {
                text: "A: <script>",
                correct: true,
                score: 1,
              },
              {
                text: "B: <javascript>",
                correct: false,
                score: 0,
              },
              {
                text: "C: <source>",
                correct: false,
                score: 0.5,
              },
              {
                text: "D: <src>",
                correct: false,
                score: 0,
              },
            ],
          },
          {
            question: "Pytanie 3",
            answers: [
              {
                text: "A: <script>",
                correct: true,
                score: 1,
              },
              {
                text: "B: <javascript>",
                correct: false,
                score: 0,
              },
              {
                text: "C: <source>",
                correct: false,
                score: 0.5,
              },
              {
                text: "D: <src>",
                correct: false,
                score: 0,
              },
            ],
          },
          {
            question: "Pytanie 4",
            answers: [
              {
                text: "A: <script>",
                correct: true,
                score: 1,
              },
              {
                text: "B: <javascript>",
                correct: false,
                score: 0,
              },
              {
                text: "C: <source>",
                correct: false,
                score: 0.5,
              },
              {
                text: "D: <src>",
                correct: false,
                score: 0,
              },
            ],
          },
        ],
      },
      {
        quizName: "Quiz 1",
        questions: [
          {
            question: "Pytanie 1",
            answers: [
              {
                text: "A: <script>",
                correct: true,
                score: 1,
              },
              {
                text: "B: <javascript>",
                correct: false,
                score: 0,
              },
              {
                text: "C: <source>",
                correct: false,
                score: 0.5,
              },
              {
                text: "D: <src>",
                correct: false,
                score: 0,
              },
            ],
          },
          {
            question: "Pytanie 2",
            answers: [
              {
                text: "A: <script>",
                correct: true,
                score: 1,
              },
              {
                text: "B: <javascript>",
                correct: false,
                score: 0,
              },
              {
                text: "C: <source>",
                correct: false,
                score: 0.5,
              },
              {
                text: "D: <src>",
                correct: false,
                score: 0,
              },
            ],
          },
          {
            question: "Pytanie 3",
            answers: [
              {
                text: "A: <script>",
                correct: true,
                score: 1,
              },
              {
                text: "B: <javascript>",
                correct: false,
                score: 0,
              },
              {
                text: "C: <source>",
                correct: false,
                score: 0.5,
              },
              {
                text: "D: <src>",
                correct: false,
                score: 0,
              },
            ],
          },
          {
            question: "Pytanie 4",
            answers: [
              {
                text: "A: <script>",
                correct: true,
                score: 1,
              },
              {
                text: "B: <javascript>",
                correct: false,
                score: 0,
              },
              {
                text: "C: <source>",
                correct: false,
                score: 0.5,
              },
              {
                text: "D: <src>",
                correct: false,
                score: 0,
              },
            ],
          },
        ],
      },
      {
        quizName: "Quiz 2",
        questions: [
          {
            question: "Pytanie 1",
            answers: [
              {
                text: "A: <script>",
                correct: true,
                score: 1,
              },
              {
                text: "B: <javascript>",
                correct: false,
                score: 0,
              },
              {
                text: "C: <source>",
                correct: false,
                score: 0.5,
              },
              {
                text: "D: <src>",
                correct: false,
                score: 0,
              },
            ],
          },
          {
            question: "Pytanie 2",
            answers: [
              {
                text: "A: <script>",
                correct: true,
                score: 1,
              },
              {
                text: "B: <javascript>",
                correct: false,
                score: 0,
              },
              {
                text: "C: <source>",
                correct: false,
                score: 0.5,
              },
              {
                text: "D: <src>",
                correct: false,
                score: 0,
              },
            ],
          },
          {
            question: "Pytanie 3",
            answers: [
              {
                text: "A: <script>",
                correct: true,
                score: 1,
              },
              {
                text: "B: <javascript>",
                correct: false,
                score: 0,
              },
              {
                text: "C: <source>",
                correct: false,
                score: 0.5,
              },
              {
                text: "D: <src>",
                correct: false,
                score: 0,
              },
            ],
          },
          {
            question: "Pytanie 4",
            answers: [
              {
                text: "A: <script>",
                correct: true,
                score: 1,
              },
              {
                text: "B: <javascript>",
                correct: false,
                score: 0,
              },
              {
                text: "C: <source>",
                correct: false,
                score: 0.5,
              },
              {
                text: "D: <src>",
                correct: false,
                score: 0,
              },
            ],
          },
        ],
      },
      {
        quizName: "Quiz 3",
        questions: [
          {
            question: "Pytanie 1",
            answers: [
              {
                text: "A: <script>",
                correct: true,
                score: 1,
              },
              {
                text: "B: <javascript>",
                correct: false,
                score: 0,
              },
              {
                text: "C: <source>",
                correct: false,
                score: 0.5,
              },
              {
                text: "D: <src>",
                correct: false,
                score: 0,
              },
            ],
          },
          {
            question: "Pytanie 2",
            answers: [
              {
                text: "A: <script>",
                correct: true,
                score: 1,
              },
              {
                text: "B: <javascript>",
                correct: false,
                score: 0,
              },
              {
                text: "C: <source>",
                correct: false,
                score: 0.5,
              },
              {
                text: "D: <src>",
                correct: false,
                score: 0,
              },
            ],
          },
          {
            question: "Pytanie 3",
            answers: [
              {
                text: "A: <script>",
                correct: true,
                score: 1,
              },
              {
                text: "B: <javascript>",
                correct: false,
                score: 0,
              },
              {
                text: "C: <source>",
                correct: false,
                score: 0.5,
              },
              {
                text: "D: <src>",
                correct: false,
                score: 0,
              },
            ],
          },
          {
            question: "Pytanie 4",
            answers: [
              {
                text: "A: <script>",
                correct: true,
                score: 1,
              },
              {
                text: "B: <javascript>",
                correct: false,
                score: 0,
              },
              {
                text: "C: <source>",
                correct: false,
                score: 0.5,
              },
              {
                text: "D: <src>",
                correct: false,
                score: 0,
              },
            ],
          },
        ],
      },
      {
        quizName: "Quiz 4",
        questions: [
          {
            question: "Pytanie 1",
            answers: [
              {
                text: "A: <script>",
                correct: true,
                score: 1,
              },
              {
                text: "B: <javascript>",
                correct: false,
                score: 0,
              },
              {
                text: "C: <source>",
                correct: false,
                score: 0.5,
              },
              {
                text: "D: <src>",
                correct: false,
                score: 0,
              },
            ],
          },
          {
            question: "Pytanie 2",
            answers: [
              {
                text: "A: <script>",
                correct: true,
                score: 1,
              },
              {
                text: "B: <javascript>",
                correct: false,
                score: 0,
              },
              {
                text: "C: <source>",
                correct: false,
                score: 0.5,
              },
              {
                text: "D: <src>",
                correct: false,
                score: 0,
              },
            ],
          },
          {
            question: "Pytanie 3",
            answers: [
              {
                text: "A: <script>",
                correct: true,
                score: 1,
              },
              {
                text: "B: <javascript>",
                correct: false,
                score: 0,
              },
              {
                text: "C: <source>",
                correct: false,
                score: 0.5,
              },
              {
                text: "D: <src>",
                correct: false,
                score: 0,
              },
            ],
          },
          {
            question: "Pytanie 4",
            answers: [
              {
                text: "A: <script>",
                correct: true,
                score: 1,
              },
              {
                text: "B: <javascript>",
                correct: false,
                score: 0,
              },
              {
                text: "C: <source>",
                correct: false,
                score: 0.5,
              },
              {
                text: "D: <src>",
                correct: false,
                score: 0,
              },
            ],
          },
        ],
      },
      {
        quizName: "Quiz 5",
        questions: [
          {
            question: "Pytanie 1",
            answers: [
              {
                text: "A: <script>",
                correct: true,
                score: 1,
              },
              {
                text: "B: <javascript>",
                correct: false,
                score: 0,
              },
              {
                text: "C: <source>",
                correct: false,
                score: 0.5,
              },
              {
                text: "D: <src>",
                correct: false,
                score: 0,
              },
            ],
          },
          {
            question: "Pytanie 2",
            answers: [
              {
                text: "A: <script>",
                correct: true,
                score: 1,
              },
              {
                text: "B: <javascript>",
                correct: false,
                score: 0,
              },
              {
                text: "C: <source>",
                correct: false,
                score: 0.5,
              },
              {
                text: "D: <src>",
                correct: false,
                score: 0,
              },
            ],
          },
          {
            question: "Pytanie 3",
            answers: [
              {
                text: "A: <script>",
                correct: true,
                score: 1,
              },
              {
                text: "B: <javascript>",
                correct: false,
                score: 0,
              },
              {
                text: "C: <source>",
                correct: false,
                score: 0.5,
              },
              {
                text: "D: <src>",
                correct: false,
                score: 0,
              },
            ],
          },
          {
            question: "Pytanie 4",
            answers: [
              {
                text: "A: <script>",
                correct: true,
                score: 1,
              },
              {
                text: "B: <javascript>",
                correct: false,
                score: 0,
              },
              {
                text: "C: <source>",
                correct: false,
                score: 0.5,
              },
              {
                text: "D: <src>",
                correct: false,
                score: 0,
              },
            ],
          },
        ],
      },
      {
        quizName: "Quiz 6",
        questions: [
          {
            question: "Pytanie 1",
            answers: [
              {
                text: "A: <script>",
                correct: true,
                score: 1,
              },
              {
                text: "B: <javascript>",
                correct: false,
                score: 0,
              },
              {
                text: "C: <source>",
                correct: false,
                score: 0.5,
              },
              {
                text: "D: <src>",
                correct: false,
                score: 0,
              },
            ],
          },
          {
            question: "Pytanie 2",
            answers: [
              {
                text: "A: <script>",
                correct: true,
                score: 1,
              },
              {
                text: "B: <javascript>",
                correct: false,
                score: 0,
              },
              {
                text: "C: <source>",
                correct: false,
                score: 0.5,
              },
              {
                text: "D: <src>",
                correct: false,
                score: 0,
              },
            ],
          },
          {
            question: "Pytanie 3",
            answers: [
              {
                text: "A: <script>",
                correct: true,
                score: 1,
              },
              {
                text: "B: <javascript>",
                correct: false,
                score: 0,
              },
              {
                text: "C: <source>",
                correct: false,
                score: 0.5,
              },
              {
                text: "D: <src>",
                correct: false,
                score: 0,
              },
            ],
          },
          {
            question: "Pytanie 4",
            answers: [
              {
                text: "A: <script>",
                correct: true,
                score: 1,
              },
              {
                text: "B: <javascript>",
                correct: false,
                score: 0,
              },
              {
                text: "C: <source>",
                correct: false,
                score: 0.5,
              },
              {
                text: "D: <src>",
                correct: false,
                score: 0,
              },
            ],
          },
        ],
      },
      {
        quizName: "Quiz 7",
        questions: [
          {
            question: "Pytanie 1",
            answers: [
              {
                text: "A: <script>",
                correct: true,
                score: 1,
              },
              {
                text: "B: <javascript>",
                correct: false,
                score: 0,
              },
              {
                text: "C: <source>",
                correct: false,
                score: 0.5,
              },
              {
                text: "D: <src>",
                correct: false,
                score: 0,
              },
            ],
          },
          {
            question: "Pytanie 2",
            answers: [
              {
                text: "A: <script>",
                correct: true,
                score: 1,
              },
              {
                text: "B: <javascript>",
                correct: false,
                score: 0,
              },
              {
                text: "C: <source>",
                correct: false,
                score: 0.5,
              },
              {
                text: "D: <src>",
                correct: false,
                score: 0,
              },
            ],
          },
          {
            question: "Pytanie 3",
            answers: [
              {
                text: "A: <script>",
                correct: true,
                score: 1,
              },
              {
                text: "B: <javascript>",
                correct: false,
                score: 0,
              },
              {
                text: "C: <source>",
                correct: false,
                score: 0.5,
              },
              {
                text: "D: <src>",
                correct: false,
                score: 0,
              },
            ],
          },
          {
            question: "Pytanie 4",
            answers: [
              {
                text: "A: <script>",
                correct: true,
                score: 1,
              },
              {
                text: "B: <javascript>",
                correct: false,
                score: 0,
              },
              {
                text: "C: <source>",
                correct: false,
                score: 0.5,
              },
              {
                text: "D: <src>",
                correct: false,
                score: 0,
              },
            ],
          },
        ],
      },
      {
        quizName: "Quiz 8",
        questions: [
          {
            question: "Pytanie 1",
            answers: [
              {
                text: "A: <script>",
                correct: true,
                score: 1,
              },
              {
                text: "B: <javascript>",
                correct: false,
                score: 0,
              },
              {
                text: "C: <source>",
                correct: false,
                score: 0.5,
              },
              {
                text: "D: <src>",
                correct: false,
                score: 0,
              },
            ],
          },
          {
            question: "Pytanie 2",
            answers: [
              {
                text: "A: <script>",
                correct: true,
                score: 1,
              },
              {
                text: "B: <javascript>",
                correct: false,
                score: 0,
              },
              {
                text: "C: <source>",
                correct: false,
                score: 0.5,
              },
              {
                text: "D: <src>",
                correct: false,
                score: 0,
              },
            ],
          },
          {
            question: "Pytanie 3",
            answers: [
              {
                text: "A: <script>",
                correct: true,
                score: 1,
              },
              {
                text: "B: <javascript>",
                correct: false,
                score: 0,
              },
              {
                text: "C: <source>",
                correct: false,
                score: 0.5,
              },
              {
                text: "D: <src>",
                correct: false,
                score: 0,
              },
            ],
          },
          {
            question: "Pytanie 4",
            answers: [
              {
                text: "A: <script>",
                correct: true,
                score: 1,
              },
              {
                text: "B: <javascript>",
                correct: false,
                score: 0,
              },
              {
                text: "C: <source>",
                correct: false,
                score: 0.5,
              },
              {
                text: "D: <src>",
                correct: false,
                score: 0,
              },
            ],
          },
        ],
      },
      {
        quizName: "Quiz 9",
        questions: [
          {
            question: "Pytanie 1",
            answers: [
              {
                text: "A: <script>",
                correct: true,
                score: 1,
              },
              {
                text: "B: <javascript>",
                correct: false,
                score: 0,
              },
              {
                text: "C: <source>",
                correct: false,
                score: 0.5,
              },
              {
                text: "D: <src>",
                correct: false,
                score: 0,
              },
            ],
          },
          {
            question: "Pytanie 2",
            answers: [
              {
                text: "A: <script>",
                correct: true,
                score: 1,
              },
              {
                text: "B: <javascript>",
                correct: false,
                score: 0,
              },
              {
                text: "C: <source>",
                correct: false,
                score: 0.5,
              },
              {
                text: "D: <src>",
                correct: false,
                score: 0,
              },
            ],
          },
          {
            question: "Pytanie 3",
            answers: [
              {
                text: "A: <script>",
                correct: true,
                score: 1,
              },
              {
                text: "B: <javascript>",
                correct: false,
                score: 0,
              },
              {
                text: "C: <source>",
                correct: false,
                score: 0.5,
              },
              {
                text: "D: <src>",
                correct: false,
                score: 0,
              },
            ],
          },
          {
            question: "Pytanie 4",
            answers: [
              {
                text: "A: <script>",
                correct: true,
                score: 1,
              },
              {
                text: "B: <javascript>",
                correct: false,
                score: 0,
              },
              {
                text: "C: <source>",
                correct: false,
                score: 0.5,
              },
              {
                text: "D: <src>",
                correct: false,
                score: 0,
              },
            ],
          },
        ],
      },
    ],
  },
];

export default data;
