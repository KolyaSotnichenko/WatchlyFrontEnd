import { FC } from 'react'
import StarRatingComponent from 'react-star-rating-component'

import AuthButton from '@/components/ui/video-player/AuthPlaceholder/AuthButton'

import { useAuth } from '@/hooks/useAuth'

import styles from './RateMovie.module.scss'
import { useRateMovie } from './useRateMovie'

interface IRateMovie {
	movieId: string
	slug: string
}

const RateMovie: FC<IRateMovie> = ({ movieId, slug }) => {
	const { user } = useAuth()

	const { handleClick, isSended, rating } = useRateMovie(movieId)

	return (
		<div className={styles.wrapper}>
			<h3>How do you like the movie?</h3>
			<p>Ratings improve recommendation</p>
			{user ? (
				<>
					{isSended ? (
						<div className={styles.thanks}>Thanks for rating!</div>
					) : (
						<StarRatingComponent
							name="star-rating"
							value={rating}
							onStarClick={handleClick}
							emptyStarColor="#4f4f4f"
						/>
					)}
				</>
			) : (
				<AuthButton slug={slug} />
			)}
		</div>
	)
}

export default RateMovie
