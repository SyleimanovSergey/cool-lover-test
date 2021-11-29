import React, { ChangeEvent, useEffect } from 'react';

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

	useEffect(() => {
		const sortListProfile: ProfileReduceInterface[] = [
			...profiles.filter((profile) =>
				profile.name.first.toLowerCase().includes(searchValue.toLowerCase())
			)
		];
		console.log(sortListProfile);
		setSortProfile(sortListProfile);
	}, [searchValue]);

	const changeInputSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSortProfile([]);
		setSortValue(e.target.value);
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
