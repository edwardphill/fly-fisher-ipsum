const loremIpsum = new GenerateNewText();

function GenerateNewText(); {
    this.sentences = 
    [
        'Dry flies only.',
        'See that FlyLords post?',
        'New Fishpond backpack 400$, total steal.',
        "Risers, two o'clock.",
        'Shoulda been here yesterday, was wild.',
        'Hitting stonefly patterns',
        'Haven"t hit green drake hatch on Henry"s Fork yet?',
        'have you heard of an elk hair caddis?',
        'Huge one earlier but my phone battery died.',
        "You tried a wooly bugger yet?",
        'Orvis makes the best stuff.'
    ]
}

GenerateNewText.prototype.getRandomSentence = function() {
    let randomSentence = this.sentences[Math.floor(Math.random() * this.sentences.length)]
    return randomSentence;
}