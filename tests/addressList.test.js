import AddressList from "src/pages/addressList/addressList";
import {cleanup, fireEvent, render} from '@testing-library/react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({adapter: new Adapter()});

it('CheckboxWithLabel changes the text after click', () => {
  // Render a checkbox with label in the document
  const checkbox = shallow(<AddressList A="A" B="B" />);
  expect(checkbox.text()).toBe('B');
});

