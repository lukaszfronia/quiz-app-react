// Dodać id, pytania, odpowiedzi, podpowiedź
const dataTL = [
  {
    name: "Tech - Liceum",
    quizzes: [
      {
        quizName: "Quiz 0",
        questions: [
          {
            hint: "Użyj wzoru na nachylenie prostej, aby znaleźć nachylenie, a następnie użyj jednego ze wzorów na nachylenie punktu, aby znaleźć równanie.",
            question:
              "Jakie jest równanie prostej, która przechodzi przez punkty (2, 4) i (5, 7)?",
            answers: [
              {
                text: "y = x + 2",
                correct: false,
              },
              {
                text: "y = 2x + 1",
                correct: true,
              },
              {
                text: "y = -x + 6",
                correct: false,
              },
              {
                text: "y = -2x + 8",
                correct: false,
              },
            ],
          },
          {
            hint: "Użyj właściwości wykładników, aby połączyć podobne wyrażenia i uprościć.r",

            question: "Uprość: (4x^3y^2z)(-3xz^2)",
            answers: [
              {
                text: "-12x^4y^2z^3",
                correct: false,
              },
              {
                text: "-7x^4y^2z^3",
                correct: false,
              },
              {
                text: "-12x^3y^2z^3",
                correct: true,
              },
              {
                text: "-7x^3y^2z^3",
                correct: false,
              },
            ],
          },
          {
            hint: "Odejmij 5 od obu stron, a następnie podziel przez 2.",

            question: "Rozwiąż dla x: 2x + 5 = 13",
            answers: [
              {
                text: "x = 4",
                correct: true,
              },
              {
                text: "x = 6",
                correct: false,
              },
              {
                text: "x = 8",
                correct: false,
              },
              {
                text: "x = 9",
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

export default dataTL;
