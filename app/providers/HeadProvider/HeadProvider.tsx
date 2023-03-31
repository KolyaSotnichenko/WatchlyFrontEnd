import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import { FC, ReactNode } from 'react'

import { accentColor } from '@/config/constants'

import FavIcons from './FavIcons'

interface IHeadProvider {
	children: ReactNode
}

const HeadProvider: FC<IHeadProvider> = ({ children }) => {
	return (
		<>
			<NextNProgress
				color={accentColor}
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<Head>
				<meta charSet="UTF-8" />
				<meta
					name="view"
					content="width=device-width, initial-scale=1, maximum-scale=1.0"
				/>

				<FavIcons />

				<meta name="theme-color" content={'#181B1E'} />
				<meta name="msapplication-navbutton-color" content={'#181B1E'} />
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content={'#181B1E'}
				/>
			</Head>
			{children}
		</>
	)
}

export default HeadProvider
