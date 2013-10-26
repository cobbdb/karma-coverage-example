// test/test.spec.js
describe('Colorizer', function () {
    it('converts colors from rgb to hex', function () {
        var crayon = Colorizer(_, $);

        var hex = crayon.rgb2hex('rgb(250,250,250)');
        expect(hex).toEqual('#fafafa');
    });

    it('changes the color of a container', function () {
        // Load the fixture.
        document.body.innerHTML = __html__['colorizer/test1/fixture.html'];

        // Set the new color.
        var crayon = Colorizer(_, $);
        crayon.color('#profile_background', '#9be');

        // Check if color has been set.
        var color = $('#profile_background').css('background-color');
        var hex = crayon.rgb2hex(color);
        expect(hex).toEqual('#99bbee');
    });
});
