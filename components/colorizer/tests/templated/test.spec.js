/**
 * Test the Colorizer module using a template and
 * actual jQuery calls with the PhantomJS DOM.
 */
describe('Colorizer', function () {
    it('converts colors from rgb to hex', function () {
        var crayon = Colorizer(_, $);

        var hex = crayon.rgb2hex('rgb(250,250,250)');
        expect(hex).toEqual('#fafafa');
    });

    it('changes the color of a container', function () {
        // Load the fixture.
        var path = 'components/colorizer/tests/templated/test.template.html';
        document.body.innerHTML = __html__[path];

        // Set the new color.
        var crayon = Colorizer(_, $);
        crayon.color('#profile_background', '#9be');

        // Check if color has been set.
        var color = $('#profile_background').css('background-color');
        var hex = crayon.rgb2hex(color);
        expect(hex).toEqual('#99bbee');
    });
});
