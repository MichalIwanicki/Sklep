<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Pobierz dane z formularza
    $name    = $_POST["name"]   ?? "";
    $email   = $_POST["email"]  ?? "";
    $message = $_POST["message"] ?? "";

    // Adres docelowy, na który trafi wiadomość
    $to = "michal.iwanicki321@gmail.com";

    // Temat maila
    $subject = "Formularz kontaktowy od: $name";

    // Treść maila
    $body = "Imię i nazwisko: $name\n";
    $body .= "E-mail: $email\n";
    $body .= "Wiadomość:\n$message\n";

    // Nagłówki (ustawiamy 'Reply-To', by można było odpowiedzieć bezpośrednio)
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Wysyłamy mail
    if (mail($to, $subject, $body, $headers)) {
        // Możesz przekierować na stronę z podziękowaniem (lub wyświetlić komunikat)
        header("Location: thankyou.html");
        exit;
    } else {
        echo "Wystąpił błąd przy wysyłaniu wiadomości. Spróbuj ponownie później.";
    }
} else {
    // Jeśli ktoś wejdzie na contact.php bez POST (np. GET), przekieruj go na formularz
    header("Location: kontakt.html");
    exit;
}
?>
