const pick = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};

export default function word(nPhonemes, phonemes)
{
    var word = '',
        // Choose vowel or consonant
        current = pick([0,1]);

    for (var i = 1; i <= nPhonemes; i++) {
        var set = (1 == i)?'start':((nPhonemes == i)?'end':'middle');
        // Append a random letter
        word += pick(phonemes[set][current]);
        // and flip the bit so we pick the other next time
        current = Number(!current);
    }

    return word;
};
