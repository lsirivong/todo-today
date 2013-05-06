$(document).ready(function () {
	$('.task-list input[type="checkbox"]').on('change', function () {
		var $me = $(this),
			id = $me.val();
		$.ajax(
			'/tasks/' + id,
			{
				type: 'POST',
				dataType: 'json',
				data: {
					task: {
						id: id,
						completed: $me.is(':checked') ? 1 : 0
					},
					_method: 'put'
				}
			}
		);
	});

	$('.task-item')
		// enter edit state when task item is clicked
		.click(function (e) {
			// Only enter edit state when container or description is clicked
			var isEditTarget = e.target === this || $(e.target).is('i'),
				isEditing;
			if (isEditTarget) {
				isEditing = $(this).toggleClass('is-editing').hasClass('is-editing');

				if (isEditing) {
					$(this).find('.ntf-tb').focus();
				};
				return false;
			};
		});

	// leave edit state when text box loses focus
	$('.ntf-tb').blur(function (e) {
		$(this).closest('.task-item').removeClass('is-editing');
	});
});
