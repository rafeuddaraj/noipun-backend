def bangla_to_banglish(bangla_text):
    bangla_to_banglish_map = {
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
        ' ': ' ',  # space
    }

    banglish_output = ''

    for current_char in bangla_text:
        # Use the mapping if available, otherwise keep the original character
        banglish_char = bangla_to_banglish_map.get(current_char, current_char)

        banglish_output += banglish_char

    return banglish_output

