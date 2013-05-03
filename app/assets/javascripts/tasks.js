$(document).ready(function () {
	$('.task-list input[type="checkbox"]').on('change', function () {
		console.log('checkbox change');
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

	$('.task-item').click(function (e) {
		var isEditTarget = e.target === this || $(e.target).is('i');
		console.log(isEditTarget);
		if (isEditTarget) {
			$('.task-item').removeClass('is-editing');
			$(this).toggleClass('is-editing');
			return false;
		};
	});
});
