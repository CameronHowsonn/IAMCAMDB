import { useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFilmById } from '../helpers/films.js'
import MovieCredits from '../movies/MovieCredits.js'
import MovieDetail from '../movies/MovieDetail'
import MovieHero from '../movies/MovieHero'
import MovieImages from '../movies/MovieImages.js'

const Movie = ({ config, filmList, genres }) => {
  const { id } = useParams()
  const [film, setFilm] = useState([])
  useLayoutEffect(() => {
    const getData = async () => {
      const film = await getFilmById(id)
      setFilm(film)
      return film
    }

    getData()
  }, [id])

  return (
    <div class={`${film.poster_path ? 'image' : 'no-image'}`}>
      <MovieHero
        path={film.backdrop_path}
        config={config}
        title={film.original_title}
      />
      <MovieDetail
        film={film}
        filmList={filmList}
        config={config}
        genres={genres}
      />
      <MovieCredits config={config} id={id} />
      <MovieImages config={config} id={id} />
    </div>
  )
}

export default Movie
