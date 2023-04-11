import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

// import Enzyme from 'enzyme';
// import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'; //  临时版本React 更新 17 版本，暂未更新Enzyme最新版本。

// Enzyme.configure({ adapter: new EnzymeAdapter() })