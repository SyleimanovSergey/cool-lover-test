import React, { ChangeEvent, useEffect } from 'react';
import { useTypeSelector } from 'hooks/useTypeSelector';
import { getProfiles, getSortParameters } from 'redux/selector';
import { useProfileAction, useSortAction } from 'hooks/useActions';

import { numberRangeAge } from '../../utils/numberRangeAge';

import styles from './index.module.scss';

const SortBlock: React.FC = () => {
	const { age, gender } = useTypeSelector(getSortParameters);
	const { profiles, sortProfile } = useTypeSelector(getProfiles);
	const { setSortAge, setSortGender } = useSortAction();
	const { setSortProfile } = useProfileAction();

	useEffect(() => {
		const rangeAge = numberRangeAge(age);
		let resultSortAge;
		if (sortProfile.length !== 0) {
			resultSortAge = sortProfile.filter((profile) =>
				rangeAge.includes(Number(profile.dob.age))
			);
			setSortProfile(resultSortAge);
		} else {
			resultSortAge = profiles.filter((profile) =>
				rangeAge.includes(Number(profile.dob.age))
			);
			setSortProfile(resultSortAge);
		}
	}, [age]);

	useEffect(() => {
		if (gender === '') {
			setSortProfile(profiles);
		} else {
			setSortProfile(profiles.filter((profile) => profile.gender === gender));
		}
	}, [gender]);

	const onRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSortGender(e.target.value);
	};

	const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setSortAge(value);
	};

	return (
		<div className={styles.sortBlock}>
			<div className={styles.radioGender}>
				<p className={styles.title}>Фильтрация по полу </p>
				<label htmlFor="genderAll">
					<input
						type="radio"
						id="genderAll"
						name="gender"
						className={styles.radio}
						value=""
						checked={gender === ''}
						onChange={onRadioChange}
					/>
					Все
				</label>
				<label>
					<input
						type="radio"
						name="gender"
						className={styles.radio}
						value="female"
						checked={gender === 'female'}
						onChange={onRadioChange}
					/>
					Только женщины
				</label>
				<label>
					<input
						type="radio"
						name="gender"
						className={styles.radio}
						value="male"
						checked={gender === 'male'}
						onChange={onRadioChange}
					/>
					Только мужчины
				</label>
			</div>
			<div className={styles.checkboxAge}>
				<p className={styles.title}>Фильтрация по возрасту </p>
				<label className={styles.labelCheckbox}>
					<input
						type="checkbox"
						className={styles.checkbox}
						value="0-18"
						checked={age.includes('0-18')}
						onChange={onCheckboxChange}
					/>
					0-18
				</label>
				<label className={styles.labelCheckbox}>
					<input
						type="checkbox"
						className={styles.checkbox}
						value="18-35"
						checked={age.includes('18-35')}
						onChange={onCheckboxChange}
					/>
					18-35
				</label>
				<label className={styles.labelCheckbox}>
					<input
						type="checkbox"
						className={styles.checkbox}
						value="35-65"
						checked={age.includes('35-65')}
						onChange={onCheckboxChange}
					/>
					35-65
				</label>
				<label className={styles.labelCheckbox}>
					<input
						type="checkbox"
						className={styles.checkbox}
						value="65-150"
						checked={age.includes('65-150')}
						onChange={onCheckboxChange}
					/>
					65+
				</label>
			</div>
		</div>
	);
};

export default SortBlock;
