function generatePhoneNumber() {
    let countryCode = (106 * 2) + "";
    let group1 = 600 + 63;
    let group2 = 500 + 46;
    let group3 = 625 + 34;
    return "+" + countryCode + " " + group1 + group2 + group3;
}
