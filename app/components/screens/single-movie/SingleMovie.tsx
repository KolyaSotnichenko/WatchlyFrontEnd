import dynamic from 'next/dynamic'
import { FC } from 'react'

import Banner from '@/components/ui/banner/Banner'
import Gallery from '@/components/ui/gallery/Gallery'
import SubHeading from '@/components/ui/heading/SubHeading'

// import VideoPlayer from '@/components/ui/video-player/VideoPlayer'
import Meta from '@/utils/meta/Meta'

import { IMoviePage } from '../../../../pages/movie/[slug]'

import Content from './Content/Content'
import { useUpdateCountOpened } from './useUpdateCountOpened'

const DynamicPlayer = dynamic(import('@/ui/video-player/VideoPlayer'), {
	ssr: false,
})

const DynamicRateMovie = dynamic(
	import('@/components/screens/single-movie/RateMovie/RateMovie'),
	{
		ssr: false,
	}
)

const SingleMovie: FC<IMoviePage> = ({ movie, similarMovies }) => {
	if (movie) useUpdateCountOpened(movie.slug)
	return (
		movie && (
			<Meta title={movie.title} description={`Watch ${movie?.title}`}>
				<Banner
					image={movie.bigPoster}
					Detail={() => <Content movie={movie} />}
				/>

				<DynamicPlayer slug={movie.slug} videoSource={movie.videoUrl} />

				<div className="mt-12">
					<SubHeading title="Similar" />
					<Gallery items={similarMovies} />
				</div>

				<DynamicRateMovie movieId={movie._id} slug={movie.slug} />
			</Meta>
		)
	)
}

export default SingleMovie
