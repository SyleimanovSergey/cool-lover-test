import React, { ChangeEvent } from 'react';

import { useTypeSelector } from 'hooks/useTypeSelector';
import { useProfileAction, useSortAction } from 'hooks/useActions';
import { getProfiles, getSortParameters } from 'redux/selector';
import { ProfileReduceInterface } from 'types/types-redux';

import styles from './index.module.scss';

const Search: React.FC = () => {
	const { searchValue } = useTypeSelector(getSortParameters);
	const { profiles } = useTypeSelector(getProfiles);
	const { setSortValue } = useSortAction();
	const { setSortProfile } = useProfileAction();

	let sortListProfile: ProfileReduceInterface[] = [
		...profiles.filter((profile) => profile.name.first.includes(searchValue))
		// ...profiles.filter((profile) => profile.name.last.includes(searchValue)),
		// ...profiles.filter((profile) =>
		// 	profile.location.city.includes(searchValue)
		// ),
		// ...profiles.filter((profile) =>
		// 	profile.location.country.includes(searchValue)
		// )
	];

	const changeInputSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSortProfile([]);
		setSortValue(e.target.value);
		setSortProfile(sortListProfile);
	};

	return (
		<div className={styles.searchBlock}>
			<label className={styles.searchLabel} htmlFor="search">
				<input
					id="search"
					type="text"
					className={styles.searchInput}
					value={searchValue}
					onChange={changeInputSearch}
				/>
			</label>
		</div>
	);
};

export default Search;
