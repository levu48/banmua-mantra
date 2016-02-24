import React from 'react';
const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import MainLayout from '../main_layout.jsx';
import Hello from '../hello.jsx';

describe('core.components.main_layout', () => {
    it('should contain hello', () => {
        const el = shallow(<MainLayout />);
        expect(el.contains(<Hello/>)).to.be.equal(true);
    });
    
    
});