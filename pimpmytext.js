function myFunction()
{
	document.getElementById("textAreaText").style.fontSize = "24pt";
}
function Hamidulloh()
{
	document.getElementById("textAreaText").style.fontWeight = "bold";
	document.getElementById("textAreaText").style.textDecoration = "underline";
	document.getElementById("textAreaText").style.color = "green";
	document.getElementById("textAreaText").style.textDecoration = "blink";
}
function Temur()
{
	document.getElementById("textAreaText").style.textTransform = "uppercase";
	var str=document.getElementById("textAreaText").value;
	var parts = str.split(" ");
	str = parts.join("-izzle  ");
	document.getElementById("textAreaText").value=str;
}