// colorizer.js
function Colorizer(_, $) {
    return {
        rgb2hex: function (rgb) {
            var dec = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1);
            var hex = '#';
            _(dec).each(function (val) {
                hex += ('0' + parseInt(val, 10).toString(16)).slice(-2);
            });
            return hex;
        },
        color: function (id, color) {
            $(id).css('background-color', color);
        }
    };
}
