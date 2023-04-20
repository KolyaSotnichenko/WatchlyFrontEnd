import { FC } from 'react'

import Description from '@/components/ui/heading/Description'
import Heading from '@/components/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

import CollectionItem from './CollectionItem'
import styles from './Collections.module.scss'
import { ICollection } from './collections.interface'

const title = 'Discovery'
const description = 'In this section you will find all genres on our site'

const Collections: FC<{
	filteredCollections: ICollection[]
	levelCollections: ICollection[]
}> = ({ filteredCollections, levelCollections }) => {
	return (
		<Meta title={title} description={description}>
			<Heading title={title} className={styles.heading} />
			<Description text={description} className={styles.description} />

			<section className={styles.collections}>
				{levelCollections.map((level) => (
					<CollectionItem key={level._id} collection={level} />
				))}
			</section>

			<section className={styles.collections}>
				{filteredCollections.map((collection) => (
					<CollectionItem key={collection._id} collection={collection} />
				))}
			</section>
		</Meta>
	)
}

export default Collections
