		
	

	// Javascript code for To Do List page


	// Check off specific Todos by clicking

	$('ul').on("click", "li", function() {
		$(this).toggleClass("completed");
	});

	// Make X clickable for item deletion

	$("ul").on("click", "span", function(event) {
		$(this).parent().fadeOut(500, function() {
			$(this).remove();	
		});
		event.stopPropagation();
	});

	// Add new items

	$("input[type='text']").keypress(function(event) {
		if(event.which === 13) {
			// grabbing new todo text from input
			var todoText = $(this).val();
			// clear out input
			$(this).val("");
			// create new li and add to ul
			$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
		}
	});

	// Hide and show + button

	$("#toggle-form").click(function() {
		$("input[type='text']").fadeToggle(50);
	});