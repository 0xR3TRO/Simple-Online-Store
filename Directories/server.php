<?php
// Połączenie z bazą danych
$servername = "localhost";
$username = "root"; // Domyślnie w XAMPP nazwa użytkownika to "root"
$password = ""; // Domyślne hasło jest puste w XAMPP

// Utwórz połączenie
$conn = new mysqli($servername, $username, $password);

// Sprawdź połączenie
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Utwórz bazę danych, jeśli nie istnieje
$sql_create_db = "CREATE DATABASE IF NOT EXISTS zamowienia";
if ($conn->query($sql_create_db) === TRUE) {
    echo "Baza danych 'zamowienia' została pomyślnie utworzona lub już istnieje.<br>";
} else {
    echo "Error creating database: " . $conn->error;
}

// Ustaw bazę danych do użytku
$conn->select_db("zamowienia");

// Utwórz tabelę, jeśli nie istnieje
$sql_create_table = "CREATE TABLE IF NOT EXISTS dane_klientow (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    imie_nazwisko VARCHAR(100) NOT NULL,
    numer_telefonu VARCHAR(30) NOT NULL,
    adres VARCHAR(255) NOT NULL,
    numer_karty VARCHAR(16) NOT NULL,
    miesiac_waznosci VARCHAR(2) NOT NULL,
    rok_waznosci VARCHAR(4) NOT NULL,
    cvv VARCHAR(3) NOT NULL
)";
if ($conn->query($sql_create_table) === TRUE) {
    echo "Tabela 'dane_klientow' została pomyślnie utworzona lub już istnieje.<br>";
} else {
    echo "Error creating table: " . $conn->error;
}

// Pobierz dane z formularza
$name = $_POST['name'];
$phone = $_POST['phone'];
$address = $_POST['address'];
$cardNumber = $_POST['cardNumber'];
$expiryMonth = $_POST['expiryMonth'];
$expiryYear = $_POST['expiryYear'];
$cvv = $_POST['cvv'];

// Wstaw dane do tabeli w bazie danych
$sql_insert_data = "INSERT INTO dane_klientow (imie_nazwisko, numer_telefonu, adres, numer_karty, miesiac_waznosci, rok_waznosci, cvv)
VALUES ('$name', '$phone', '$address', '$cardNumber', '$expiryMonth', '$expiryYear', '$cvv')";

if ($conn->query($sql_insert_data) === TRUE) {
    echo "Dane zostały pomyślnie zapisane.";
} else {
    echo "Error: " . $sql_insert_data . "<br>" . $conn->error;
}

// Zamknij połączenie z bazą danych
$conn->close();
?>