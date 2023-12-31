function convertToBanglaNumber(englishNumber) {
    const banglaNumbers = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  
    const englishNumberString = englishNumber.toString();
    let banglaNumberString = '';
  
    for (let i = 0; i < englishNumberString.length; i++) {
      const digit = parseInt(englishNumberString[i]);
      banglaNumberString += banglaNumbers[digit];
    }
  
    return banglaNumberString;
  }

  export default convertToBanglaNumber