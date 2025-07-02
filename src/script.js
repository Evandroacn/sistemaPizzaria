let pedidos = [
    {
        numeroPedido: 1,
        numeroMesa: 1,
        tipoPizza: "Camarão c/ cream cheese",
        tamanho: "Grande",
        observacao: "Nenhum"
    },
    {
        numeroPedido: 2,
        numeroMesa: 1,
        tipoPizza: "Chocolate",
        tamanho: "Pequena",
        observacao: "Nenhum"
    },
    {
        numeroPedido: 3,
        numeroMesa: 2,
        tipoPizza: "Camarão c/ catupiry",
        tamanho: "Grande",
        observacao: "Nenhum"
    },
    {
        numeroPedido: 4,
        numeroMesa: 2,
        tipoPizza: "Frango c/ cream cheese",
        tamanho: "Grande",
        observacao: "Nenhum"
    },
    {
        numeroPedido: 5,
        numeroMesa: 3,
        tipoPizza: "Carbonara",
        tamanho: "Média",
        observacao: "Nenhum"
    },
];

//Atualiza o desenho da lista
function renderizaLista() {
    const container = document.getElementById("card"); 

    container.innerHTML = '';

    for (let pedido of pedidos) {
        criarCardPedido(pedido);
    }

    apagaPedido();
}

function gerarNovoId() {
    let maiorId = 0;
    for (let pedido of pedidos) {
        if (pedido.numeroPedido > maiorId) {
            maiorId = pedido.numeroPedido;
        }
    }
    return maiorId + 1;
}

//Eventos de clique no btn
document.querySelector('.btnAdc').addEventListener("click", (e) => {
    e.preventDefault();

    let nMesa = document.querySelector('#mesa').value;
    let sabor = document.querySelector('#sabor').value;
    let tamanho = document.querySelector('#tamanho').value;
    let obs = document.querySelector('#obs').value;

    let novoPedido = {
        numeroPedido: gerarNovoId(),
        numeroMesa: nMesa,
        tipoPizza: sabor,
        tamanho: tamanho,
        observacao: obs
    };

    if (nMesa === '' || nMesa === null || nMesa <= 0) {
        erro("NMESA");
        return;
    }  
    if (sabor === 'selecioneSabor' || tamanho === 'selecioneTamanho') {
        erro("TAMANHO");
        return;
    }
    if (obs === '') {
        pedidos.observacao = "Nenhum"
    } 

    pedidos.push(novoPedido);
    renderizaLista();

    sucesso('ADC');

    document.querySelector('#mesa').value = '';
    document.querySelector('#sabor').value = 'selecioneSabor';
    document.querySelector('#tamanho').value = 'selecioneTamanho';
    document.querySelector('#obs').value = '';
});

let botaoEdit = document.querySelector('.btnEdit');
botaoEdit.addEventListener("click", (e) => {
    e.preventDefault();

    let nPedido = parseInt(document.querySelector('#pedido').value);
    let nMesa = document.querySelector('#mesa').value;
    let sabor = document.querySelector('#sabor').value;
    let tamanho = document.querySelector('#tamanho').value;
    let obs = document.querySelector('#obs').value;

    let indiceDoPedido = -1;
    for (let i = 0; i < pedidos.length; i++) {
        const pedidoAtual = pedidos[i];
        if (pedidoAtual.numeroPedido == nPedido) {
            indiceDoPedido = i;
            break; 
        }
    }

    let pedidoAntigo = pedidos[indiceDoPedido];

    let attPedido = {
        numeroPedido: nPedido,
        numeroMesa: nMesa !== '' ? nMesa : pedidoAntigo.numeroMesa,
        tipoPizza: sabor !== 'selecioneSabor' ? sabor : pedidoAntigo.tipoPizza,
        tamanho: tamanho !== 'selecioneTamanho' ? tamanho : pedidoAntigo.tamanho,
        observacao: obs !== '' ? obs : pedidoAntigo.observacao
    };

    if (nPedido === '' || nPedido === null || nPedido <= 0) {
        erro("NPEDIDO")
        return;
    }
    if (indiceDoPedido === -1) {
        erro("NAOENCONTRADO")
        return;
    }

    pedidos.splice(indiceDoPedido, 1, attPedido);
    renderizaLista();

    sucesso('EDIT');

    document.querySelector('#pedido').value = '';
    document.querySelector('#mesa').value = '';
    document.querySelector('#sabor').value = 'selecioneSabor';
    document.querySelector('#tamanho').value = 'selecioneTamanho';
    document.querySelector('#obs').value = '';
});

function apagaPedido() {
    const btnDel = document.querySelectorAll('.trash');
    btnDel.forEach(botao => {
        botao.addEventListener('click', (e) => {
            const numeroPedido = parseInt(e.currentTarget.dataset.numeroPedido);
            
            const indice = pedidos.findIndex(p => p.numeroPedido === numeroPedido);

            if (indice !== -1) {
                querDeletar(indice, numeroPedido);
            }
        });
    });
}

//Setup
renderizaLista();