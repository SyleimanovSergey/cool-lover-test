import React, { useEffect, useState } from 'react';
import Search from 'components/Search';
import ProfileList from 'components/ProfileList';
import SortBlock from 'components/Sorting';

import { useProfileAction } from 'hooks/useActions';

import styles from './index.module.scss';

const Users: React.FC = () => {
	const [fetching, setFetching] = useState(false);
	const { fetchProfile, setSortProfile } = useProfileAction();
	const {} = useProfileAction();

	const scrollHandler = () => {
		if (
			document.documentElement.scrollHeight -
				(document.documentElement.scrollTop + window.innerHeight) <
			50
		) {
			setFetching(true);
		} else {
			setFetching(false);
		}
	};

	useEffect(() => {
		document.addEventListener('scroll', scrollHandler);
	}, []);

	useEffect(() => {
		if (fetching) {
			fetchProfile();
		}
	}, [fetching]);

	return (
		<section className={styles.userPage}>
			<Search />
			<SortBlock />
			<ProfileList />
		</section>
	);
};

export default Users;
