function sucesso(item) {
    if (item === 'ADC') {
        Swal.fire({
            title: "Pedido Adicionado",
            icon: "success",
            customClass: {
                popup: 'bg-[#222222] text-white rounded-lg p-6',
                title: 'font-bold text-xl mb-2',
                confirmButton: 'bg-green-400 hover:bg-transparent text-white hover:text-green-400 font-semibold px-4 py-2 rounded'
            },
        });
    }
    if (item === 'EDIT') {
        Swal.fire({
            title: "Pedido Atualizado!",
            icon: "success",
            customClass: {
                popup: 'bg-[#222222] text-white rounded-lg p-6',
                title: 'font-bold text-xl mb-2',
                confirmButton: 'bg-green-400 hover:bg-transparent text-white hover:text-green-400 font-semibold px-4 py-2 rounded'
            },
        });
    }
}

function erro(item) {
    if (item === 'NMESA') {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Informe o número da mesa!",
            customClass: {
                popup: 'bg-[#222222] text-white rounded-lg p-6',
                title: 'font-bold text-xl mb-2',
                confirmButton: 'bg-red-400 hover:bg-transparent text-white hover:text-red-400 font-semibold px-4 py-2 rounded'
            },
        });
    }
    if (item === 'TAMANHO') {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Informe o sabor e o tamanho da pizza!",
            customClass: {
                popup: 'bg-[#222222] text-white rounded-lg p-6',
                title: 'font-bold text-xl mb-2',
                confirmButton: 'bg-red-400 hover:bg-transparent text-white hover:text-red-400 font-semibold px-4 py-2 rounded'
            },
        });
    }
    if (item === 'NPEDIDO') {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Informe o número do pedido!",
            customClass: {
                popup: 'bg-[#222222] text-white rounded-lg p-6',
                title: 'font-bold text-xl mb-2',
                confirmButton: 'bg-red-400 hover:bg-transparent text-white hover:text-red-400 font-semibold px-4 py-2 rounded'
            },
        });
    }
    if (item === 'NAOENCONTRADO') {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Pedido não encontrado! Verifique o número digitado.",
            customClass: {
                popup: 'bg-[#222222] text-white rounded-lg p-6',
                title: 'font-bold text-xl mb-2',
                confirmButton: 'bg-red-400 hover:bg-transparent text-white hover:text-red-400 font-semibold px-4 py-2 rounded'
            },
        });
    }
}

function querDeletar(indice, numeroPedido) {
    Swal.fire({
        title: "Você tem certeza?",
        text: "Você não poderá reverter essa ação!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim, deletar!",
        buttonsStyling: false,
        customClass: {
            popup: 'bg-[#222222] text-white rounded-lg p-6',
            title: 'font-bold text-xl mb-2',
            actions: 'gap-2 flex justify-center',
            confirmButton: 'bg-blue-400 outline-none hover:bg-transparent text-white hover:text-blue-400 font-semibold px-4 py-2 rounded',
            cancelButton: 'bg-red-400 hover:bg-transparent hover:text-red-400 px-4 py-2 rounded'
        },
    }).then((result) => {
        if (result.isConfirmed) {
            if (indice !== -1) {
                pedidos.splice(indice, 1);
                renderizaLista();
            }
            Swal.fire({
                title: "Deletado!",
                text: `Pedido ${numeroPedido}° foi deletado`,
                icon: "success",
                customClass: {
                    popup: 'bg-[#222222] text-white rounded-lg p-6',
                    title: 'font-bold text-xl mb-2',
                    confirmButton: 'bg-green-400 outline-none hover:bg-transparent text-white hover:text-green-400 font-semibold px-4 py-2 rounded'
                },
                buttonsStyling: false
            });
        }
    });
}