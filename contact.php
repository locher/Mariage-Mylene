<?php

$name = $_POST['name'];
$email = $_POST['email'];
$participation = $_POST['participation'];
$accompagnant = $_POST['accompagne'];
$noms_accompagnant = $_POST['nom_accompagnants'];
$chambre = $_POST['chambre'];
$nb_chambre = $_POST['nb_chambre'];
$message = $_POST['message'];

if($accompagnant == ""){
	$accompagnant = "Non accompagné";
}

if($noms_accompagnant == ""){
	$noms_accompagnant = "Non renseigné";
}

if($noms_accompagnant == ""){
	$noms_accompagnant = "Non renseigné";
}

if(isset($participation) && isset($name) && $name != ""){


// Page de confirmation
	
echo('<html><head>
    <meta charset="UTF-8">
        <title>Récapitulatif de votre inscription</title>
        <link rel="stylesheet" href="stylesheets/styles.css">
    </head>
    <body class="mail wrapper">

    	<h2 class="classic-h2">Merci pour votre réponse :)</h2>
    	<ul>
    	    <li><b>Votre nom : </b>'.$name.'</li>
    		<li><b>Votre email : </b>'.$email.'</li>
    		<li><b>Participation : </b>'.$participation.'</li>
    ');

if($accompagnant == 'oui'){
	echo('<li><b>Viendra accompagné : </b>'.$accompagnant.'</li>
    		<li><b>Vous viendrez avec : </b>'.$noms_accompagnant.'</li>');
}

if($chambre == 'oui'){
	echo('<li><b>Vous prendrez une chambre pour : </b>'.$nb_chambre.' personne(s)</li>');
}   		
    		
if($message != ''){
	echo '<li><b>Vous avez laissé ce message : </b>'.$message.'</li>';
}

echo('
    	</ul>

	<a href="index.html" class="bt">Retourner sur le site</a>

    </body>
    </html>

    ');


// Envoi d'un email aux amoureux

    if($chambre == 'oui'){

            $message = '<html><head>
        <title>Récapitulatif de votre inscription</title>
    </head>
    <body>

        <h2>Nouvelle inscription</h2>
        <ul>
            <li><b>Nom : </b>'.$name.'</li>
            <li><b>Email : </b>'.$email.'</li>
            <li><b>Participation : </b>'.$participation.'</li>
            <li><b>Viendra accompagné : </b>'.$accompagnant.'</li>
            <li><b>Viendra avec : </b>'.$noms_accompagnant.'</li>
            <li><b>Voudrait une chambre pour : </b>'.$nb_chambre.' personne(s)</li>
            <li><b>A laissé ce message : </b>'.$message.'</li>
        </ul>

    </body>
    </html>';

    }

    else{

    $message = '<html><head>
        <title>Récapitulatif de votre inscription</title>
    </head>
    <body>

    	<h2>Nouvelle inscription</h2>
    	<ul>
    	    <li><b>Nom : </b>'.$name.'</li>
    		<li><b>Email : </b>'.$email.'</li>
    		<li><b>Participation : </b>'.$participation.'</li>
 			<li><b>Viendra accompagné : </b>'.$accompagnant.'</li>
    		<li><b>Viendra avec : </b>'.$noms_accompagnant.'</li>
    		<li><b>A laissé ce message : </b>'.$message.'</li>
    	</ul>

    </body>
    </html>';

}

    // Pour envoyer un mail HTML, l'en-tête Content-type doit être défini
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

    $headers .= 'From: '.$name.' <'.$email.'>';

    mail('pamylene@gmail.com', '[Pamylene] '.$name.' a répondu', $message, $headers);

}



?>