# animeProject

A Node.js package for interacting with MyAnimeList data using the Jikan API.

## Installation

You can install the package via npm:

```bash
npm install animeProject | ❌ not published yet
```

## Usage

### Anime

#### Search for Anime

Fetch a list of anime based on a search query.

```js
const { anime } = require('animeProject');

anime.fetchAnimeData('Naruto').then(data => {
    console.log(data);
});
```

- **Endpoint**: `/anime`
- **Parameters**: 
  - `q` (string): The search query (e.g., anime title).
  - `limit` (number): Number of results to return (default is 10).

#### Get Anime Details

Fetch detailed information about a specific anime by ID.

```js
anime.fetchAnimeDetails(1).then(data => {
    console.log(data);
});
```

- **Endpoint**: `/anime/{id}`
- **Parameters**:
  - `id` (number): The ID of the anime.

#### Get Seasonal Anime

Fetch a list of anime for a specific season and year.

```js
anime.fetchSeasonalAnime(2024, 'winter').then(data => {
    console.log(data);
});
```

- **Endpoint**: `/seasons/{year}/{season}`
- **Parameters**:
  - `year` (number): The year of the season.
  - `season` (string): The season (e.g., 'winter', 'spring').

### Manga

#### Search for Manga

Fetch a list of manga based on a search query.

```js
const { manga } = require('animeProject');

manga.fetchMangaData('One Piece').then(data => {
    console.log(data);
});
```

- **Endpoint**: `/manga`
- **Parameters**:
  - `q` (string): The search query (e.g., manga title).
  - `limit` (number): Number of results to return (default is 10).

#### Get Manga Details

Fetch detailed information about a specific manga by ID.

```js
manga.fetchMangaDetails(1).then(data => {
    console.log(data);
});
```

- **Endpoint**: `/manga/{id}`
- **Parameters**:
  - `id` (number): The ID of the manga.

### Characters

#### Get Character Details

Fetch detailed information about a specific character by ID.

```js
const { characters } = require('animeProject');

characters.fetchCharacterDetails(1).then(data => {
    console.log(data);
});
```

- **Endpoint**: `/characters/{id}`
- **Parameters**:
  - `id` (number): The ID of the character.

#### Search Characters by Name

Search for characters by name and return a list of matching characters.

```js
characters.searchCharacters('Naruto').then(data => {
    console.log(data);
});
```

- **Endpoint**: `/characters`
- **Parameters**:
  - `q` (string): The search query (e.g., character name).
  - `limit` (number): Number of results to return (default is 10).

### People

#### Get Person Details

Fetch detailed information about a specific person by ID.

```js
const { people } = require('animeProject');

people.fetchPersonDetails(1).then(data => {
    console.log(data);
});
```

- **Endpoint**: `/people/{id}`
- **Parameters**:
  - `id` (number): The ID of the person.

### Seasons

#### Get Seasonal Anime

Fetch a list of anime for a specific season and year.

```js
const { seasons } = require('animeProject');

seasons.fetchSeasonalAnime(2024, 'summer').then(data => {
    console.log(data);
});
```

- **Endpoint**: `/seasons/{year}/{season}`
- **Parameters**:
  - `year` (number): The year of the season.
  - `season` (string): The season (e.g., 'summer', 'fall').

### Search

#### Search for Different Types

Perform a search for various types such as anime, manga, characters, and people.

```js
const { search } = require('animeProject');

search.search('anime', 'Naruto').then(data => {
    console.log(data);
});
```

- **Endpoint**: `/search/{type}`
- **Parameters**:
  - `type` (string): Type of search (e.g., 'anime', 'manga', 'characters', 'people').
  - `q` (string): The search query (e.g., name).
  - `limit` (number): Number of results to return (default is 10).

### Studios

#### Get Studio Details

Fetch detailed information about a specific studio by ID.

```js
const { studios } = require('animeProject');

studios.fetchStudioDetails(1).then(data => {
    console.log(data);
});
```

- **Endpoint**: `/producers/{id}`
- **Parameters**:
  - `id` (number): The ID of the studio (producer).

### Reviews

#### Get Anime Reviews

Fetch reviews for a specific anime by ID.

```js
const { reviews } = require('animeProject');

reviews.fetchAnimeReviews(1).then(data => {
    console.log(data);
});
```

- **Endpoint**: `/anime/{id}/reviews`
- **Parameters**:
  - `id` (number): The ID of the anime.

#### Get Manga Reviews

Fetch reviews for a specific manga by ID.

```js
reviews.fetchMangaReviews(1).then(data => {
    console.log(data);
});
```

- **Endpoint**: `/manga/{id}/reviews`
- **Parameters**:
  - `id` (number): The ID of the manga.

### Genres

#### Get Anime Genres

Fetch a list of anime genres.

```js
const { genres } = require('animeProject');

genres.fetchAnimeGenres().then(data => {
    console.log(data);
});
```

- **Endpoint**: `/genres/anime`

#### Get Manga Genres

Fetch a list of manga genres.

```js
genres.fetchMangaGenres().then(data => {
    console.log(data);
});
```

- **Endpoint**: `/genres/manga`

### User

#### Get User Profile

Fetch the profile of a specific user by username.

```js
const { user } = require('animeProject');

user.fetchUserProfile('username').then(data => {
    console.log(data);
});
```

- **Endpoint**: `/users/{username}`
- **Parameters**:
  - `username` (string): The username of the user.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
