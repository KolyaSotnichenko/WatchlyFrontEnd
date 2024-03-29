import { errorCatch } from 'api/api.helpers'
import { GetStaticProps, NextPage } from 'next'

import Home from '@/components/screens/home/Home'
import { IHome } from '@/components/screens/home/home.interface'
import { IGalleryItem } from '@/components/ui/gallery/gallery.interface'
import { ISlide } from '@/components/ui/slider/slider.interface'

import { ActorService } from '@/services/actor.service'
import { MovieService } from '@/services/movie.service'

import { getGenresList } from '@/utils/movie/getGenresList'

import { getActorUrl, getMovieUrl } from '@/config/url.config'

const HomePage: NextPage<IHome> = ({ slides, actors, trendingMovies }) => {
	return (
		<Home slides={slides} actors={actors} trendingMovies={trendingMovies} />
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await MovieService.getAll()

		const slides: ISlide[] = movies.slice(0, 3).map((m) => ({
			_id: m._id,
			link: getMovieUrl(m.slug),
			subTitle: getGenresList(m.genres),
			title: m.title,
			bigPoster: m.bigPoster,
		}))

		const { data: dataActors } = await ActorService.getAll()

		const actors: IGalleryItem[] = dataActors.slice(0, 7).map((actor) => ({
			name: actor.name,
			posterPath: actor.photo,
			link: getActorUrl(actor.slug),
			content: {
				title: actor.name,
				subTitle: `+${actor.countMovies} movies`,
			},
		}))

		const dataTrendingMovies = await MovieService.getMostPopularMovies()

		const trendingMovies: IGalleryItem[] = dataTrendingMovies
			.slice(0, 7)
			.map((movie) => ({
				name: movie.title,
				posterPath: movie.poster,
				link: getMovieUrl(movie.slug),
			}))

		return {
			props: {
				slides,
				actors,
				trendingMovies,
			} as IHome,
			revalidate: 10,
		}
	} catch (error) {
		console.log(errorCatch(error))

		return {
			props: {
				slides: [],
				actors: [],
				trendingMovies: [],
			} as IHome,
		}
	}
}

export default HomePage
