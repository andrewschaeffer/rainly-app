<?php
//This code is used only once to produce a list of state options.  After creating the options, I copy and pasted them into the code.  After using this code, you may delete this file from your source code if you wish.

require 'src/php/includes/Database.php';
//Code to get database states
if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $db = new Database();
    $conn = $db->getConn();

    $sql = "SELECT STATE_CODE, STATE_NAME FROM US_STATES
            ORDER BY STATE_CODE ASC;";

    $results = $conn->query($sql);
     
    $stateData = $results->fetchAll(PDO::FETCH_ASSOC);
    print_r($stateData);
}

?>



<!--Code to trigger database results-->



<!-- This file is just for generating a list of states to put in the HTML markup
Click: "get states" to get the states code.  You can open up the browser dev tools and copy the outputed code into your code"-->

<form method="post">
    <button>get states</button>
</form>
<?php foreach($stateData as $state): ?>
           <option class="form-container__state-option" value="<?php echo $state['STATE_CODE'] ?>"><?php echo $state['STATE_NAME'] ?></option>
<?php endforeach ?>