import React from 'react';
import { ProfileItemInterface } from 'types/types-components';
import { DateTime, Settings } from 'luxon';

import { typeAge } from 'utils/typeYears';

import styles from './index.module.scss';

const ProfileItem: React.FC<ProfileItemInterface> = (props) => {
	const { nameUser, dob, location, gender, registered, picture } = props;
	Settings.defaultLocale = 'ru';
	const dateRegistration = DateTime.fromISO(registered.date).toLocaleString(
		DateTime.DATE_FULL
	);

	const typeGender = gender === 'male' ? 'Мужской' : 'Женский';

	return (
		<div className={styles.profileItem}>
			<img className={styles.image} src={picture.large} alt={nameUser.first} />
			<div className={styles.data}>
				<p className={styles.text}>
					{nameUser.first} {nameUser.last}
				</p>
				<p className={styles.textTitle}>
					Возраст{' '}
					<span className={styles.text}>
						{dob.age} {typeAge(dob.age)}
					</span>
				</p>
				<p className={styles.textTitle}>
					Пол <span className={styles.text}>{typeGender}</span>
				</p>
				<p className={styles.textTitle}>
					Адрес{' '}
					<span className={styles.text}>
						{location.city},{location.country}
					</span>
				</p>
				<p className={styles.textTitle}>
					Регистрация <span className={styles.text}>{dateRegistration}</span>
				</p>
			</div>
		</div>
	);
};

export default ProfileItem;
