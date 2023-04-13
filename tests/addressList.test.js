import AddressList from "src/pages/index/addressList/addressList";
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({adapter: new Adapter()});

// eslint-disable-next-line no-undef
it('CheckboxWithLabel changes the text after click', () => {
  // Render a checkbox with label in the document
  const checkbox = shallow(<AddressList A='A' B='B' />);
  // eslint-disable-next-line no-undef
  expect(checkbox.text()).toBe('B');
});

