const pessoas = [
    {
        nome: 'Julio',
        cpf: '12345678-9',
        frutasfavoritas:['maçã', 'abacaxi']
    },

    {
        nome: 'Isabelle',
        cpf: '98765432-1',
        frutasfavoritas:['pera', 'uva']
    },
    {
        nome: 'Priscila',
        cpf: '98765432-2',
        frutasfavoritas:['mamão', 'banana']
    },

    {
        nome: 'Lucas Dias',
        cpf: '98765632-2',
        frutasfavoritas:['abacate', 'tangerina']
    },
    {
        nome: 'Carlos Berner',
        cpf: '98765892-8',
        frutasfavoritas:['manga', 'goiaba']
    },
        {
        nome: 'Camila Monteiro',
        cpf: '98765872-3',
        frutasfavoritas:['manga', 'goiaba']
    },
    {
        nome: 'Julio',
        cpf: '98765872-7',
        frutasfavoritas:['maracuja', 'goiaba']
    }
    
];

/* Gatilho: Quando tenho que navegar em uma lista,
eu uso um laço de repetição */

for (let indice = 0; indice < pessoas.length; indice++ ){
    const nomeDaPessoa = pessoas[indice].nome;
    console.log(nomeDaPessoa);
}