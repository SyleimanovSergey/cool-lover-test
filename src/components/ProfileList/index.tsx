import React, { useEffect } from 'react';
import { useTypeSelector } from 'hooks/useTypeSelector';
import { getProfiles, getSortParameters } from 'redux/selector';
import ProfileItem from '../ProfileItem';
import { ProfileReduceInterface } from 'types/types-redux';

import styles from './index.module.scss';

const ProfileList: React.FC = () => {
	const { profiles, sortProfile } = useTypeSelector(getProfiles);
	const { searchValue, age, gender } = useTypeSelector(getSortParameters);
	let renderList: ProfileReduceInterface[] = [];

	const onTypeSelectList = () => {
		if (sortProfile.length > 0 || searchValue.length > 0 || age.length > 0) {
			return (renderList = sortProfile);
		} else {
			return profiles.length > 0
				? (renderList = profiles)
				: (renderList = JSON.parse(localStorage.getItem('profiles') as string));
		}
	};
	onTypeSelectList();
	useEffect(() => onTypeSelectList(), [searchValue, age, gender]);


	return (
		<div className={styles.profileList}>
			{renderList &&
				renderList.map((profile) => (
					<ProfileItem
						key={profile.id.value + profile.name.last + profile.registered.date}
						nameUser={profile.name}
						dob={profile.dob}
						location={profile.location}
						gender={profile.gender}
						registered={profile.registered}
						picture={profile.picture}
					/>
				))}
		</div>
	);
};

export default ProfileList;
