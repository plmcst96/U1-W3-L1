/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
const n1 = 'mario'
const n2 = 'rossi'
const newString = function (str1, str2) {

  return str1.substring(0, 2).concat(str2.substring(str2.length - 3))
}
const upperString = newString(n1, n2).toUpperCase()
console.log(upperString)



/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
const randomNumber = function () {
  const n = []
  for (let i = 0; i < 10; i++) {
    n.push(Math.floor(Math.random() * 101))
  } return n
}
console.log(randomNumber())

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/
const number = [2, 15, 86, 91, 44, 6]
const numberP = number.filter(num => num % 2 === 0)
console.log(numberP)

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
let sum = 0
number.forEach((totSum) => {
  sum += totSum
})
console.log(sum)


/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
const n3 = [2, 5, 8, 67, 19]
const totSum = n3.reduce((acc, num) => {
  return acc + num
}, 0)
console.log(totSum)

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

const newArray = n3.map((currentArray) => {
  let n = 4
  return currentArray + n
})
console.log(newArray)

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
const strings = ['EPICODE', 'il', 'corso', 'del 2023']
const lengthString = strings.map((length) => {

  return length.length

})
console.log(lengthString)

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
const numbersD = []
for (let i = 0; i < 100; i++) {
  if (i % 2 !== 0) {
    numbersD.push(i)
  }
}


console.log(numbersD)

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
const searchTheOldest = function (arr) {
  let oldest = arr[0]
  arr.forEach((movie) => {
    if (parseInt(movie.Year) < parseInt(oldest.Year)) {
      oldest = movie
    }

  })
  return oldest
}
console.log(searchTheOldest(movies))

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
const findTheMovie = function (arr) {
  return arr.length
}
console.log(findTheMovie(movies))

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
const titolArrayMovie = function (arr) {
  const nameMovie = arr.map((movie) => {
    return movie.Title
  })
  console.log(nameMovie)
}
titolArrayMovie(movies)

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
const millennialMovies = function (arr) {
  const millennial = arr.filter((movie) => {
    return parseInt(movie.Year) > 1999
  })
  console.log(millennial)
}
millennialMovies(movies)
/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
const totYear = function (arr) {
  const sumYear = arr.reduce((acc, curr) => {
    return (acc += parseInt(curr.Year))
  }, 0)
  console.log(sumYear)
}
totYear(movies)
/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
const specificFilm = function (mId) {
  const film = movies.find((movie) => {
    return movie.imdbID === mId
  })
  console.log(film)
}
specificFilm('tt0167260')
/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
const specifyFilm = function (year) {
  const x = movies.findIndex((movie) => {
    return movie.Year === year
  })
  console.log(x)
}
specifyFilm('2015')