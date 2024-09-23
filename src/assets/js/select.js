
if (document.querySelector('.select')) {
    function updateSelectValue(select) {
        var selected_inputs = select.find('input:checked');
        if (selected_inputs.length === 0) {
            var default_value = select.find('.select__value').data('default-value');
            select.find('.select__value p').text(default_value);
        } else {
            var select_values = '';
            selected_inputs.each(function () {
                var select_value = $(this).closest('label').text();
                if ($(this).attr('type') === "checkbox") {
                    var index = $(this).closest('label').data('index');
                    select_values += '<p class="select__selected-variant" data-index="' + index + '">' + select_value + '<span class="select__remove">&times;</span></p>';
                } else {
                    select_values += select_value;
                }
            });
            select.find('.select__value p').html(select_values);
        }
    }

    $('.select').each(function () {
        var default_value = $(this).find('.select__value').data('default-value');
        $(this).find('.select__value p').text(default_value);
    });

    $('.select__variants input[type="checkbox"], .select__variants input[type="radio"]').on('change', function () {
        var select = $(this).closest('.select');
        updateSelectValue(select);
        select.find('.select__variant--active').removeClass('select__variant--active');
        $(this).closest('label').addClass('select__variant--active');
    });


    $(document).mouseup(function (e) {
        var block = $(".select--active");
        if (!block.is(e.target) && block.has(e.target).length === 0) {
            $('.select--active').removeClass('select--active');
        }
    });
}