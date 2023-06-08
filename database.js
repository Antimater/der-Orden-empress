var Parse = require('parse/node');

Parse.initialize("qOYkd6t1zXosfO2E2AGyOUgQliQmsAcQlq69gzmK", "SEgeBkTEnaSVzq6hdDGsb5xW9fw9GgkzESjU7mJk"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = 'https://parseapi.back4app.com/'

async function addAmountToDatabase() {
    //Create your Parse Object
    const soccerPlayer = new Parse.Object('SoccerPlayer');
    //Define its attributes
    soccerPlayer.set('playerName', 'A. Wed');
    try {
        //Save the Object
        const result = await soccerPlayer.save();
        alert('New object created with objectId: ' + result.id);
    } catch (error) {
        alert('Failed to create new object: ' + error.message);
    }
}
module.exports = addAmountToDatabase;