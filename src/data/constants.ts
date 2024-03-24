import {GenreItemType, TMDBMovieType, TMDBSerieType} from 'types';

export const GENRES: GenreItemType[] = [
  {genre: 'Action', emoji: '🎬'},
  {genre: 'Aventure', emoji: '🌍'},
  {genre: 'Comédie', emoji: '😂'},
  {genre: 'Drame', emoji: '🎭'},
  {genre: 'Horreur', emoji: '👻'},
  {genre: 'Science-fiction', emoji: '🚀'},
  {genre: 'Fantastique', emoji: '🧙‍♂️'},
  {genre: 'Thriller', emoji: '🔪'},
  {genre: 'Animation', emoji: '🎥'},
  {genre: 'Documentaire', emoji: '📹'},
  {genre: 'Biographie', emoji: '👤'},
  {genre: 'Romance', emoji: '💖'},
  {genre: 'Crime', emoji: '🔫'},
  {genre: 'Mystère', emoji: '🔍'},
  {genre: 'Fantasy', emoji: '🧝‍♂️'},
  {genre: 'Western', emoji: '🤠'},
  {genre: 'Musical', emoji: '🎵'},
  {genre: 'Guerre', emoji: '⚔️'},
  {genre: 'Historique', emoji: '🏰'},
  {genre: 'Sport', emoji: '🏀'},
  {genre: 'Famille', emoji: '👨‍👩‍👧‍👦'},
  {genre: 'Noir', emoji: '🕵️‍♂️'},
  {genre: 'Expérimental', emoji: '🧪'},
  {genre: 'Épouvante', emoji: '😱'},
  {genre: 'Policier', emoji: '👮‍♂️'},
  {genre: 'Super-héros', emoji: '🦸‍♂️'},
  {genre: 'Comédie romantique', emoji: '💑'},
  {genre: 'Comédie musicale', emoji: '🎶'},
];

export const MOVIES: TMDBMovieType[] = [
  {
    adult: false,
    backdrop_path: '/1XDDXPXGiI8id7MrUxK36ke7gkX.jpg',
    genre_ids: [28, 12, 16, 35, 10751],
    id: 1011985,
    original_language: 'en',
    original_title: 'Kung Fu Panda 4',
    overview:
      'Po is gearing up to become the spiritual leader of his Valley of Peace, but also needs someone to take his place as Dragon Warrior. As such, he will train a new kung fu practitioner for the spot and will encounter a villain called the Chameleon who conjures villains from the past.',
    popularity: 4814.65,
    poster_path: '/wkfG7DaExmcVsGLR4kLouMwxeT5.jpg',
    release_date: '2024-03-02',
    title: 'Kung Fu Panda 4',
    video: false,
    vote_average: 6.873,
    vote_count: 240,
  },
  {
    adult: false,
    backdrop_path: '/zAepSrO99owYwQqi0QG2AS0dHXw.jpg',
    genre_ids: [28, 14],
    id: 634492,
    original_language: 'en',
    original_title: 'Madame Web',
    overview:
      'Forced to confront revelations about her past, paramedic Cassandra Webb forges a relationship with three young women destined for powerful futures...if they can all survive a deadly present.',
    popularity: 2483.029,
    poster_path: '/rULWuutDcN5NvtiZi4FRPzRYWSh.jpg',
    release_date: '2024-02-14',
    title: 'Madame Web',
    video: false,
    vote_average: 5.553,
    vote_count: 665,
  },
  {
    adult: false,
    backdrop_path: '/deLWkOLZmBNkm8p16igfapQyqeq.jpg',
    genre_ids: [9648, 14, 28, 12],
    id: 763215,
    original_language: 'en',
    original_title: 'Damsel',
    overview:
      "A young woman's marriage to a charming prince turns into a fierce fight for survival when she's offered up as a sacrifice to a fire-breathing dragon.",
    popularity: 1398.123,
    poster_path: '/sMp34cNKjIb18UBOCoAv4DpCxwY.jpg',
    release_date: '2024-03-08',
    title: 'Damsel',
    video: false,
    vote_average: 7.178,
    vote_count: 1054,
  },
  {
    adult: false,
    backdrop_path: '/oFAukXiMPrwLpbulGmB5suEZlrm.jpg',
    genre_ids: [28, 12, 878, 14, 18],
    id: 624091,
    original_language: 'id',
    original_title: 'Sri Asih',
    overview:
      'Alana discover the truth about her origin: she’s not an ordinary human being. She may be the gift for humanity and become its protector as Sri Asih. Or a destruction, if she can’t control her anger.',
    popularity: 1031.864,
    poster_path: '/wShcJSKMFg1Dy1yq7kEZuay6pLS.jpg',
    release_date: '2022-11-17',
    title: 'Sri Asih',
    video: false,
    vote_average: 6.432,
    vote_count: 37,
  },
  {
    adult: false,
    backdrop_path: '/mDeUmPe4MF35WWlAqj4QFX5UauJ.jpg',
    genre_ids: [28, 27, 53],
    id: 1096197,
    original_language: 'pt',
    original_title: 'No Way Up',
    overview:
      "Characters from different backgrounds are thrown together when the plane they're travelling on crashes into the Pacific Ocean. A nightmare fight for survival ensues with the air supply running out and dangers creeping in from all sides.",
    popularity: 849.33,
    poster_path: '/hu40Uxp9WtpL34jv3zyWLb5zEVY.jpg',
    release_date: '2024-01-18',
    title: 'No Way Up',
    video: false,
    vote_average: 6.142,
    vote_count: 265,
  },
  {
    adult: false,
    backdrop_path: '/xvk5AhfhgQcTuaCQyq3XqAnhEma.jpg',
    genre_ids: [28, 12, 35],
    id: 848538,
    original_language: 'en',
    original_title: 'Argylle',
    overview:
      "When the plots of reclusive author Elly Conway's fictional espionage novels begin to mirror the covert actions of a real-life spy organization, quiet evenings at home become a thing of the past. Accompanied by her cat Alfie and Aiden, a cat-allergic spy, Elly races across the world to stay one step ahead of the killers as the line between Conway's fictional world and her real one begins to blur.",
    popularity: 827.115,
    poster_path: '/95VlSEfLMqeX36UVcHJuNlWEpwf.jpg',
    release_date: '2024-01-31',
    title: 'Argylle',
    video: false,
    vote_average: 6.151,
    vote_count: 667,
  },
  {
    adult: false,
    backdrop_path: '/87IVlclAfWL6mdicU1DDuxdwXwe.jpg',
    genre_ids: [878, 12],
    id: 693134,
    original_language: 'en',
    original_title: 'Dune: Part Two',
    overview:
      'Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.',
    popularity: 736.807,
    poster_path: '/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg',
    release_date: '2024-02-27',
    title: 'Dune: Part Two',
    video: false,
    vote_average: 8.395,
    vote_count: 1997,
  },
  {
    adult: false,
    backdrop_path: '/u0P5drNyTrZoGyJONPcZGbv1mNP.jpg',
    genre_ids: [28, 53],
    id: 1124127,
    original_language: 'en',
    original_title: 'Air Force One Down',
    overview:
      "On her first assignment aboard Air Force One, a rookie Secret Service agent faces the ultimate test when terrorists hijack the plane, intent on derailing a pivotal energy deal. With the President's life on the line and a global crisis at stake, her bravery and skills are pushed to the limit in a relentless battle that could change the course of history.",
    popularity: 814.806,
    poster_path: '/nKPoSD4pZ3s3CJ9g3cqWRcQ41TC.jpg',
    release_date: '2024-02-09',
    title: 'Air Force One Down',
    video: false,
    vote_average: 6.1,
    vote_count: 33,
  },
  {
    adult: false,
    backdrop_path: '/47olX0FCvUCfAqlp8cK0O5fKLav.jpg',
    genre_ids: [16, 35, 878],
    id: 1239251,
    original_language: 'en',
    original_title: 'Megamind vs. the Doom Syndicate',
    overview:
      "Megamind's former villain team, The Doom Syndicate, has returned. Our newly crowned blue hero must now keep up evil appearances until he can assemble his friends (Roxanne, Ol' Chum and Keiko) to stop his former evil teammates from launching Metro City to the Moon.",
    popularity: 705.329,
    poster_path: '/yRZfiG1QpRkBc7fAmxfcR7Md5EC.jpg',
    release_date: '2024-03-01',
    title: 'Megamind vs. the Doom Syndicate',
    video: false,
    vote_average: 5.634,
    vote_count: 131,
  },
  {
    adult: false,
    backdrop_path: '/qVrS8bu1B7G1tgLTlCZQi4CFsTh.jpg',
    genre_ids: [28, 53, 10752],
    id: 969492,
    original_language: 'en',
    original_title: 'Land of Bad',
    overview:
      'When a Delta Force special ops mission goes terribly wrong, Air Force drone pilot Reaper has 48 hours to remedy what has devolved into a wild rescue operation. With no weapons and no communication other than the drone above, the ground mission suddenly becomes a full-scale battle when the team is discovered by the enemy.',
    popularity: 651.355,
    poster_path: '/h3jYanWMEJq6JJsCopy1h7cT2Hs.jpg',
    release_date: '2024-01-25',
    title: 'Land of Bad',
    video: false,
    vote_average: 7.081,
    vote_count: 395,
  },
  {
    adult: false,
    backdrop_path: '/gklkxY0veMajdCiGe6ggsh07VG2.jpg',
    genre_ids: [16, 28, 12, 35, 10751],
    id: 940551,
    original_language: 'en',
    original_title: 'Migration',
    overview:
      'After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.',
    popularity: 704.837,
    poster_path: '/ldfCF9RhR40mppkzmftxapaHeTo.jpg',
    release_date: '2023-12-06',
    title: 'Migration',
    video: false,
    vote_average: 7.556,
    vote_count: 974,
  },
  {
    adult: false,
    backdrop_path: '/cu5Qk2QHxOyyMrD3Bq93DxgmJer.jpg',
    genre_ids: [28, 80],
    id: 1046090,
    original_language: 'zh',
    original_title: '周處除三害',
    overview:
      'The arrogant, third most-wanted criminal in Taiwan, decides to get rid of the top two competitors and crowns himself the most-wanted criminal before dying.',
    popularity: 617.369,
    poster_path: '/7IJ7F8tX7IAkpUdaGovOBJqORnJ.jpg',
    release_date: '2023-10-06',
    title: 'The Pig, the Snake and the Pigeon',
    video: false,
    vote_average: 7.48,
    vote_count: 101,
  },
  {
    adult: false,
    backdrop_path: '/bQS43HSLZzMjZkcHJz4fGc7fNdz.jpg',
    genre_ids: [878, 10749, 35],
    id: 792307,
    original_language: 'en',
    original_title: 'Poor Things',
    overview:
      'Brought back to life by an unorthodox scientist, a young woman runs off with a debauched lawyer on a whirlwind adventure across the continents. Free from the prejudices of her times, she grows steadfast in her purpose to stand for equality and liberation.',
    popularity: 622.887,
    poster_path: '/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg',
    release_date: '2023-12-07',
    title: 'Poor Things',
    video: false,
    vote_average: 7.853,
    vote_count: 2566,
  },
  {
    adult: false,
    backdrop_path: '/ekRp1sEA8pnuzVHQkUESTgNSKdW.jpg',
    genre_ids: [878, 28, 80],
    id: 932420,
    original_language: 'en',
    original_title: 'Code 8 Part II',
    overview:
      'In a world where superpowered people are heavily policed by robots, an ex-con teams up with a drug lord he despises to protect a teen from a corrupt cop.',
    popularity: 602.265,
    poster_path: '/hhvMTxlTZtnCOe7YFhod9uz3m37.jpg',
    release_date: '2024-02-27',
    title: 'Code 8 Part II',
    video: false,
    vote_average: 6.524,
    vote_count: 332,
  },
  {
    adult: false,
    backdrop_path: '/sR0SpCrXamlIkYMdfz83sFn5JS6.jpg',
    genre_ids: [28, 878, 12],
    id: 823464,
    original_language: 'en',
    original_title: 'Godzilla x Kong: The New Empire',
    overview:
      'Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.',
    popularity: 622.407,
    poster_path: '/tMefBSflR6PGQLv7WvFPpKLZkyk.jpg',
    release_date: '2024-03-27',
    title: 'Godzilla x Kong: The New Empire',
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: '/1ZSKH5GGFlM8M32K34GMdaNS2Ew.jpg',
    genre_ids: [10402, 36, 18],
    id: 802219,
    original_language: 'en',
    original_title: 'Bob Marley: One Love',
    overview:
      'Jamaican singer-songwriter Bob Marley overcomes adversity to become the most famous reggae musician in the world.',
    popularity: 819.473,
    poster_path: '/mKWalirPreEdCKDJjc5TKeOP2xi.jpg',
    release_date: '2024-02-14',
    title: 'Bob Marley: One Love',
    video: false,
    vote_average: 6.973,
    vote_count: 319,
  },
  {
    adult: false,
    backdrop_path: '/nTPFkLUARmo1bYHfkfdNpRKgEOs.jpg',
    genre_ids: [10749, 35],
    id: 1072790,
    original_language: 'en',
    original_title: 'Anyone But You',
    overview:
      'After an amazing first date, Bea and Ben’s fiery attraction turns ice cold — until they find themselves unexpectedly reunited at a destination wedding in Australia. So they do what any two mature adults would do: pretend to be a couple.',
    popularity: 500.903,
    poster_path: '/5qHoazZiaLe7oFBok7XlUhg96f2.jpg',
    release_date: '2023-12-21',
    title: 'Anyone But You',
    video: false,
    vote_average: 7.09,
    vote_count: 1073,
  },
  {
    adult: false,
    backdrop_path: '/i7nnmCTnjK50vNqbMfVtmoVULWJ.jpg',
    genre_ids: [28],
    id: 1081620,
    original_language: 'en',
    original_title: 'The Weapon',
    overview:
      'Dallas is a one-man killing machine on a mysterious rampage. His attacks on biker gangs and meth labs anger the Vegas mob boss who’s holding Dallas’ girlfriend hostage. But who is Dallas working for? Even torture won’t make him talk, and he won’t stop until justice is served.',
    popularity: 432.434,
    poster_path: '/slQYCDzCMM8SBh9Xa3aPeM2fekA.jpg',
    release_date: '2023-02-17',
    title: 'The Weapon',
    video: false,
    vote_average: 5.382,
    vote_count: 17,
  },
  {
    adult: false,
    backdrop_path: '/4Ep2KivIBUZbkS7kHjW7Qywnhhj.jpg',
    genre_ids: [28],
    id: 1049948,
    original_language: 'en',
    original_title: 'Vikings: Battle of Heirs',
    overview:
      "A young Viking must come to terms with the realization that he may be the King's son, who was switched at birth, but not before others try to take his rightful place.",
    popularity: 527.329,
    poster_path: '/87goLbbqrJqAxqDS5cBsik1zKT.jpg',
    release_date: '2023-04-28',
    title: 'Vikings: Battle of Heirs',
    video: false,
    vote_average: 7.8,
    vote_count: 4,
  },
  {
    adult: false,
    backdrop_path: '/yyFc8Iclt2jxPmLztbP617xXllT.jpg',
    genre_ids: [35, 10751, 14],
    id: 787699,
    original_language: 'en',
    original_title: 'Wonka',
    overview:
      'Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.',
    popularity: 478.702,
    poster_path: '/qhb1qOilapbapxWQn9jtRCMwXJF.jpg',
    release_date: '2023-12-06',
    title: 'Wonka',
    video: false,
    vote_average: 7.209,
    vote_count: 2604,
  },
];

export const SERIES: TMDBSerieType[] = [
  {
    adult: false,
    backdrop_path: '/eWF3oRyL4QWaidN9F4uvM7cBJUV.jpg',
    genre_ids: [10766],
    id: 206559,
    origin_country: ['ZA'],
    original_language: 'af',
    original_name: 'Binnelanders',
    overview:
      'A South African Afrikaans soap opera. It is set in and around the fictional private hospital, Binneland Kliniek, in Pretoria, and the storyline follows the trials, trauma and tribulations of the staff and patients of the hospital.',
    popularity: 2664.418,
    poster_path: '/v9nGSRx5lFz6KEgfmgHJMSgaARC.jpg',
    first_air_date: '2005-10-13',
    name: 'Binnelanders',
    vote_average: 5.739,
    vote_count: 46,
  },
  {
    adult: false,
    backdrop_path: '/h0y3OzHzG4yNvn8u3Za6ByH8lrQ.jpg',
    genre_ids: [18, 10766],
    id: 45789,
    origin_country: ['DE'],
    original_language: 'de',
    original_name: 'Sturm der Liebe',
    overview:
      'These are the stories of relationships taking place in the fictional five-star hotel Fürstenhof, located in Feldkirchen-Westerham near Rosenheim with the plot revolving around members of the family room area, the hotel owners, and employees.',
    popularity: 2878.124,
    poster_path: '/9oZjOh3Va3FsiLGouhSogFsBX9G.jpg',
    first_air_date: '2005-09-26',
    name: 'Sturm der Liebe',
    vote_average: 7.033,
    vote_count: 15,
  },
  {
    adult: false,
    backdrop_path: '/rj3jBAZwPiOgkwAy1205MAgLahj.jpg',
    genre_ids: [10766],
    id: 81329,
    origin_country: ['FR'],
    original_language: 'fr',
    original_name: 'Un si grand soleil',
    overview:
      'Claire is surprised when she gets arrested for the murder of her childhood friend after she returns to Montpellier.',
    popularity: 1894.313,
    poster_path: '/t6jVlbPMtZOJoAOfeoR4yQmnjXM.jpg',
    first_air_date: '2018-08-27',
    name: 'Chronicles of the Sun',
    vote_average: 7.29,
    vote_count: 69,
  },
  {
    adult: false,
    backdrop_path: '/yYNa1nqvNK94xZz3eKyfvZdAvPi.jpg',
    genre_ids: [10766, 18],
    id: 112470,
    origin_country: ['FR'],
    original_language: 'fr',
    original_name: 'Ici tout commence',
    overview: '',
    popularity: 1691.759,
    poster_path: '/yuTHx38jpogXovMhqNatvozigMJ.jpg',
    first_air_date: '2020-11-02',
    name: 'Here it all begins',
    vote_average: 7.145,
    vote_count: 38,
  },
  {
    adult: false,
    backdrop_path: '/i8iqYtAy9qcO5RSrA1f6fY1n6SN.jpg',
    genre_ids: [10766],
    id: 235484,
    origin_country: ['ZA'],
    original_language: 'af',
    original_name: 'Suidooster',
    overview:
      'Suidooster is a South African television soap opera produced by Suidooster Films which revolves around a matriarch, her family, friends and the people of Suidooster, a small shopping and business centre in the fictional Cape Town suburb of Ruiterbosch.',
    popularity: 1462.411,
    poster_path: '/u4tPY6df9atOne5soyW7vUyRgvD.jpg',
    first_air_date: '2015-11-16',
    name: 'Suidooster',
    vote_average: 8,
    vote_count: 7,
  },
  {
    adult: false,
    backdrop_path: '/5MkBAawsj7O9zitVtzMXagyrIBw.jpg',
    genre_ids: [18, 10766, 10751],
    id: 217216,
    origin_country: ['PT'],
    original_language: 'pt',
    original_name: 'Flor Sem Tempo',
    overview:
      "Catarina embarks on a dangerous journey to find who made her mother vanish. The Torres family seems to be the obvious suspect, but within them there's Vasco, the love of Catarina's life. Two opposed sides connected by love.",
    popularity: 1426.506,
    poster_path: '/8vQa1dJ0CCg7fjmbGA0l7yp6xDU.jpg',
    first_air_date: '2023-01-30',
    name: 'Timeless Love',
    vote_average: 6.69,
    vote_count: 50,
  },
  {
    adult: false,
    backdrop_path: '/hpZ5VJP1MvQjuFUMORuAoDFAH30.jpg',
    genre_ids: [35, 10766, 10759],
    id: 222289,
    origin_country: ['BR'],
    original_language: 'pt',
    original_name: 'Família é Tudo',
    overview: '',
    popularity: 1179.515,
    poster_path: '/tDbJuSfVhf3ZnxiJrXlXEALyAz5.jpg',
    first_air_date: '2024-03-04',
    name: 'Família é Tudo',
    vote_average: 0,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: '/qYLiLgRHcVvjnUl7171IVTFI1P7.jpg',
    genre_ids: [10766, 18],
    id: 243117,
    origin_country: ['FR'],
    original_language: 'fr',
    original_name: 'Plus belle la vie, encore plus belle',
    overview: '',
    popularity: 1174.289,
    poster_path: '/5js5JCtxfiYF2MdNn0zGyCwyg8L.jpg',
    first_air_date: '2024-01-08',
    name: 'Plus belle la vie, encore plus belle',
    vote_average: 0,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: '/bEKRyT7WN5TjFKv0JTWI2cyNlak.jpg',
    genre_ids: [10766, 18],
    id: 223365,
    origin_country: ['BR'],
    original_language: 'pt',
    original_name: 'Renascer',
    overview:
      'A wealthy cocoa bean farmer with a mysterious connection with nature holds a grudge against his youngest son, since his mother died during childbirth. Things complicate when they both fall for the same woman.',
    popularity: 1164.68,
    poster_path: '/kUWvvMkNIf21UUDmHjYw55v6o7C.jpg',
    first_air_date: '2024-01-22',
    name: 'Renascer',
    vote_average: 9.5,
    vote_count: 7,
  },
  {
    adult: false,
    backdrop_path: '/ottT2Yt0OfHiHp3PHJTLNVV8JPE.jpg',
    genre_ids: [18, 10766],
    id: 13945,
    origin_country: ['DE'],
    original_language: 'de',
    original_name: 'Gute Zeiten, schlechte Zeiten',
    overview:
      "Gute Zeiten, schlechte Zeiten is a long-running German television soap opera, first broadcast on RTL in 1992. The programme concerns the lives of a fictional neighborhood in Germany's capital city Berlin. Over the years the soap opera tends to have an overhaul of young people in their late teens and early twenties; targeting a young viewership.",
    popularity: 2445.567,
    poster_path: '/fNHBzjxsydcAssxXqb5IV2obDdU.jpg',
    first_air_date: '1992-05-11',
    name: 'Gute Zeiten, schlechte Zeiten',
    vote_average: 6.154,
    vote_count: 26,
  },
  {
    adult: false,
    backdrop_path: '/lN9YTWjXXJ62hJLsdGAjp5z76JU.jpg',
    genre_ids: [10766, 18],
    id: 231418,
    origin_country: ['ES'],
    original_language: 'es',
    original_name: 'Salón de té La Moderna',
    overview: '',
    popularity: 1681.081,
    poster_path: '/eRB6yMg6FyvjlxEZYu0ZEUdy1Nd.jpg',
    first_air_date: '2023-09-27',
    name: 'Salón de té La Moderna',
    vote_average: 0,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: '/qUP2Zy4whlLSApTELz0LaxZTBQH.jpg',
    genre_ids: [80, 18, 10766],
    id: 44953,
    origin_country: ['US'],
    original_language: 'es',
    original_name: 'El señor de los cielos',
    overview:
      'Set in the 1990s, these are the life and times of Amado Carrillo Fuentes, a man who became the head of the Juárez cartel. Nicknamed “El Señor de los Cielos” (Lord of the Skies) because of the large fleet of airplanes he used to transport drugs, he was also known for washing more than $200 million through Colombia to finance his huge fleet. He is described as the most powerful drug trafficker of his time.',
    popularity: 847.632,
    poster_path: '/Ag7VUdnrRz5Qpq3Yn3E5OCvFnu0.jpg',
    first_air_date: '2013-04-15',
    name: 'El Señor de los Cielos',
    vote_average: 7.913,
    vote_count: 2997,
  },
  {
    adult: false,
    backdrop_path: '/218ZehBKlH8efPRRccmB7bu0oLQ.jpg',
    genre_ids: [35, 9648, 10766, 18],
    id: 219109,
    origin_country: ['BR'],
    original_language: 'pt',
    original_name: 'Elas por Elas',
    overview:
      'Seven friends who met in their youth at an English course meet again 25 years later; Lara, Taís, Helena, Adriana, Renée, Natália and Carol, each of them has a different personality and origin, but they share a deep affection.',
    popularity: 1317.778,
    poster_path: '/m0cvvnhnRXdQhLARx7qt9lz7hTE.jpg',
    first_air_date: '2023-09-25',
    name: 'Elas por Elas',
    vote_average: 5.597,
    vote_count: 36,
  },
  {
    adult: false,
    backdrop_path: '/kTehVQukdzlckioBsn4uf8HExJs.jpg',
    genre_ids: [10751, 10766, 18, 35],
    id: 243745,
    origin_country: ['MX'],
    original_language: 'es',
    original_name: 'Tu vida es mi vida',
    overview:
      "Paula, a woman who, upon finding out that she suffers from an illness, for which she has 6 to 8 months to live, rethinks her existence and abandons her job as a businesswoman to spend this time with her 3 children. Upon arriving at the town there will be a confrontation between Lorenzo and Pepe's family, a good man with noble feelings who has just asked his wife for a divorce, a selfish woman who is unfaithful to him with Rafa, his own brother. Although the relationship between them begins in a less than cordial manner, Paula and Pepe cannot help but feel attraction for each other. Paula's illness, family secrets from the past, the problems that her children will face, combined with the intrigues of Malena, Pepe's wife, and Rolando, Paula's suitor who, together with Natalia, her partner and supposed best friend, will cause all kinds of conflicts to prevent the union of Paula and Pepe",
    popularity: 1189.43,
    poster_path: '/k58tPG0q3h2umXDQWQ5m4kw03eR.jpg',
    first_air_date: '2024-01-15',
    name: 'Tu vida es mi vida',
    vote_average: 7.571,
    vote_count: 14,
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [10766],
    id: 14743,
    origin_country: ['ES'],
    original_language: 'ca',
    original_name: 'El Cor de la Ciutat',
    overview:
      'El cor de la ciutat is a TVC television soap opera first broadcast on TV3 on 11 September 2000 and last broadcast on 23 December 2009. The show is the most watched fiction program in Catalonia, Spain, especially among female audiences, drawing around 28-33% of the audience with as much as 40% during season finales. El cor de la ciutat follows the lives of the people who live and work in the neighbourhood of Sants and Sant Andreu in Barcelona, Catalonia, Spain.',
    popularity: 1586.236,
    poster_path: '/xQ83cJA8AxoQMZe8ADApWrRZB1v.jpg',
    first_air_date: '2000-09-11',
    name: 'El Cor de la Ciutat',
    vote_average: 3.333,
    vote_count: 3,
  },
  {
    adult: false,
    backdrop_path: '/bIhmqQNXcyWRzH153d3jaCbLTy3.jpg',
    genre_ids: [10759, 10751, 18, 10766, 35, 10765, 10762],
    id: 244643,
    origin_country: ['MX'],
    original_language: 'es',
    original_name: 'El amor no tiene receta',
    overview:
      "Paz Roble, a kind, hard-working and honest woman from whom her husband, Fermín, takes her newborn daughter. Fermín has a large debt with some lenders and to pay it he decides to sell his daughter to Mauro Nicoliti. This plagiarism is orchestrated by Geneva, Mauro's adoptive sister. She lost her first-born daughter in childbirth and does everything to replace her dead daughter and keep her husband's fortune. On the other hand, Esteban Villa de Cortés loses his wife and becomes a widower with his three children. Elvira Moncada, Esteban's mother-in-law, holds him responsible for the death of her daughter. After a series of unexpected events, Esteban and Paz meet in the neighborhood where she lives with her family. The chemistry and great understanding that exists between them makes it inevitable that they will fall in love.",
    popularity: 1081.003,
    poster_path: '/fDRy8B1KdapuvBsgkCkEETY4MNr.jpg',
    first_air_date: '2024-02-19',
    name: 'El amor no tiene receta',
    vote_average: 8.8,
    vote_count: 18,
  },
  {
    adult: false,
    backdrop_path: '/pmB8uYJF1WKQCZnJjhnAx2IJjhk.jpg',
    genre_ids: [10766],
    id: 14750,
    origin_country: ['PL'],
    original_language: 'pl',
    original_name: 'Na Wspólnej',
    overview:
      'Na Wspólnej is a Polish soap opera. It has been running since 2003 on the TVN channel as its flagship primetime weekday soap opera. It is loosely based on the German production Unter Uns and it follows the lives of the inhabitants of an apartment block in Wspólna Street, Warsaw. Episodes tend to last around 20 minutes. It is a Polish version of the Hungarian "Barátok közt".\n\nThe series is shot almost entirely in Warsaw and produced by the Polish branch of Freemantle Media. On 9 September 2008 it celebrated its 1000th episode; "Na Wspólnej" was the fourth Polish television series ever to achieve such status. A special episode was broadcast in which characters from some other of TVN\'s most popular shows visited Wspólna Street.',
    popularity: 927.418,
    poster_path: '/uksRhdaOn64bO5d33d7rcTbrhJI.jpg',
    first_air_date: '2003-01-27',
    name: 'Na Wspólnej',
    vote_average: 3.3,
    vote_count: 3,
  },
  {
    adult: false,
    backdrop_path: '/AoKpDxiDcJxcchgSaUvOBpVJHVQ.jpg',
    genre_ids: [18, 10766],
    id: 2354,
    origin_country: ['AU'],
    original_language: 'en',
    original_name: 'Home and Away',
    overview:
      "Home and Away is set in the fictional town of Summer Bay, a coastal town in New South Wales, and follows the personal and professional lives of the people living in the area. The show initially focused on the Fletcher family, Pippa and Tom Fletcher and their five foster children Frank Morgan, Carly Morris, Steven Matheson, Lynn Davenport and Sally Keating, who would go on to become one of the show's longest-running characters. The show also originally and currently focuses on the Stewart family. During the early 2000s, the central storylines focused on the Sutherlands and later, the Hunters. Home and Away had proved popular when it premiered in 1988 and had risen to become a hit in Australia, and after only a few weeks, the show tackled its first major and disturbing storyline, the rape of Carly Morris; it was one of the first shows to feature such storylines during the early timeslot. H&A has tackled many adult-themed and controversial storylines; something rarely found in its restricted timeslot.",
    popularity: 1023.017,
    poster_path: '/r4E3Mr2uBDUegKmPPaevfdiq8hv.jpg',
    first_air_date: '1988-01-17',
    name: 'Home and Away',
    vote_average: 6.233,
    vote_count: 60,
  },
  {
    adult: false,
    backdrop_path: '/8OD8iFc1zdjkey1XvMEHjnuPGs1.jpg',
    genre_ids: [10766],
    id: 14424,
    origin_country: ['BR'],
    original_language: 'pt',
    original_name: 'Malhação',
    overview:
      'Malhação is a Brazilian television series for the teenage audience. The soap started in 1995, and was set in a fictional Gym Club called Malhação on Barra da Tijuca, Rio de Janeiro. Through the years the location varied slightly. Although the name of the soap remains the same, it is now set in the Múltipla Escolha High School.',
    popularity: 1283.925,
    poster_path: '/bF24r2FxsjzgkJcrbBU8RC9JVoU.jpg',
    first_air_date: '1995-04-24',
    name: 'Young Hearts',
    vote_average: 5.479,
    vote_count: 24,
  },
  {
    adult: false,
    backdrop_path: '/5APjn4LnV5wWk5DXq7ZewT6zzP1.jpg',
    genre_ids: [10766],
    id: 291,
    origin_country: ['GB', 'MY'],
    original_language: 'en',
    original_name: 'Coronation Street',
    overview:
      "The residents of Coronation Street are ordinary, working-class people, and the show follows them through regular social and family interactions at home, in the workplace, and in their local pub, the Rovers Return Inn. Britain's longest-running soap.",
    popularity: 1143.603,
    poster_path: '/xe6y8SJU0NyGEECu2LV9cXoY81g.jpg',
    first_air_date: '1960-12-09',
    name: 'Coronation Street',
    vote_average: 5.315,
    vote_count: 99,
  },
];