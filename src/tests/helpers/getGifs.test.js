import { getGifs } from "../../helpers/getGifs";

describe('Pruebas en getGifs Fetch', () => {
   
    test('debe retornar 10 elementos', async () => {
        
        const gifs = await getGifs('Naruto');

        expect( gifs.length ).toBe( 10 );

    });


    test('debe retornar un arreglo vacio', async () => {
       
        const gifs = await getGifs('');

        expect( gifs.length ).toBe( 0 );

    });
    
    

});
