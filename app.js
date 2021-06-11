
var friends = ['Logan', 'Dallas', 'Ethan', 'Amelia', 'Dustin'];

var locations = ['dining room', 'kitchen', 'living room', 'basement', 'attic', 'billiard room', 'smoking lounge', 'ballroom', 'cellar', 'library'];

var weapons = ['shotgun', 'rope', 'lead pipe', 'candlestick', 'knife', 'revolver', 'wrench', 'poison', 'chainsaw', 'axe', 'ice pick', 'hammer', 'shovel', 'hoe', 'chain', 'clever', 'screwdriver', 'bat', 'katana', 'lightsabor'];

for (i = 0; i <= 100; i++) {
    accusation(i)
};

function accusation(i) {
    var h3 = $(`<h3 id="${i}"> Accusation ${i} </h3>`);
    $('body').append(h3)
    h3.click(function () {
        alert(`I accuse ${friends[i % friends.length]}, with the ${weapons[i % weapons.length]}, in the ${locations[i % locations.length]}!`);
    })
};


// $(`.${i}`).click(accusation(i));