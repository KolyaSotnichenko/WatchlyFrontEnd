import { GetStaticProps, NextPage } from 'next'

import Collections from '@/components/screens/collections/Collections'
import { ICollection } from '@/components/screens/collections/collections.interface'

import { GenreService } from '@/services/genre.service'

import Error404 from './404'

const GenresPage: NextPage<{
	filteredCollections: ICollection[]
	levelCollections: ICollection[]
}> = ({ filteredCollections, levelCollections }) => {
	return filteredCollections ? (
		<Collections
			filteredCollections={filteredCollections || []}
			levelCollections={levelCollections || []}
		/>
	) : (
		<Error404 />
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: collections } = await GenreService.getCollections()

		const levelCollections = collections.filter((collection) =>
			collection.slug.includes('level')
		)
		const filteredCollections = collections.filter((collection) =>
			collection.slug.includes('level') ? null : collection.slug
		)

		return {
			props: {
				filteredCollections,
				levelCollections,
			},
			revalidate: 60,
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}

export default GenresPage
