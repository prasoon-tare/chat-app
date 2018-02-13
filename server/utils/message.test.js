const expect = require('expect');

var {generatemessage,generateLocationmessage} = require('./message');

describe('Generatemessage', () => {
    it('should generate correct message object' ,() => {
        var from = 'prasoon';
        var text = 'hey prasoon!';
        var createdAt = new Date().getTime();

        var Message = generatemessage(from, text);

        expect(Message).toInclude({from, text});
        expect(Message.createdAt).toBeA('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Prasoon';
        var latitude = 14;
        var longitude = 12;
        var url = 'https://www.google.com/maps?q=14,12';
        var message = generateLocationmessage(from,latitude,longitude);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from,url});
    });
});