
import '@testing-library/jest-dom';
import { shallow } from 'enzyme'
import AddCategory from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper;

    beforeEach(() => {
        jest.clearAllMocks();

        wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
    });
    
    test('debe mostrarse correctamente', () => {
       
        expect( wrapper ).toMatchSnapshot();

    });


    test('debe de cambiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', { target: { value } } );

        expect( wrapper.find('p').text().trim() ).toBe( value );

    });


    test('No debe postear la informacion onSubmit', () => {
               
        wrapper.find('form').simulate('submit', { preventDefault(){} } );

        expect( setCategories ).not.toHaveBeenCalled();

    });


    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        
        const value = 'Hola Mundo';
        wrapper.find('input').simulate('change', { target: { value } } );

        wrapper.find('form').simulate('submit', { preventDefault(){} } );

        expect( setCategories ).toHaveBeenCalled();

        expect( wrapper.find('input').prop('value')).toBe('');

    });
    
    
    
    

});
