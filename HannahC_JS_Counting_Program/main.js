var name=prompt("Enter your name")
$("h2").text("Hi, "+name+ "!")

$("#button1").on("click", function(){
	var num1=$("#in1").val()
	for(i=0;i<=num1;i++){
		$("#h4-1").append(i +"<br>")
	}
})

$("#button2").on("click", function(){
	var num2=$("#in2").val()
	for (k=0;k<=num2;k+=2){
		$("#h4-2").append(k +"<br>")
	}
})

function calculate(){
	var field3=document.getElementById("in1").value
	var field4=document.getElementById("in2").value

	var result= parseFloat(field3)+parseFloat(field4)

	document.getElementById("answer").innerHTML="The answer is "+result	
}
function calculate2(){
	var field3=document.getElementById("in1").value
	var field4=document.getElementById("in2").value

	var result= parseFloat(field3)-parseFloat(field4)

	document.getElementById("answer").innerHTML="The answer is "+result
}
function calculate3(){
	var field3=document.getElementById("in1").value
	var field4=document.getElementById("in2").value

	var result= parseFloat(field3)*parseFloat(field4)

	document.getElementById("answer").innerHTML="The answer is "+result
}
function calculate4(){
	var field3=document.getElementById("in1").value
	var field4=document.getElementById("in2").value

	var result= parseFloat(field3)/parseFloat(field4)

	document.getElementById("answer").innerHTML="The answer is "+result
}

$("#button3").on("click", function add_img(){
	var img=document.createElement("img")
	img.src="https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif"
	document.getElementById("x").appendChild(img)
})