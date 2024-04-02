import { should, expect } from 'chai';
should();

describe('conjunto de pruebas de enteros', () => {
    it('igualdad de numero', () => {
        const sumado = 2 + 2;
        assert.equal(sumado, 4)
    });

    it('si es un string', function () {
        const palabra = 'hola';
        palabra.should.be.a('string')
    })
});



describe('conjunto de pruebas de enteros', () => {
    it('si es un string', () => {
        const palabra = 'hola';
        palabra.should.be.a('string');
    });
    it('si existe cuaderno en objeto', function () {
        const jwt = {
            user: 'cuaderno',
            age: 26
        };
        expect(jwt).to.have.property('user');
    });
});
