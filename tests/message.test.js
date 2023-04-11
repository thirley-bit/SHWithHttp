import Message from 'src/pages/message/message';
import {cleanup, fireEvent, render, renderHook} from '@testing-library/react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({adapter: new Adapter()});

const setUp = () => renderHook(({ state }) => 
useState(state),{ initialProps: { state: 0}})

it('message changes the text after click', () => {
  // Render a checkbox with label in the document
  const checkbox = shallow(<Message students="On"  />);
//   expect(checkbox.text()).toBe('B');
});

