<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Pega os dados do formulário
    $nome = $_POST['name'];
    $email = $_POST['email'];
    $telefone = $_POST['phone'];
    $mensagem = $_POST['message'];

    // Endereço de e-mail para onde os dados serão enviados
    $to = "fabiobuhler@yahoo.com.br"; // Substitua pelo seu e-mail
    $subject = "Novo contato de Lünler Planejados";
    $body = "Nome: $nome\nEmail: $email\nTelefone: $telefone\nMensagem: $mensagem";

    // Cabeçalhos de e-mail
    $headers = "From: $email";

    // Envia o e-mail
    if (mail($to, $subject, $body, $headers)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Falha no envio da mensagem.";
    }
}
?>
