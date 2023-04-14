import { FC, MouseEvent } from 'react'

import MaterialIcon from '@/components/ui/MaterialIcon'

import { useActions } from '@/hooks/useActions'

const LogoutButton: FC = () => {
	const { logout } = useActions()

	const handleLogout = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		logout()
	}

	return (
		<li>
			<a
				onClick={handleLogout}
				className="flex items-center text-gray-600 px-3 mt-6 cursor-pointer"
			>
				<MaterialIcon name="MdLogout" />
				<span className="ml-3 text-lg hover:text-white">Logout</span>
			</a>
		</li>
	)
}

export default LogoutButton
