// INSIRA SEU NÚMERO DE WHATSAPP AQUI (Apenas números com DDD e código do país: 55)
const NUMERO_WHATSAPP = "5549999843574";

let carrinho = [];

// Função de busca estilo Shopee
function filtrarProdutos() {
    const termoBusca = document.getElementById('search-input').value.toLowerCase();
    const cards = document.querySelectorAll('.card-produto');

    cards.forEach(card => {
        const nomeProduto = card.getAttribute('data-nome');
        if (nomeProduto && nomeProduto.toLowerCase().includes(termoBusca)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Adicionar item ao carrinho
function adicionarAoCarrinho(nome, preco) {
    const itemExistente = carrinho.find(item => item.nome === nome);

    if (itemExistente) {
        itemExistente.quantidade++;
    } else {
        carrinho.push({ nome, preco, quantidade: 1 });
    }

    atualizarInterface();
}

// Mudar quantidade dentro do carrinho (+ ou -)
function alterarQuantidade(nome, mudanca) {
    const item = carrinho.find(item => item.nome === nome);
    if (item) {
        item.quantidade += mudanca;
        if (item.quantidade <= 0) {
            carrinho = carrinho.filter(i => i.nome !== nome);
        }
    }
    atualizarInterface();
}

// Sincroniza os valores com o topo e o modal do carrinho
function atualizarInterface() {
    const totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
    const valorTotal = carrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);

    // Atualiza a bolinha com o número de itens na barra laranja
    const headerCount = document.getElementById('header-cart-count');
    if (headerCount) headerCount.innerText = totalItens;
    
    // Atualiza o valor total do carrinho
    const modalTotal = document.getElementById('modal-total');
    if (modalTotal) {
        modalTotal.innerHTML = `
            <span>Total:</span>
            <span>R$ ${valorTotal.toFixed(2).replace('.', ',')}</span>
        `;
    }

    const container = document.getElementById('cart-items-container');
    if (!container) return;

    container.innerHTML = '';

    if (carrinho.length === 0) {
        container.innerHTML = '<p style="text-align:center; color:#999; margin: 20px 0;">Seu carrinho está vazio.</p>';
        return;
    }

    carrinho.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <div>
                <strong>${item.nome}</strong>
                <br>
                <small style="color: #666;">R$ ${item.preco.toFixed(2).replace('.', ',')} cada</small>
            </div>
            <div class="cart-item-actions">
                <button class="btn-qtd" onclick="alterarQuantidade('${item.nome}', -1)">-</button>
                <span>${item.quantidade}</span>
                <button class="btn-qtd" onclick="alterarQuantidade('${item.nome}', 1)">+</button>
            </div>
        `;
        container.appendChild(itemDiv);
    });
}

// Abrir e fechar a janelinha do carrinho
function abrirModal() {
    const modal = document.getElementById('cart-modal');
    if (modal) modal.style.display = 'flex';
}

function fecharModal() {
    const modal = document.getElementById('cart-modal');
    if (modal) modal.style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('cart-modal');
    if (event.target === modal) {
        fecharModal();
    }
};

// Enviar carrinho pronto para o WhatsApp
function enviarPedidoWhatsApp() {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    let mensagem = "Olá! Gostaria de fazer um pedido pelo site:\n\n";
    let valorTotal = 0;

    carrinho.forEach(item => {
        const subtotal = item.preco * item.quantidade;
        valorTotal += subtotal;
        mensagem += `• *${item.quantidade}x* ${item.nome} - R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;
    });

    mensagem += `\n*Total do Pedido:* R$ ${valorTotal.toFixed(2).replace('.', ',')}`;
    
    const url = `https://api.whatsapp.com/send?phone=${NUMERO_WHATSAPP}&text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}