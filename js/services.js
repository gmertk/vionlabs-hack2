(function() {
   'use strict';

   /* Services */

   angular.module('myApp.services', ['myApp.service.login', 'myApp.service.firebase'])

      // put your services here!
      // .service('serviceName', ['dependency', function(dependency) {}]);
    .factory('moviedb', function () {
      var movies = [
          {
            "plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            "genres": [
              "Crime",
              "Drama"
            ],
            "rating": "9.3",
            "title": "The Shawshank Redemption",
            "url": "http://www.imdb.com/title/tt0111161/?ref_=chttp_tt_1",
            "movieDirector": "Frank Darabont",
            "actors": [
              "Tim Robbins",
              "Morgan Freeman",
              "Bob Gunton"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@.jpg"
          },
          {
            "plot": "The Tramp struggles to help a blind flower girl he has fallen in love with.",
            "genres": [
              "Comedy",
              "Drama",
              "Romance"
            ],
            "rating": "8.7",
            "title": "City Lights",
            "url": "http://www.imdb.com/title/tt0021749/?ref_=chttp_tt_34",
            "movieDirector": "Charles Chaplin",
            "actors": [
              "Charles Chaplin",
              "Virginia Cherrill",
              "Florence Lee"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTc2NzYxMzY5MV5BMl5BanBnXkFtZTYwNzY5MTE5.jpg"
          },
          {
            "plot": "A Phoenix secretary steals $40,000 from her employer's client, goes on the run and checks into a remote motel run by a young man under the domination of his mother.",
            "genres": [
              "Horror",
              "Mystery",
              "Thriller"
            ],
            "rating": "8.6",
            "title": "Psycho",
            "url": "http://www.imdb.com/title/tt0054215/?ref_=chttp_tt_33",
            "movieDirector": "Alfred Hitchcock",
            "actors": [
              "Anthony Perkins",
              "Janet Leigh",
              "Vera Miles"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTgyNDIxNzQ4MF5BMl5BanBnXkFtZTYwMzkyNTQ2.jpg"
          },
          {
            "plot": "A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.",
            "genres": [
              "Crime",
              "Drama"
            ],
            "rating": "8.6",
            "title": "American History X",
            "url": "http://www.imdb.com/title/tt0120586/?ref_=chttp_tt_32",
            "movieDirector": "Tony Kaye",
            "actors": [
              "Edward Norton",
              "Edward Furlong",
              "Beverly D'Angelo"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjMzNDUwNTIyMF5BMl5BanBnXkFtZTcwNjMwNDg3OA@@.jpg"
          },
          {
            "plot": "A wheelchair bound photographer spies on his neighbours from his apartment window and becomes convinced one of them has committed murder.",
            "genres": [
              "Mystery",
              "Thriller"
            ],
            "rating": "8.6",
            "title": "Rear Window",
            "url": "http://www.imdb.com/title/tt0047396/?ref_=chttp_tt_31",
            "movieDirector": "Alfred Hitchcock",
            "actors": [
              "James Stewart",
              "Grace Kelly",
              "Wendell Corey"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BNDUzMTY0NTE3NF5BMl5BanBnXkFtZTYwNDEyOTM2.jpg"
          },
          {
            "plot": "A Jewish man has a wonderful romance with the help of his humour, but must use that same quality to protect his son in a Nazi death camp.",
            "genres": [
              "Comedy",
              "Drama",
              "Romance"
            ],
            "rating": "8.6",
            "title": "Life Is Beautiful",
            "url": "http://www.imdb.com/title/tt0118799/?ref_=chttp_tt_30",
            "movieDirector": "Roberto Benigni",
            "actors": [
              "Roberto Benigni",
              "Nicoletta Braschi",
              "Giorgio Cantarini"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTM3NDg0OTkxOV5BMl5BanBnXkFtZTcwMTk2NzIyMQ@@.jpg"
          },
          {
            "plot": "Archeologist and adventurer Indiana Jones is hired by the US government to find the Ark of the Covenant before the Nazis.",
            "genres": [
              "Action",
              "Adventure"
            ],
            "rating": "8.6",
            "title": "Raiders of the Lost Ark",
            "url": "http://www.imdb.com/title/tt0082971/?ref_=chttp_tt_29",
            "movieDirector": "Steven Spielberg",
            "actors": [
              "Harrison Ford",
              "Karen Allen",
              "Paul Freeman"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjA0ODEzMTc1Nl5BMl5BanBnXkFtZTcwODM2MjAxNA@@.jpg"
          },
          {
            "plot": "Set in unoccupied Africa during the early days of World War II: An American expatriate meets a former lover, with unforeseen complications.",
            "genres": [
              "Drama",
              "Romance",
              "War"
            ],
            "rating": "8.7",
            "title": "Casablanca",
            "url": "http://www.imdb.com/title/tt0034583/?ref_=chttp_tt_28",
            "movieDirector": "Michael Curtiz",
            "actors": [
              "Humphrey Bogart",
              "Ingrid Bergman",
              "Paul Henreid"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTcwNDI5MjI1Ml5BMl5BanBnXkFtZTYwODE4NDI2.jpg"
          },
          {
            "plot": "A professional assassin rescues a young girl whose parents were killed in a police raid.",
            "genres": [
              "Crime",
              "Drama",
              "Thriller"
            ],
            "rating": "8.7",
            "title": "L\u00e9on: The Professional",
            "url": "http://www.imdb.com/title/tt0110413/?ref_=chttp_tt_27",
            "movieDirector": "Luc Besson",
            "actors": [
              "Jean Reno",
              "Gary Oldman",
              "Natalie Portman"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTgzMzg4MDkwNF5BMl5BanBnXkFtZTcwODAwNDg3OA@@.jpg"
          },
          {
            "plot": "When a rich woman's ex-husband and a tabloid-type reporter turn up just before her planned remarriage, she begins to learn the truth about herself.",
            "genres": [
              "Comedy",
              "Romance"
            ],
            "rating": "8.1",
            "title": "The Philadelphia Story",
            "url": "http://www.imdb.com/title/tt0032904/?ref_=chttp_tt_250",
            "movieDirector": "George Cukor",
            "actors": [
              "Cary Grant",
              "Katharine Hepburn",
              "James Stewart"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTIyNzYxMjc4OV5BMl5BanBnXkFtZTYwMDc5MDA5.jpg"
          },
          {
            "plot": "On an isolated lake, an old monk lives on a small floating temple. The wise master has also a young boy with him who learns to become a monk. And we watch as seasons and years pass by.",
            "genres": [
              "Drama"
            ],
            "rating": "8.1",
            "title": "Spring, Summer, Fall, Winter... and Spring",
            "url": "http://www.imdb.com/title/tt0374546/?ref_=chttp_tt_249",
            "movieDirector": "Ki-duk Kim",
            "actors": [
              "Ki-duk Kim",
              "Yeong-su Oh",
              "Jong-ho Kim"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTI0ODMwOTIxOV5BMl5BanBnXkFtZTcwMzE2NDUyMQ@@.jpg"
          },
          {
            "plot": "A senator, who became famous for killing a notorious outlaw, returns for the funeral of an old friend and tells the truth about his deed.",
            "genres": [
              "Western"
            ],
            "rating": "8.1",
            "title": "The Man Who Shot Liberty Valance",
            "url": "http://www.imdb.com/title/tt0056217/?ref_=chttp_tt_248",
            "movieDirector": "John Ford",
            "actors": [
              "James Stewart",
              "John Wayne",
              "Vera Miles"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjAzMDA1MTI4Nl5BMl5BanBnXkFtZTYwNjYzMjc5.jpg"
          },
          {
            "plot": "An introvert freshman is taken under the wings of two seniors who welcome him to the real world.",
            "genres": [
              "Drama",
              "Romance"
            ],
            "rating": "8.1",
            "title": "The Perks of Being a Wallflower",
            "url": "http://www.imdb.com/title/tt1659337/?ref_=chttp_tt_247",
            "movieDirector": "Stephen Chbosky",
            "actors": [
              "Logan Lerman",
              "Emma Watson",
              "Ezra Miller"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMzIxOTQyODU1OV5BMl5BanBnXkFtZTcwMDQ4Mjg4Nw@@.jpg"
          },
          {
            "plot": "The brash James T. Kirk tries to live up to his father's legacy with Mr. Spock keeping him in check as a vengeful, time-traveling Romulan creates black holes to destroy the Federation one planet at a time.",
            "genres": [
              "Action",
              "Adventure",
              "Sci-Fi"
            ],
            "rating": "8.1",
            "title": "Star Trek",
            "url": "http://www.imdb.com/title/tt0796366/?ref_=chttp_tt_246",
            "movieDirector": "J.J. Abrams",
            "actors": [
              "Chris Pine",
              "Zachary Quinto",
              "Simon Pegg"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjE5NDQ5OTE4Ml5BMl5BanBnXkFtZTcwOTE3NDIzMw@@.jpg"
          },
          {
            "plot": "Belle, whose father is imprisoned by the Beast, offers herself instead and discovers her captor to be an enchanted prince.",
            "genres": [
              "Animation",
              "Family",
              "Fantasy"
            ],
            "rating": "8.1",
            "title": "Beauty and the Beast",
            "url": "http://www.imdb.com/title/tt0101414/?ref_=chttp_tt_245",
            "actors": [
              "Paige O'Hara",
              "Robby Benson",
              "Richard White"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTc0MzM1Njk1OV5BMl5BanBnXkFtZTcwNjQxMTkwNw@@.jpg"
          },
          {
            "plot": "An insurance salesman/adjuster discovers his entire life is actually a TV show.",
            "genres": [
              "Comedy",
              "Drama",
              "Sci-Fi"
            ],
            "rating": "8.0",
            "title": "The Truman Show",
            "url": "http://www.imdb.com/title/tt0120382/?ref_=chttp_tt_244",
            "movieDirector": "Peter Weir",
            "actors": [
              "Jim Carrey",
              "Ed Harris",
              "Laura Linney"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTM4NjY2MTEzM15BMl5BanBnXkFtZTcwMTk2Njk3OA@@.jpg"
          },
          {
            "plot": "The true story of Elle editor Jean-Dominique Bauby who suffers a stroke and has to live with an almost totally paralyzed body; only his left eye isn't paralyzed.",
            "genres": [
              "Biography",
              "Drama"
            ],
            "rating": "8.1",
            "title": "The Diving Bell and the Butterfly",
            "url": "http://www.imdb.com/title/tt0401383/?ref_=chttp_tt_243",
            "movieDirector": "Julian Schnabel",
            "actors": [
              "Mathieu Amalric",
              "Emmanuelle Seigner",
              "Marie-Jos\u00e9e Croze"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTc3MjkzMDkxN15BMl5BanBnXkFtZTcwODAyMTU1MQ@@.jpg"
          },
          {
            "plot": "Two young men strangle their \"inferior\" classmate, hide his body in their apartment, and invite his friends and family to a dinner party as a means to challenge the \"perfection\" of their crime.",
            "genres": [
              "Crime",
              "Drama",
              "Thriller"
            ],
            "rating": "8.1",
            "title": "Rope",
            "url": "http://www.imdb.com/title/tt0040746/?ref_=chttp_tt_242",
            "movieDirector": "Alfred Hitchcock",
            "actors": [
              "James Stewart",
              "John Dall",
              "Farley Granger"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjE2NjM0MzEwNV5BMl5BanBnXkFtZTYwODkxNDU2.jpg"
          },
          {
            "plot": "Final entry in a trilogy of films dealing with contemporary French society concerns a model who discovers her neighbour is keen on invading people's privacy.",
            "genres": [
              "Drama",
              "Mystery",
              "Romance"
            ],
            "rating": "8.1",
            "title": "Three Colors: Red",
            "url": "http://www.imdb.com/title/tt0111495/?ref_=chttp_tt_241",
            "movieDirector": "Krzysztof Kieslowski",
            "actors": [
              "Ir\u00e8ne Jacob",
              "Jean-Louis Trintignant",
              "Fr\u00e9d\u00e9rique Feder"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTkyNDE0Njk0N15BMl5BanBnXkFtZTYwNTQ4Mzk5.jpg"
          },
          {
            "plot": "When Keller Dover's daughter and her friend go missing, he takes matters into his own hands as the police pursue multiple leads and the pressure mounts. But just how far will this desperate father go to protect his family?",
            "genres": [
              "Crime",
              "Drama",
              "Thriller"
            ],
            "rating": "8.1",
            "title": "Prisoners",
            "url": "http://www.imdb.com/title/tt1392214/?ref_=chttp_tt_240",
            "movieDirector": "Denis Villeneuve",
            "actors": [
              "Hugh Jackman",
              "Jake Gyllenhaal",
              "Viola Davis"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@.jpg"
          },
          {
            "plot": "A series of stories following a week in the life of a philandering paparazzo journalist living in Rome.",
            "genres": [
              "Comedy",
              "Drama"
            ],
            "rating": "8.2",
            "title": "La Dolce Vita",
            "url": "http://www.imdb.com/title/tt0053779/?ref_=chttp_tt_239",
            "movieDirector": "Federico Fellini",
            "actors": [
              "Marcello Mastroianni",
              "Anita Ekberg",
              "Anouk Aim\u00e9e"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTcwNzM0NTkxMV5BMl5BanBnXkFtZTcwOTExNDEyNQ@@.jpg"
          },
          {
            "plot": "Crooks plan and execute a daring race-track robbery.",
            "genres": [
              "Crime",
              "Film-Noir",
              "Thriller"
            ],
            "rating": "8.1",
            "title": "The Killing",
            "url": "http://www.imdb.com/title/tt0049406/?ref_=chttp_tt_238",
            "movieDirector": "Stanley Kubrick",
            "actors": [
              "Sterling Hayden",
              "Coleen Gray",
              "Vince Edwards"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTg1NjEwOTI0Nl5BMl5BanBnXkFtZTcwODQ2MjM2NQ@@.jpg"
          },
          {
            "plot": "After a prison riot, former-Captain Nascimento, now a high ranking security officer in Rio de Janeiro, is swept into a bloody political dispute that involves government officials and paramilitary groups.",
            "genres": [
              "Action",
              "Crime",
              "Drama"
            ],
            "rating": "8.2",
            "title": "Elite Squad: The Enemy Within",
            "url": "http://www.imdb.com/title/tt1555149/?ref_=chttp_tt_237",
            "movieDirector": "Jos\u00e9 Padilha",
            "actors": [
              "Wagner Moura",
              "Irandhir Santos",
              "Andr\u00e9 Ramiro"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjA0NjA2OTk2MV5BMl5BanBnXkFtZTcwNzIxNjk5Ng@@.jpg"
          },
          {
            "plot": "A wandering gunfighter plays two rival families against each other in a town torn apart by greed, pride, and revenge.",
            "genres": [
              "Western"
            ],
            "rating": "8.1",
            "title": "F\u00f6r en handfull dollar",
            "url": "http://www.imdb.com/title/tt0058461/?ref_=chttp_tt_236",
            "movieDirector": "Sergio Leone",
            "actors": [
              "Clint Eastwood",
              "Gian Maria Volont\u00e9",
              "Marianne Koch"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTAzODAxMzg1MzZeQTJeQWpwZ15BbWU3MDgwMzE5ODk@.jpg"
          },
          {
            "plot": "A ballet dancer wins the lead in \"Swan Lake\" and is perfect for the role of the delicate White Swan - Princess Odette - but slowly loses her mind as she becomes more and more like Odile, the Black Swan.",
            "genres": [
              "Drama",
              "Mystery",
              "Thriller"
            ],
            "rating": "8.1",
            "title": "Black Swan",
            "url": "http://www.imdb.com/title/tt0947798/?ref_=chttp_tt_235",
            "movieDirector": "Darren Aronofsky",
            "actors": [
              "Natalie Portman",
              "Mila Kunis",
              "Vincent Cassel"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@.jpg"
          },
          {
            "plot": "An aspiring author during the civil rights movement of the 1960s decides to write a book detailing the African-American maids' point of view on the white families for which they work, and the hardships they go through on a daily basis.",
            "genres": [
              "Drama"
            ],
            "rating": "8.1",
            "title": "The Help",
            "url": "http://www.imdb.com/title/tt1454029/?ref_=chttp_tt_234",
            "movieDirector": "Tate Taylor",
            "actors": [
              "Emma Stone",
              "Viola Davis",
              "Octavia Spencer"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTM5OTMyMjIxOV5BMl5BanBnXkFtZTcwNzU4MjIwNQ@@.jpg"
          },
          {
            "plot": "A Mumbai teen who grew up in the slums, becomes a contestant on the Indian version of \"Who Wants To Be A Millionaire?\" He is arrested under suspicion of cheating, and while being interrogated, events from his life history are shown which explain why he knows the answers.",
            "genres": [
              "Drama",
              "Romance",
              "Thriller"
            ],
            "rating": "8.1",
            "title": "Slumdog Millionaire",
            "url": "http://www.imdb.com/title/tt1010048/?ref_=chttp_tt_233",
            "actors": [
              "Dev Patel",
              "Freida Pinto",
              "Saurabh Shukla"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTU2NTA5NzI0N15BMl5BanBnXkFtZTcwMjUxMjYxMg@@.jpg"
          },
          {
            "plot": "In 1986, in the province of Gyunggi, in South Korea, a second young and beautiful woman is found dead, raped and tied and gagged with her underwear. Detective Park Doo-Man and Detective Cho...",
            "genres": [
              "Crime",
              "Drama",
              "Mystery"
            ],
            "rating": "8.1",
            "title": "Memories of Murder",
            "url": "http://www.imdb.com/title/tt0353969/?ref_=chttp_tt_231",
            "movieDirector": "Joon-ho Bong",
            "actors": [
              "Kang-ho Song",
              "Sang-kyung Kim",
              "Roe-ha Kim"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTI5OTA5MTI3OF5BMl5BanBnXkFtZTcwMjQyNzYzMQ@@.jpg"
          },
          {
            "plot": "Monsters generate their city's power by scaring children, but they are terribly afraid themselves of being contaminated by children, so when one enters Monstropolis, top scarer Sulley finds his world disrupted.",
            "genres": [
              "Animation",
              "Adventure",
              "Comedy"
            ],
            "rating": "8.1",
            "title": "Monsters, Inc.",
            "url": "http://www.imdb.com/title/tt0198781/?ref_=chttp_tt_232",
            "actors": [
              "Billy Crystal",
              "John Goodman",
              "Mary Gibbs"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTY1NTI0ODUyOF5BMl5BanBnXkFtZTgwNTEyNjQ0MDE@.jpg"
          },
          {
            "plot": "In 1954, U.S. Marshal Teddy Daniels is investigating the disappearance of a murderess who escaped from a hospital for the criminally insane and is presumed to be hiding nearby.",
            "genres": [
              "Drama",
              "Mystery",
              "Thriller"
            ],
            "rating": "8.1",
            "title": "Shutter Island",
            "url": "http://www.imdb.com/title/tt1130884/?ref_=chttp_tt_230",
            "movieDirector": "Martin Scorsese",
            "actors": [
              "Leonardo DiCaprio",
              "Emily Mortimer",
              "Mark Ruffalo"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTMxMTIyNzMxMV5BMl5BanBnXkFtZTcwOTc4OTI3Mg@@.jpg"
          },
          {
            "plot": "A man and a woman move in to neighboring Hong Kong apartments and form a bond when they both suspect their spouses of extramarital activities.",
            "genres": [
              "Drama",
              "Romance"
            ],
            "rating": "8.1",
            "title": "In the Mood for Love",
            "url": "http://www.imdb.com/title/tt0118694/?ref_=chttp_tt_229",
            "movieDirector": "Kar Wai Wong",
            "actors": [
              "Tony Leung Chiu Wai",
              "Maggie Cheung",
              "Ping Lam Siu"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTk0MjY3NjEzN15BMl5BanBnXkFtZTYwNTk2NDI5.jpg"
          },
          {
            "plot": "A young boy and a girl with a magic crystal must race against pirates and foreign agents in a search for a legendary floating castle.",
            "genres": [
              "Animation",
              "Action",
              "Adventure"
            ],
            "rating": "8.1",
            "title": "Castle in the Sky",
            "url": "http://www.imdb.com/title/tt0092067/?ref_=chttp_tt_228",
            "movieDirector": "Hayao Miyazaki",
            "actors": [
              "Anna Paquin",
              "James Van Der Beek",
              "Cloris Leachman"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTU4MTUyMTc3MV5BMl5BanBnXkFtZTYwOTg4Mzk5.jpg"
          },
          {
            "plot": "A bored and sheltered princess escapes her guardians and falls in love with an American newsman in Rome.",
            "genres": [
              "Comedy",
              "Drama",
              "Romance"
            ],
            "rating": "8.1",
            "title": "Roman Holiday",
            "url": "http://www.imdb.com/title/tt0046250/?ref_=chttp_tt_227",
            "movieDirector": "William Wyler",
            "actors": [
              "Gregory Peck",
              "Audrey Hepburn",
              "Eddie Albert"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTg1ODgzODA1Nl5BMl5BanBnXkFtZTcwNTI0MzU3Mg@@.jpg"
          },
          {
            "plot": "When two escaping American World War II prisoners are killed, the German POW camp barracks black marketeer, J.J. Sefton, is suspected of being an informer.",
            "genres": [
              "Comedy",
              "Drama",
              "War"
            ],
            "rating": "8.2",
            "title": "Stalag 17",
            "url": "http://www.imdb.com/title/tt0046359/?ref_=chttp_tt_226",
            "movieDirector": "Billy Wilder",
            "actors": [
              "William Holden",
              "Don Taylor",
              "Otto Preminger"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjA4NjE1MzM5MF5BMl5BanBnXkFtZTcwNTM5MzMzMQ@@.jpg"
          },
          {
            "plot": "Blacksmith Will Turner teams up with eccentric pirate \"Captain\" Jack Sparrow to save his love, the governor's daughter, from Jack's former pirate allies, who are now undead.",
            "genres": [
              "Action",
              "Adventure",
              "Fantasy"
            ],
            "rating": "8.1",
            "title": "Pirates of the Caribbean: The Curse of the Black Pearl",
            "url": "http://www.imdb.com/title/tt0325980/?ref_=chttp_tt_225",
            "movieDirector": "Gore Verbinski",
            "actors": [
              "Johnny Depp",
              "Geoffrey Rush",
              "Orlando Bloom"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjAyNDM4MTc2N15BMl5BanBnXkFtZTYwNDk0Mjc3.jpg"
          },
          {
            "plot": "A young man and woman meet on a train in Europe, and wind up spending one evening together in Vienna. Unfortunately, both know that this will probably be their only night together.",
            "genres": [
              "Drama",
              "Romance"
            ],
            "rating": "8.1",
            "title": "Before Sunrise",
            "url": "http://www.imdb.com/title/tt0112471/?ref_=chttp_tt_224",
            "movieDirector": "Richard Linklater",
            "actors": [
              "Ethan Hawke",
              "Julie Delpy",
              "Andrea Eckert"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTQyMTM3MTQxMl5BMl5BanBnXkFtZTcwMDAzNjQ4Mg@@.jpg"
          },
          {
            "plot": "At Helge's 60th birthday party, some unpleasant family truths are revealed.",
            "genres": [
              "Drama"
            ],
            "rating": "8.2",
            "title": "The Celebration",
            "url": "http://www.imdb.com/title/tt0154420/?ref_=chttp_tt_223",
            "movieDirector": "Thomas Vinterberg",
            "actors": [
              "Ulrich Thomsen",
              "Henning Moritzen",
              "Thomas Bo Larsen"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjYzMTYwNTIyMV5BMl5BanBnXkFtZTcwOTU2MjM2NQ@@.jpg"
          },
          {
            "plot": "An up-and-coming pool player plays a long-time champion in a single high-stakes match.",
            "genres": [
              "Drama",
              "Sport"
            ],
            "rating": "8.1",
            "title": "The Hustler",
            "url": "http://www.imdb.com/title/tt0054997/?ref_=chttp_tt_222",
            "movieDirector": "Robert Rossen",
            "actors": [
              "Paul Newman",
              "Jackie Gleason",
              "Piper Laurie"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BNDQ2NzcyMTU2MF5BMl5BanBnXkFtZTcwMjYyMjA0Mg@@.jpg"
          },
          {
            "plot": "An Irish rogue wins the heart of a rich widow and assumes her dead husband's position in 18th Century aristocracy.",
            "genres": [
              "Adventure",
              "Drama",
              "Romance"
            ],
            "rating": "8.1",
            "title": "Barry Lyndon",
            "url": "http://www.imdb.com/title/tt0072684/?ref_=chttp_tt_221",
            "movieDirector": "Stanley Kubrick",
            "actors": [
              "Ryan O'Neal",
              "Marisa Berenson",
              "Patrick Magee"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTczNzkyMjQ4N15BMl5BanBnXkFtZTcwOTQ2NjU4Mw@@.jpg"
          },
          {
            "plot": "The story follows an underground weapons manufacturer in Belgrade during WWII and evolves into fairly surreal situations. A black marketeer who smuggles the weapons to partisans doesn't ...",
            "genres": [
              "Comedy",
              "Drama",
              "War"
            ],
            "rating": "8.3",
            "title": "Underground",
            "url": "http://www.imdb.com/title/tt0114787/?ref_=chttp_tt_220",
            "movieDirector": "Emir Kusturica",
            "actors": [
              "Predrag Manojlovic",
              "Lazar Ristovski",
              "Mirjana Jokovic"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTgxMjI0MzY4MV5BMl5BanBnXkFtZTcwMzYxMzQyMQ@@.jpg"
          },
          {
            "plot": "Recent college graduate Benjamin Braddock is trapped into an affair with Mrs. Robinson, who happens to be the wife of his father's business partner and then finds himself falling in love with her daughter, Elaine.",
            "genres": [
              "Comedy",
              "Drama",
              "Romance"
            ],
            "rating": "8.1",
            "title": "The Graduate",
            "url": "http://www.imdb.com/title/tt0061722/?ref_=chttp_tt_219",
            "movieDirector": "Mike Nichols",
            "actors": [
              "Dustin Hoffman",
              "Anne Bancroft",
              "Katharine Ross"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTQ0ODc4MDk4Nl5BMl5BanBnXkFtZTcwMTEzNzgzNA@@.jpg"
          },
          {
            "plot": "After local youth Abdel is beaten unconscious by police, a riot ensues on his estate during which a policeman loses his gun. The gun is found by Vinz who threatens he will kill a cop if Abdel dies.",
            "genres": [
              "Drama"
            ],
            "rating": "8.1",
            "title": "La Haine",
            "url": "http://www.imdb.com/title/tt0113247/?ref_=chttp_tt_218",
            "movieDirector": "Mathieu Kassovitz",
            "actors": [
              "Vincent Cassel",
              "Hubert Kound\u00e9",
              "Sa\u00efd Taghmaoui"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTY3OTAyOTMyM15BMl5BanBnXkFtZTcwNTMxMTI0MQ@@.jpg"
          },
          {
            "plot": "Rocky Balboa, a small-time boxer gets a supremely rare chance to fight the heavy-weight champion, Apollo Creed, in a bout in which he strives to go the distance for his self-respect.",
            "genres": [
              "Drama",
              "Sport"
            ],
            "rating": "8.1",
            "title": "Rocky",
            "url": "http://www.imdb.com/title/tt0075148/?ref_=chttp_tt_217",
            "movieDirector": "John G. Avildsen",
            "actors": [
              "Sylvester Stallone",
              "Talia Shire",
              "Burt Young"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTY5MDMzODUyOF5BMl5BanBnXkFtZTcwMTQ3NTMyNA@@.jpg"
          },
          {
            "plot": "Harry, Ron and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord.",
            "genres": [
              "Adventure",
              "Fantasy",
              "Mystery"
            ],
            "rating": "8.1",
            "title": "Harry Potter and the Deathly Hallows: Part 2",
            "url": "http://www.imdb.com/title/tt1201607/?ref_=chttp_tt_216",
            "movieDirector": "David Yates",
            "actors": [
              "Daniel Radcliffe",
              "Emma Watson",
              "Rupert Grint"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTY2MTk3MDQ1N15BMl5BanBnXkFtZTcwMzI4NzA2NQ@@.jpg"
          },
          {
            "plot": "Ralphie has to convince his parents, his teacher, and Santa that a Red Ryder B.B. gun really is the perfect gift for the 1940s.",
            "genres": [
              "Comedy",
              "Family"
            ],
            "rating": "8.1",
            "title": "A Christmas Story",
            "url": "http://www.imdb.com/title/tt0085334/?ref_=chttp_tt_215",
            "movieDirector": "Bob Clark",
            "actors": [
              "Peter Billingsley",
              "Melinda Dillon",
              "Darren McGavin"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTI1NzY1NjkyMV5BMl5BanBnXkFtZTcwMjYxNjE0MQ@@.jpg"
          },
          {
            "plot": "A weatherman finds himself living the same day over and over again.",
            "genres": [
              "Comedy",
              "Drama",
              "Fantasy"
            ],
            "rating": "8.1",
            "title": "Groundhog Day",
            "url": "http://www.imdb.com/title/tt0107048/?ref_=chttp_tt_214",
            "movieDirector": "Harold Ramis",
            "actors": [
              "Bill Murray",
              "Andie MacDowell",
              "Chris Elliott"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTU0MzQyNTExMV5BMl5BanBnXkFtZTgwMjA0Njk1MDE@.jpg"
          },
          {
            "plot": "A man robs a bank to pay for his lover's operation; it turns into a hostage situation and a media circus.",
            "genres": [
              "Crime",
              "Drama"
            ],
            "rating": "8.1",
            "title": "Dog Day Afternoon",
            "url": "http://www.imdb.com/title/tt0072890/?ref_=chttp_tt_213",
            "movieDirector": "Sidney Lumet",
            "actors": [
              "Al Pacino",
              "John Cazale",
              "Penelope Allen"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTQyNjQ5NjczM15BMl5BanBnXkFtZTYwNDA4MTk4.jpg"
          },
          {
            "plot": "A guide leads two men through an area known as the Zone to find a room that grants wishes.",
            "genres": [
              "Drama",
              "Sci-Fi"
            ],
            "rating": "8.2",
            "title": "Stalker",
            "url": "http://www.imdb.com/title/tt0079944/?ref_=chttp_tt_212",
            "movieDirector": "Andrei Tarkovsky",
            "actors": [
              "Alisa Freyndlikh",
              "Aleksandr Kaydanovskiy",
              "Anatoliy Solonitsyn"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTY2MTM3MTU2Nl5BMl5BanBnXkFtZTcwMDE3MzgzMQ@@.jpg"
          },
          {
            "plot": "A human-looking indestructible cyborg is sent from 2029 to 1984 to assassinate a waitress, whose unborn son will lead humanity in a war against the machines, while a soldier from that war is sent to protect her at all costs.",
            "genres": [
              "Action",
              "Sci-Fi"
            ],
            "rating": "8.1",
            "title": "The Terminator",
            "url": "http://www.imdb.com/title/tt0088247/?ref_=chttp_tt_211",
            "movieDirector": "James Cameron",
            "actors": [
              "Arnold Schwarzenegger",
              "Linda Hamilton",
              "Michael Biehn"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BODE1MDczNTUxOV5BMl5BanBnXkFtZTcwMTA0NDQyNA@@.jpg"
          },
          {
            "plot": "A bitter aging couple with the help of alcohol, use a young couple to fuel anguish and emotional pain towards each other.",
            "genres": [
              "Drama"
            ],
            "rating": "8.2",
            "title": "Who's Afraid of Virginia Woolf?",
            "url": "http://www.imdb.com/title/tt0061184/?ref_=chttp_tt_210",
            "movieDirector": "Mike Nichols",
            "actors": [
              "Elizabeth Taylor",
              "Richard Burton",
              "George Segal"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTg5OTM4MTc5Nl5BMl5BanBnXkFtZTcwMzM3Njk3OA@@.jpg"
          },
          {
            "plot": "Private detective Philip Marlowe is hired by a rich family. Before the complex case is over, he's seen murder, blackmail, and what might be love.",
            "genres": [
              "Crime",
              "Film-Noir",
              "Mystery"
            ],
            "rating": "8.1",
            "title": "The Big Sleep",
            "url": "http://www.imdb.com/title/tt0038355/?ref_=chttp_tt_209",
            "movieDirector": "Howard Hawks",
            "actors": [
              "Humphrey Bogart",
              "Lauren Bacall",
              "John Ridgely"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjE5NzA1MzI5OV5BMl5BanBnXkFtZTYwOTE1MTY5.jpg"
          },
          {
            "plot": "A semi-biographical account of Yip Man, the first martial arts master to teach the Chinese martial art of Wing Chun.",
            "genres": [
              "Action",
              "Biography",
              "Drama"
            ],
            "rating": "8.1",
            "title": "Ip Man",
            "url": "http://www.imdb.com/title/tt1220719/?ref_=chttp_tt_208",
            "movieDirector": "Wilson Yip",
            "actors": [
              "Donnie Yen",
              "Simon Yam",
              "Siu-Wong Fan"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjE0NDUzMDcyOF5BMl5BanBnXkFtZTcwNzAxMTA2Mw@@.jpg"
          },
          {
            "plot": "A religious fanatic marries a gullible widow whose young children are reluctant to tell him where their real daddy hid $10,000 he'd stolen in a robbery.",
            "genres": [
              "Crime",
              "Drama",
              "Film-Noir"
            ],
            "rating": "8.2",
            "title": "The Night of the Hunter",
            "url": "http://www.imdb.com/title/tt0048424/?ref_=chttp_tt_207",
            "actors": [
              "Robert Mitchum",
              "Shelley Winters",
              "Lillian Gish"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTU5MTMwMzMyN15BMl5BanBnXkFtZTcwODI3Njk3OA@@.jpg"
          },
          {
            "plot": "A care-free girl is sold to a traveling entertainer, consequently enduring physical and emotional pain along the way.",
            "genres": [
              "Drama"
            ],
            "rating": "8.2",
            "title": "La Strada",
            "url": "http://www.imdb.com/title/tt0047528/?ref_=chttp_tt_206",
            "movieDirector": "Federico Fellini",
            "actors": [
              "Anthony Quinn",
              "Giulietta Masina",
              "Richard Basehart"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTM5ODIyNzYzOV5BMl5BanBnXkFtZTcwNDM3NDQyMQ@@.jpg"
          },
          {
            "plot": "In a future world devastated by disease, a convict is sent back in time to gather information about the man-made virus that wiped out most of the human population on the planet.",
            "genres": [
              "Mystery",
              "Sci-Fi",
              "Thriller"
            ],
            "rating": "8.1",
            "title": "Twelve Monkeys",
            "url": "http://www.imdb.com/title/tt0114746/?ref_=chttp_tt_205",
            "movieDirector": "Terry Gilliam",
            "actors": [
              "Bruce Willis",
              "Madeleine Stowe",
              "Brad Pitt"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjI4MDIxNjk2Ml5BMl5BanBnXkFtZTcwMTA3Njk3OA@@.jpg"
          },
          {
            "plot": "Warrior/pacifist Princess Nausica\u00e4 desperately struggles to prevent two warring nations from destroying themselves and their dying planet.",
            "genres": [
              "Animation",
              "Action",
              "Adventure"
            ],
            "rating": "8.2",
            "title": "Nausica\u00e4 of the Valley of the Wind",
            "url": "http://www.imdb.com/title/tt0087544/?ref_=chttp_tt_204",
            "movieDirector": "Hayao Miyazaki",
            "actors": [
              "Sumi Shimamoto",
              "Mahito Tsujimura",
              "Hisako Ky\u00f4da"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTM1NjIxNTY4OF5BMl5BanBnXkFtZTcwNDE5MDIyNw@@.jpg"
          },
          {
            "plot": "Two young Swedish children experience the many comedies and tragedies of their family, the Ekdahls.",
            "genres": [
              "Drama"
            ],
            "rating": "8.2",
            "title": "Fanny and Alexander",
            "url": "http://www.imdb.com/title/tt0083922/?ref_=chttp_tt_203",
            "movieDirector": "Ingmar Bergman",
            "actors": [
              "Bertil Guve",
              "Pernilla Allwin",
              "B\u00f6rje Ahlstedt"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BOTUyODUwNjc0NV5BMl5BanBnXkFtZTcwMTk0MTcyMQ@@.jpg"
          },
          {
            "plot": "When a gigantic great white shark begins to menace the small island community of Amity, a police chief, a marine scientist and grizzled fisherman set out to stop it.",
            "genres": [
              "Adventure",
              "Horror",
              "Thriller"
            ],
            "rating": "8.1",
            "title": "Jaws",
            "url": "http://www.imdb.com/title/tt0073195/?ref_=chttp_tt_202",
            "movieDirector": "Steven Spielberg",
            "actors": [
              "Roy Scheider",
              "Robert Shaw",
              "Richard Dreyfuss"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BNDcxODkyMjY4MF5BMl5BanBnXkFtZTgwOTk5NTc5MDE@.jpg"
          },
          {
            "plot": "A story between a mole in the police department and an undercover cop. Their objectives are the same: to find out who is the mole, and who is the cop.",
            "genres": [
              "Crime",
              "Mystery",
              "Thriller"
            ],
            "rating": "8.2",
            "title": "Infernal Affairs",
            "url": "http://www.imdb.com/title/tt0338564/?ref_=chttp_tt_201",
            "actors": [
              "Andy Lau",
              "Tony Leung Chiu Wai",
              "Anthony Wong Chau-Sang"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTc0Mjg2OTY3OV5BMl5BanBnXkFtZTcwNDA3Njk3OA@@.jpg"
          },
          {
            "plot": "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring.",
            "genres": [
              "Adventure",
              "Fantasy"
            ],
            "rating": "8.2",
            "title": "The Hobbit: The Desolation of Smaug",
            "url": "http://www.imdb.com/title/tt1170358/?ref_=chttp_tt_200",
            "movieDirector": "Peter Jackson",
            "actors": [
              "Ian McKellen",
              "Martin Freeman",
              "Richard Armitage"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMzU0NDY0NDEzNV5BMl5BanBnXkFtZTgwOTIxNDU1MDE@.jpg"
          },
          {
            "plot": "A man's coerced confession to an I.R.A. bombing he didn't commit imprisons his father as well; a British lawyer helps fight for their freedom.",
            "genres": [
              "Biography",
              "Drama",
              "Thriller"
            ],
            "rating": "8.2",
            "title": "I faderns namn",
            "url": "http://www.imdb.com/title/tt0107207/?ref_=chttp_tt_199",
            "movieDirector": "Jim Sheridan",
            "actors": [
              "Daniel Day-Lewis",
              "Pete Postlethwaite",
              "Alison Crosbie"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BODIxOTYyOTAyN15BMl5BanBnXkFtZTcwMTM3Njk3OA@@.jpg"
          },
          {
            "plot": "The story of King George VI of the United Kingdom of Great Britain and Northern Ireland, his impromptu ascension to the throne and the speech therapist who helped the unsure monarch become worthy of it.",
            "genres": [
              "Biography",
              "Drama",
              "History"
            ],
            "rating": "8.1",
            "title": "The King's Speech",
            "url": "http://www.imdb.com/title/tt1504320/?ref_=chttp_tt_198",
            "movieDirector": "Tom Hooper",
            "actors": [
              "Colin Firth",
              "Geoffrey Rush",
              "Helena Bonham Carter"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMzU5MjEwMTg2Nl5BMl5BanBnXkFtZTcwNzM3MTYxNA@@.jpg"
          },
          {
            "plot": "A nurse is put in charge of an actress who can't talk and finds that the actress's persona is melding with hers.",
            "genres": [
              "Drama",
              "Mystery",
              "Thriller"
            ],
            "rating": "8.2",
            "title": "Persona",
            "url": "http://www.imdb.com/title/tt0060827/?ref_=chttp_tt_197",
            "movieDirector": "Ingmar Bergman",
            "actors": [
              "Bibi Andersson",
              "Liv Ullmann",
              "Margaretha Krook"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTc1OTgxNjYyNF5BMl5BanBnXkFtZTcwNjM2MjM2NQ@@.jpg"
          },
          {
            "plot": "Biography of",
            "genres": [
              "Biography",
              "Drama",
              "History"
            ],
            "rating": "8.1",
            "title": "Gandhi",
            "url": "http://www.imdb.com/title/tt0083987/?ref_=chttp_tt_196",
            "movieDirector": "Richard Attenborough",
            "actors": [
              "Ben Kingsley",
              "John Gielgud",
              "Candice Bergen"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTQyNTQ4MTAzNl5BMl5BanBnXkFtZTcwMjk2Njk3OA@@.jpg"
          },
          {
            "plot": "A woman is asked to spy on a group of Nazi friends in South America. How far will she have to go to ingratiate herself with them?",
            "genres": [
              "Drama",
              "Film-Noir",
              "Romance"
            ],
            "rating": "8.2",
            "title": "Notorious",
            "url": "http://www.imdb.com/title/tt0038787/?ref_=chttp_tt_195",
            "movieDirector": "Alfred Hitchcock",
            "actors": [
              "Cary Grant",
              "Ingrid Bergman",
              "Claude Rains"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTIyOTg1NzUzOV5BMl5BanBnXkFtZTYwMjczNzg4.jpg"
          },
          {
            "plot": "Twins journey to the Middle East to discover their family history, and fulfill their mother's last wishes.",
            "genres": [
              "Drama",
              "Mystery",
              "War"
            ],
            "rating": "8.2",
            "title": "Nawals hemlighet",
            "url": "http://www.imdb.com/title/tt1255953/?ref_=chttp_tt_194",
            "movieDirector": "Denis Villeneuve",
            "actors": [
              "Lubna Azabal",
              "M\u00e9lissa D\u00e9sormeaux-Poulin",
              "Maxim Gaudette"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTg4MzA0NjI5OF5BMl5BanBnXkFtZTcwNTUwMzQzNg@@.jpg"
          },
          {
            "plot": "Jason Bourne dodges a ruthless CIA official and his agents from a new assassination program while searching for the origins of his life as a trained killer.",
            "genres": [
              "Action",
              "Crime",
              "Thriller"
            ],
            "rating": "8.1",
            "title": "The Bourne Ultimatum",
            "url": "http://www.imdb.com/title/tt0440963/?ref_=chttp_tt_193",
            "movieDirector": "Paul Greengrass",
            "actors": [
              "Matt Damon",
              "\u00c9dgar Ram\u00edrez",
              "Joan Allen"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTgzNjMwOTM3N15BMl5BanBnXkFtZTcwMzA5MDY0MQ@@.jpg"
          },
          {
            "plot": "A troubled teenager is plagued by visions of a large bunny rabbit that manipulates him to commit a series of crimes, after narrowly escaping a bizarre accident.",
            "genres": [
              "Drama",
              "Mystery",
              "Sci-Fi"
            ],
            "rating": "8.2",
            "title": "Donnie Darko",
            "url": "http://www.imdb.com/title/tt0246578/?ref_=chttp_tt_192",
            "movieDirector": "Richard Kelly",
            "actors": [
              "Jake Gyllenhaal",
              "Jena Malone",
              "Mary McDonnell"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTczMzE4Nzk3N15BMl5BanBnXkFtZTcwNDg5Mjc4NA@@.jpg"
          },
          {
            "plot": "A psychotic socialite confronts a pro tennis star with a theory on how two complete strangers can get away with murder...a theory that he plans to implement.",
            "genres": [
              "Crime",
              "Film-Noir",
              "Thriller"
            ],
            "rating": "8.2",
            "title": "Strangers on a Train",
            "url": "http://www.imdb.com/title/tt0044079/?ref_=chttp_tt_191",
            "movieDirector": "Alfred Hitchcock",
            "actors": [
              "Farley Granger",
              "Robert Walker",
              "Ruth Roman"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTcwNzk0MTQxMF5BMl5BanBnXkFtZTcwNjM5NTIwNA@@.jpg"
          },
          {
            "plot": "The people of a small village in Victorian India stake their future on a game of cricket against their ruthless British rulers...",
            "genres": [
              "Adventure",
              "Drama",
              "Musical"
            ],
            "rating": "8.4",
            "title": "Lagaan",
            "url": "http://www.imdb.com/title/tt0169102/?ref_=chttp_tt_190",
            "movieDirector": "Ashutosh Gowariker",
            "actors": [
              "Aamir Khan",
              "Gracy Singh",
              "Rachel Shelley"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTIwODMwMzA5Ml5BMl5BanBnXkFtZTcwMTQxNTEyMQ@@.jpg"
          },
          {
            "plot": "A drama based on the true story of a college professor's bond with the abandoned dog he takes into his home.",
            "genres": [
              "Drama",
              "Family"
            ],
            "rating": "8.2",
            "title": "Hachi: A Dog's Tale",
            "url": "http://www.imdb.com/title/tt1028532/?ref_=chttp_tt_189",
            "movieDirector": "Lasse Hallstr\u00f6m",
            "actors": [
              "Richard Gere",
              "Joan Allen",
              "Cary-Hiroyuki Tagawa"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTAxMDA2MjM4NDReQTJeQWpwZ15BbWU3MDE0NTgxMTM@.jpg"
          },
          {
            "plot": "A marshall, personally compelled to face a returning deadly enemy, finds that his own town refuses to help him.",
            "genres": [
              "Drama",
              "Western"
            ],
            "rating": "8.2",
            "title": "High Noon",
            "url": "http://www.imdb.com/title/tt0044706/?ref_=chttp_tt_188",
            "movieDirector": "Fred Zinnemann",
            "actors": [
              "Gary Cooper",
              "Grace Kelly",
              "Thomas Mitchell"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTMyNDA3NjU0Ml5BMl5BanBnXkFtZTcwMjA0NDU3NQ@@.jpg"
          },
          {
            "plot": "A story of family, religion, hatred, oil and madness, focusing on a turn-of-the-century prospector in the early days of the business.",
            "genres": [
              "Drama"
            ],
            "rating": "8.1",
            "title": "There Will Be Blood",
            "url": "http://www.imdb.com/title/tt0469494/?ref_=chttp_tt_187",
            "movieDirector": "Paul Thomas Anderson",
            "actors": [
              "Daniel Day-Lewis",
              "Paul Dano",
              "Ciar\u00e1n Hinds"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjA0NjE1ODEyNV5BMl5BanBnXkFtZTcwNDIzMzE5NQ@@.jpg"
          },
          {
            "plot": "A harried movie director retreats into his memories and fantasies.",
            "genres": [
              "Drama",
              "Fantasy"
            ],
            "rating": "8.2",
            "title": "8\u00bd",
            "url": "http://www.imdb.com/title/tt0056801/?ref_=chttp_tt_186",
            "movieDirector": "Federico Fellini",
            "actors": [
              "Marcello Mastroianni",
              "Anouk Aim\u00e9e",
              "Claudia Cardinale"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjg1NTg2MzQ2OV5BMl5BanBnXkFtZTcwMDE3Njk3OA@@.jpg"
          },
          {
            "plot": "A determined woman works with a hardened boxing trainer to become a professional.",
            "genres": [
              "Drama",
              "Sport"
            ],
            "rating": "8.1",
            "title": "Million Dollar Baby",
            "url": "http://www.imdb.com/title/tt0405159/?ref_=chttp_tt_185",
            "movieDirector": "Clint Eastwood",
            "actors": [
              "Hilary Swank",
              "Clint Eastwood",
              "Morgan Freeman"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTkxNzA1NDQxOV5BMl5BanBnXkFtZTcwNTkyMTIzMw@@.jpg"
          },
          {
            "plot": "Intensely touching story of a misunderstood young adolescent who left without attention, delves into a life of petty crime.",
            "genres": [
              "Crime",
              "Drama"
            ],
            "rating": "8.2",
            "title": "The 400 Blows",
            "url": "http://www.imdb.com/title/tt0053198/?ref_=chttp_tt_184",
            "movieDirector": "Fran\u00e7ois Truffaut",
            "actors": [
              "Jean-Pierre L\u00e9aud",
              "Albert R\u00e9my",
              "Claire Maurier"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTI5NjU3NjY4Nl5BMl5BanBnXkFtZTcwNTYxODA0MQ@@.jpg"
          },
          {
            "plot": "When a Jewish prince is betrayed and sent into slavery by a Roman friend, he regains his freedom and comes back for revenge.",
            "genres": [
              "Adventure",
              "Drama"
            ],
            "rating": "8.2",
            "title": "Ben-Hur",
            "url": "http://www.imdb.com/title/tt0052618/?ref_=chttp_tt_183",
            "movieDirector": "William Wyler",
            "actors": [
              "Charlton Heston",
              "Jack Hawkins",
              "Stephen Boyd"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BNzQyOTQ0ODk2NF5BMl5BanBnXkFtZTcwNTkwOTI3MQ@@.jpg"
          },
          {
            "plot": "A poor Midwest family is forced off of their land. They travel to California, suffering the misfortunes of the homeless in the Great Depression.",
            "genres": [
              "Drama"
            ],
            "rating": "8.2",
            "title": "The Grapes of Wrath",
            "url": "http://www.imdb.com/title/tt0032551/?ref_=chttp_tt_182",
            "movieDirector": "John Ford",
            "actors": [
              "Henry Fonda",
              "Jane Darwell",
              "John Carradine"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMzgzNjcxNjg2M15BMl5BanBnXkFtZTcwMjQxNDQ3Mg@@.jpg"
          },
          {
            "plot": "After the death of a friend, a writer recounts a boyhood journey to find the body of a missing boy.",
            "genres": [
              "Adventure",
              "Drama"
            ],
            "rating": "8.2",
            "title": "Stand by Me",
            "url": "http://www.imdb.com/title/tt0092005/?ref_=chttp_tt_181",
            "movieDirector": "Rob Reiner",
            "actors": [
              "Wil Wheaton",
              "River Phoenix",
              "Corey Feldman"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BNDk2MTkyMTA1OF5BMl5BanBnXkFtZTcwOTc2Njk3OA@@.jpg"
          },
          {
            "plot": "Three WWII veterans return home to small-town America to discover that they and their families have been irreparably changed.",
            "genres": [
              "Drama",
              "Romance",
              "War"
            ],
            "rating": "8.3",
            "title": "The Best Years of Our Lives",
            "url": "http://www.imdb.com/title/tt0036868/?ref_=chttp_tt_180",
            "movieDirector": "William Wyler",
            "actors": [
              "Fredric March",
              "Dana Andrews",
              "Myrna Loy"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTk1NTAxNzg3Nl5BMl5BanBnXkFtZTcwNjU4OTQwNw@@.jpg"
          },
          {
            "plot": "A horrific car accident connects three stories, each involving characters dealing with loss, regret, and life's harsh realities, all in the name of love.",
            "genres": [
              "Drama",
              "Thriller"
            ],
            "rating": "8.2",
            "title": "Amores Perros",
            "url": "http://www.imdb.com/title/tt0245712/?ref_=chttp_tt_179",
            "movieDirector": "Alejandro Gonz\u00e1lez I\u00f1\u00e1rritu",
            "actors": [
              "Emilio Echevarr\u00eda",
              "Gael Garc\u00eda Bernal",
              "Goya Toledo"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjIyNTA5MzQ5N15BMl5BanBnXkFtZTcwNjIyNTgxMQ@@.jpg"
          },
          {
            "plot": "A classic fairy tale, with swordplay, giants, an evil prince, a beautiful princess, and yes, some kissing (as read by a kindly grandfather).",
            "genres": [
              "Adventure",
              "Comedy",
              "Family"
            ],
            "rating": "8.2",
            "title": "The Princess Bride",
            "url": "http://www.imdb.com/title/tt0093779/?ref_=chttp_tt_177",
            "movieDirector": "Rob Reiner",
            "actors": [
              "Cary Elwes",
              "Mandy Patinkin",
              "Robin Wright"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTkzMDgyNjQwM15BMl5BanBnXkFtZTgwNTg2Mjc1MDE@.jpg"
          },
          {
            "plot": "Dorothy Gale is swept away to a magical land in a tornado and embarks on a quest to see the Wizard who can help her return home.",
            "genres": [
              "Adventure",
              "Family",
              "Fantasy"
            ],
            "rating": "8.2",
            "title": "The Wizard of Oz",
            "url": "http://www.imdb.com/title/tt0032138/?ref_=chttp_tt_178",
            "actors": [
              "Judy Garland",
              "Frank Morgan",
              "Ray Bolger"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTU0MTA2OTIwNF5BMl5BanBnXkFtZTcwMzA0Njk3OA@@.jpg"
          },
          {
            "plot": "Nick Fury of S.H.I.E.L.D. assembles a team of superhumans to save the planet from Loki and his army.",
            "genres": [
              "Action",
              "Fantasy"
            ],
            "rating": "8.2",
            "title": "The Avengers",
            "url": "http://www.imdb.com/title/tt0848228/?ref_=chttp_tt_176",
            "movieDirector": "Joss Whedon",
            "actors": [
              "Robert Downey Jr.",
              "Chris Evans",
              "Scarlett Johansson"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@.jpg"
          },
          {
            "plot": "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.",
            "genres": [
              "Animation",
              "Adventure",
              "Comedy"
            ],
            "rating": "8.2",
            "title": "Finding Nemo",
            "url": "http://www.imdb.com/title/tt0266543/?ref_=chttp_tt_175",
            "actors": [
              "Albert Brooks",
              "Ellen DeGeneres",
              "Alexander Gould"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTY1MTg1NDAxOV5BMl5BanBnXkFtZTcwMjg1MDI5Nw@@.jpg"
          },
          {
            "plot": "A television network cynically exploits a deranged former anchor's ravings and revelations about the news media for its own profit.",
            "genres": [
              "Drama"
            ],
            "rating": "8.2",
            "title": "Network",
            "url": "http://www.imdb.com/title/tt0074958/?ref_=chttp_tt_174",
            "movieDirector": "Sidney Lumet",
            "actors": [
              "Faye Dunaway",
              "William Holden",
              "Peter Finch"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTc1NjIyMDcxNl5BMl5BanBnXkFtZTgwMzU2MTUxMDE@.jpg"
          },
          {
            "plot": "After a brilliant but asocial mathematician accepts secret work in cryptography, his life takes a turn for the nightmarish.",
            "genres": [
              "Biography",
              "Drama"
            ],
            "rating": "8.2",
            "title": "A Beautiful Mind",
            "url": "http://www.imdb.com/title/tt0268978/?ref_=chttp_tt_173",
            "movieDirector": "Ron Howard",
            "actors": [
              "Russell Crowe",
              "Ed Harris",
              "Jennifer Connelly"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTQ4MDI2MzkwMl5BMl5BanBnXkFtZTYwMjk0NTA5.jpg"
          },
          {
            "plot": "Brian is born on the original Christmas, in the stable next door. He spends his life being mistaken for a messiah.",
            "genres": [
              "Comedy"
            ],
            "rating": "8.2",
            "title": "Life of Brian",
            "url": "http://www.imdb.com/title/tt0079470/?ref_=chttp_tt_172",
            "movieDirector": "Terry Jones",
            "actors": [
              "Graham Chapman",
              "John Cleese",
              "Michael Palin"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTM2NjQ4NDA0MV5BMl5BanBnXkFtZTcwMjM0Njk3OA@@.jpg"
          },
          {
            "plot": "A tale of friendship between two unlikely pen pals: Mary, a lonely, eight-year-old girl living in the suburbs of Melbourne, and Max, a forty-four-year old, severely obese man living in New York.",
            "genres": [
              "Animation",
              "Comedy",
              "Drama"
            ],
            "rating": "8.2",
            "title": "Mary & Max",
            "url": "http://www.imdb.com/title/tt0978762/?ref_=chttp_tt_171",
            "movieDirector": "Adam Elliot",
            "actors": [
              "Toni Collette",
              "Philip Seymour Hoffman",
              "Eric Bana"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTQ1NDIyNTA1Nl5BMl5BanBnXkFtZTcwMjc2Njk3OA@@.jpg"
          },
          {
            "plot": "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
            "genres": [
              "Crime",
              "Drama",
              "Thriller"
            ],
            "rating": "8.2",
            "title": "No Country for Old Men",
            "url": "http://www.imdb.com/title/tt0477348/?ref_=chttp_tt_170",
            "actors": [
              "Tommy Lee Jones",
              "Javier Bardem",
              "Josh Brolin"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@.jpg"
          },
          {
            "plot": "The Bride wakens from a four-year coma. The child she carried in her womb is gone. Now she must wreak vengeance on the team of assassins who betrayed her - a team she was once part of.",
            "genres": [
              "Action",
              "Crime"
            ],
            "rating": "8.2",
            "title": "Kill Bill: Vol. 1",
            "url": "http://www.imdb.com/title/tt0266697/?ref_=chttp_tt_169",
            "movieDirector": "Quentin Tarantino",
            "actors": [
              "Uma Thurman",
              "David Carradine",
              "Daryl Hannah"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTU1NDg1Mzg4M15BMl5BanBnXkFtZTYwMDExOTc3.jpg"
          },
          {
            "plot": "The wife of a cruel headmaster and his mistress conspire to kill him, but after the murder is committed, his body disappears, and strange events begin to plague the two women.",
            "genres": [
              "Mystery",
              "Thriller"
            ],
            "rating": "8.3",
            "title": "Diabolique",
            "url": "http://www.imdb.com/title/tt0046911/?ref_=chttp_tt_168",
            "movieDirector": "Henri-Georges Clouzot",
            "actors": [
              "Simone Signoret",
              "V\u00e9ra Clouzot",
              "Paul Meurisse"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTcwNzc5MjI5Nl5BMl5BanBnXkFtZTYwNjIwMzc5.jpg"
          },
          {
            "plot": "An ex-tennis pro carries out a plot to murder his wife. When things go wrong, he improvises a brilliant plan B.",
            "genres": [
              "Crime",
              "Thriller"
            ],
            "rating": "8.2",
            "title": "Dial M for Murder",
            "url": "http://www.imdb.com/title/tt0046912/?ref_=chttp_tt_167",
            "movieDirector": "Alfred Hitchcock",
            "actors": [
              "Ray Milland",
              "Grace Kelly",
              "Robert Cummings"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTMwNzc1MzM2M15BMl5BanBnXkFtZTYwNDUxNDU2.jpg"
          },
          {
            "plot": "A stark, perverse story of murder, kidnapping, and police corruption in a Mexican border town.",
            "genres": [
              "Crime",
              "Film-Noir",
              "Thriller"
            ],
            "rating": "8.2",
            "title": "Touch of Evil",
            "url": "http://www.imdb.com/title/tt0052311/?ref_=chttp_tt_166",
            "movieDirector": "Orson Welles",
            "actors": [
              "Charlton Heston",
              "Orson Welles",
              "Janet Leigh"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BNjMwODI0ODg1Nl5BMl5BanBnXkFtZTcwMzgzNjk3OA@@.jpg"
          },
          {
            "plot": "A young recruit in Vietnam faces a moral crisis when confronted with the horrors of war and the duality of man.",
            "genres": [
              "Action",
              "Drama",
              "War"
            ],
            "rating": "8.2",
            "title": "Platoon",
            "url": "http://www.imdb.com/title/tt0091763/?ref_=chttp_tt_165",
            "movieDirector": "Oliver Stone",
            "actors": [
              "Charlie Sheen",
              "Tom Berenger",
              "Willem Dafoe"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BNTU3NzY4ODY5MF5BMl5BanBnXkFtZTcwOTkzNzE1NA@@.jpg"
          },
          {
            "plot": "A film that explores the dark and miserable town, Basin City, and tells the story of three different people, all caught up in violent corruption.",
            "genres": [
              "Crime",
              "Thriller"
            ],
            "rating": "8.2",
            "title": "Sin City",
            "url": "http://www.imdb.com/title/tt0401792/?ref_=chttp_tt_164",
            "actors": [
              "Mickey Rourke",
              "Clive Owen",
              "Bruce Willis"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTI2NjUyMDUyMV5BMl5BanBnXkFtZTcwMzU0OTkyMQ@@.jpg"
          },
          {
            "plot": "Scientists in the Antarctic are confronted by a shape-shifting alien that assumes the appearance of the people that it kills.",
            "genres": [
              "Horror",
              "Mystery",
              "Sci-Fi"
            ],
            "rating": "8.2",
            "title": "The Thing",
            "url": "http://www.imdb.com/title/tt0084787/?ref_=chttp_tt_163",
            "movieDirector": "John Carpenter",
            "actors": [
              "Kurt Russell",
              "Wilford Brimley",
              "Keith David"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjE1OTIzMjUxNV5BMl5BanBnXkFtZTgwOTUwNzMxMDE@.jpg"
          },
          {
            "plot": "In 1948, an American court in occupied Germany tries four Nazi judges for war crimes.",
            "genres": [
              "Drama",
              "History",
              "War"
            ],
            "rating": "8.3",
            "title": "Judgment at Nuremberg",
            "url": "http://www.imdb.com/title/tt0055031/?ref_=chttp_tt_162",
            "movieDirector": "Stanley Kramer",
            "actors": [
              "Spencer Tracy",
              "Burt Lancaster",
              "Richard Widmark"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BNDc2ODQ5NTE2MV5BMl5BanBnXkFtZTcwODExMjUyNA@@.jpg"
          },
          {
            "plot": "A boy who communicates with spirits that don't know they're dead seeks the help of a disheartened child psychologist.",
            "genres": [
              "Drama",
              "Mystery",
              "Thriller"
            ],
            "rating": "8.2",
            "title": "The Sixth Sense",
            "url": "http://www.imdb.com/title/tt0167404/?ref_=chttp_tt_161",
            "movieDirector": "M. Night Shyamalan",
            "actors": [
              "Bruce Willis",
              "Haley Joel Osment",
              "Toni Collette"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTc2MTQxNDI5MV5BMl5BanBnXkFtZTYwNjkzMDc4.jpg"
          },
          {
            "plot": "Neurotic New York comedian Alvy Singer falls in love with the ditsy Annie Hall.",
            "genres": [
              "Comedy",
              "Romance"
            ],
            "rating": "8.2",
            "title": "Annie Hall",
            "url": "http://www.imdb.com/title/tt0075686/?ref_=chttp_tt_160",
            "movieDirector": "Woody Allen",
            "actors": [
              "Woody Allen",
              "Diane Keaton",
              "Tony Roberts"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTU1NDM2MjkwM15BMl5BanBnXkFtZTcwODU3OTYwNA@@.jpg"
          },
          {
            "plot": "Two Western bank/train robbers flee to Bolivia when the law gets too close.",
            "genres": [
              "Adventure",
              "Biography",
              "Crime"
            ],
            "rating": "8.2",
            "title": "Butch Cassidy and the Sundance Kid",
            "url": "http://www.imdb.com/title/tt0064115/?ref_=chttp_tt_159",
            "movieDirector": "George Roy Hill",
            "actors": [
              "Paul Newman",
              "Robert Redford",
              "Katharine Ross"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTkyMTM2NDk5Nl5BMl5BanBnXkFtZTgwNzY1NzEyMDE@.jpg"
          },
          {
            "plot": "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
            "genres": [
              "Animation",
              "Adventure",
              "Comedy"
            ],
            "rating": "8.2",
            "title": "How to Train Your Dragon",
            "url": "http://www.imdb.com/title/tt0892769/?ref_=chttp_tt_158",
            "actors": [
              "Jay Baruchel",
              "Gerard Butler",
              "Christopher Mintz-Plasse"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@.jpg"
          },
          {
            "plot": "When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking home.",
            "genres": [
              "Animation",
              "Adventure",
              "Family"
            ],
            "rating": "8.2",
            "title": "Howl's Moving Castle",
            "url": "http://www.imdb.com/title/tt0347149/?ref_=chttp_tt_157",
            "movieDirector": "Hayao Miyazaki",
            "actors": [
              "Chieko Baish\u00f4",
              "Takuya Kimura",
              "Tatsuya Gash\u00fbin"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTY1OTg0MjE3MV5BMl5BanBnXkFtZTcwNTUxMTkyMQ@@.jpg"
          },
          {
            "plot": "The true story of Paul Rusesabagina, a hotel manager who housed over a thousand Tutsi refugees during their struggle against the Hutu militia in Rwanda.",
            "genres": [
              "Biography",
              "Drama",
              "History"
            ],
            "rating": "8.2",
            "title": "Hotel Rwanda",
            "url": "http://www.imdb.com/title/tt0395169/?ref_=chttp_tt_156",
            "movieDirector": "Terry George",
            "actors": [
              "Don Cheadle",
              "Sophie Okonedo",
              "Joaquin Phoenix"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTI2MzQyNTc1M15BMl5BanBnXkFtZTYwMjExNjc3.jpg"
          },
          {
            "plot": "After graduating from Emory University, top student and athlete Christopher McCandless abandons his possessions, gives his entire $24,000 savings account to charity and hitchhikes to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters that shape his life.",
            "genres": [
              "Adventure",
              "Biography",
              "Drama"
            ],
            "rating": "8.2",
            "title": "Into the Wild",
            "url": "http://www.imdb.com/title/tt0758758/?ref_=chttp_tt_155",
            "movieDirector": "Sean Penn",
            "actors": [
              "Emile Hirsch",
              "Vince Vaughn",
              "Catherine Keener"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTAwNDEyODU1MjheQTJeQWpwZ15BbWU2MDc3NDQwNw@@.jpg"
          },
          {
            "plot": "Renton, deeply immersed in the Edinburgh drug scene, tries to clean up and get out, despite the allure of the drugs and influence of friends.",
            "genres": [
              "Crime",
              "Drama"
            ],
            "rating": "8.2",
            "title": "Trainspotting",
            "url": "http://www.imdb.com/title/tt0117951/?ref_=chttp_tt_154",
            "movieDirector": "Danny Boyle",
            "actors": [
              "Ewan McGregor",
              "Ewen Bremner",
              "Jonny Lee Miller"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTg2MzcxNTY3NV5BMl5BanBnXkFtZTgwOTQ5NDQxMDE@.jpg"
          },
          {
            "plot": "A manipulative Southern belle carries on a turbulent affair with a blockade runner during the American Civil War.",
            "genres": [
              "Drama",
              "Romance",
              "War"
            ],
            "rating": "8.2",
            "title": "Gone with the Wind",
            "url": "http://www.imdb.com/title/tt0031381/?ref_=chttp_tt_153",
            "actors": [
              "Clark Gable",
              "Vivien Leigh",
              "Thomas Mitchell"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BNDUwMjAxNTU1MF5BMl5BanBnXkFtZTgwMzg4NzMxMDE@.jpg"
          },
          {
            "plot": "Jerry Lundegaard's inept crime falls apart due to his and his henchmen's bungling and the persistent police work of the quite pregnant Marge Gunderson.",
            "genres": [
              "Crime",
              "Drama",
              "Thriller"
            ],
            "rating": "8.2",
            "title": "Fargo",
            "url": "http://www.imdb.com/title/tt0116282/?ref_=chttp_tt_152",
            "actors": [
              "William H. Macy",
              "Frances McDormand",
              "Steve Buscemi"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTgxNzY3MzUxOV5BMl5BanBnXkFtZTcwMDA0NjMyNA@@.jpg"
          },
          {
            "plot": "In a future British tyranny, a shadowy freedom fighter plots to overthrow it with the help of a young woman.",
            "genres": [
              "Action",
              "Sci-Fi",
              "Thriller"
            ],
            "rating": "8.2",
            "title": "V for Vendetta",
            "url": "http://www.imdb.com/title/tt0434409/?ref_=chttp_tt_151",
            "movieDirector": "James McTeigue",
            "actors": [
              "Hugo Weaving",
              "Natalie Portman",
              "Rupert Graves"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BOTI5ODc3NzExNV5BMl5BanBnXkFtZTcwNzYxNzQzMw@@.jpg"
          },
          {
            "plot": "An in-depth examination of the way that the Vietnam war affects the lives of people in a small industrial town in the USA.",
            "genres": [
              "Drama",
              "War"
            ],
            "rating": "8.2",
            "title": "The Deer Hunter",
            "url": "http://www.imdb.com/title/tt0077416/?ref_=chttp_tt_150",
            "movieDirector": "Michael Cimino",
            "actors": [
              "Robert De Niro",
              "Christopher Walken",
              "John Cazale"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTYzMDM5MjMyN15BMl5BanBnXkFtZTcwNzcyMTEzMQ@@.jpg"
          },
          {
            "plot": "Greed, deception, money, power, and murder occur between two mobster best friends and a trophy wife over a gambling empire.",
            "genres": [
              "Biography",
              "Crime",
              "Drama"
            ],
            "rating": "8.2",
            "title": "Casino",
            "url": "http://www.imdb.com/title/tt0112641/?ref_=chttp_tt_149",
            "movieDirector": "Martin Scorsese",
            "actors": [
              "Robert De Niro",
              "Sharon Stone",
              "Joe Pesci"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTMzMjkwMTk4Nl5BMl5BanBnXkFtZTYwNjYxMjk5.jpg"
          },
          {
            "plot": "A private detective takes on a case that involves him with three eccentric criminals, a gorgeous liar, and their quest for a priceless statuette.",
            "genres": [
              "Crime",
              "Drama",
              "Film-Noir"
            ],
            "rating": "8.2",
            "title": "The Maltese Falcon",
            "url": "http://www.imdb.com/title/tt0033870/?ref_=chttp_tt_148",
            "movieDirector": "John Huston",
            "actors": [
              "Humphrey Bogart",
              "Mary Astor",
              "Gladys George"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTMxMjE1ODE1N15BMl5BanBnXkFtZTcwMzA4ODQ0Mg@@.jpg"
          },
          {
            "plot": "A man refuses to conform to life in a rural prison.",
            "genres": [
              "Crime",
              "Drama"
            ],
            "rating": "8.2",
            "title": "Cool Hand Luke",
            "url": "http://www.imdb.com/title/tt0061512/?ref_=chttp_tt_147",
            "movieDirector": "Stuart Rosenberg",
            "actors": [
              "Paul Newman",
              "George Kennedy",
              "Strother Martin"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BODMyMDA0MTY2OF5BMl5BanBnXkFtZTcwMzkzNjk3OA@@.jpg"
          },
          {
            "plot": "The youngest son of an alcoholic former boxer returns home, where he's trained by his father for competition in a mixed martial arts tournament - a path that puts the fighter on a collision corner with his older brother.",
            "genres": [
              "Drama",
              "Sport"
            ],
            "rating": "8.3",
            "title": "Warrior",
            "url": "http://www.imdb.com/title/tt1291584/?ref_=chttp_tt_146",
            "movieDirector": "Gavin O'Connor",
            "actors": [
              "Tom Hardy",
              "Nick Nolte",
              "Joel Edgerton"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTk4ODk5MTMyNV5BMl5BanBnXkFtZTcwMDMyNTg0Ng@@.jpg"
          },
          {
            "plot": "A retired legal counselor writes a novel hoping to find closure for one of his past unresolved homicide cases and for his unreciprocated love with his superior - both of which still haunt him decades later.",
            "genres": [
              "Drama",
              "Mystery",
              "Thriller"
            ],
            "rating": "8.3",
            "title": "The Secret in Their Eyes",
            "url": "http://www.imdb.com/title/tt1305806/?ref_=chttp_tt_145",
            "movieDirector": "Juan Jos\u00e9 Campanella",
            "actors": [
              "Ricardo Dar\u00edn",
              "Soledad Villamil",
              "Pablo Rago"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTgwNTI3OTczOV5BMl5BanBnXkFtZTcwMTM3MTUyMw@@.jpg"
          },
          {
            "plot": "A spoiled heiress, running away from her family, is helped by a man who's actually a reporter looking for a story.",
            "genres": [
              "Comedy",
              "Romance"
            ],
            "rating": "8.3",
            "title": "It Happened One Night",
            "url": "http://www.imdb.com/title/tt0025316/?ref_=chttp_tt_144",
            "movieDirector": "Frank Capra",
            "actors": [
              "Clark Gable",
              "Claudette Colbert",
              "Walter Connolly"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTczOTQ1MTQ4MF5BMl5BanBnXkFtZTcwODI2MDk4OQ@@.jpg"
          },
          {
            "plot": "Will Hunting, a janitor at MIT, has a gift for mathematics but needs help from a psychologist to find direction in his life.",
            "genres": [
              "Drama"
            ],
            "rating": "8.2",
            "title": "Good Will Hunting",
            "url": "http://www.imdb.com/title/tt0119217/?ref_=chttp_tt_143",
            "movieDirector": "Gus Van Sant",
            "actors": [
              "Robin Williams",
              "Matt Damon",
              "Ben Affleck"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTk0NjY0Mzg5MF5BMl5BanBnXkFtZTcwNzM1OTM2MQ@@.jpg"
          },
          {
            "plot": "\"Dude\" Lebowski, mistaken for a millionaire Lebowski, seeks restitution for his ruined rug and enlists his bowling buddies to help get it.",
            "genres": [
              "Comedy",
              "Crime"
            ],
            "rating": "8.2",
            "title": "The Big Lebowski",
            "url": "http://www.imdb.com/title/tt0118715/?ref_=chttp_tt_142",
            "actors": [
              "Jeff Bridges",
              "John Goodman",
              "Julianne Moore"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTQ0NjUzMDMyOF5BMl5BanBnXkFtZTgwODA1OTU0MDE@.jpg"
          },
          {
            "plot": "When two girls move to the country to be near their ailing mother, they have adventures with the wonderous forest spirits who live nearby.",
            "genres": [
              "Animation",
              "Drama",
              "Family"
            ],
            "rating": "8.3",
            "title": "My Neighbor Totoro",
            "url": "http://www.imdb.com/title/tt0096283/?ref_=chttp_tt_141",
            "movieDirector": "Hayao Miyazaki",
            "actors": [
              "Hitoshi Takagi",
              "Noriko Hidaka",
              "Toshiyuki Amagasa"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjE3NzY5ODQwMV5BMl5BanBnXkFtZTcwNzY1NzcxNw@@.jpg"
          },
          {
            "plot": "Disgruntled Korean War veteran Walt Kowalski sets out to reform his neighbor, a Hmong teenager who tried to steal Kowalski's prized possession: a 1972 Gran Torino.",
            "genres": [
              "Drama"
            ],
            "rating": "8.2",
            "title": "Gran Torino",
            "url": "http://www.imdb.com/title/tt1205489/?ref_=chttp_tt_140",
            "movieDirector": "Clint Eastwood",
            "actors": [
              "Clint Eastwood",
              "Bee Vang",
              "Christopher Carley"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTQyMTczMTAxMl5BMl5BanBnXkFtZTcwOTc1ODE0Mg@@.jpg"
          },
          {
            "plot": "A self-conscious bride is tormented by the memory of her husband's dead first wife.",
            "genres": [
              "Drama",
              "Mystery",
              "Thriller"
            ],
            "rating": "8.3",
            "title": "Rebecca",
            "url": "http://www.imdb.com/title/tt0032976/?ref_=chttp_tt_139",
            "movieDirector": "Alfred Hitchcock",
            "actors": [
              "Laurence Olivier",
              "Joan Fontaine",
              "George Sanders"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTM5ODA4ODMzM15BMl5BanBnXkFtZTcwOTA2NTEwNA@@.jpg"
          },
          {
            "plot": "A botched card game in London triggers four friends, thugs, weed-growers, hard gangsters, loan sharks and debt collectors to collide with each other in a series of unexpected events, all for the sake of weed, cash and two antique shotguns.",
            "genres": [
              "Crime",
              "Thriller"
            ],
            "rating": "8.2",
            "title": "Lock, Stock and Two Smoking Barrels",
            "url": "http://www.imdb.com/title/tt0120735/?ref_=chttp_tt_138",
            "movieDirector": "Guy Ritchie",
            "actors": [
              "Jason Flemyng",
              "Dexter Fletcher",
              "Nick Moran"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTU4MTM1MjUxMF5BMl5BanBnXkFtZTYwOTEzODY4.jpg"
          },
          {
            "plot": "Deckard, a blade runner, has to track down and terminate 4 replicants who hijacked a ship in space and have returned to Earth seeking their maker.",
            "genres": [
              "Drama",
              "Sci-Fi",
              "Thriller"
            ],
            "rating": "8.3",
            "title": "Blade Runner",
            "url": "http://www.imdb.com/title/tt0083658/?ref_=chttp_tt_137",
            "movieDirector": "Ridley Scott",
            "actors": [
              "Harrison Ford",
              "Rutger Hauer",
              "Sean Young"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTA4MDQxNTk2NDheQTJeQWpwZ15BbWU3MDE2NjIyODk@.jpg"
          },
          {
            "plot": "A bureaucrat tries to find a meaning in his life after he discovers he has terminal cancer.",
            "genres": [
              "Drama"
            ],
            "rating": "8.4",
            "title": "Att leva",
            "url": "http://www.imdb.com/title/tt0044741/?ref_=chttp_tt_136",
            "movieDirector": "Akira Kurosawa",
            "actors": [
              "Takashi Shimura",
              "Nobuo Kaneko",
              "Shin'ichi Himori"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTcyMDU0MTQzNV5BMl5BanBnXkFtZTcwOTk2NDQyMQ@@.jpg"
          },
          {
            "plot": "A young woman from England comes to India to make a documentary about her grandfather's diary which was written in the 1920s about the Indian Independence with five young men.",
            "genres": [
              "Drama",
              "History"
            ],
            "rating": "8.6",
            "title": "Rang De Basanti",
            "url": "http://www.imdb.com/title/tt0405508/?ref_=chttp_tt_134",
            "movieDirector": "Rakeysh Omprakash Mehra",
            "actors": [
              "Aamir Khan",
              "Soha Ali Khan",
              "Siddharth"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjEwNzA5MjAwN15BMl5BanBnXkFtZTcwMzY5MzIzMQ@@.jpg"
          },
          {
            "plot": "The Tramp goes to the Klondike in search of gold and finds it and more.",
            "genres": [
              "Adventure",
              "Comedy",
              "Family"
            ],
            "rating": "8.3",
            "title": "The Gold Rush",
            "url": "http://www.imdb.com/title/tt0015864/?ref_=chttp_tt_135",
            "movieDirector": "Charles Chaplin",
            "actors": [
              "Charles Chaplin",
              "Mack Swain",
              "Tom Murray"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BOTE4MzEwMTkzMV5BMl5BanBnXkFtZTcwNTg4NzU2OQ@@.jpg"
          },
          {
            "plot": "An elderly lord abdicates to his three sons, and the two corrupt ones turn against him.",
            "genres": [
              "Action",
              "Drama",
              "War"
            ],
            "rating": "8.3",
            "title": "Ran",
            "url": "http://www.imdb.com/title/tt0089881/?ref_=chttp_tt_133",
            "movieDirector": "Akira Kurosawa",
            "actors": [
              "Tatsuya Nakadai",
              "Akira Terao",
              "Jinpachi Nezu"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjA0Nzg0NzUzNV5BMl5BanBnXkFtZTcwNzkzNjk3OA@@.jpg"
          },
          {
            "plot": "A teacher lives a lonely life, all the while struggling over his son's custody. His life slowly gets better as he finds love and receives good news from his son, but his new luck is about to be brutally shattered by an innocent little lie.",
            "genres": [
              "Drama"
            ],
            "rating": "8.3",
            "title": "The Hunt",
            "url": "http://www.imdb.com/title/tt2106476/?ref_=chttp_tt_132",
            "movieDirector": "Thomas Vinterberg",
            "actors": [
              "Mads Mikkelsen",
              "Thomas Bo Larsen",
              "Annika Wedderkopp"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTg2NDg3ODg4NF5BMl5BanBnXkFtZTcwNzk3NTc3Nw@@.jpg"
          },
          {
            "plot": "The merciless 1970s rivalry between Formula One rivals James Hunt and Niki Lauda.",
            "genres": [
              "Action",
              "Biography",
              "Drama"
            ],
            "rating": "8.3",
            "title": "Rush",
            "url": "http://www.imdb.com/title/tt1979320/?ref_=chttp_tt_131",
            "movieDirector": "Ron Howard",
            "actors": [
              "Daniel Br\u00fchl",
              "Chris Hemsworth",
              "Olivia Wilde"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTQyMDE0MTY0OV5BMl5BanBnXkFtZTcwMjI2OTI0OQ@@.jpg"
          },
          {
            "plot": "A Victorian surgeon rescues a heavily disfigured man who is mistreated while scraping a living as a side-show freak. Behind his monstrous facade, there is revealed a person of intelligence and sensitivity.",
            "genres": [
              "Biography",
              "Drama"
            ],
            "rating": "8.3",
            "title": "The Elephant Man",
            "url": "http://www.imdb.com/title/tt0080678/?ref_=chttp_tt_130",
            "movieDirector": "David Lynch",
            "actors": [
              "Anthony Hopkins",
              "John Hurt",
              "Anne Bancroft"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTExNTk0MjIzNDZeQTJeQWpwZ15BbWU3MDY5ODI5Nzg@.jpg"
          },
          {
            "plot": "When Union spies steal an engineer's beloved locomotive, he pursues it single handedly and straight through enemy lines.",
            "genres": [
              "Action",
              "Adventure",
              "Comedy"
            ],
            "rating": "8.3",
            "title": "The General",
            "url": "http://www.imdb.com/title/tt0017925/?ref_=chttp_tt_129",
            "actors": [
              "Buster Keaton",
              "Marion Mack",
              "Glen Cavender"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BODQxMzMyNTY5Nl5BMl5BanBnXkFtZTcwMDMyNTk3OA@@.jpg"
          },
          {
            "plot": "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them \"idiots\".",
            "genres": [
              "Comedy",
              "Drama",
              "Romance"
            ],
            "rating": "8.5",
            "title": "3 Idiots",
            "url": "http://www.imdb.com/title/tt1187043/?ref_=chttp_tt_128",
            "movieDirector": "Rajkumar Hirani",
            "actors": [
              "Aamir Khan",
              "Madhavan",
              "Mona Singh"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTMyOTg0ODQ1OF5BMl5BanBnXkFtZTcwNjc0NTMwNQ@@.jpg"
          },
          {
            "plot": "After living a life marked by coldness, an aging professor is forced to confront the emptiness of his existence.",
            "genres": [
              "Drama"
            ],
            "rating": "8.3",
            "title": "Wild Strawberries",
            "url": "http://www.imdb.com/title/tt0050986/?ref_=chttp_tt_127",
            "movieDirector": "Ingmar Bergman",
            "actors": [
              "Victor Sj\u00f6str\u00f6m",
              "Bibi Andersson",
              "Ingrid Thulin"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTQyNzQwMjg0Ml5BMl5BanBnXkFtZTYwMTgyMDg4.jpg"
          },
          {
            "plot": "A man seeks answers about life, death, and the existence of God as he plays chess against the Grim Reaper during the Black Plague.",
            "genres": [
              "Drama",
              "Fantasy"
            ],
            "rating": "8.3",
            "title": "The Seventh Seal",
            "url": "http://www.imdb.com/title/tt0050976/?ref_=chttp_tt_126",
            "movieDirector": "Ingmar Bergman",
            "actors": [
              "Max von Sydow",
              "Gunnar Bj\u00f6rnstrand",
              "Bengt Ekerot"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTUzODUyNjkxM15BMl5BanBnXkFtZTcwODA5MTM1Mg@@.jpg"
          },
          {
            "plot": "A medical engineer and an astronaut work together to survive after an accident leaves them adrift in space.",
            "genres": [
              "Drama",
              "Sci-Fi",
              "Thriller"
            ],
            "rating": "8.3",
            "title": "Gravity",
            "url": "http://www.imdb.com/title/tt1454468/?ref_=chttp_tt_125",
            "movieDirector": "Alfonso Cuar\u00f3n",
            "actors": [
              "Sandra Bullock",
              "George Clooney",
              "Ed Harris"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BNjE5MzYwMzYxMF5BMl5BanBnXkFtZTcwOTk4MTk0OQ@@.jpg"
          },
          {
            "plot": "An eight year old boy is thought to be lazy and a troublemaker, until the new art teacher has the patience and compassion to discover the real problem behind his struggles in school.",
            "genres": [
              "Drama"
            ],
            "rating": "8.6",
            "title": "Like Stars on Earth",
            "url": "http://www.imdb.com/title/tt0986264/?ref_=chttp_tt_124",
            "actors": [
              "Darsheel Safary",
              "Aamir Khan",
              "Tanay Chheda"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTU4NzYwNjYzNV5BMl5BanBnXkFtZTcwNjE4MjA3Mg@@.jpg"
          },
          {
            "plot": "A group of professional bank robbers start to feel the heat from police when they unknowingly leave a clue at their latest heist.",
            "genres": [
              "Action",
              "Crime",
              "Drama"
            ],
            "rating": "8.3",
            "title": "Heat",
            "url": "http://www.imdb.com/title/tt0113277/?ref_=chttp_tt_123",
            "movieDirector": "Michael Mann",
            "actors": [
              "Al Pacino",
              "Robert De Niro",
              "Val Kilmer"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTM1NDc4ODkxNV5BMl5BanBnXkFtZTcwNTI4ODE3MQ@@.jpg"
          },
          {
            "plot": "After settling his differences with a Japanese PoW camp commander, a British colonel co-operates to oversee his men's construction of a railway bridge for their captors - while oblivious to a plan by the Allies to destroy it.",
            "genres": [
              "Adventure",
              "Drama",
              "War"
            ],
            "rating": "8.3",
            "title": "The Bridge on the River Kwai",
            "url": "http://www.imdb.com/title/tt0050212/?ref_=chttp_tt_122",
            "movieDirector": "David Lean",
            "actors": [
              "William Holden",
              "Alec Guinness",
              "Jack Hawkins"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTc2NzA0NTEwNF5BMl5BanBnXkFtZTcwMzA0MTk3OA@@.jpg"
          },
          {
            "plot": "An ex-prize fighter turned longshoreman struggles to stand up to his corrupt union bosses.",
            "genres": [
              "Crime",
              "Drama"
            ],
            "rating": "8.3",
            "title": "On the Waterfront",
            "url": "http://www.imdb.com/title/tt0047296/?ref_=chttp_tt_121",
            "movieDirector": "Elia Kazan",
            "actors": [
              "Marlon Brando",
              "Karl Malden",
              "Lee J. Cobb"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTM0NDQxMzA0OF5BMl5BanBnXkFtZTcwOTI2NDU2MQ@@.jpg"
          },
          {
            "plot": "Allied P.O.W.s plan for several hundred of their number to escape from a German camp during World War II.",
            "genres": [
              "Adventure",
              "Drama",
              "History"
            ],
            "rating": "8.3",
            "title": "The Great Escape",
            "url": "http://www.imdb.com/title/tt0057115/?ref_=chttp_tt_120",
            "movieDirector": "John Sturges",
            "actors": [
              "Steve McQueen",
              "James Garner",
              "Richard Attenborough"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjI2MTQwNDI3Nl5BMl5BanBnXkFtZTcwNDk4MTkzNA@@.jpg"
          },
          {
            "plot": "In the fascist Spain of 1944, the bookish young stepdaughter of a sadistic army officer escapes into an eerie but captivating fantasy world.",
            "genres": [
              "Drama",
              "Fantasy",
              "War"
            ],
            "rating": "8.3",
            "title": "Pans labyrint",
            "url": "http://www.imdb.com/title/tt0457430/?ref_=chttp_tt_119",
            "movieDirector": "Guillermo del Toro",
            "actors": [
              "Ivana Baquero",
              "Ariadna Gil",
              "Sergi L\u00f3pez"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTU3ODg2NjQ5NF5BMl5BanBnXkFtZTcwMDEwODgzMQ@@.jpg"
          },
          {
            "plot": "In 1980 Miami, a determined Cuban immigrant takes over a drug cartel while succumbing to greed.",
            "genres": [
              "Crime",
              "Drama"
            ],
            "rating": "8.3",
            "title": "Scarface",
            "url": "http://www.imdb.com/title/tt0086250/?ref_=chttp_tt_118",
            "movieDirector": "Brian De Palma",
            "actors": [
              "Al Pacino",
              "Michelle Pfeiffer",
              "Steven Bauer"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjAzOTM4MzEwNl5BMl5BanBnXkFtZTgwMzU1OTc1MDE@.jpg"
          },
          {
            "plot": "Traudl Junge, the final secretary for Adolf Hitler, tells of the Nazi dictator's final days in his Berlin bunker at the end of WWII.",
            "genres": [
              "Biography",
              "Drama",
              "History"
            ],
            "rating": "8.3",
            "title": "Downfall",
            "url": "http://www.imdb.com/title/tt0363163/?ref_=chttp_tt_117",
            "movieDirector": "Oliver Hirschbiegel",
            "actors": [
              "Bruno Ganz",
              "Alexandra Maria Lara",
              "Ulrich Matthes"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTM1OTI1MjE2Nl5BMl5BanBnXkFtZTcwMTEwMzc4NA@@.jpg"
          },
          {
            "plot": "By tying thousands of balloons to his home, 78-year-old Carl sets out to fulfill his lifelong dream to see the wilds of South America. Russell, a wilderness explorer 70 years younger, inadvertently becomes a stowaway.",
            "genres": [
              "Animation",
              "Adventure",
              "Drama"
            ],
            "rating": "8.3",
            "title": "Up",
            "url": "http://www.imdb.com/title/tt1049413/?ref_=chttp_tt_116",
            "actors": [
              "Edward Asner",
              "Jordan Nagai",
              "John Ratzenberger"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTMwODg0NDY1Nl5BMl5BanBnXkFtZTcwMjkwNTgyMg@@.jpg"
          },
          {
            "plot": "John McClane, officer of the NYPD, tries to save wife Holly Gennaro and several others, taken hostage by German terrorist Hans Gruber during a Christmas party at the Nakatomi Plaza in Los Angeles.",
            "genres": [
              "Action",
              "Thriller"
            ],
            "rating": "8.3",
            "title": "Die Hard",
            "url": "http://www.imdb.com/title/tt0095016/?ref_=chttp_tt_115",
            "movieDirector": "John McTiernan",
            "actors": [
              "Bruce Willis",
              "Alan Rickman",
              "Bonnie Bedelia"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTY4ODM0OTc2M15BMl5BanBnXkFtZTcwNzE0MTk3OA@@.jpg"
          },
          {
            "plot": "A naive man is appointed to fill a vacancy in the US Senate. His plans promptly collide with political corruption, but he doesn't back down.",
            "genres": [
              "Drama"
            ],
            "rating": "8.4",
            "title": "Mr. Smith Goes to Washington",
            "url": "http://www.imdb.com/title/tt0031679/?ref_=chttp_tt_114",
            "movieDirector": "Frank Capra",
            "actors": [
              "James Stewart",
              "Jean Arthur",
              "Claude Rains"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjAwMzU5ODkwNF5BMl5BanBnXkFtZTcwNTg4Mjk3OA@@.jpg"
          },
          {
            "plot": "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
            "genres": [
              "Animation",
              "Adventure",
              "Comedy"
            ],
            "rating": "8.3",
            "title": "Toy Story",
            "url": "http://www.imdb.com/title/tt0114709/?ref_=chttp_tt_113",
            "movieDirector": "John Lasseter",
            "actors": [
              "Tom Hanks",
              "Tim Allen",
              "Don Rickles"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTgwMjI4MzU5N15BMl5BanBnXkFtZTcwMTMyNTk3OA@@.jpg"
          },
          {
            "plot": "A lonely writer develops an unlikely relationship with his newly purchased operating system that's designed to meet his every need.",
            "genres": [
              "Drama",
              "Romance",
              "Sci-Fi"
            ],
            "rating": "8.5",
            "title": "Her",
            "url": "http://www.imdb.com/title/tt1798709/?ref_=chttp_tt_112",
            "movieDirector": "Spike Jonze",
            "actors": [
              "Joaquin Phoenix",
              "Amy Adams",
              "Scarlett Johansson"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjA1Nzk0OTM2OF5BMl5BanBnXkFtZTgwNjU2NjEwMDE@.jpg"
          },
          {
            "plot": "A private detective hired to expose an adulterer finds himself caught up in a web of deceit, corruption and murder.",
            "genres": [
              "Crime",
              "Drama",
              "Mystery"
            ],
            "rating": "8.3",
            "title": "Chinatown",
            "url": "http://www.imdb.com/title/tt0071315/?ref_=chttp_tt_111",
            "movieDirector": "Roman Polanski",
            "actors": [
              "Jack Nicholson",
              "Faye Dunaway",
              "John Huston"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTUyMTQ1NjA2OV5BMl5BanBnXkFtZTcwODQ1Njg3OA@@.jpg"
          },
          {
            "plot": "Humanity finds a mysterious, obviously artificial, object buried beneath the Lunar surface and, with the intelligent computer H.A.L. 9000, sets off on a quest.",
            "genres": [
              "Adventure",
              "Mystery",
              "Sci-Fi"
            ],
            "rating": "8.3",
            "title": "2001: A Space Odyssey",
            "url": "http://www.imdb.com/title/tt0062622/?ref_=chttp_tt_110",
            "movieDirector": "Stanley Kubrick",
            "actors": [
              "Keir Dullea",
              "Gary Lockwood",
              "William Sylvester"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BNDYyMDgxNDQ5Nl5BMl5BanBnXkFtZTcwMjc1ODg3OA@@.jpg"
          },
          {
            "plot": "In a futuristic city sharply divided between the working class and the city planners, the son of the city's mastermind falls in love with a working class prophet who predicts the coming of a savior to mediate their differences.",
            "genres": [
              "Drama",
              "Sci-Fi"
            ],
            "rating": "8.4",
            "title": "Metropolis",
            "url": "http://www.imdb.com/title/tt0017136/?ref_=chttp_tt_109",
            "movieDirector": "Fritz Lang",
            "actors": [
              "Brigitte Helm",
              "Alfred Abel",
              "Gustav Fr\u00f6hlich"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BNDAzNTkyODg1MF5BMl5BanBnXkFtZTgwMDA3NDkwMDE@.jpg"
          },
          {
            "plot": "Retired Old West gunslinger William Munny reluctantly takes on one last job, with the help of his old partner and a young man.",
            "genres": [
              "Western"
            ],
            "rating": "8.3",
            "title": "Unforgiven",
            "url": "http://www.imdb.com/title/tt0105695/?ref_=chttp_tt_108",
            "movieDirector": "Clint Eastwood",
            "actors": [
              "Clint Eastwood",
              "Gene Hackman",
              "Morgan Freeman"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTkzNTc0NDc4OF5BMl5BanBnXkFtZTcwNTY1ODg3OA@@.jpg"
          },
          {
            "plot": "The Tramp cares for an abandoned child, but events put that relationship in jeopardy.",
            "genres": [
              "Comedy",
              "Drama",
              "Family"
            ],
            "rating": "8.4",
            "title": "The Kid",
            "url": "http://www.imdb.com/title/tt0012349/?ref_=chttp_tt_107",
            "movieDirector": "Charles Chaplin",
            "actors": [
              "Charles Chaplin",
              "Edna Purviance",
              "Jackie Coogan"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTg2Njk2MTM4M15BMl5BanBnXkFtZTcwNTY4NzU2OQ@@.jpg"
          },
          {
            "plot": "An emotionally self-destructive boxer's journey through life, as the violence and temper that leads him to the top in the ring, destroys his life outside it.",
            "genres": [
              "Biography",
              "Drama",
              "Sport"
            ],
            "rating": "8.3",
            "title": "Raging Bull",
            "url": "http://www.imdb.com/title/tt0081398/?ref_=chttp_tt_106",
            "movieDirector": "Martin Scorsese",
            "actors": [
              "Robert De Niro",
              "Cathy Moriarty",
              "Joe Pesci"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjIxOTg3OTc5MF5BMl5BanBnXkFtZTcwNzkwNjMwNA@@.jpg"
          },
          {
            "plot": "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
            "genres": [
              "Adventure",
              "Drama",
              "War"
            ],
            "rating": "8.3",
            "title": "Inglourious Basterds",
            "url": "http://www.imdb.com/title/tt0361748/?ref_=chttp_tt_105",
            "actors": [
              "Brad Pitt",
              "Diane Kruger",
              "Eli Roth"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjIzMDI4MTUzOV5BMl5BanBnXkFtZTcwNDY3NjA3Mg@@.jpg"
          },
          {
            "plot": "A crafty ronin comes to a town divided by two criminal gangs and decides to play them against each other to free the town.",
            "genres": [
              "Action",
              "Adventure"
            ],
            "rating": "8.4",
            "title": "Yojimbo",
            "url": "http://www.imdb.com/title/tt0055630/?ref_=chttp_tt_104",
            "movieDirector": "Akira Kurosawa",
            "actors": [
              "Toshir\u00f4 Mifune",
              "Eijir\u00f4 T\u00f4no",
              "Tatsuya Nakadai"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTIwMzExNjEzM15BMl5BanBnXkFtZTcwODk2NDE0MQ@@.jpg"
          },
          {
            "plot": "After training with his mentor, Batman begins his war on crime to free the crime-ridden Gotham City from corruption that the Scarecrow and the League of Shadows have cast upon it.",
            "genres": [
              "Action",
              "Adventure",
              "Crime"
            ],
            "rating": "8.3",
            "title": "Batman Begins",
            "url": "http://www.imdb.com/title/tt0372784/?ref_=chttp_tt_103",
            "movieDirector": "Christopher Nolan",
            "actors": [
              "Christian Bale",
              "Michael Caine",
              "Ken Watanabe"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3.jpg"
          },
          {
            "plot": "A married couple are faced with a difficult decision - to improve the life of their child by moving to another country or to stay in Iran and look after a deteriorating parent who has Alzheimer's disease.",
            "genres": [
              "Drama"
            ],
            "rating": "8.5",
            "title": "Nader och Simin - En separation",
            "url": "http://www.imdb.com/title/tt1832382/?ref_=chttp_tt_101",
            "movieDirector": "Asghar Farhadi",
            "actors": [
              "Peyman Moaadi",
              "Leila Hatami",
              "Sareh Bayat"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTYzMzU4NDUwOF5BMl5BanBnXkFtZTcwMTM5MjA5Ng@@.jpg"
          },
          {
            "plot": "When Dr. Henry Jones Sr. suddenly goes missing while pursuing the Holy Grail, eminent archaeologist Indiana Jones must follow in his father's footsteps and stop the Nazis.",
            "genres": [
              "Action",
              "Adventure"
            ],
            "rating": "8.3",
            "title": "Indiana Jones and the Last Crusade",
            "url": "http://www.imdb.com/title/tt0097576/?ref_=chttp_tt_102",
            "movieDirector": "Steven Spielberg",
            "actors": [
              "Harrison Ford",
              "Sean Connery",
              "Alison Doody"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTQxMTUyODg2OF5BMl5BanBnXkFtZTcwNDM2MjAxNA@@.jpg"
          },
          {
            "plot": "Two bounty hunters with the same intentions, team up to track down a Western outlaw.",
            "genres": [
              "Western"
            ],
            "rating": "8.4",
            "title": "For a Few Dollars More",
            "url": "http://www.imdb.com/title/tt0059578/?ref_=chttp_tt_100",
            "movieDirector": "Sergio Leone",
            "actors": [
              "Clint Eastwood",
              "Lee Van Cleef",
              "Gian Maria Volont\u00e9"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTQzMjIzOTEzMF5BMl5BanBnXkFtZTcwMTUzNTk3NA@@.jpg"
          },
          {
            "plot": "Pulp novelist Holly Martins travels to shadowy, postwar Vienna, only to find himself investigating the mysterious death of an old friend, black-market opportunist Harry Lime.",
            "genres": [
              "Film-Noir",
              "Mystery",
              "Thriller"
            ],
            "rating": "8.4",
            "title": "The Third Man",
            "url": "http://www.imdb.com/title/tt0041959/?ref_=chttp_tt_99",
            "movieDirector": "Carol Reed",
            "actors": [
              "Orson Welles",
              "Joseph Cotten",
              "Alida Valli"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTYzOTAxNzAyNl5BMl5BanBnXkFtZTcwNjc0OTM0MQ@@.jpg"
          },
          {
            "plot": "A man tries to rise in his company by letting its executives use his apartment for trysts, but complications and a romance of his own ensue.",
            "genres": [
              "Comedy",
              "Drama",
              "Romance"
            ],
            "rating": "8.4",
            "title": "The Apartment",
            "url": "http://www.imdb.com/title/tt0053604/?ref_=chttp_tt_98",
            "movieDirector": "Billy Wilder",
            "actors": [
              "Jack Lemmon",
              "Shirley MacLaine",
              "Fred MacMurray"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTM1OTc4MzgzNl5BMl5BanBnXkFtZTcwNTE2NjgyMw@@.jpg"
          },
          {
            "plot": "When two musicians witness a mob hit, they flee the state in an all female band disguised as women, but further complications set in.",
            "genres": [
              "Comedy"
            ],
            "rating": "8.4",
            "title": "Some Like It Hot",
            "url": "http://www.imdb.com/title/tt0053291/?ref_=chttp_tt_97",
            "movieDirector": "Billy Wilder",
            "actors": [
              "Marilyn Monroe",
              "Tony Curtis",
              "Jack Lemmon"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BNzYzMDkzNDQ0N15BMl5BanBnXkFtZTcwNzQ0NDQyNA@@.jpg"
          },
          {
            "plot": "As corruption grows in 1950s LA, three policemen - the straight-laced, the brutal, and the sleazy - investigate a series of murders with their own brand of justice.",
            "genres": [
              "Crime",
              "Drama",
              "Mystery"
            ],
            "rating": "8.3",
            "title": "L.A. Confidential",
            "url": "http://www.imdb.com/title/tt0119488/?ref_=chttp_tt_96",
            "movieDirector": "Curtis Hanson",
            "actors": [
              "Kevin Spacey",
              "Russell Crowe",
              "Guy Pearce"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTQ5MTU4MzQ5NF5BMl5BanBnXkFtZTcwMjY1OTM2MQ@@.jpg"
          },
          {
            "plot": "Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers, and supposedly Jewish jewelers fight to track down a priceless stolen diamond.",
            "genres": [
              "Comedy",
              "Crime"
            ],
            "rating": "8.4",
            "title": "Snatch.",
            "url": "http://www.imdb.com/title/tt0208092/?ref_=chttp_tt_95",
            "movieDirector": "Guy Ritchie",
            "actors": [
              "Jason Statham",
              "Brad Pitt",
              "Benicio Del Toro"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTk5NzE0MDQyNl5BMl5BanBnXkFtZTcwNzk4Mjk3OA@@.jpg"
          },
          {
            "plot": "A heinous crime and its aftermath are recalled from differing points of view.",
            "genres": [
              "Crime",
              "Drama"
            ],
            "rating": "8.4",
            "title": "Rashomon",
            "url": "http://www.imdb.com/title/tt0042876/?ref_=chttp_tt_94",
            "movieDirector": "Akira Kurosawa",
            "actors": [
              "Toshir\u00f4 Mifune",
              "Machiko Ky\u00f4",
              "Masayuki Mori"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjEzMzA4NDE2OF5BMl5BanBnXkFtZTcwNTc5MDI2NQ@@.jpg"
          },
          {
            "plot": "Fred Dobbs and Bob Curtin, two Americans searching for work in Mexico, convince an old prospector to help them mine for gold in the Sierra Madre Mountains.",
            "genres": [
              "Action",
              "Adventure",
              "Drama"
            ],
            "rating": "8.4",
            "title": "The Treasure of the Sierra Madre",
            "url": "http://www.imdb.com/title/tt0040897/?ref_=chttp_tt_93",
            "movieDirector": "John Huston",
            "actors": [
              "Humphrey Bogart",
              "Walter Huston",
              "Tim Holt"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjEyMjU0ODM3OV5BMl5BanBnXkFtZTcwNDkyMTUyMg@@.jpg"
          },
          {
            "plot": "The incredible story of Wolfgang Amadeus Mozart, told by his peer and secret rival Antonio Salieri - now confined to an insane asylum.",
            "genres": [
              "Biography",
              "Drama",
              "Music"
            ],
            "rating": "8.4",
            "title": "Amadeus",
            "url": "http://www.imdb.com/title/tt0086879/?ref_=chttp_tt_92",
            "movieDirector": "Milos Forman",
            "actors": [
              "F. Murray Abraham",
              "Tom Hulce",
              "Elizabeth Berridge"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTg5NDkwMTk5N15BMl5BanBnXkFtZTYwODg3MDk2.jpg"
          },
          {
            "plot": "An ingenue insinuates herself in to the company of an established but aging stage actress and her circle of theater friends.",
            "genres": [
              "Drama"
            ],
            "rating": "8.4",
            "title": "All About Eve",
            "url": "http://www.imdb.com/title/tt0042192/?ref_=chttp_tt_91",
            "movieDirector": "Joseph L. Mankiewicz",
            "actors": [
              "Bette Davis",
              "Anne Baxter",
              "George Sanders"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjE4MDg3ODUzMF5BMl5BanBnXkFtZTcwODY1ODg3OA@@.jpg"
          },
          {
            "plot": "King Arthur and his knights embark on a low-budget search for the Grail, encountering many very silly obstacles.",
            "genres": [
              "Adventure",
              "Comedy",
              "Fantasy"
            ],
            "rating": "8.4",
            "title": "Monty Python and the Holy Grail",
            "url": "http://www.imdb.com/title/tt0071853/?ref_=chttp_tt_90",
            "actors": [
              "Graham Chapman",
              "John Cleese",
              "Eric Idle"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTkzODczMTgwM15BMl5BanBnXkFtZTYwNTAwODI5.jpg"
          },
          {
            "plot": "In 1930s Chicago, a young con man seeking revenge for his murdered partner teams up with a master of the big con to win a fortune from a criminal banker.",
            "genres": [
              "Comedy",
              "Crime",
              "Drama"
            ],
            "rating": "8.4",
            "title": "The Sting",
            "url": "http://www.imdb.com/title/tt0070735/?ref_=chttp_tt_89",
            "movieDirector": "George Roy Hill",
            "actors": [
              "Paul Newman",
              "Robert Redford",
              "Robert Shaw"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTY5MjM1OTAyOV5BMl5BanBnXkFtZTgwMDkwODg4MDE@._V1.jpg"
          },
          {
            "plot": "A man and his son search for a stolen bicycle vital for his job.",
            "genres": [
              "Drama"
            ],
            "rating": "8.4",
            "title": "Bicycle Thieves",
            "url": "http://www.imdb.com/title/tt0040522/?ref_=chttp_tt_88",
            "movieDirector": "Vittorio De Sica",
            "actors": [
              "Lamberto Maggiorani",
              "Enzo Staiola",
              "Lianella Carell"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjA5MDY0NzM2M15BMl5BanBnXkFtZTcwNzI2NTA0MQ@@.jpg"
          },
          {
            "plot": "A pragmatic U.S. Marine observes the dehumanizing effects the U.S.-Vietnam War has on his fellow recruits from their brutal boot camp training to the bloody street fighting in Hue.",
            "genres": [
              "Drama",
              "War"
            ],
            "rating": "8.4",
            "title": "Full Metal Jacket",
            "url": "http://www.imdb.com/title/tt0093058/?ref_=chttp_tt_87",
            "movieDirector": "Stanley Kubrick",
            "actors": [
              "Matthew Modine",
              "R. Lee Ermey",
              "Vincent D'Onofrio"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BNDAzMjU3NzE0Nl5BMl5BanBnXkFtZTcwNTk1ODg3OA@@.jpg"
          },
          {
            "plot": "A silent film production company and cast make a difficult transition to sound.",
            "genres": [
              "Comedy",
              "Musical",
              "Romance"
            ],
            "rating": "8.4",
            "title": "Singin' in the Rain",
            "url": "http://www.imdb.com/title/tt0045152/?ref_=chttp_tt_85",
            "actors": [
              "Gene Kelly",
              "Donald O'Connor",
              "Debbie Reynolds"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTUxMTIyNTI4Nl5BMl5BanBnXkFtZTcwNTk1ODQyMg@@.jpg"
          },
          {
            "plot": "Agatha Christie tale of a man on trial for murder: a trial featuring surprise after surprise.",
            "genres": [
              "Crime",
              "Drama",
              "Mystery"
            ],
            "rating": "8.5",
            "title": "Witness for the Prosecution",
            "url": "http://www.imdb.com/title/tt0051201/?ref_=chttp_tt_86",
            "movieDirector": "Billy Wilder",
            "actors": [
              "Tyrone Power",
              "Marlene Dietrich",
              "Charles Laughton"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTc0MjgyNTUyNF5BMl5BanBnXkFtZTcwNDQzMDg0Nw@@.jpg"
          },
          {
            "plot": "In the antebellum United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery.",
            "genres": [
              "Biography",
              "Drama",
              "History"
            ],
            "rating": "8.5",
            "title": "12 Years a Slave",
            "url": "http://www.imdb.com/title/tt2024544/?ref_=chttp_tt_84",
            "movieDirector": "Steve McQueen",
            "actors": [
              "Chiwetel Ejiofor",
              "Michael K. Williams",
              "Michael Fassbender"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjExMTEzODkyN15BMl5BanBnXkFtZTcwNTU4NTc4OQ@@.jpg"
          },
          {
            "plot": "A tragic film covering a young boy and his little sister's struggle to survive in Japan during World War II.",
            "genres": [
              "Animation",
              "Drama",
              "War"
            ],
            "rating": "8.5",
            "title": "Grave of the Fireflies",
            "url": "http://www.imdb.com/title/tt0095327/?ref_=chttp_tt_83",
            "movieDirector": "Isao Takahata",
            "actors": [
              "Tsutomu Tatsumi",
              "Ayano Shiraishi",
              "Akemi Yamaguchi"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjA0MzgwMTU4MV5BMl5BanBnXkFtZTcwODYxNjEzMQ@@.jpg"
          },
          {
            "plot": "A couple undergo a procedure to erase each other from their memories when their relationship turns sour, but it is only through the process of loss that they discover what they had to begin with.",
            "genres": [
              "Drama",
              "Romance",
              "Sci-Fi"
            ],
            "rating": "8.4",
            "title": "Eternal Sunshine of the Spotless Mind",
            "url": "http://www.imdb.com/title/tt0338013/?ref_=chttp_tt_82",
            "movieDirector": "Michel Gondry",
            "actors": [
              "Jim Carrey",
              "Kate Winslet",
              "Tom Wilkinson"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@.jpg"
          },
          {
            "plot": "When his secret bride is executed for assaulting an English soldier who tried to rape her, a commoner begins a revolt and leads Scottish warriors against the cruel English tyrant who rules Scotland with an iron fist.",
            "genres": [
              "Action",
              "Biography",
              "Drama"
            ],
            "rating": "8.4",
            "title": "Braveheart",
            "url": "http://www.imdb.com/title/tt0112573/?ref_=chttp_tt_81",
            "movieDirector": "Mel Gibson",
            "actors": [
              "Mel Gibson",
              "Sophie Marceau",
              "Patrick McGoohan"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BNjA4ODYxMDU3Nl5BMl5BanBnXkFtZTcwMzkzMTk3OA@@.jpg"
          },
          {
            "plot": "After rescuing Han Solo from the palace of Jabba the Hutt, the Rebels attempt to destroy the Second Death Star, while Luke Skywalker tries to bring his father back to the Light Side of the Force.",
            "genres": [
              "Action",
              "Adventure",
              "Fantasy"
            ],
            "rating": "8.4",
            "title": "Star Wars: Episode VI - Return of the Jedi",
            "url": "http://www.imdb.com/title/tt0086190/?ref_=chttp_tt_80",
            "movieDirector": "Richard Marquand",
            "actors": [
              "Mark Hamill",
              "Harrison Ford",
              "Carrie Fisher"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjE5MTM3ODU5MV5BMl5BanBnXkFtZTcwOTYzNjk2OQ@@.jpg"
          },
          {
            "plot": "A flamboyant and controversial British military figure and his conflicted loyalties during his World War I service in the Middle East.",
            "genres": [
              "Adventure",
              "Biography",
              "Drama"
            ],
            "rating": "8.4",
            "title": "Lawrence of Arabia",
            "url": "http://www.imdb.com/title/tt0056172/?ref_=chttp_tt_79",
            "movieDirector": "David Lean",
            "actors": [
              "Peter O'Toole",
              "Alec Guinness",
              "Anthony Quinn"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMzAwMjM4NzA2OV5BMl5BanBnXkFtZTcwMDI0NzAwMQ@@.jpg"
          },
          {
            "plot": "A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.",
            "genres": [
              "Crime",
              "Drama"
            ],
            "rating": "8.4",
            "title": "Once Upon a Time in America",
            "url": "http://www.imdb.com/title/tt0087843/?ref_=chttp_tt_78",
            "movieDirector": "Sergio Leone",
            "actors": [
              "Robert De Niro",
              "James Woods",
              "Elizabeth McGovern"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BNDMwMDcyODkzOV5BMl5BanBnXkFtZTcwNTQ1Njg3OA@@.jpg"
          },
          {
            "plot": "On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony. In this quest he also meets San, the Mononoke Hime.",
            "genres": [
              "Animation",
              "Adventure",
              "Fantasy"
            ],
            "rating": "8.5",
            "title": "Princess Mononoke",
            "url": "http://www.imdb.com/title/tt0119698/?ref_=chttp_tt_77",
            "movieDirector": "Hayao Miyazaki",
            "actors": [
              "Y\u00f4ji Matsuda",
              "Yuriko Ishida",
              "Y\u00fbko Tanaka"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjgzNTUwODQzN15BMl5BanBnXkFtZTcwMTc4ODE3OQ@@.jpg"
          },
          {
            "plot": "The drug-induced utopias of four Coney Island individuals are shattered when their addictions become stronger.",
            "genres": [
              "Drama"
            ],
            "rating": "8.4",
            "title": "Requiem for a Dream",
            "url": "http://www.imdb.com/title/tt0180093/?ref_=chttp_tt_76",
            "movieDirector": "Darren Aronofsky",
            "actors": [
              "Ellen Burstyn",
              "Jared Leto",
              "Jennifer Connelly"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMzM2OTYwMTY4Nl5BMl5BanBnXkFtZTcwMjU1Njg3OA@@.jpg"
          },
          {
            "plot": "After a simple jewelery heist goes terribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
            "genres": [
              "Crime",
              "Thriller"
            ],
            "rating": "8.4",
            "title": "Reservoir Dogs",
            "url": "http://www.imdb.com/title/tt0105236/?ref_=chttp_tt_75",
            "movieDirector": "Quentin Tarantino",
            "actors": [
              "Harvey Keitel",
              "Tim Roth",
              "Michael Madsen"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTQxMTAwMDQ3Nl5BMl5BanBnXkFtZTcwODMwNTgzMQ@@.jpg"
          },
          {
            "plot": "Atticus Finch, a lawyer in the Depression-era South, defends a black man against an undeserved rape charge, and his kids against prejudice.",
            "genres": [
              "Crime",
              "Drama",
              "Mystery"
            ],
            "rating": "8.4",
            "title": "To Kill a Mockingbird",
            "url": "http://www.imdb.com/title/tt0056592/?ref_=chttp_tt_74",
            "movieDirector": "Robert Mulligan",
            "actors": [
              "Gregory Peck",
              "John Megna",
              "Frank Overton"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjA4MzI1NDY2Nl5BMl5BanBnXkFtZTcwMTcyODc5Mw@@.jpg"
          },
          {
            "plot": "After being kidnapped and imprisoned for 15 years, Oh Dae-Su is released, only to find that he must find his captor in 5 days.",
            "genres": [
              "Drama",
              "Mystery",
              "Thriller"
            ],
            "rating": "8.4",
            "title": "Old Boy - h\u00e4mnden",
            "url": "http://www.imdb.com/title/tt0364569/?ref_=chttp_tt_73",
            "movieDirector": "Chan-wook Park",
            "actors": [
              "Min-sik Choi",
              "Ji-tae Yu",
              "Hye-jeong Kang"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@.jpg"
          },
          {
            "plot": "An insurance rep lets himself be talked into a murder/insurance fraud scheme that arouses an insurance investigator's suspicions.",
            "genres": [
              "Crime",
              "Drama",
              "Film-Noir"
            ],
            "rating": "8.5",
            "title": "Double Indemnity",
            "url": "http://www.imdb.com/title/tt0036775/?ref_=chttp_tt_72",
            "movieDirector": "Billy Wilder",
            "actors": [
              "Fred MacMurray",
              "Barbara Stanwyck",
              "Edward G. Robinson"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTQzOTE4MTIzMV5BMl5BanBnXkFtZTgwODc1NDQ5MDE@.jpg"
          },
          {
            "plot": "In future Britain, charismatic delinquent Alex DeLarge is jailed and volunteers for an experimental aversion therapy developed by the government in an effort to solve society's crime problem - but not all goes according to plan.",
            "genres": [
              "Crime",
              "Drama",
              "Sci-Fi"
            ],
            "rating": "8.4",
            "title": "A Clockwork Orange",
            "url": "http://www.imdb.com/title/tt0066921/?ref_=chttp_tt_71",
            "movieDirector": "Stanley Kubrick",
            "actors": [
              "Malcolm McDowell",
              "Patrick Magee",
              "Michael Bates"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwODM0NzAxMDE@.jpg"
          },
          {
            "plot": "A mentally unstable Vietnam war veteran works as a night-time taxi driver in New York City where the perceived decadence and sleaze feeds his urge for violent action, attempting to save a preadolescent prostitute in the process.",
            "genres": [
              "Crime",
              "Drama"
            ],
            "rating": "8.4",
            "title": "Taxi Driver",
            "url": "http://www.imdb.com/title/tt0075314/?ref_=chttp_tt_70",
            "movieDirector": "Martin Scorsese",
            "actors": [
              "Robert De Niro",
              "Jodie Foster",
              "Cybill Shepherd"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTQ1Nzg3MDQwN15BMl5BanBnXkFtZTcwNDE2NDU2MQ@@.jpg"
          },
          {
            "plot": "The claustrophobic world of a WWII German U-boat; boredom, filth, and sheer terror.",
            "genres": [
              "Action",
              "Adventure",
              "Drama"
            ],
            "rating": "8.5",
            "title": "Das Boot",
            "url": "http://www.imdb.com/title/tt0082096/?ref_=chttp_tt_69",
            "movieDirector": "Wolfgang Petersen",
            "actors": [
              "J\u00fcrgen Prochnow",
              "Herbert Gr\u00f6nemeyer",
              "Klaus Wennemann"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjE5Mzk5OTQ0Nl5BMl5BanBnXkFtZTYwNzUwMTQ5.jpg"
          },
          {
            "plot": "When the police in a German city are unable to catch a child-murderer, other criminals join in the manhunt.",
            "genres": [
              "Crime",
              "Drama",
              "Thriller"
            ],
            "rating": "8.5",
            "title": "M",
            "url": "http://www.imdb.com/title/tt0022100/?ref_=chttp_tt_68",
            "movieDirector": "Fritz Lang",
            "actors": [
              "Peter Lorre",
              "Ellen Widmann",
              "Inge Landgut"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTIwNDU4OTI2MF5BMl5BanBnXkFtZTcwNzI5MjcyMQ@@.jpg"
          },
          {
            "plot": "A retired San Francisco detective suffering from acrophobia investigates the strange activities of an old friend's wife, all the while becoming dangerously obsessed with her.",
            "genres": [
              "Mystery",
              "Romance",
              "Thriller"
            ],
            "rating": "8.5",
            "title": "Vertigo",
            "url": "http://www.imdb.com/title/tt0052357/?ref_=chttp_tt_67",
            "movieDirector": "Alfred Hitchcock",
            "actors": [
              "James Stewart",
              "Kim Novak",
              "Barbara Bel Geddes"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BNzY0NzQyNzQzOF5BMl5BanBnXkFtZTcwMTgwNTk4OQ@@.jpg"
          },
          {
            "plot": "The toys are mistakenly delivered to a day-care center instead of the attic right before Andy leaves for college, and it's up to Woody to convince the other toys that they weren't abandoned and to return home.",
            "genres": [
              "Animation",
              "Adventure",
              "Comedy"
            ],
            "rating": "8.5",
            "title": "Toy Story 3",
            "url": "http://www.imdb.com/title/tt0435761/?ref_=chttp_tt_66",
            "movieDirector": "Lee Unkrich",
            "actors": [
              "Tom Hanks",
              "Tim Allen",
              "Joan Cusack"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@.jpg"
          },
          {
            "plot": "The planet from",
            "genres": [
              "Action",
              "Adventure",
              "Sci-Fi"
            ],
            "rating": "8.5",
            "title": "Aliens",
            "url": "http://www.imdb.com/title/tt0090605/?ref_=chttp_tt_65",
            "movieDirector": "James Cameron",
            "actors": [
              "Sigourney Weaver",
              "Michael Biehn",
              "Carrie Henn"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTYzNzU5MzQ4OV5BMl5BanBnXkFtZTcwMDcxNDg3OA@@.jpg"
          },
          {
            "plot": "Following the death of a publishing tycoon, news reporters scramble to discover the meaning of his final utterance.",
            "genres": [
              "Drama",
              "Mystery"
            ],
            "rating": "8.5",
            "title": "Citizen Kane",
            "url": "http://www.imdb.com/title/tt0033467/?ref_=chttp_tt_64",
            "movieDirector": "Orson Welles",
            "actors": [
              "Orson Welles",
              "Joseph Cotten",
              "Dorothy Comingore"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTQ2Mjc1MDQwMl5BMl5BanBnXkFtZTcwNzUyOTUyMg@@.jpg"
          },
          {
            "plot": "Tricked into thinking he killed his father, a guilt ridden lion cub flees into exile and abandons his identity as the future King.",
            "genres": [
              "Animation",
              "Adventure",
              "Drama"
            ],
            "rating": "8.5",
            "title": "The Lion King",
            "url": "http://www.imdb.com/title/tt0110357/?ref_=chttp_tt_63",
            "actors": [
              "Matthew Broderick",
              "Jeremy Irons",
              "James Earl Jones"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjEyMzgwNTUzMl5BMl5BanBnXkFtZTcwNTMxMzM3Ng@@.jpg"
          },
          {
            "plot": "Amelie, an innocent and naive girl in Paris, with her own sense of justice, decides to help those around her and along the way, discovers love.",
            "genres": [
              "Comedy",
              "Romance"
            ],
            "rating": "8.5",
            "title": "Am\u00e9lie",
            "url": "http://www.imdb.com/title/tt0211915/?ref_=chttp_tt_62",
            "movieDirector": "Jean-Pierre Jeunet",
            "actors": [
              "Audrey Tautou",
              "Mathieu Kassovitz",
              "Rufus"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTUwNzkwMTk5Nl5BMl5BanBnXkFtZTYwMDAzMDI5.jpg"
          },
          {
            "plot": "In the distant future, a small waste collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",
            "genres": [
              "Animation",
              "Adventure",
              "Family"
            ],
            "rating": "8.5",
            "title": "WALL\u00b7E",
            "url": "http://www.imdb.com/title/tt0910970/?ref_=chttp_tt_61",
            "movieDirector": "Andrew Stanton",
            "actors": [
              "Ben Burtt",
              "Elissa Knight",
              "Jeff Garlin"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTczOTA3MzY2N15BMl5BanBnXkFtZTcwOTYwNjE2MQ@@.jpg"
          },
          {
            "plot": "When soldiers in World War I refuse to continue with an impossible attack, their superior officers decide to make an example of them.",
            "genres": [
              "Drama",
              "War"
            ],
            "rating": "8.5",
            "title": "Paths of Glory",
            "url": "http://www.imdb.com/title/tt0050825/?ref_=chttp_tt_60",
            "movieDirector": "Stanley Kubrick",
            "actors": [
              "Kirk Douglas",
              "Ralph Meeker",
              "Adolphe Menjou"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTUxNTcxMjI5NV5BMl5BanBnXkFtZTcwNTcyNjI3Mw@@.jpg"
          },
          {
            "plot": "A hapless New York advertising executive is mistaken for a government agent by a group of foreign spies, and is pursued across the country while he looks for a way to survive.",
            "genres": [
              "Action",
              "Adventure",
              "Crime"
            ],
            "rating": "8.5",
            "title": "North by Northwest",
            "url": "http://www.imdb.com/title/tt0053125/?ref_=chttp_tt_59",
            "movieDirector": "Alfred Hitchcock",
            "actors": [
              "Cary Grant",
              "Eva Marie Saint",
              "James Mason"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTc1MjczNTgxM15BMl5BanBnXkFtZTcwOTYwNDg3OA@@.jpg"
          },
          {
            "plot": "Lester Burnham, a depressed suburban father in a mid-life crisis, decides to turn his hectic life around after developing an infatuation for his daughter's attractive friend.",
            "genres": [
              "Drama"
            ],
            "rating": "8.5",
            "title": "American Beauty",
            "url": "http://www.imdb.com/title/tt0169547/?ref_=chttp_tt_58",
            "movieDirector": "Sam Mendes",
            "actors": [
              "Kevin Spacey",
              "Annette Bening",
              "Thora Birch"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BOTU1MzExMDg3N15BMl5BanBnXkFtZTcwODExNDg3OA@@.jpg"
          },
          {
            "plot": "A filmmaker recalls his childhood, when he fell in love with the movies at his village's theater and formed a deep friendship with the theater's projectionist.",
            "genres": [
              "Drama"
            ],
            "rating": "8.5",
            "title": "Cinema Paradiso",
            "url": "http://www.imdb.com/title/tt0095765/?ref_=chttp_tt_57",
            "movieDirector": "Giuseppe Tornatore",
            "actors": [
              "Philippe Noiret",
              "Enzo Cannavale",
              "Antonella Attili"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BNDMwNDk3NDQ0Nl5BMl5BanBnXkFtZTcwNjEwMjI2MQ@@.jpg"
          },
          {
            "plot": "A family heads to an isolated hotel for the winter where an evil and spiritual presence influences the father into violence, while his psychic son sees horrific forebodings from the past and of the future.",
            "genres": [
              "Horror",
              "Mystery"
            ],
            "rating": "8.5",
            "title": "The Shining",
            "url": "http://www.imdb.com/title/tt0081505/?ref_=chttp_tt_56",
            "movieDirector": "Stanley Kubrick",
            "actors": [
              "Jack Nicholson",
              "Shelley Duvall",
              "Danny Lloyd"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BODMxMjE3NTA4Ml5BMl5BanBnXkFtZTgwNDc0NTIxMDE@.jpg"
          },
          {
            "plot": "Dictator Adenoid Hynkel tries to expand his empire while a poor Jewish barber tries to avoid persecution from Hynkel's regime.",
            "genres": [
              "Comedy",
              "Drama",
              "War"
            ],
            "rating": "8.5",
            "title": "The Great Dictator",
            "url": "http://www.imdb.com/title/tt0032553/?ref_=chttp_tt_55",
            "movieDirector": "Charles Chaplin",
            "actors": [
              "Charles Chaplin",
              "Paulette Goddard",
              "Jack Oakie"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTQyNTgyNTQ3N15BMl5BanBnXkFtZTcwMzgyMDYyMQ@@.jpg"
          },
          {
            "plot": "The rivalry between two magicians becomes more exacerbated by their attempt to perform the ultimate illusion.",
            "genres": [
              "Drama",
              "Mystery",
              "Thriller"
            ],
            "rating": "8.5",
            "title": "The Prestige",
            "url": "http://www.imdb.com/title/tt0482571/?ref_=chttp_tt_54",
            "movieDirector": "Christopher Nolan",
            "actors": [
              "Christian Bale",
              "Hugh Jackman",
              "Scarlett Johansson"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2.jpg"
          },
          {
            "plot": "In 1984 East Berlin, an agent of the secret police, conducting surveillance on a writer and his lover, finds himself becoming increasingly absorbed by their lives.",
            "genres": [
              "Drama",
              "Thriller"
            ],
            "rating": "8.5",
            "title": "The Lives of Others",
            "url": "http://www.imdb.com/title/tt0405094/?ref_=chttp_tt_53",
            "movieDirector": "Florian Henckel von Donnersmarck",
            "actors": [
              "Ulrich M\u00fche",
              "Martina Gedeck",
              "Sebastian Koch"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BNDUzNjYwNDYyNl5BMl5BanBnXkFtZTcwNjU3ODQ0MQ@@.jpg"
          },
          {
            "plot": "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
            "genres": [
              "Adventure",
              "Drama",
              "Western"
            ],
            "rating": "8.5",
            "title": "Django Unchained",
            "url": "http://www.imdb.com/title/tt1853728/?ref_=chttp_tt_52",
            "movieDirector": "Quentin Tarantino",
            "actors": [
              "Jamie Foxx",
              "Christoph Waltz",
              "Leonardo DiCaprio"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@.jpg"
          },
          {
            "plot": "The commercial vessel Nostromo receives a distress call from an unexplored planet. After searching for survivors, the crew heads home only to realize that a deadly bioform has joined them.",
            "genres": [
              "Horror",
              "Sci-Fi"
            ],
            "rating": "8.5",
            "title": "Alien",
            "url": "http://www.imdb.com/title/tt0078748/?ref_=chttp_tt_51",
            "movieDirector": "Ridley Scott",
            "actors": [
              "Sigourney Weaver",
              "Tom Skerritt",
              "John Hurt"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTk3NzkwMjA3OV5BMl5BanBnXkFtZTYwMTIwOTk2.jpg"
          },
          {
            "plot": "Based on the true story of Jordan Belfort, from his rise to a wealthy stockbroker living the high life to his fall involving crime, corruption and the federal government.",
            "genres": [
              "Biography",
              "Comedy",
              "Crime"
            ],
            "rating": "8.6",
            "title": "The Wolf of Wall Street",
            "url": "http://www.imdb.com/title/tt0993846/?ref_=chttp_tt_50",
            "movieDirector": "Martin Scorsese",
            "actors": [
              "Leonardo DiCaprio",
              "Jonah Hill",
              "Margot Robbie"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@.jpg"
          },
          {
            "plot": "A teenager is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his friend, Dr. Emmett Brown, and must make sure his high-school-age parents unite in order to save his own existence.",
            "genres": [
              "Adventure",
              "Comedy",
              "Sci-Fi"
            ],
            "rating": "8.5",
            "title": "Back to the Future",
            "url": "http://www.imdb.com/title/tt0088763/?ref_=chttp_tt_49",
            "movieDirector": "Robert Zemeckis",
            "actors": [
              "Michael J. Fox",
              "Christopher Lloyd",
              "Lea Thompson"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTk4OTQ1OTMwN15BMl5BanBnXkFtZTcwOTIwMzM3MQ@@.jpg"
          },
          {
            "plot": "When a Roman general is betrayed and his family murdered by an emperor's corrupt son, he comes to Rome as a gladiator to seek revenge.",
            "genres": [
              "Action",
              "Adventure",
              "Drama"
            ],
            "rating": "8.5",
            "title": "Gladiator",
            "url": "http://www.imdb.com/title/tt0172495/?ref_=chttp_tt_48",
            "movieDirector": "Ridley Scott",
            "actors": [
              "Russell Crowe",
              "Joaquin Phoenix",
              "Connie Nielsen"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BNTQ2NzI0ODc5MV5BMl5BanBnXkFtZTcwMTA0MTk3OA@@.jpg"
          },
          {
            "plot": "Eight years on, a new evil rises from where the Batman and Commissioner Gordon tried to bury it, causing the Batman to resurface and fight to protect Gotham City... the very city which brands him an enemy.",
            "genres": [
              "Action",
              "Crime",
              "Thriller"
            ],
            "rating": "8.6",
            "title": "The Dark Knight Rises",
            "url": "http://www.imdb.com/title/tt1345836/?ref_=chttp_tt_47",
            "movieDirector": "Christopher Nolan",
            "actors": [
              "Christian Bale",
              "Tom Hardy",
              "Anne Hathaway"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@.jpg"
          },
          {
            "plot": "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
            "genres": [
              "Crime",
              "Drama",
              "Fantasy"
            ],
            "rating": "8.5",
            "title": "The Green Mile",
            "url": "http://www.imdb.com/title/tt0120689/?ref_=chttp_tt_46",
            "movieDirector": "Frank Darabont",
            "actors": [
              "Tom Hanks",
              "Michael Clarke Duncan",
              "David Morse"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3.jpg"
          },
          {
            "plot": "An undercover state cop who has infiltrated an Irish gang and a mole in the police force working for the same mob race to track down and identify each other before being exposed to the enemy, after both sides realize their outfit has a rat.",
            "genres": [
              "Crime",
              "Drama",
              "Thriller"
            ],
            "rating": "8.5",
            "title": "The Departed",
            "url": "http://www.imdb.com/title/tt0407887/?ref_=chttp_tt_45",
            "movieDirector": "Martin Scorsese",
            "actors": [
              "Leonardo DiCaprio",
              "Matt Damon",
              "Jack Nicholson"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3.jpg"
          },
          {
            "plot": "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
            "genres": [
              "Biography",
              "Drama",
              "War"
            ],
            "rating": "8.5",
            "title": "The Pianist",
            "url": "http://www.imdb.com/title/tt0253474/?ref_=chttp_tt_44",
            "movieDirector": "Roman Polanski",
            "actors": [
              "Adrien Brody",
              "Thomas Kretschmann",
              "Frank Finlay"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTc4OTkyOTA3OF5BMl5BanBnXkFtZTYwMDIxNjk5.jpg"
          },
          {
            "plot": "During the U.S.-Viet Nam War, Captain Willard is sent on a dangerous mission into Cambodia to assassinate a renegade colonel who has set himself up as a god among a local tribe.",
            "genres": [
              "Drama",
              "War"
            ],
            "rating": "8.5",
            "title": "Apocalypse Now",
            "url": "http://www.imdb.com/title/tt0078788/?ref_=chttp_tt_43",
            "movieDirector": "Francis Ford Coppola",
            "actors": [
              "Martin Sheen",
              "Marlon Brando",
              "Robert Duvall"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTcyMzQ5NDM4OV5BMl5BanBnXkFtZTcwODUwNDg3OA@@.jpg"
          },
          {
            "plot": "An insane general triggers a path to nuclear holocaust that a war room full of politicians and generals frantically try to stop.",
            "genres": [
              "Comedy",
              "Sci-Fi",
              "War"
            ],
            "rating": "8.6",
            "title": "Dr. Strangelove: How I Learned to Stop Worrying and Love the Bomb",
            "url": "http://www.imdb.com/title/tt0057012/?ref_=chttp_tt_42",
            "movieDirector": "Stanley Kubrick",
            "actors": [
              "Peter Sellers",
              "George C. Scott",
              "Sterling Hayden"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTU2ODM2NTkxNF5BMl5BanBnXkFtZTcwOTMwMzU3Mg@@.jpg"
          },
          {
            "plot": "The Tramp struggles to live in modern industrial society with the help of a young homeless woman.",
            "genres": [
              "Comedy",
              "Drama"
            ],
            "rating": "8.6",
            "title": "Modern Times",
            "url": "http://www.imdb.com/title/tt0027977/?ref_=chttp_tt_41",
            "movieDirector": "Charles Chaplin",
            "actors": [
              "Charles Chaplin",
              "Paulette Goddard",
              "Henry Bergman"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjMwMDA5NzEwOF5BMl5BanBnXkFtZTcwMzgwNDg3OA@@.jpg"
          },
          {
            "plot": "A hack screenwriter writes a screenplay for a former silent-film star who has faded into Hollywood obscurity.",
            "genres": [
              "Drama",
              "Film-Noir"
            ],
            "rating": "8.6",
            "title": "Sunset Blvd.",
            "url": "http://www.imdb.com/title/tt0043014/?ref_=chttp_tt_40",
            "movieDirector": "Billy Wilder",
            "actors": [
              "William Holden",
              "Gloria Swanson",
              "Erich von Stroheim"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTk2OTQ5NDA4MV5BMl5BanBnXkFtZTcwNDIyNzE3OQ@@.jpg"
          },
          {
            "plot": "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her teenage son, John, from a more advanced cyborg, made out of liquid metal.",
            "genres": [
              "Action",
              "Sci-Fi",
              "Thriller"
            ],
            "rating": "8.5",
            "title": "Terminator 2: Judgment Day",
            "url": "http://www.imdb.com/title/tt0103064/?ref_=chttp_tt_39",
            "movieDirector": "James Cameron",
            "actors": [
              "Arnold Schwarzenegger",
              "Linda Hamilton",
              "Edward Furlong"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTg5NzUwMDU5NF5BMl5BanBnXkFtZTcwMjk2MDA4Mg@@.jpg"
          },
          {
            "plot": "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caretaker.",
            "genres": [
              "Biography",
              "Comedy",
              "Drama"
            ],
            "rating": "8.6",
            "title": "The Intouchables",
            "url": "http://www.imdb.com/title/tt1675434/?ref_=chttp_tt_38",
            "actors": [
              "Fran\u00e7ois Cluzet",
              "Omar Sy",
              "Anne Le Ny"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@.jpg"
          },
          {
            "plot": "A man, suffering from short-term memory loss, uses notes and tattoos to hunt for the man he thinks killed his wife.",
            "genres": [
              "Mystery",
              "Thriller"
            ],
            "rating": "8.6",
            "title": "Memento",
            "url": "http://www.imdb.com/title/tt0209144/?ref_=chttp_tt_37",
            "movieDirector": "Christopher Nolan",
            "actors": [
              "Guy Pearce",
              "Carrie-Anne Moss",
              "Joe Pantoliano"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTc4MjUxNDAwN15BMl5BanBnXkFtZTcwMDMwNDg3OA@@.jpg"
          },
          {
            "plot": "In the middle of her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and monsters; where humans are changed into animals; and a bathhouse for these creatures.",
            "genres": [
              "Animation",
              "Adventure",
              "Family"
            ],
            "rating": "8.6",
            "title": "Spirited Away",
            "url": "http://www.imdb.com/title/tt0245429/?ref_=chttp_tt_36",
            "movieDirector": "Hayao Miyazaki",
            "actors": [
              "Daveigh Chase",
              "Suzanne Pleshette",
              "Miyu Irino"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjYxMDcyMzIzNl5BMl5BanBnXkFtZTYwNDg2MDU3.jpg"
          },
          {
            "plot": "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
            "genres": [
              "Action",
              "Drama",
              "War"
            ],
            "rating": "8.6",
            "title": "Saving Private Ryan",
            "url": "http://www.imdb.com/title/tt0120815/?ref_=chttp_tt_35",
            "movieDirector": "Steven Spielberg",
            "actors": [
              "Tom Hanks",
              "Matt Damon",
              "Tom Sizemore"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BNjczODkxNTAxN15BMl5BanBnXkFtZTcwMTcwNjUxMw@@.jpg"
          },
          {
            "plot": "An angel helps a compassionate but despairingly frustrated businessman by showing what life would have been like if he never existed.",
            "genres": [
              "Drama",
              "Family",
              "Fantasy"
            ],
            "rating": "8.7",
            "title": "It's a Wonderful Life",
            "url": "http://www.imdb.com/title/tt0038650/?ref_=chttp_tt_26",
            "movieDirector": "Frank Capra",
            "actors": [
              "James Stewart",
              "Donna Reed",
              "Lionel Barrymore"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTMzMzY5NDc4M15BMl5BanBnXkFtZTcwMzc4NjIxNw@@.jpg"
          },
          {
            "plot": "A young F.B.I. cadet must confide in an incarcerated and manipulative killer to receive his help on catching another serial killer who skins his victims.",
            "genres": [
              "Crime",
              "Drama",
              "Thriller"
            ],
            "rating": "8.6",
            "title": "The Silence of the Lambs",
            "url": "http://www.imdb.com/title/tt0102926/?ref_=chttp_tt_25",
            "movieDirector": "Jonathan Demme",
            "actors": [
              "Jodie Foster",
              "Anthony Hopkins",
              "Lawrence A. Bonney"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTQ2NzkzMDI4OF5BMl5BanBnXkFtZTcwMDA0NzE1NA@@.jpg"
          },
          {
            "plot": "Epic story of a mysterious stranger with a harmonica who joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad.",
            "genres": [
              "Adventure",
              "Western"
            ],
            "rating": "8.7",
            "title": "Once Upon a Time in the West",
            "url": "http://www.imdb.com/title/tt0064116/?ref_=chttp_tt_24",
            "movieDirector": "Sergio Leone",
            "actors": [
              "Henry Fonda",
              "Charles Bronson",
              "Claudia Cardinale"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTgwMzU1MDEyMl5BMl5BanBnXkFtZTcwNDc5Mzg3OA@@.jpg"
          },
          {
            "plot": "A boat has been destroyed, criminals are dead, and the key to this mystery lies with the only survivor and his twisted, convoluted story beginning with five career crooks in a seemingly random police lineup.",
            "genres": [
              "Crime",
              "Mystery",
              "Thriller"
            ],
            "rating": "8.7",
            "title": "The Usual Suspects",
            "url": "http://www.imdb.com/title/tt0114814/?ref_=chttp_tt_23",
            "movieDirector": "Bryan Singer",
            "actors": [
              "Kevin Spacey",
              "Gabriel Byrne",
              "Chazz Palminteri"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMzI1MjI5MDQyOV5BMl5BanBnXkFtZTcwNzE4Mjg3NA@@.jpg"
          },
          {
            "plot": "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his modus operandi.",
            "genres": [
              "Crime",
              "Mystery",
              "Thriller"
            ],
            "rating": "8.7",
            "title": "Se7en",
            "url": "http://www.imdb.com/title/tt0114369/?ref_=chttp_tt_22",
            "movieDirector": "David Fincher",
            "actors": [
              "Morgan Freeman",
              "Brad Pitt",
              "Kevin Spacey"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTQwNTU3MTE4NF5BMl5BanBnXkFtZTcwOTgxNDM2Mg@@.jpg"
          },
          {
            "plot": "Two boys growing up in a violent neighborhood of Rio de Janeiro take different paths: one becomes a photographer, the other a drug dealer.",
            "genres": [
              "Crime",
              "Drama"
            ],
            "rating": "8.7",
            "title": "City of God",
            "url": "http://www.imdb.com/title/tt0317248/?ref_=chttp_tt_21",
            "actors": [
              "Alexandre Rodrigues",
              "Matheus Nachtergaele",
              "Leandro Firmino"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjA4ODQ3ODkzNV5BMl5BanBnXkFtZTYwOTc4NDI3.jpg"
          },
          {
            "plot": "A poor village under attack by bandits recruits seven unemployed samurai to help them defend themselves.",
            "genres": [
              "Action",
              "Drama"
            ],
            "rating": "8.8",
            "title": "Seven Samurai",
            "url": "http://www.imdb.com/title/tt0047478/?ref_=chttp_tt_20",
            "movieDirector": "Akira Kurosawa",
            "actors": [
              "Toshir\u00f4 Mifune",
              "Takashi Shimura",
              "Keiko Tsushima"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BNzg5Mzk5Nzc0NF5BMl5BanBnXkFtZTcwNjg3MDQzMQ@@.jpg"
          },
          {
            "plot": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
            "genres": [
              "Action",
              "Adventure",
              "Sci-Fi"
            ],
            "rating": "8.7",
            "title": "The Matrix",
            "url": "http://www.imdb.com/title/tt0133093/?ref_=chttp_tt_19",
            "actors": [
              "Keanu Reeves",
              "Laurence Fishburne",
              "Carrie-Anne Moss"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjEzNjg1NTg2NV5BMl5BanBnXkFtZTYwNjY3MzQ5.jpg"
          },
          {
            "plot": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the universe from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.",
            "genres": [
              "Action",
              "Adventure",
              "Fantasy"
            ],
            "rating": "8.8",
            "title": "Star Wars: Episode IV - A New Hope",
            "url": "http://www.imdb.com/title/tt0076759/?ref_=chttp_tt_18",
            "movieDirector": "George Lucas",
            "actors": [
              "Mark Hamill",
              "Harrison Ford",
              "Carrie Fisher"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTU4NTczODkwM15BMl5BanBnXkFtZTcwMzEyMTIyMw@@.jpg"
          },
          {
            "plot": "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
            "genres": [
              "Action",
              "Adventure",
              "Fantasy"
            ],
            "rating": "8.8",
            "title": "The Lord of the Rings: The Two Towers",
            "url": "http://www.imdb.com/title/tt0167261/?ref_=chttp_tt_17",
            "movieDirector": "Peter Jackson",
            "actors": [
              "Elijah Wood",
              "Ian McKellen",
              "Viggo Mortensen"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTAyNDU0NjY4NTheQTJeQWpwZ15BbWU2MDk4MTY2Nw@@.jpg"
          },
          {
            "plot": "Henry Hill and his friends work their way up through the mob hierarchy.",
            "genres": [
              "Biography",
              "Crime",
              "Drama"
            ],
            "rating": "8.8",
            "title": "Goodfellas",
            "url": "http://www.imdb.com/title/tt0099685/?ref_=chttp_tt_16",
            "movieDirector": "Martin Scorsese",
            "actors": [
              "Robert De Niro",
              "Ray Liotta",
              "Joe Pesci"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjU3MTQ4OTA0MV5BMl5BanBnXkFtZTYwNjAyMDg4.jpg"
          },
          {
            "plot": "Forrest Gump, while not intelligent, has accidentally been present at many historic moments, but his true love, Jenny Curran, eludes him.",
            "genres": [
              "Drama",
              "Romance"
            ],
            "rating": "8.8",
            "title": "Forrest Gump",
            "url": "http://www.imdb.com/title/tt0109830/?ref_=chttp_tt_15",
            "movieDirector": "Robert Zemeckis",
            "actors": [
              "Tom Hanks",
              "Robin Wright",
              "Gary Sinise"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTQwMTA5MzI1MF5BMl5BanBnXkFtZTcwMzY5Mzg3OA@@.jpg"
          },
          {
            "plot": "Upon admittance to a mental institution, a brash rebel rallies the patients to take on the oppressive head nurse.",
            "genres": [
              "Drama"
            ],
            "rating": "8.8",
            "title": "One Flew Over the Cuckoo's Nest",
            "url": "http://www.imdb.com/title/tt0073486/?ref_=chttp_tt_14",
            "movieDirector": "Milos Forman",
            "actors": [
              "Jack Nicholson",
              "Louise Fletcher",
              "Michael Berryman"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTk5OTA4NTc0NF5BMl5BanBnXkFtZTcwNzI5Mzg3OA@@.jpg"
          },
          {
            "plot": "A skilled extractor is offered a chance to regain his old life as payment for a task considered to be impossible.",
            "genres": [
              "Action",
              "Adventure",
              "Mystery"
            ],
            "rating": "8.8",
            "title": "Inception",
            "url": "http://www.imdb.com/title/tt1375666/?ref_=chttp_tt_13",
            "movieDirector": "Christopher Nolan",
            "actors": [
              "Leonardo DiCaprio",
              "Joseph Gordon-Levitt",
              "Ellen Page"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@.jpg"
          },
          {
            "plot": "After the rebels have been brutally overpowered by the Empire on their newly established base, Luke Skywalker takes advanced Jedi training with Master Yoda, while his friends are pursued by Darth Vader as part of his plan to capture Luke.",
            "genres": [
              "Action",
              "Adventure",
              "Sci-Fi"
            ],
            "rating": "8.8",
            "title": "Star Wars: Episode V - The Empire Strikes Back",
            "url": "http://www.imdb.com/title/tt0080684/?ref_=chttp_tt_12",
            "movieDirector": "Irvin Kershner",
            "actors": [
              "Mark Hamill",
              "Harrison Ford",
              "Carrie Fisher"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjE2MzQwMTgxN15BMl5BanBnXkFtZTcwMDQzNjk2OQ@@.jpg"
          },
          {
            "plot": "A meek hobbit of The Shire and eight companions set out on a journey to Mount Doom to destroy the One Ring and the dark lord Sauron.",
            "genres": [
              "Action",
              "Adventure",
              "Fantasy"
            ],
            "rating": "8.9",
            "title": "The Lord of the Rings: The Fellowship of the Ring",
            "url": "http://www.imdb.com/title/tt0120737/?ref_=chttp_tt_11",
            "movieDirector": "Peter Jackson",
            "actors": [
              "Elijah Wood",
              "Ian McKellen",
              "Orlando Bloom"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BNTEyMjAwMDU1OV5BMl5BanBnXkFtZTcwNDQyNTkxMw@@.jpg"
          },
          {
            "plot": "An insomniac office worker looking for a way to change his life crosses paths with a devil-may-care soap maker and they form an underground fight club that evolves into something much, much more...",
            "genres": [
              "Drama"
            ],
            "rating": "8.9",
            "title": "Fight Club",
            "url": "http://www.imdb.com/title/tt0137523/?ref_=chttp_tt_10",
            "movieDirector": "David Fincher",
            "actors": [
              "Brad Pitt",
              "Edward Norton",
              "Helena Bonham Carter"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjIwNTYzMzE1M15BMl5BanBnXkFtZTcwOTE5Mzg3OA@@.jpg"
          },
          {
            "plot": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
            "genres": [
              "Action",
              "Adventure",
              "Fantasy"
            ],
            "rating": "8.9",
            "title": "The Lord of the Rings: The Return of the King",
            "url": "http://www.imdb.com/title/tt0167260/?ref_=chttp_tt_9",
            "movieDirector": "Peter Jackson",
            "actors": [
              "Elijah Wood",
              "Viggo Mortensen",
              "Ian McKellen"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjE4MjA1NTAyMV5BMl5BanBnXkFtZTcwNzM1NDQyMQ@@.jpg"
          },
          {
            "plot": "A dissenting juror in a murder trial slowly manages to convince the others that the case is not as obviously clear as it seemed in court.",
            "genres": [
              "Drama"
            ],
            "rating": "8.9",
            "title": "12 Angry Men",
            "url": "http://www.imdb.com/title/tt0050083/?ref_=chttp_tt_8",
            "movieDirector": "Sidney Lumet",
            "actors": [
              "Henry Fonda",
              "Lee J. Cobb",
              "Martin Balsam"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BODQwOTc5MDM2N15BMl5BanBnXkFtZTcwODQxNTEzNA@@.jpg"
          },
          {
            "plot": "In Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
            "genres": [
              "Biography",
              "Drama",
              "History"
            ],
            "rating": "8.9",
            "title": "Schindler's List",
            "url": "http://www.imdb.com/title/tt0108052/?ref_=chttp_tt_7",
            "movieDirector": "Steven Spielberg",
            "actors": [
              "Liam Neeson",
              "Ralph Fiennes",
              "Ben Kingsley"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMzMwMTM4MDU2N15BMl5BanBnXkFtZTgwMzQ0MjMxMDE@.jpg"
          },
          {
            "plot": "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
            "genres": [
              "Adventure",
              "Western"
            ],
            "rating": "9.0",
            "title": "The Good, the Bad and the Ugly",
            "url": "http://www.imdb.com/title/tt0060196/?ref_=chttp_tt_6",
            "movieDirector": "Sergio Leone",
            "actors": [
              "Clint Eastwood",
              "Eli Wallach",
              "Lee Van Cleef"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@.jpg"
          },
          {
            "plot": "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
            "genres": [
              "Crime",
              "Drama",
              "Thriller"
            ],
            "rating": "9.0",
            "title": "Pulp Fiction",
            "url": "http://www.imdb.com/title/tt0110912/?ref_=chttp_tt_5",
            "movieDirector": "Quentin Tarantino",
            "actors": [
              "John Travolta",
              "Uma Thurman",
              "Samuel L. Jackson"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjE0ODk2NjczOV5BMl5BanBnXkFtZTYwNDQ0NDg4.jpg"
          },
          {
            "plot": "When Batman, Gordon and Harvey Dent launch an assault on the mob, they let the clown out of the box, the Joker, bent on turning Gotham on itself and bringing any heroes down to his level.",
            "genres": [
              "Action",
              "Crime",
              "Drama"
            ],
            "rating": "9.0",
            "title": "The Dark Knight",
            "url": "http://www.imdb.com/title/tt0468569/?ref_=chttp_tt_4",
            "movieDirector": "Christopher Nolan",
            "actors": [
              "Christian Bale",
              "Heath Ledger",
              "Aaron Eckhart"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@.jpg"
          },
          {
            "plot": "The early life and career of Vito Corleone in 1920s New York is portrayed while his son, Michael, expands and tightens his grip on his crime syndicate stretching from Lake Tahoe, Nevada to pre-revolution 1958 Cuba.",
            "genres": [
              "Crime",
              "Drama"
            ],
            "rating": "9.1",
            "title": "The Godfather: Part II",
            "url": "http://www.imdb.com/title/tt0071562/?ref_=chttp_tt_3",
            "movieDirector": "Francis Ford Coppola",
            "actors": [
              "Al Pacino",
              "Robert De Niro",
              "Robert Duvall"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BNDc2NTM3MzU1Nl5BMl5BanBnXkFtZTcwMTA5Mzg3OA@@.jpg"
          },
          {
            "plot": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
            "genres": [
              "Crime",
              "Drama"
            ],
            "rating": "9.2",
            "title": "The Godfather",
            "url": "http://www.imdb.com/title/tt0068646/?ref_=chttp_tt_2",
            "movieDirector": "Francis Ford Coppola",
            "actors": [
              "Marlon Brando",
              "Al Pacino",
              "James Caan"
            ],
            "poster_url": "http://ia.media-imdb.com/images/M/MV5BMjEyMjcyNDI4MF5BMl5BanBnXkFtZTcwMDA5Mzg3OA@@.jpg"
        }
      ];
      return movies;
    });

})();

