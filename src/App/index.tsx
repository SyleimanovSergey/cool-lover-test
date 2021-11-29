import React from 'react';
import Users from 'pages/Users';
import { useProfileAction } from 'hooks/useActions';

const App: React.FC = () => {
	const { fetchProfile } = useProfileAction();
	fetchProfile();
	return (
		<main>
			<Users />
		</main>
	);
};

export default App;
