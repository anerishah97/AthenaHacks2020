<!DOCTYPE html>
<html>
<head>
	<title>Post</title>
	<link rel="stylesheet" href="homestyles.css">
	<style>
		body
		{
			font-family: lato;
			display: block;
			overflow: auto;
			background-repeat: repeat-y;		
		}
		html
		{
			overflow: visible;
		}
		#profile
		{
			border-radius: 50%;
			border: 2px solid white;
			margin-top: 20px;
			margin-left: 30px;
			display: inline-block;
		}
		#user
		{
			display: inline-block;
		}
		h1
		{
			display: inline-block;
			color: white;
			margin-left: 10px;
		}
		#content
		{
			text-align: left;
		}
		#posts
		{
			color: white;
			margin-left: 40px;
			padding-bottom: 20px;
			display: inline-block;
			border-bottom: 2px solid white;
		}
		.vline
		{
			display: inline-block;
			border-left: 3px solid white;
			height: 300px;
			margin-right: 260px;
			float: right;
		}
		#categories
		{
			display: inline-block;
			color: white;
			margin-left: 550px;
			padding-bottom: 20px;
			border-bottom: 2px solid white;
		}
		.hrs
		{
			display: inline-block;
		}
		.tags
		{
			color: white;
			border: 1px solid white;
			padding: 10px;
			margin-left: 20px;
			border-radius: 5px 5px 5px 5px;
			width: 150px;
			background-color: none;
		}
		.tags:hover
		{
			background-color: #C3073F;
		}
		.toggled
		{
			color: white;
			border: 1px solid white;
			padding: 10px;
			margin-left: 20px;
			border-radius: 5px 5px 5px 5px;
			width: 150px;
			background-color: #C3073F;
		}

		#allPosts
		{
			display: inline-block;
			float: left;
		}

		.box1 
		{
		  width: 600px;
		  margin-left: 100px;
		  margin: 20px auto;
		  border: 2px solid #C3073F;
		  padding: 20px;
		  text-align: left;
		  font-weight: 900;
		  color: #C3073F;
		  font-family: arial;
		  position: relative;
		  background-color: black;
		  opacity: 0.5;
		}

		.box1reply
		{
		  width: 400px;
		  margin-left: 100px;
		  margin: 50px auto;
		  border: 2px solid #C3073F;
		  padding: 20px;
		  text-align: left;
		  font-weight: 900;
		  color: #C3073F;
		  font-family: arial;
		  position: relative;
		  background-color: black;
		  opacity: 0.5;
		}

		.sb:before 
		{
		  content: "";
		  width: 0px;
		  height: 0px;
		  position: absolute;
		  border-left: 10px solid #C3073F;
		  border-right: 10px solid transparent;
		  border-top: 10px solid #C3073F;
		  border-bottom: 10px solid transparent;
		  right: -20px;
		  top: 6px;
		}

		.replyButton
		{
			color: #C3073F;
			text-decoration: underline;
			float: right;
			margin-top: : -3	0px;
		}
		.sb:after 
		{
		  content: "";
		  width: 0px;
		  height: 0px;
		  position: absolute;
		  border-left: 9px solid #000;
		  border-right: 8px solid transparent;
		  border-top: 9px solid #000;
		  border-bottom: 8px solid transparent;
		  right: -11px;
		  top: 10px;
		}

		.sbreply:before 
		{
		  content: "";
		  width: 0px;
		  height: 0px;
		  position: absolute;
		  border-left: 10px solid transparent;
		  border-right: 10px solid #C3073F;
		  border-top: 10px solid #C3073F;
		  border-bottom: 10px solid transparent;
		  left: -20px;
		  top: 6px;
		}
		.sbreply:after 
		{
		  content: "";
		  width: 0px;
		  height: 0px;
		  position: absolute;
		  border-left: 9px solid transparent;
		  border-right: 8px solid #000;;
		  border-top: 9px solid #000;
		  border-bottom: 8px solid transparent;
		  left: -11px;
		  top: 10px;
		}

		.actual
		{
			color: white;
			margin: 0px;
			padding: 5px;
		}

		.modal
		{
				display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); //
		}


		label
		{
			color: black;		
			font-weight: bolder;
			margin-right: 30px !important; 
		}
		.modal-content
		{
			border: 4px solid #C3073F;
			background-color: #FEFEFE;
	  		margin: auto;
	  		padding: 20px;
 	  		width: 50%;
	  		padding-left: 100px;
	  		text-align: left;
		}
		form
		{
			margin-top: 30px;
		}
		#postBtn
		{
			margin-left: 40%;
		}
		#response
		{
			margin-left: 30%;
			color: black;
			border: 2px solid black;
			padding: 10px;
			font-weight: bolder;
			background-color: transparent;
			width: 100px;
		}
		#question
		{
			border: 2px solid black;
		}
		.formfield
		{
			vertical-align: middle;
		}
		#category
		{
			padding: 10px;
			border: 2px solid black;
		}
		#postBtn
		{
			color: black;
			border: 2px solid black;
			padding: 10px;
			font-weight: bolder;
			background-color: transparent;
			width: 100px;
		}
		label textarea
		{
			vertical-align: top;
			margin-left: 30px;
		}
	</style>
</head>
<body >
	<div id="user">
		<img src="choosecategory/bp.png" id="profile" width="50" height="50"> 
		<h1>Hello, Feya</h1>
	</div>
	<div id="content">
		<h2 id="posts">Top Posts For You &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
		<h2 id="categories">Categories &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
		<br>
		<div id="maincontent">
			<div id="allPosts" style="float: left;margin-left: 100px;">
				<div class="box1 sbreply menstruation">
					<p class="actual">Can i have sex when I am on my period?</p>
					<p class="replyButton">Reply</p>
				</div>	
				<div class="box1reply sb menstruation">
					<p class="actual">Unless you're especially squeamish, there's no need to avoid sexual activity during your period. Though period sex can be a bit messy, it is safe. And, having sex when you're menstruating can actually offer a few advantages, including relief from menstrual cramps.</p>
				</div>
				<div class="box1 sbreply safesex">
					<p class="actual">What are commonly transmitted STDs?</p>
					<p class="replyButton">Reply</p>
				</div>	
				<div class="box1reply sb safesex">
					<p class="actual">The most common sexually transmitted infections in the United States are HPV, chlamydia and gonorrhea.</p>
				</div>
				<div class="box1 sbreply safesex">
					<p class="actual">Would you always need to wear a condom when having intercourse?</p>
					<p class="replyButton">Reply</p>
				</div>	
				<div class="box1reply sb safesex">
					<p class="actual">Yes. STD prevention as well as AIDS prevention (and pregnancy prevention) are important reasons for condom use. Refraining from having unprotected sexual intercourse with an infected partner is the best way to achieve AIDS prevention and other STD prevention. Latex condoms are highly effective and when used consistently and correctly.  Many people find that once they get used to condoms, they do not interfere with sex at all.  In fact, many people report that using condoms make sex more enjoyable because they are not worried about getting an STD.</p>
				</div>
				<button class="tags" style="background-color: transparent; float: right;margin-bottom: 20px;" onclick="popUpForm()">POST A QUESTION</button>
			</div>
			<div class="vline">
				<h3 class="tags" id="an-btn-menstruation" onclick="changeColor(this, 'menstruation')">Menstruation</h3>
				<h3 class="tags" id="an-btn-safesex" onclick="changeColor(this, 'safesex')">Safe Sex</h3>
			</div>
		</div>
	</div>
	<div id="myModal" class="modal">
		<div class="modal-content">
		<form method="POST" id="postQuestion">
			<label>Category :</label>
			<select id="category">
				<option>Menstruation</option>
				<option>Safe Sex</option>
			</select><br><br><br>
			<label>Question :
			<textarea rows="10" cols="50" id="question"></textarea></label><br><br><br>
			<input type="submit" id="postBtn" onclick="submitData()"></input>
		</form>
	</div>
</div>
	<div id="ReplyModal" class="modal">
		<div class="modal-content">
		<form method="POST" id="replyResponse">
			<label>Reply :
			<textarea rows="10" cols="50" id="question"></textarea></label><br><br><br>
			<input type="submit" id="response" onclick="submitReply()"></input>
		</form>
	</div>
	</div>
	<script>
		function changeColor(property, x)
		{


			console.log(x);

			if(x == "menstruation")
			{
				var toShow = document.getElementsByClassName("menstruation");
				var toHide = document.getElementsByClassName("safesex"); 

				console.log("toShow " + toShow.length);
				for(var i = 0;i<toShow.length; i++)
				{
					toShow[i].style.display = "block";
				}


				for(var i = 0;i<toHide.length; i++)
				{
					toHide[i].style.display = "none";
				}

				document.getElementById("an-btn-menstruation").className = 'toggled';
								document.getElementById("an-btn-safesex").className = 'tags';

			}

		if(x == "safesex")
			{
				var toShow = document.getElementsByClassName("safesex");
				var toHide = document.getElementsByClassName("menstruation"); 

				console.log("toShow " + toShow.length);
				for(var i = 0;i<toShow.length; i++)
				{
					toShow[i].style.display = "block";
				}


				for(var i = 0;i<toHide.length; i++)
				{
					toHide[i].style.display = "none";
				}
				document.getElementById("an-btn-safesex").className = 'toggled';
								document.getElementById("an-btn-menstruation").className = 'tags';

				
			}



			// if (property.className != 'toggled') 
			// {
	  //      		property.className = 'toggled';
	  //   	}
	  //  		else 
	  //  		{
	  //       	property.className = 'tags';
	  //   	}
		}
		function popUpForm()
		{
			var modal = document.getElementById("myModal");
			modal.style.display = "block";
		}
		/*function submitData()
		{
			var data = new FormData();
      		data.append('question', document.getElementById("question").value);
   
      // AJAX CALL
	      		var xhr = new XMLHttpRequest();
	      		xhr.open('POST', "postquestion.php", true);
	      		xhr.onload = function () {
	        	var res = JSON.parse(this.response);
	        	console.log(res);
	        	if (res.status) {
	          // OK - DO SOMETHING
	          	alert(res.message);
	        	} else {
	          // ERROR - DO SOMETHING
	          	alert(res.message);
	        	}
	      		};
      		xhr.send(data);
		}*/

		/*function loadAllPosts()
		{
			var res;
			var i = 0;
			var xhr = new XMLHttpRequest();
	      	xhr.open('GET', "loadposts.php", true);
	      	xhr.onload = function () {
	      		console.log(this.responseText);
	        res = JSON.parse(this.responseText);
	        console.log(res);
	        var postsDiv = document.getElementById("allPosts");
      		for(i = 0; i < res.length; i++)
      		{
      			var postDiv = document.createElement("div");
      			postDiv.setAttribute("class", "box1 sbreply");
      			var content = document.createElement("p");
      			content.setAttribute("class", "actual");
      			content.innerHTML = res[i];
      			var replyBtn = document.createElement("p");
      			replyBtn.setAttribute("class", "replyButton");
      			replyBtn.innerHTML = "Reply";
      			postDiv.appendChild(content);
      			postDiv.appendChild(replyBtn);
      			postsDiv.insertBefore(postDiv, postsDiv.childNodes[0]);	
      		}
      		activateReply();
	      	};
      		xhr.send();
		}*/

		function activateReply()
		{
			console.log("HEYA");
      		var replyLinks = document.getElementsByClassName("replyButton");
      		console.log("LENGTH"+replyLinks.length);
      		for(var i = 0; i < replyLinks.length; i++)
      		{
      			replyLinks[i].addEventListener("click", showReplyModal);
      		}
		}

		function showReplyModal()
		{
			console.log("Hjkfkj");
			var modal = document.getElementById("ReplyModal");
			modal.style.display = "block";
		}
/*
		function submitReply()
		{	
			var postDiv = document.createElement("div");
      		postDiv.setAttribute("class", "box1reply sbr");
      		var content = document.createElement("p");
      		content.setAttribute("class", "actual");
      		content.innerHTML = res[i];
      		postDiv.appendChild(content);
      		postsDiv.insertBefore(postDiv, postsDiv.childNodes[0]);	
		}*/
	</script>
</body>