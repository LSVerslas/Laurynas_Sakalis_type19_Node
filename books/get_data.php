<?php
// Prisijungimo prie duomenų bazės duomenys
$servername = "localhost";
$username = "jūsų_vartotojas";
$password = "jūsų_slaptažodis";
$dbname = "jūsų_duomenų_bazė";

// Sukurkite prisijungimą prie duomenų bazės
$conn = new mysqli($servername, $username, $password, $dbname);

// Patikrinkite prisijungimą
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Užklausa gauti duomenis
$sql = "SELECT books.id, authors.name, authors.surname, books.title, books.year
        FROM books
        JOIN authors ON books.author_id = authors.id";

$result = $conn->query($sql);

// Jei yra rezultatų, juos paverčiame į JSON ir išvedame
if ($result->num_rows > 0) {
    $rows = array();
    while($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }
    echo json_encode($rows);
} else {
    echo "0 results";
}

// Uždarome prisijungimą prie duomenų bazės
$conn->close();
?>
