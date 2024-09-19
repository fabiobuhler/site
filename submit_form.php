<?php
// submit_form.php

// Verifica se o formulário foi submetido via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitiza e valida os dados recebidos
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars(trim($_POST["phone"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    // Verifica se os campos obrigatórios estão preenchidos
    if (empty($name) || empty($email) || empty($phone) || empty($message)) {
        echo "Por favor, preencha todos os campos do formulário.";
        exit;
    }

    // Validação adicional de email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Por favor, insira um endereço de email válido.";
        exit;
    }

    // Monta o conteúdo do email
    $email_content = "Nome: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Telefone: $phone\n\n";
    $email_content .= "Mensagem:\n$message\n";

    // Define o destinatário e o assunto
    $recipient = "contato@lunlerplanejados.com.br"; // Substitua pelo seu email
    $subject = "Nova mensagem de contato de $name";

    // Monta os headers do email
    $email_headers = "From: $name <$email>";

    // Envia o email
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        // Redireciona para uma página de sucesso (crie a página conforme necessário)
        header("Location: obrigado.html");
    } else {
        echo "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.";
    }
} else {
    // Não é um método POST
    echo "Método de requisição inválido.";
}
?>
