import word from './word';
import en_GB from './lang/en_GB';
const argv = process.argv,
    // Number casting is more efficient than parseInt()...
    nPhonemes = Number(argv[2]),
    langs = {
        en_GB
    },
    DEFAULT_LANG = `en_GB`,
    lang = argv[3],
    phonemes = langs[lang] || langs[DEFAULT_LANG];

// ... but still requires some error checking
if ('number' !== typeof nPhonemes || isNaN(nPhonemes)) {
    console.log('Usage: '+argv[1]+' (number of phonemes) [lang e.g. en_GB]');
    process.exit(1);
}

const strWord = word(nPhonemes, phonemes);

console.log(strWord);