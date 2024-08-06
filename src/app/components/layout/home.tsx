import {FC} from 'react';
import HeaderComponet from './header'

interface Props {
	/* props definition */
}

const HomePage: FC<Props> = ({ /* props */ }) => {
	return (
			<HeaderComponet>
				<div>Salom</div>
			</HeaderComponet>
	);
};

export default HomePage;