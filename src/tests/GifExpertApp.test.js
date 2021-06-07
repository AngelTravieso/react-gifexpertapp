import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Pruebas en <GifExpert />', () => {
    
    test('se debe mostrar correctamente', () => {
       
        const wrapper = shallow( <GifExpertApp /> );
        expect( wrapper ).toMatchSnapshot();

    });


    test('debe de mostrar una lista de categorias', () => {
       
        const categories = ['Bleach', 'Naruto'];
        const wrapper = shallow( <GifExpertApp defaultCategories={ categories } /> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );

    });
    
    

});
