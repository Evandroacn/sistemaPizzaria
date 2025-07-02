//Desenha lista
function criarCardPedido(pedido) {
    const cardPedido = document.querySelector(".card");

    const card = document.createElement("div");
    card.className = "bg-[#222222] rounded-xl border-2 border-[#141414] p-4";

    //Cabeçalho do card
    const header = document.createElement("div");
    header.className = "flex justify-between text-white mb-2";

    const titulo = document.createElement("span");
    titulo.className = "font-semibold";
    titulo.textContent = `Pedido ${pedido.numeroPedido}°`;

    const link = document.createElement("a");
    link.className = "trash";
    link.dataset.numeroPedido = pedido.numeroPedido;

    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" class="size-6 mx-auto hover:stroke-orange-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
        </svg>
    `;
    link.innerHTML = svg;

    header.appendChild(titulo);
    header.appendChild(link);

    //Informações do pedido
    const info = document.createElement("div");
    info.className = "text-sm text-white space-y-1";
    info.innerHTML = `
        <p><strong>Mesa:</strong> ${pedido.numeroMesa}</p>
        <p><strong>Sabor:</strong> ${pedido.tipoPizza}</p>
        <p><strong>Tamanho:</strong> ${pedido.tamanho}</p>
        <p><strong>Observação:</strong> ${pedido.observacao}</p>
    `;

    //Montagem final
    card.appendChild(header);
    card.appendChild(info);
    cardPedido.appendChild(card);
}