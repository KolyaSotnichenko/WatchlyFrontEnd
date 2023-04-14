import { FC, useEffect, useState } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { getAdminHomeUrl } from '@/config/url.config'

import { IUserState } from '@/store/user/user.interface'

import MenuItem from '../MenuItem'

import LogoutButton from './LogoutButton'

const AuthItems: FC = () => {
	const [authUser, setAuthUser] = useState<IUserState | null>()

	const { user } = useAuth()

	useEffect(() => {
		if (user) return setAuthUser(user)

		return setAuthUser(null)
	}, [user])

	return (
		<>
			{authUser?.isAdmin && (
				<MenuItem
					item={{
						icon: 'MdOutlineLock',
						link: getAdminHomeUrl(),
						title: 'Admin panel',
					}}
				/>
			)}

			{authUser ? (
				<>
					<MenuItem
						item={{
							icon: 'MdSettings',
							link: '/profile',
							title: 'Profile',
						}}
					/>

					<LogoutButton />
				</>
			) : (
				<MenuItem
					item={{
						icon: 'MdLogin',
						link: '/auth',
						title: 'Login',
					}}
				/>
			)}
		</>
	)
}

export default AuthItems
