// Pegamos o formulário pelo ID
const formulario = document.getElementById("formPedido");

// Adicionamos um evento ao formulário
// O evento acontece quando o usuário clicar em "Finalizar Pedido"
formulario.addEventListener("submit", function(event) {

    // Impede que a página seja recarregada
    event.preventDefault();


    // ==========================================
    // 1. PEGANDO OS DADOS DO FORMULÁRIO
    // ==========================================

    // Pegamos o nome digitado pelo usuário
    const nome = document.getElementById("nome").value;

    // Pegamos o preço do lanche selecionado
    // O value do option é uma string,
    // por isso usamos Number() para transformar em número
    const precoLanche = Number(
        document.getElementById("lanche").value
    );

    // Pegamos a quantidade
    const quantidade = Number(
        document.getElementById("quantidade").value
    );

    // Pegamos o preço da bebida
    const precoBebida = Number(
        document.getElementById("bebida").value
    );


    // ==========================================
    // 2. CALCULANDO O PREÇO DOS LANCHES
    // ==========================================

    // Multiplicamos o preço do lanche
    // pela quantidade escolhida
    const totalLanches = precoLanche * quantidade;


    // ==========================================
    // 3. CALCULANDO O SUBTOTAL
    // ==========================================

    // Somamos os lanches e a bebida
    const subtotal = totalLanches + precoBebida;


    // ==========================================
    // 4. VERIFICANDO SE EXISTE DESCONTO
    // ==========================================

    // Inicialmente o desconto será zero
    let desconto = 0;

    // Verificamos se o subtotal é maior ou igual a 50
    if (subtotal >= 50) {

        // Se for, calculamos 10% de desconto
        desconto = subtotal * 0.10;

    }


    // ==========================================
    // 5. CALCULANDO O TOTAL
    // ==========================================

    // Subtraímos o desconto do subtotal
    const total = subtotal - desconto;


    // ==========================================
    // 6. MOSTRANDO O RESULTADO
    // ==========================================

    // Pegamos a div onde o resultado será mostrado
    const resultado = document.getElementById("resultado");

    // Colocamos as informações dentro da div
    resultado.innerHTML = `
        <h2>Pedido realizado!</h2>

        <p><strong>Cliente:</strong> ${nome}</p>

        <p>
            <strong>Quantidade de lanches:</strong>
            ${quantidade}
        </p>

        <p>
            <strong>Subtotal:</strong>
            R$ ${subtotal.toFixed(2)}
        </p>

        <p>
            <strong>Desconto:</strong>
            R$ ${desconto.toFixed(2)}
        </p>

        <h3>
            Total: R$ ${total.toFixed(2)}
        </h3>
    `;
});