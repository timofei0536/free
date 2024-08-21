import Inputmask from "inputmasks";
$(document).ready(function () {
    var selector = document.querySelectorAll("[name='tel']");
    try {
        var im = new Inputmask({
            mask: "+380 (99) 999-99-99",
            clearMaskOnLostFocus: !0,
            clearIncomplete: !0,
        });
        im.mask(selector);
    } catch (err) {}
});