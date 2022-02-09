Ex2 :

<!DOCTYPE html>
<html>
<head>
	<title></title>
    <script type="text/javascript"></script>
</head>
<body>
<H1> affichage de jour de la semaine </h1>
<button onclick=date()>jour de la semaine </button>
<Fieldset>
<input type ="textbox" Id ="res" >
</Fieldset>

<script type="text/javascript">

jours=new array('dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi');
var aujourd'hui=new date();
var result= jours[aujourd'hui.getday()];
		  document.writeln(result);


</script>
</body>
