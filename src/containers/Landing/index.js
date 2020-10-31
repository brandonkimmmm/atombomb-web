import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import { LandingHero } from '../../components/LandingHero';
import { LandingFunctionalities } from '../../components/LandingFunctionalities';

export const Landing = () => {
	return (
		<Fragment>
			<CssBaseline />
			<main>
				<LandingHero />
				<LandingFunctionalities />
			</main>
		</Fragment>
	);
}