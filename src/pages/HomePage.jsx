import Books from '../components/Home/Books';
import Faq from '../components/Home/Faq';
import Hero from '../components/Home/Hero';
import UserFeedback from '../components/Home/UserFeedback';

const HomePage = () => {
	return (
		<div>
			<Hero />
			<Books />

			<Faq />

			<UserFeedback />
		</div>
	);
};
export default HomePage;
