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
            hint: "Użyj właściwości wykładników, aby połączyć podobne wyrażenia i uprościć",

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
            hint: "Przenieś liczby całkowite na jedną strone, a następnie podziel wszystko przez wartośc przy x",

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
            hint: "Przypomnij sobie specjalny trójkąt prosty o kątach 30°-60°-90°. Sin30 jest równy długości krótszej przyprostokątnej do przeciw prostokątnej.",

            question: "Jaka jest wartość współczynnika sin(30°)?",
            answers: [
              {
                text: "1/2",
                correct: true,
              },
              {
                text: "√3/2",
                correct: false,
              },
              {
                text: "1/√2",
                correct: false,
              },
              {
                text: "√2/2",
                correct: false,
              },
            ],
          },
          {
            hint: "Użyj wzoru na różnicę kwadratów.",

            question: "Rozłóż na czynniki: 4x^2 - 9y^2",
            answers: [
              {
                text: "(2x + 3y)(2x + 3y)",
                correct: false,
              },
              {
                text: "(2x + 3y)(2y - 3x)",
                correct: false,
              },
              {
                text: "(2x - 3y)(2x + 3y)",
                correct: true,
              },
              {
                text: "(2y + 3x)(2y + 3x)",
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
            hint: "Użyj wzoru: y = mx + b, gdzie m to nachylenie, a b to wartość y, gdy x = 0.",
            question:
              "Jaką postać ma równanie prostej o nachyleniu 2 i przecięciu y (0, -3)?",
            answers: [
              {
                text: "y = -3x + 2",
                correct: false,
              },
              {
                text: "y = 2x - 3",
                correct: true,
              },
              {
                text: "y = -2x - 3",
                correct: false,
              },
              {
                text: "y = 3x - 2",
                correct: false,
              },
            ],
          },
          {
            hint: "Na lewą stronę przenieś wszystkie x a na prawą wszytskie liczby całkowite.",

            question: "Rozwiąż 3x - 7 = 5x + 1",
            answers: [
              {
                text: "x = -2",
                correct: true,
              },
              {
                text: "x = 2",
                correct: false,
              },
              {
                text: "x = 4",
                correct: false,
              },
              {
                text: "x = 8",
                correct: false,
              },
            ],
          },
          {
            hint: "Przypomnij sobie specjalny trójkąt prosty o kątach 45°-45°-90°. Cos45 jest równy długości przyprostokątnej do przeciwprostokątnej ",

            question: "Jaka jest wartość cos(45°)?",
            answers: [
              {
                text: "1/2",
                correct: false,
              },
              {
                text: "√2/2",
                correct: true,
              },
              {
                text: "1/√2",
                correct: false,
              },
              {
                text: "√3/2",
                correct: false,
              },
            ],
          },
          {
            hint: "Pomnóż każdy element pierwszego dwumianiu przez każdy element drugiedo dwumianu.",

            question: "Uprość: (2x - 3)(x + 4)",
            answers: [
              {
                text: "2x^2 + 5x - 12",
                correct: true,
              },
              {
                text: "2x^2 + 5x + 12",
                correct: false,
              },
              {
                text: "2x^2 - 5x - 12",
                correct: false,
              },
              {
                text: "2x^2 - 5x - 12",
                correct: false,
              },
            ],
          },
          {
            hint: "Skorzystaj ze wzoru na odległość: d = √[(x2 - x1)^2 + (y2 - y1)^2].",

            question: "Znajdź odległość między punktami (3, 4) i (7, 1)",
            answers: [
              {
                text: "√26",
                correct: false,
              },
              {
                text: "3√2",
                correct: false,
              },
              {
                text: "2√10",
                correct: true,
              },
              {
                text: "√50",
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
            hint: "Najpierw wymnóż 5 z nawaisem, następnie przenieś x na lewą stronę a liczby całkokowite na prawą stronę.",
            question: "Rozwiąż  5(x + 2) = 7x - 3",
            answers: [
              {
                text: "x = 3/2",
                correct: false,
              },
              {
                text: "x = 2/5",
                correct: false,
              },
              {
                text: "x = -2/5",
                correct: false,
              },
              {
                text: "x = 5/2",
                correct: true,
              },
            ],
          },
          {
            hint: "Usuń niewymierność z mianownika",

            question: "Uprość: √12/√3",
            answers: [
              {
                text: "√4",
                correct: false,
              },
              {
                text: "√6",
                correct: false,
              },
              {
                text: "2",
                correct: true,
              },
              {
                text: "4",
                correct: false,
              },
            ],
          },
          {
            hint: "Skorzystaj ze wzoru na nachylenie: m = (y2 - y1)/(x2 - x1).",

            question:
              "Znajdź nachylenie prostej przechodzącej przez punkty (-3, 4) i (5, 2).",
            answers: [
              {
                text: "-1/4",
                correct: true,
              },
              {
                text: "1/4",
                correct: false,
              },
              {
                text: "-1/8",
                correct: false,
              },
              {
                text: "1/8",
                correct: false,
              },
            ],
          },
          {
            hint: "Przenieś x na lewą stronę a liczby całkokowite na prawą stronę.",

            question: "Rozwiąż 2x + 3 = x - 5 ?",
            answers: [
              {
                text: "x = -4",
                correct: false,
              },
              {
                text: "x = 1",
                correct: false,
              },
              {
                text: "x = 8",
                correct: false,
              },
              {
                text: "x = -8",
                correct: true,
              },
            ],
          },
          {
            hint: "Przypomnij sobie specjalny trójkąt prosty o kątach 30°-60°-90°. Tg60 jest równy długości dłuższej przyprostokątnej do długości krótszej przyprostokątnej.",

            question: "Jaka jest wartość tan(60°)?",
            answers: [
              {
                text: "√3",
                correct: true,
              },
              {
                text: "1/√3",
                correct: false,
              },
              {
                text: "√3/3",
                correct: true,
              },
              {
                text: "3/√3",
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
            hint: "Pomnóż wykładniki",
            question: "Uprość: (a^2b^3c^4)^2",
            answers: [
              {
                text: "a^4b^6c^8",
                correct: true,
              },
              {
                text: "a^4b^9c^8",
                correct: false,
              },
              {
                text: "a^2b^6c^8",
                correct: false,
              },
              {
                text: "a^2b^9c^4",
                correct: false,
              },
            ],
          },
          {
            hint: "Podstaw podane punkty do podanej prostej y= -2x + b. Nachylenie linii jest ujemną odwrotnością nachylenia linii y = -2x + 5. ",

            question:
              "Znajdź równanie prostej prostopadłej do y = -2x + 5 i przechodzącej przez punkt (3, 2).",
            answers: [
              {
                text: "y = 2x - 4",
                correct: false,
              },
              {
                text: "y = 2x + 1",
                correct: false,
              },
              {
                text: "y = -1/2x + 7/2",
                correct: false,
              },
              {
                text: "y = 1/2x - 1/2",
                correct: true,
              },
            ],
          },
          {
            hint: "Rozłóż 75 na czynniki pierwsze, a następnie uprość pierwiastek.",

            question: "Uprość: √75",
            answers: [
              {
                text: "5√3",
                correct: true,
              },
              {
                text: "3√5",
                correct: false,
              },
              {
                text: "5√6",
                correct: false,
              },
              {
                text: "3√25",
                correct: false,
              },
            ],
          },
          {
            hint: "Przenieś liczby całkowite na jedną stronę. Następnie podziel przez wartość przy x",

            question: "Rozwiąż 4x - 7 = 9",
            answers: [
              {
                text: "x = 4,5",
                correct: false,
              },
              {
                text: "x = 2",
                correct: false,
              },
              {
                text: "x = 2,5",
                correct: false,
              },
              {
                text: "x = 4",
                correct: true,
              },
            ],
          },
          {
            hint: "Rozpocznij od rozwinięcia nawiasów potęgowych. Zastosuj tutaj regułę potęgowania potęgi",

            question: "Uprość: (3x^2y)^3(2xy^2)^2",
            answers: [
              {
                text: "108x^8y^7",
                correct: true,
              },
              {
                text: "108x^9y^7",
                correct: false,
              },
              {
                text: "54x^8y^9",
                correct: false,
              },
              {
                text: "54x^9y^9",
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
            hint: "Użyj wzoru na nachylenie prostej, aby znaleźć nachylenie, a następnie użyj jednego ze wzorów na nachylenie punktu, aby znaleźć równanie.",
            question:
              "Znajdź środek odcinka łączącego punkty (-2, 3) i (4, -5)",
            answers: [
              {
                text: "(1, 1)",
                correct: false,
              },
              {
                text: "(-1, -1)",
                correct: false,
              },
              {
                text: "(1, -1)",
                correct: true,
              },
              {
                text: "(-1, 1)",
                correct: false,
              },
            ],
          },
          {
            hint: "Skróć licznik i mianownik przez największy wspólny dzielnik wykładników każdej zmiennej.",

            question: "Uprość: (4x^3y^2z)(-3xz^2)",
            answers: [
              {
                text: "2xy^3/z",
                correct: true,
              },
              {
                text: "3xy^2/z.",
                correct: false,
              },
              {
                text: "2x^2y^3z",
                correct: false,
              },
              {
                text: "2x^3y^3z",
                correct: false,
              },
            ],
          },
          {
            hint: "Pole trójkąta wynosi (1/2)ah",

            question: "Oblicz pole trójkąta o podstawie 8 cm i wysokości 6 cm.",
            answers: [
              {
                text: "24 cm^2",
                correct: true,
              },
              {
                text: "32 cm^2",
                correct: false,
              },
              {
                text: "36 cm^2",
                correct: false,
              },
              {
                text: "48 cm^2",
                correct: false,
              },
            ],
          },
          {
            hint: "Wymnóż wszytsko co stoi przed nawaiasem a nastepnie po lewej stronie zostaw wyrażenia z x a na prawą przenieś wszyskie liczby całkowite",

            question: "Rozwiąż 4(x - 1) + 3(x + 2) = 5x + 5",
            answers: [
              {
                text: "x = 2",
                correct: true,
              },
              {
                text: "x = 3",
                correct: false,
              },
              {
                text: "x = 4",
                correct: false,
              },
              {
                text: "x = 5",
                correct: false,
              },
            ],
          },
          {
            hint: "Skróć licznik i mianownik przez ich największy wspólny dzielnik, który wynosi 2abc.",

            question: "Uprość: (2a^2b^3c^4)/(4abc^2)",
            answers: [
              {
                text: "(a^3b^2)/(2c^4)",
                correct: false,
              },
              {
                text: "(a^2b^2)/(2c^2)",
                correct: false,
              },
              {
                text: "(a^2b^3)/(2c^2)",
                correct: true,
              },
              {
                text: "(a^2b^4)/(2c^3)",
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
            hint: "Najpierw wymnóż 5 z nawaisem, następnie przenieś x na lewą stronę a liczby całkokowite na prawą stronę.",
            question: "Rozwiąż  5(x + 2) = 7x - 3",
            answers: [
              {
                text: "x = 3/2",
                correct: false,
              },
              {
                text: "x = 2/5",
                correct: false,
              },
              {
                text: "x = -2/5",
                correct: false,
              },
              {
                text: "x = 5/2",
                correct: true,
              },
            ],
          },
          {
            hint: "Usuń niewymierność z mianownika",

            question: "Uprość: √12/√3",
            answers: [
              {
                text: "√4",
                correct: false,
              },
              {
                text: "√6",
                correct: false,
              },
              {
                text: "2",
                correct: true,
              },
              {
                text: "4",
                correct: false,
              },
            ],
          },
          {
            hint: "Skorzystaj ze wzoru na nachylenie: m = (y2 - y1)/(x2 - x1).",

            question:
              "Znajdź nachylenie prostej przechodzącej przez punkty (-3, 4) i (5, 2).",
            answers: [
              {
                text: "-1/4",
                correct: true,
              },
              {
                text: "1/4",
                correct: false,
              },
              {
                text: "-1/8",
                correct: false,
              },
              {
                text: "1/8",
                correct: false,
              },
            ],
          },
          {
            hint: "Przenieś x na lewą stronę a liczby całkokowite na prawą stronę.",

            question: "Rozwiąż 2x + 3 = x - 5 ?",
            answers: [
              {
                text: "x = -4",
                correct: false,
              },
              {
                text: "x = 1",
                correct: false,
              },
              {
                text: "x = 8",
                correct: false,
              },
              {
                text: "x = -8",
                correct: true,
              },
            ],
          },
          {
            hint: "Przypomnij sobie specjalny trójkąt prosty o kątach 30°-60°-90°. Tg60 jest równy długości dłuższej przyprostokątnej do długości krótszej przyprostokątnej.",

            question: "Jaka jest wartość tan(60°)?",
            answers: [
              {
                text: "√3",
                correct: true,
              },
              {
                text: "1/√3",
                correct: false,
              },
              {
                text: "√3/3",
                correct: true,
              },
              {
                text: "3/√3",
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
            hint: "Użyj właściwości wykładników, aby połączyć podobne wyrażenia i uprościć",

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
            hint: "Przypomnij sobie specjalny trójkąt prosty o kątach 30°-60°-90°. Sin30 jest równy długości krótszej przyprostokątnej do przeciw prostokątnej.",

            question: "Jaka jest wartość współczynnika sin(30°)?",
            answers: [
              {
                text: "1/2",
                correct: true,
              },
              {
                text: "√3/2",
                correct: false,
              },
              {
                text: "1/√2",
                correct: false,
              },
              {
                text: "√2/2",
                correct: false,
              },
            ],
          },
          {
            hint: "Użyj wzoru na różnicę kwadratów.",

            question: "Rozłóż na czynniki: 4x^2 - 9y^2",
            answers: [
              {
                text: "(2x + 3y)(2x + 3y)",
                correct: false,
              },
              {
                text: "(2x + 3y)(2y - 3x)",
                correct: false,
              },
              {
                text: "(2x - 3y)(2x + 3y)",
                correct: true,
              },
              {
                text: "(2y + 3x)(2y + 3x)",
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
            hint: "Pomnóż wykładniki",
            question: "Uprość: (a^2b^3c^4)^2",
            answers: [
              {
                text: "a^4b^6c^8",
                correct: true,
              },
              {
                text: "a^4b^9c^8",
                correct: false,
              },
              {
                text: "a^2b^6c^8",
                correct: false,
              },
              {
                text: "a^2b^9c^4",
                correct: false,
              },
            ],
          },
          {
            hint: "Podstaw podane punkty do podanej prostej y= -2x + b. Nachylenie linii jest ujemną odwrotnością nachylenia linii y = -2x + 5. ",

            question:
              "Znajdź równanie prostej prostopadłej do y = -2x + 5 i przechodzącej przez punkt (3, 2).",
            answers: [
              {
                text: "y = 2x - 4",
                correct: false,
              },
              {
                text: "y = 2x + 1",
                correct: false,
              },
              {
                text: "y = -1/2x + 7/2",
                correct: false,
              },
              {
                text: "y = 1/2x - 1/2",
                correct: true,
              },
            ],
          },
          {
            hint: "Rozłóż 75 na czynniki pierwsze, a następnie uprość pierwiastek.",

            question: "Uprość: √75",
            answers: [
              {
                text: "5√3",
                correct: true,
              },
              {
                text: "3√5",
                correct: false,
              },
              {
                text: "5√6",
                correct: false,
              },
              {
                text: "3√25",
                correct: false,
              },
            ],
          },
          {
            hint: "Przenieś liczby całkowite na jedną stronę. Następnie podziel przez wartość przy x",

            question: "Rozwiąż 4x - 7 = 9",
            answers: [
              {
                text: "x = 4,5",
                correct: false,
              },
              {
                text: "x = 2",
                correct: false,
              },
              {
                text: "x = 2,5",
                correct: false,
              },
              {
                text: "x = 4",
                correct: true,
              },
            ],
          },
          {
            hint: "Rozpocznij od rozwinięcia nawiasów potęgowych. Zastosuj tutaj regułę potęgowania potęgi",

            question: "Uprość: (3x^2y)^3(2xy^2)^2",
            answers: [
              {
                text: "108x^8y^7",
                correct: true,
              },
              {
                text: "108x^9y^7",
                correct: false,
              },
              {
                text: "54x^8y^9",
                correct: false,
              },
              {
                text: "54x^9y^9",
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
            hint: "Użyj wzoru na nachylenie prostej, aby znaleźć nachylenie, a następnie użyj jednego ze wzorów na nachylenie punktu, aby znaleźć równanie.",
            question:
              "Znajdź środek odcinka łączącego punkty (-2, 3) i (4, -5)",
            answers: [
              {
                text: "(1, 1)",
                correct: false,
              },
              {
                text: "(-1, -1)",
                correct: false,
              },
              {
                text: "(1, -1)",
                correct: true,
              },
              {
                text: "(-1, 1)",
                correct: false,
              },
            ],
          },
          {
            hint: "Skróć licznik i mianownik przez największy wspólny dzielnik wykładników każdej zmiennej.",

            question: "Uprość: (4x^3y^2z)(-3xz^2)",
            answers: [
              {
                text: "2xy^3/z",
                correct: true,
              },
              {
                text: "3xy^2/z.",
                correct: false,
              },
              {
                text: "2x^2y^3z",
                correct: false,
              },
              {
                text: "2x^3y^3z",
                correct: false,
              },
            ],
          },
          {
            hint: "Pole trójkąta wynosi (1/2)ah",

            question: "Oblicz pole trójkąta o podstawie 8 cm i wysokości 6 cm.",
            answers: [
              {
                text: "24 cm^2",
                correct: true,
              },
              {
                text: "32 cm^2",
                correct: false,
              },
              {
                text: "36 cm^2",
                correct: false,
              },
              {
                text: "48 cm^2",
                correct: false,
              },
            ],
          },
          {
            hint: "Wymnóż wszytsko co stoi przed nawaiasem a nastepnie po lewej stronie zostaw wyrażenia z x a na prawą przenieś wszyskie liczby całkowite",

            question: "Rozwiąż 4(x - 1) + 3(x + 2) = 5x + 5",
            answers: [
              {
                text: "x = 2",
                correct: true,
              },
              {
                text: "x = 3",
                correct: false,
              },
              {
                text: "x = 4",
                correct: false,
              },
              {
                text: "x = 5",
                correct: false,
              },
            ],
          },
          {
            hint: "Skróć licznik i mianownik przez ich największy wspólny dzielnik, który wynosi 2abc.",

            question: "Uprość: (2a^2b^3c^4)/(4abc^2)",
            answers: [
              {
                text: "(a^3b^2)/(2c^4)",
                correct: false,
              },
              {
                text: "(a^2b^2)/(2c^2)",
                correct: false,
              },
              {
                text: "(a^2b^3)/(2c^2)",
                correct: true,
              },
              {
                text: "(a^2b^4)/(2c^3)",
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
            hint: "Użyj wzoru: y = mx + b, gdzie m to nachylenie, a b to wartość y, gdy x = 0.",
            question:
              "Jaką postać ma równanie prostej o nachyleniu 2 i przecięciu y (0, -3)?",
            answers: [
              {
                text: "y = -3x + 2",
                correct: false,
              },
              {
                text: "y = 2x - 3",
                correct: true,
              },
              {
                text: "y = -2x - 3",
                correct: false,
              },
              {
                text: "y = 3x - 2",
                correct: false,
              },
            ],
          },
          {
            hint: "Na lewą stronę przenieś wszystkie x a na prawą wszytskie liczby całkowite.",

            question: "Rozwiąż 3x - 7 = 5x + 1",
            answers: [
              {
                text: "x = -2",
                correct: true,
              },
              {
                text: "x = 2",
                correct: false,
              },
              {
                text: "x = 4",
                correct: false,
              },
              {
                text: "x = 8",
                correct: false,
              },
            ],
          },
          {
            hint: "Przypomnij sobie specjalny trójkąt prosty o kątach 45°-45°-90°. Cos45 jest równy długości przyprostokątnej do przeciwprostokątnej ",

            question: "Jaka jest wartość cos(45°)?",
            answers: [
              {
                text: "1/2",
                correct: false,
              },
              {
                text: "√2/2",
                correct: true,
              },
              {
                text: "1/√2",
                correct: false,
              },
              {
                text: "√3/2",
                correct: false,
              },
            ],
          },
          {
            hint: "Pomnóż każdy element pierwszego dwumianiu przez każdy element drugiedo dwumianu.",

            question: "Uprość: (2x - 3)(x + 4)",
            answers: [
              {
                text: "2x^2 + 5x - 12",
                correct: true,
              },
              {
                text: "2x^2 + 5x + 12",
                correct: false,
              },
              {
                text: "2x^2 - 5x - 12",
                correct: false,
              },
              {
                text: "2x^2 - 5x - 12",
                correct: false,
              },
            ],
          },
          {
            hint: "Skorzystaj ze wzoru na odległość: d = √[(x2 - x1)^2 + (y2 - y1)^2].",

            question: "Znajdź odległość między punktami (3, 4) i (7, 1)",
            answers: [
              {
                text: "√26",
                correct: false,
              },
              {
                text: "3√2",
                correct: false,
              },
              {
                text: "2√10",
                correct: true,
              },
              {
                text: "√50",
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
