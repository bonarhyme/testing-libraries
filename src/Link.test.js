import renderer from 'react-test-renderer';
import Link from './Link';

it('renders correctly', () => {
  const tree = renderer
    .create(<Link page='http://www.bonarhyme.com'>Bonarhyme</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
