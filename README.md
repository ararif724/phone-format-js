# phone-format-js

**Lightweight package to format phone number**

## Installation

**Webpage**
```html
<script src="https://cdn.jsdelivr.net/gh/ararif724/phone-format-js/phone-format.js"></script>
```

**Node JS**
```bash
npm install @ararif/phone-format-js
```

## Usage

#### formatPhoneNumber(number, [delimiter = " "])

* Parameters
    * number: [Required] Phone number
    * delimiter: [Optional] character between 2 part of the number. Default is space

* Returns
    * Return formatted phone number

## Example

**Webpage**
```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>phone-format-js</title>
		<script src="https://cdn.jsdelivr.net/gh/ararif724/phone-format-js/phone-format.js"></script>
	</head>
	<body>
		<input id="phone" type="phone" name="phone" />
		<script>
			document.addEventListener("DOMContentLoaded", function () {
				var inputField = document.getElementById("phone");

				inputField.addEventListener("input", function (e) {
					e.target.value = formatPhoneNumber(e.target.value, "-");
				});
			});
		</script>
	</body>
</html>
```

**Node JS**

```javascript
const phoneFormat = require("@ararif/phone-format-js");
const formattedNumber = phoneFormat("+8801912345678", "-");
console.log(formattedNumber);
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Sponsors
<a href="https://designful.ca"><img style="background-color: #304af8; padding: 10px; width: 100px;" src="https://designful.ca/wp-content/uploads/2021/01/designful-logo-white.png"></a>