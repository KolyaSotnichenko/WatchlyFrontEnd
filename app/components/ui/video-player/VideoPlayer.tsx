import cn from 'classnames'
import { FC } from 'react'
import { Player } from 'react-tuby'
import 'react-tuby/css/main.css'

import { useAuth } from '@/hooks/useAuth'

import MaterialIcon from '../MaterialIcon'

import AuthPlaceholder from './AuthPlaceholder/AuthPlaceholder'
import styles from './VideoPlayer.module.scss'
import { useVideo } from './useVideo'
import { IVideoPlayer } from './video.interface'

const VideoPlayer: FC<IVideoPlayer> = ({ slug, subtitles, videoSource }) => {
	// const { actions, video, videoRef } = useVideo()

	const { user } = useAuth()

	return (
		<div
			className={cn(styles.wrapper, {
				'h-96': !user,
			})}
		>
			{user ? (
				<>
					{/* <video
						ref={videoRef}
						className={styles.video}
						src={`${videoSource}#t=0`}
						preload="metadata"
					/>
					<div className={styles.progressBarContainer}>
						<div
							style={{ width: `${video.progress}%` }}
							className={styles.progressBar}
						/>
					</div>

					<div className={styles.controls}>
						<div>
							<button onClick={actions.revert}>
								<MaterialIcon name="MdHistory" />
							</button>
							<button
								onClick={actions.toggleVideo}
								className={styles.playButton}
							>
								<MaterialIcon
									name={video.isPlaying ? 'MdPause' : 'MdPlayArrow'}
								/>
							</button>
							<button onClick={actions.forward}>
								<MaterialIcon name="MdUpdate" />
							</button>

							<div className={styles.timeControls}>
								<p className={styles.controlsTime}>
									{Math.floor(video.currentTime / 60) +
										':' +
										('0' + Math.floor(video.currentTime % 60)).slice(-2)}
								</p>
								<p> / </p>
								<p className={styles.controlsTime}>
									{Math.floor(video.videoTime / 60) +
										':' +
										('0' + Math.floor(video.videoTime % 60)).slice(-2)}
								</p>
							</div>
						</div>
						<div>
							<button onClick={actions.fullScreen}>
								<MaterialIcon name="MdFullscreen" />
							</button>
						</div>
					</div> */}
					<Player
						src={[
							{
								quality: 'Full HD',
								url: videoSource,
							},
						]}
						subtitles={[
							{
								lang: 'en',
								language: 'English',
								url: `${subtitles}`,
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
