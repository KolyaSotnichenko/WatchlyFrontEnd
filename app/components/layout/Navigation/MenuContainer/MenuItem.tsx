import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'

import MaterialIcon from '@/components/ui/MaterialIcon'

import styles from './Menu.module.scss'
import { IMenuItem } from './menu.interface'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { asPath } = useRouter()

	return (
		<li
			className={cn({
				[styles.active]: asPath === item.link,
			})}
		>
			<Link
				href={item.link}
				className="flex items-center text-gray-600 px-3 mt-6 cursor-pointer"
			>
				<MaterialIcon name={item.icon} />
				<span className="ml-3 text-lg hover:text-white">{item.title}</span>
			</Link>
		</li>
	)
}

export default MenuItem
