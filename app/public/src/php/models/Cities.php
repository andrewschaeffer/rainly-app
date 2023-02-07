<?php
//src/php/models/Cities.php

//Takes the state supplied by the AJAX call in searchView.js and gets all the cities associated with that state

require '../includes/Database.php';

$db = new Database();
$conn = $db->getConn();
$q = $_GET['q'];

//First get STATE_ID using the $_GET URL string
$sqlStateId = 'SELECT ID FROM US_STATES
                WHERE STATE_CODE = :q';

$stmt = $conn->prepare($sqlStateId);
$stmt->bindValue(':q', $q, PDO::PARAM_STR);

$stmt->execute();

$stmt->setFetchMode(PDO::FETCH_ASSOC);
$row = $stmt->fetch();

$id = $row['ID'];
// echo $id;

//Now join the state and city tables to select all cities that match the id above

$sqlCities =   'SELECT CITY FROM US_CITIES
                JOIN US_STATES
                    ON US_CITIES.ID_STATE = US_STATES.ID
                WHERE US_STATES.ID = :id';

$stmt2 = $conn->prepare($sqlCities);
$stmt2->bindValue(':id', $id, PDO::PARAM_INT);

$stmt2->execute();

//****Fetching results as associative array in a column
$stmt2->setFetchMode(PDO::FETCH_ASSOC);
$row2 = $stmt2->fetchAll(PDO::FETCH_COLUMN);
// var_dump($row2); //0 => string 'Aberdeen' (length=8), etc...


//Traverse the array to get the value

echo "<option
                class='form-container__city-option placeholder'
                value=''
                disabled
                selected
                hidden
              >
                Click to select your city
              </option>";

foreach($row2 as $key => $value)
{
    echo "<option class='form-container__city-option' value='{$value}'>{$value}</option>";
}

