import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import App from './App';
import styles from './styles.module.css';

describe('<App/>', () => {
    //define our test here
    let wrapper;//dom node wrapper element
    beforeEach(() => {
        wrapper = shallow(<App/>)
    })
    it('has a Router component', () => {
        expect(wrapper.find('Router'))
            .to.have.length(1);
    });
});