function login() {

    // Pegando os dados digitados
    let usuario = document.getElementById("usuario").value;

    let senha = document.getElementById("senha").value;


    // Verificando usuário e senha
    if (usuario === "admin" && senha === "1234") {

        document.getElementById("resultado").textContent =
            "Login realizado com sucesso!";

    } else {

        document.getElementById("resultado").textContent =
            "Usuário ou senha incorretos.";
    }
}
// Variável criada fora da função
// para não perder o valor entre uma tentativa e outra
let tentativas = 0;


/*
function login() {

    // Verifica se o usuário já atingiu o limite
    if (tentativas >= 3) {

        document.getElementById("resultado").textContent =
            "Acesso bloqueado.";

        return;
    }


    // Pega os dados digitados
    let usuario = document.getElementById("usuario").value;

    let senha = document.getElementById("senha").value;


    // Verifica login
    if (usuario === "admin" && senha === "1234") {

        document.getElementById("resultado").textContent =
            "Login realizado com sucesso!";

    } else {

        // Aumenta a quantidade de tentativas
        tentativas++;


        if (tentativas >= 3) {

            document.getElementById("resultado").textContent =
                "Usuário ou senha incorretos. " +
                "Você atingiu o limite de tentativas. " +
                "Acesso bloqueado.";

        } else {

            document.getElementById("resultado").textContent =
                "Usuário ou senha incorretos. " +
                "Tentativa " + tentativas +
                " de 3.";
        }
    }
}
*/