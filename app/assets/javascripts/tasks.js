$(document).ready(function () {
	$('.task_list input[type="checkbox"]').on('change', function () {
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
});
