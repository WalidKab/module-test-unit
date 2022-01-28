export function kata(number) {
    const digitArray = number.toString().split('');
    const arraySize = digitArray.length;
    let inWords = '';

    const unite = ['','un','deux','trois','quatre','cinq','six','sept','huit','neuf'];
    const dizaine = ['','dix','vingt','trente','quarante','cinquante','soixante','soixante-dix','soixante-dix','quatre-vingt','quatre-vingt-dix'];

    const array = [
        ['','un','deux','trois','quatre','cinq','six','sept','huit','neuf'],
        ['','dix','vingt','trente','quarante','cinquante','soixante','soixante-dix','soixante-dix','quatre-vingt','quatre-vingt-dix']
    ]

    let index = arraySize-1;

    for(let i = 0; i<= arraySize;i++){
        inWords += array[index][digitArray[i]];
        index--;
    }

    return inWords
}