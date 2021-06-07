import React from 'react';
import { GifGrid } from '../../components/GifGrid';
import { shallow } from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    const category = 'Bleach';
    
    test('debe mostrarse correctamente ', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        
        const wrapper = shallow( <GifGrid category={ category } /> );
        expect( wrapper ).toMatchSnapshot();

    });


    test('debe de mostrar items cuando se cargan imagenes useFetch', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https:://localhost/prueba.jpg',
            title: 'prueba'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

       
        const wrapper = shallow( <GifGrid category={ category } /> );
        expect( wrapper ).toMatchSnapshot();

    });
    
    


});
