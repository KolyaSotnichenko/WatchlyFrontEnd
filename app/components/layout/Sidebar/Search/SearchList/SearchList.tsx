import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IMovie } from '@/shared/types/movie.types'

import { getMovieUrl } from '@/config/url.config'

import styles from './SearchList.module.scss'

const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<div className={styles.list}>
			{movies.length ? (
				movies.map((movie) => (
					<Link
						key={movie._id}
						href={getMovieUrl(movie.slug)}
						className={styles.link}
					>
						<Image
							src={movie.poster}
							width={50}
							height={50}
							alt={movie.title}
							style={{ objectFit: 'cover', objectPosition: 'top' }}
							draggable={false}
						/>
						<span>{movie.title}</span>
					</Link>
				))
			) : (
				<div className="text-white text-center mt-4 mb-4">
					Movies not found!
				</div>
			)}
		</div>
	)
}

export default SearchList
