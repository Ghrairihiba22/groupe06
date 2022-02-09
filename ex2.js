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


Function date {
Var d =new date ();
Var x = d.getday();
SWitch(x) {
Case 0 :
Document .getelementbyid("res")Inner.html="On est "+"Dimanche ;
Case1:
Document .getelementbyid("res")Inner.html="On est"+" lundi ;
Break ;
}


</script>
</body>