function banglaToBanglish(banglaText) {
  var banglaToBanglishMap = {
    'অ': 'a',
    'আ': 'a',
    'ই': 'i',
    'ঈ': 'i',
    'উ': 'u',
    'ঊ': 'u',
    'ঋ': 'ri',
    'এ': 'e',
    'ঐ': 'oi',
    'ও': 'o',
    'ঔ': 'ou',
    'ক': 'k',
    'খ': 'kh',
    'গ': 'g',
    'ঘ': 'gh',
    'ঙ': 'ng',
    'চ': 'ch',
    'ছ': 'chh',
    'জ': 'j',
    'ঝ': 'jh',
    'ঞ': 'n',
    'ট': 't',
    'ঠ': 'th',
    'ড': 'd',
    'ঢ': 'dh',
    'ণ': 'n',
    'ত': 't',
    'থ': 'th',
    'দ': 'd',
    'ধ': 'dh',
    'ন': 'n',
    'প': 'p',
    'ফ': 'ph',
    'ব': 'b',
    'ভ': 'bh',
    'ম': 'm',
    'য': 'j',
    'র': 'r',
    'ল': 'l',
    'শ': 'sh',
    'ষ': 'sh',
    'স': 's',
    'হ': 'h',
    'ড়': 'r',
    'ঢ়': 'r',
    'য়': 'y',
    'ং': 'ng',
    'ঃ': ':',
    'ঁ': 'n',
    'া': 'a',
    'ি': 'i',
    'ী': 'i',
    'ু': 'u',
    'ূ': 'u',
    'ৃ': 'ri',
    'ে': 'e',
    'ৈ': 'oi',
    'ো': 'o',
    'ৌ': 'ou',
    '্': '',
    'ৗ': 'ou',
    ' ': ' ', // space
  };

  var banglishOutput = '';

  for (var i = 0; i < banglaText.length; i++) {
    var currentChar = banglaText[i];

    // Use the mapping if available, otherwise keep the original character
    var banglishChar = banglaToBanglishMap[currentChar] || currentChar;

    banglishOutput += banglishChar;
  }

  return banglishOutput;
}

// Example usage:
var banglaText = 'পাতার নাম পুদিনা রনিকে আমরা চুদি নাহ';
var banglishResult = banglaToBanglish(banglaText);
console.log(banglishResult);

