YURI MARCHESE REX, 23/09/26.
# 🍫 Rex Doces E Salgados

## 📖 Sobre o Projeto

O **Rex Doces E Salgados** é um site desenvolvido para apresentar e facilitar a venda de produtos de uma doceria. A página possui um catálogo de produtos, campo de busca, carrinho de compras e uma opção para enviar o pedido diretamente pelo WhatsApp.

O projeto foi desenvolvido utilizando **HTML, CSS e JavaScript**, com uma interface inspirada no estilo visual de plataformas de comércio eletrônico.

---

## 🎯 Objetivo

O objetivo do projeto é criar uma página simples e funcional para que o cliente possa:

* Visualizar os produtos disponíveis;
* Pesquisar produtos pelo nome;
* Adicionar produtos ao carrinho;
* Alterar a quantidade de produtos;
* Visualizar o valor total da compra;
* Finalizar o pedido através do WhatsApp.

---

## 🛠️ Tecnologias Utilizadas

### HTML

O HTML é responsável pela estrutura da página. Ele organiza o cabeçalho, campo de pesquisa, informações da equipe, produtos, carrinho e botão de finalização do pedido.

### CSS

O CSS é utilizado para definir a aparência do site. Foram criados estilos para o cabeçalho, logo, campo de pesquisa, produtos, botões, carrinho e adaptação para dispositivos móveis.

### JavaScript

O JavaScript controla as funcionalidades interativas do site, como pesquisa de produtos, gerenciamento do carrinho, alteração das quantidades e envio do pedido para o WhatsApp.

---

## 📂 Estrutura do Projeto

```text
Projeto/
│
├── index.html
├── css/
│   └── estilo.css
├── js/
│   └── estoque.js
└── img/
    ├── rex.png
    ├── img01.png
    ├── img02.png
    ├── img03.png
    ├── img04.png
    ├── img05.png
    └── img06.png
```

## O arquivo HTML importa o CSS `css/estilo.css` e o JavaScript `js/estoque.js`.

# 🖥️ Funcionalidades

## 🔎 Pesquisa de Produtos

O site possui um campo de pesquisa chamado **"Buscar na Doceria..."**.

Quando o usuário digita alguma coisa, a função `filtrarProdutos()` é executada. Ela compara o texto digitado com o nome cadastrado de cada produto e mostra somente os produtos correspondentes.
A busca não diferencia letras maiúsculas e minúsculas, pois o JavaScript transforma os textos para letras minúsculas antes da comparação.

---

## 🛒 Carrinho de Compras

Cada produto possui um botão **"Adicionar ao Carrinho"**.

Ao clicar nesse botão, a função `adicionarAoCarrinho()` adiciona o produto ao carrinho. Caso o produto já esteja presente, sua quantidade é aumentada em vez de criar outro item.

O carrinho é armazenado na variável:

```javascript
let carrinho = [];
```

Cada item possui:

* Nome;
* Preço;
* Quantidade.

---

## ➕➖ Alteração da Quantidade

Dentro do carrinho existem botões `+` e `-`.

A função `alterarQuantidade()` modifica a quantidade de determinado produto. Quando a quantidade chega a zero, o produto é removido do carrinho.

---

## 💰 Cálculo do Total

A função `atualizarInterface()` calcula:

* Quantidade total de produtos;
* Valor total da compra.

O valor de cada produto é multiplicado pela quantidade escolhida e depois os valores são somados.

O número de produtos também aparece no ícone do carrinho localizado no cabeçalho da página.

---

## 🪟 Modal do Carrinho

Ao clicar no ícone do carrinho, a função `abrirModal()` exibe uma janela com os produtos adicionados.

Também existe a função `fecharModal()`, responsável por esconder essa janela novamente. O modal também pode ser fechado clicando fora de sua área de conteúdo.

---

## 📱 Finalização do Pedido pelo WhatsApp

O projeto permite enviar o pedido diretamente para o WhatsApp.

Antes do envio, o JavaScript verifica se o carrinho possui algum produto. Caso esteja vazio, uma mensagem de alerta é exibida.

Quando existem produtos, o sistema monta automaticamente uma mensagem contendo:

* Quantidade de cada produto;
* Nome do produto;
* Subtotal;
* Valor total do pedido.

Depois, o sistema cria um endereço do WhatsApp contendo a mensagem e abre uma nova aba para realizar o envio.

---

# 🍪 Produtos Disponíveis

Atualmente, o catálogo apresenta seis sabores de alfajor:

| Produto             | Preço exibido |
| ------------------- | ------------: |
| Aguila Blanco       |       R$ 9,00 |
| Aguila Brownie      |       R$ 9,00 |
| Aguila Coco         |       R$ 9,00 |
| Aguila Clásica      |       R$ 9,00 |
| Aguila Dark         |       R$ 9,00 |
| Aguila Frutos Rojos |       R$ 9,00 |

## Os produtos estão organizados em uma seção chamada **ALFAJOR** e cada um possui sua própria imagem, nome, preço e botão para adicionar ao carrinho.

# 🎨 Interface

A aparência do site utiliza uma combinação de **laranja, branco e marrom**, seguindo uma identidade visual inspirada na Shopee e adaptada para uma doceria. O CSS define as cores principais por meio de variáveis.

O cabeçalho utiliza um fundo em degradê laranja e permanece fixado no topo da página durante a navegação.

Os produtos são apresentados em cartões organizados automaticamente em uma grade, permitindo que a quantidade de colunas se adapte ao tamanho da tela.

---

# 📱 Responsividade

O projeto possui ajustes específicos para telas menores.

Em dispositivos com largura de até **768 pixels**, alguns elementos são reduzidos ou reorganizados, como a barra superior, o tamanho do logo e o título do banner.

Isso permite que o site seja utilizado também em dispositivos móveis.

---

# 👥 Equipe

A página possui uma seção chamada **"Sobre nossa Equipe"**, onde é informado que o projeto foi desenvolvido por **estudantes do SENAI**.

---

# 📌 Resumo das Funções JavaScript

| Função                   | Responsabilidade                        |
| ------------------------ | --------------------------------------- |
| `filtrarProdutos()`      | Pesquisa e filtra os produtos           |
| `adicionarAoCarrinho()`  | Adiciona produtos ao carrinho           |
| `alterarQuantidade()`    | Aumenta ou diminui a quantidade         |
| `atualizarInterface()`   | Atualiza quantidade e valor do carrinho |
| `abrirModal()`           | Abre o carrinho                         |
| `fecharModal()`          | Fecha o carrinho                        |
| `enviarPedidoWhatsApp()` | Envia o pedido para o WhatsApp          |

---

# ▶️ Como Executar

1. Baixe ou copie os arquivos do projeto.
2. Mantenha a estrutura de pastas indicada neste README.
3. Abra o arquivo `index.html` em um navegador.
4. Utilize o campo de pesquisa para encontrar produtos.
5. Adicione os produtos desejados ao carrinho.
6. Abra o carrinho para conferir os itens e o valor total.
7. Clique em **"Finalizar Pedido via WhatsApp"** para preparar o pedido.

---

# 📄 Arquivos Principais

### `index.html`

Responsável pela estrutura e conteúdo da página.

### `estilo.css`

Responsável pela aparência, organização dos elementos, cores, botões, carrinho e responsividade.

### `estoque.js`

Responsável pelas funcionalidades do sistema, incluindo pesquisa, carrinho, cálculo do total e envio do pedido pelo WhatsApp.

---

## 📌 Status do Projeto

**Projeto funcional em desenvolvimento**, contendo catálogo de produtos, pesquisa, carrinho de compras e integração para envio do pedido pelo WhatsApp.
