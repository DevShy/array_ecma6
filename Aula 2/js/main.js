

const array = [1, 2, 3, 4, 5, 8, 9]; 
console.log(array) 



const novoArray = array.map(
    function(item) { 
        return item * 2;
    }
)
console.log(novoArray) 


const multiplos2 = array.filter(
    function(item) {
        return item % 2 == 0;
    }
)
console.log(multiplos2) 


const soma = array.reduce((total, elemento) => total + elemento) 
console.log(soma) 


const encontrar4 = array.find(elemento => elemento === 4)
console.log(encontrar4) 

const teste = () => [1, 2, 3];
console.log(teste()); 

const propriedade = () => {return {nome: 'Lucas'}};
console.log(propriedade());



const somaValoresPadrao = (num1 = 1, num2 = 2) => num1 + num2; 
console.log(somaValoresPadrao()); 
console.log(somaValoresPadrao(2, 5)); 


const usuario = {
    nomeUsuario: 'Lucas',
    idade: 21,
    endereco: {
        rua: 'São joão',
        cidade: 'Jequié'
    }
}
console.log(usuario); 


const nomeUsuarioSemDes = usuario.nomeUsuario;
const idadeSemDes = usuario.idade;
console.log(nomeUsuarioSemDes);
console.log(idadeSemDes);

const {nomeUsuario, endereco:{rua}} = usuario;
console.log(nomeUsuario, rua);

const exibirNomeSemDes = (usuario) => {console.log(usuario.nomeUsuario)};
exibirNomeSemDes(usuario);


const exibirNomeComDes = ({nomeUsuario}) => {console.log(nomeUsuario)};
exibirNomeComDes(usuario);


const {idade, ... resto} = usuario;
console.log(idade); 
console.log(resto); 


const lista = [1, 2, 3, 4];
const [a, b, ...c] = lista;
console.log(a, b); 
console.log(c); 


const somaSemRest = (a, b, c, d) => a + b + c + d;
console.log(somaSemRest(1, 2, 3, 4));


const somaComRest = (...paramentros) => paramentros.reduce((total, proximoElemento) => total + proximoElemento);
console.log(somaComRest(1, 2, 3, 4, 5, 6, 7));


const usuario2 = {
    nomeUsuario2: 'Fernanda',
    idadeUsuario2: 11,
    empresa: 'UESB'
}


const usuario3 = {... usuario2, nomeUsuario2: 'Fernanda Fernanda'};
console.log(usuario2); 
console.log(usuario3); 



const nomeTemp = 'Helena';
const idadeTemp = 10;


console.log('Ola! Meu nome e ' + nomeTemp + ' e minha idade e ' + idadeTemp + ' anos.');


console.log(`Ola! Meu nome e ${nomeTemp} e minha idade e ${idadeTemp}  anos.`);


const usuarioSimples = {
    nomeTemp: 'Marcelo',
    idadeTemp: 12,
    empresa: 'UESB'
}
console.log(usuarioSimples);

const usuarioObjectShortSyntax = {
    nomeTemp, 
    idadeTemp,
    empresa: 'UESB'
}
console.log(usuarioObjectShortSyntax);