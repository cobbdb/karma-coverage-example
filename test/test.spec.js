describe('Colorizer', function () {
    beforeEach(function () {
        document.body.innerHTML = __html__['fixture.html'];
        console.log(document.body.innerHTML);
    });
    it('changes the color of a container', function () {
        var crayon = Colorizer(_, $);
        crayon.color('#profile_background', '#9be');
        
        var color = $('#profile_background').css('background-color');
        var hex = crayon.rgb2hex(color);
        expect(hex).toEqual('#99bbee');
    });
});
