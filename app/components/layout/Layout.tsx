import { FC, ReactNode } from 'react'

import useMediaQuery from '@/hooks/useMediaQuery'

import NotAllowed from '../../../pages/notAllowed'

import styles from './Layout.module.scss'
import Navigation from './Navigation/Navigation'
import Sidebar from './Sidebar/Sidebar'

interface ILayout {
	children: ReactNode
}

const Layout: FC<ILayout> = ({ children }) => {
	const isDesktop = useMediaQuery('(min-width: 1279px)')

	// return (
	// 	<>
	// 		<div className={styles.layout}>
	// 			<Navigation />
	// 			<div className={styles.center}>{children}</div>
	// 			<Sidebar />
	// 		</div>
	// 	</>
	// )

	return !isDesktop ? (
		<div className="flex justify-center items-center h-screen text-center">
			<NotAllowed />
		</div>
	) : (
		<div className={styles.layout}>
			<Navigation />
			<div className={styles.center}>{children}</div>
			<Sidebar />
		</div>
	)
}

export default Layout
