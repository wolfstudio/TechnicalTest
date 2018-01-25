(function($){

	$(document).ready(function(){
		assignEvents();
	});

	function assignEvents(){
		$('#txtNumberLN').keydown(function(e){
			if(e.keyCode === 13){
				largestNumber();
				return false;
			} else if(e.keyCode === 8 || (e.keyCode >= 96 && e.keyCode <= 105)){
				return true;
			} else {
				return /\d/.test(String.fromCharCode(e.keyCode));
			}
		});

		$('#btnNumberLn').click(function(){
			largestNumber();
		});

		$('#txtIP').keydown(function(e){
			if(e.keyCode === 13){
				validateIPAdress();
				return false;
			} else if(e.keyCode === 8 || e.keyCode === 110 || e.keyCode === 190 || (e.keyCode >= 96 && e.keyCode <= 105)){
				return true;
			} else {
				return /^\s*\d+\s*$/.test(String.fromCharCode(e.keyCode));
			}
		});

		$('#btnIP').click(function(){
			validateIPAdress();
		});

		$('#txtSum').keydown(function(e){
			if(e.keyCode === 13){
				sumDigits();
				return false;
			} else if(e.keyCode === 8 || (e.keyCode >= 96 && e.keyCode <= 105)){
				return true;
			} else {
				return /^\s*\d+\s*$/.test(String.fromCharCode(e.keyCode));
			}
		});

		$('#btnSum').click(function(){
			sumDigits();
		});

		$('#btnProblem').click(function(){
			resolveProblem();
		});

		$('#txtChildren').keydown(function(e){
			if(e.keyCode === 8 || (e.keyCode >= 96 && e.keyCode <= 105)){
				return true;
			} else {
				return /^\s*\d+\s*$/.test(String.fromCharCode(e.keyCode));
			}
		});

		$('#txtCandy').keydown(function(e){
			if(e.keyCode === 8 || (e.keyCode >= 96 && e.keyCode <= 105)){
				return true;
			} else {
				return /^\s*\d+\s*$/.test(String.fromCharCode(e.keyCode));
			}
		});
	}

	function largestNumber(){
		$('#lblNumberLN').attr('class', '');
		$('#lblNumberLN').html('');

		if($('#txtNumberLN').val() === ""){
			$('#lblNumberLN').html('I need a number!');
			$('#lblNumberLN').addClass('center alert alert-danger');
			return false;
		}

		var number = parseInt($('#txtNumberLN').val());
		var newNumber = '';
		for(i = 1; i <= number; i++){
			newNumber += '9';
		}

		$('#lblNumberLN').addClass('center alert alert-success');
		$('#lblNumberLN').html(newNumber);
	}

	function validateIPAdress(){
		$('#lblIP').attr('class', '');
		$('#lblIP').html('');

		if($('#txtIP').val() === ""){
			$('#lblIP').html('Type your IP');
			$('#lblIP').addClass('center alert alert-danger');
			return false;
		}

		var ip = $('#txtIP').val();
		var ipSegments = ip.split('.');
		
		if(ipSegments.length < 4 || ipSegments.length > 4){
			$('#lblIP').html('Your IP have ' + ipSegments.length + ' segments and IPv4 need 4 segments.');
			$('#lblIP').addClass('center alert alert-danger');
			return false;
		}

		for(i = 0; i <= ipSegments.length - 1; i++){
			if(!(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipSegments[i]))){
				$('#lblIP').html('The segment ' + (i+1) + ' is invalid.');
				$('#lblIP').addClass('center alert alert-danger');
				return false;
			}
		}

		$('#lblIP').addClass('center alert alert-success');
		$('#lblIP').html('IP: ' + ip + ' is valid.');
	}

	function sumDigits(){
		$('#lblSum').attr('class', '');
		$('#lblSum').html('');
		if($('#txtSum').val() === ""){
			$('#lblSum').html('Type your number');
			$('#lblSum').addClass('center alert alert-danger');
			return false;
		}

		var number = $('#txtSum').val();
		var digits = number.split('');

		if(digits.length < 2){
			$('#lblSum').html('I need a number with two digits.');
			$('#lblSum').addClass('center alert alert-danger');
			return false;
		}

		var sum = 0;

		for(i=0; i <= digits.length - 1; i++){
			sum = (digits[i] === NaN || digits[i] === 0) ? sum + 0 : sum + parseInt(digits[i]);
		}

		$('#lblSum').addClass('center alert alert-success');
		$('#lblSum').html('Sum of: ' + number + ' is ' + sum);
	}

	function resolveProblem(){
		$('#lblProblem').attr('class', '');
		$('#lblProblem').html('');
		if($('#txtChildren').val() === "" || $('#txtCandy').val() === ""){
			$('#lblProblem').html('Children or pieces of candy is empty.');
			$('#lblProblem').addClass('center alert alert-danger');
			return false;
		}

		var n = parseInt($('#txtChildren').val());
		var m = parseInt($('#txtCandy').val());

		if(n < 1){
			$('#lblProblem').html('We don\'t have children');
			$('#lblProblem').addClass('center alert alert-danger');
			return false;
		}

		if(m < 0){
			$('#lblProblem').html('We don\'t have candies');
			$('#lblProblem').addClass('center alert alert-danger');
			return false;
		}

		var total = m - (m%n);
		var candiesForChild = total / n;

		$('#lblProblem').addClass('center alert alert-success');
		$('#lblProblem').html('We have ' + m + ' pieces of candy and ' + n + ' child. Each child get ' + candiesForChild + ' candies and there are ' + (m%n) + ' left.');
	}
})(jQuery);