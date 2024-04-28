const patterns = require("./patterns");

function formatPhoneNumber(phoneNumber, delimiter = " ") {
	let cleanedPhoneNumber = ("" + phoneNumber).replace(/\D/g, ""); // Remove non-numeric characters

	for (const countryCodePattern in patterns) {
		// try to matching country code
		if (new RegExp(countryCodePattern).test(cleanedPhoneNumber)) {
			var formattedPhoneNumber = "";
			for (const partLength of patterns[countryCodePattern]) {
				if (cleanedPhoneNumber.length >= partLength) {
					formattedPhoneNumber +=
						cleanedPhoneNumber.substring(0, partLength) + delimiter;
					cleanedPhoneNumber = cleanedPhoneNumber.substring(partLength);
				}
			}

			if (cleanedPhoneNumber.length > 0) {
				formattedPhoneNumber += cleanedPhoneNumber;
			}

			formattedPhoneNumber = "+" + formattedPhoneNumber; //Adding plus (+) sign

			return formattedPhoneNumber.replace(new RegExp(delimiter + "$"), ""); //trimming tailing delimiter
		}
	}

	return phoneNumber;
}

module.exports = formatPhoneNumber;
