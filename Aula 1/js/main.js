
class List { 

    constructor() { 
        this.data = [] 
    }
    
    add(nome){ 
        this.data.push(nome); 
        console.log(this.data); 
    }
}

class ToList extends List { 

    constructor() { 
        super(); 
        this.usuario = 'Sara'; 
    }

    getUsuario() { 
       console.log(this.usuario) 
    }

    static soma (numero1, numero2) { 
        return numero1 + numero2;
    }
}

const toList = new ToList() 

document.getElementById("novoToDo").onclick = function () { 
    toList.add('Item'); 
    toList.getUsuario(); 
}

console.log(ToList.soma(5, 8)); 


var tipo_var = 'Variável pode ser alterada em qualquer momento'; 

const tipo_const = 'Constante não pode ser modificada após criada'; 

const tipo_const2 = {texto: 'Não pode mudar estrutura'} 
tipo_const2.texto = 'Propriedade alterada';
console.log(tipo_const2)

function testadoTipoVariavel(valor1) {
    let valor2  = 4; 
    if (valor1 >= 2) { 
        valor2 = 6;
        console.log(valor1, valor2);
    }
}
testadoTipoVariavel(10) 