import cn from 'classnames'
import { FC } from 'react'
import { Player } from 'react-tuby'
import 'react-tuby/css/main.css'

import { useAuth } from '@/hooks/useAuth'

import AuthPlaceholder from './AuthPlaceholder/AuthPlaceholder'
import styles from './VideoPlayer.module.scss'
import { IVideoPlayer } from './video.interface'

const VideoPlayer: FC<IVideoPlayer> = ({ slug, subtitles, videoSource }) => {
	const { user } = useAuth()

	console.log(subtitles)

	return (
		<div
			className={cn(styles.wrapper, {
				'h-96': !user,
			})}
		>
			{user ? (
				<>
					<Player
						src={[
							{
								quality: 'Standard',
								url: videoSource,
							},
						]}
						subtitles={[
							{
								lang: 'en',
								language: 'English',
								url: subtitles,
							},
						]}
						// poster="https://cdn.jsdelivr.net/gh/naptestdev/video-examples@master/poster.png"
					/>
				</>
			) : (
				<AuthPlaceholder slug={slug} />
			)}
		</div>
	)
}

export default VideoPlayer
