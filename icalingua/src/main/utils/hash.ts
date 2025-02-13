const hashCode = (str : string) =>  {
    if (str.length === 0) {
        return '';
    }

    let hashNumber = 0, result = '';

    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        hashNumber = ((hashNumber << 7) - hashNumber) + charCode;
        result += String.fromCharCode(97 + ((hashNumber % 26) + 26) % 26);
    }

    return result;
}

export default hashCode;
