function hash(plaintext) {
  if (plaintext === '') {
    return '';
  }

  return hex_sha256(plaintext.replace(new RegExp('\r', 'g'), ''));
}

function login(username, password) {
  if (userInfo.hasOwnProperty(username)) {
    if (hash(password) === userInfo[username]) {
      alert("Login success.");
    } else {
      alert("Login failed.");
    }
  } else {
    alert("Username doesn't exist.");
  }
}

let userInfo = {
  "Octocat": "ab6ee2706e4b17cf8328d84ef558a71ac929f816158c4b8d06dc9059b356bf97", // Octocat
  "Nyancat": "e1adca2aab7f058717d5876928d901cc797406cefd6156cc0c58ac12f9f8391f", // Nyan!Cat
  "Dogecoin": "633d2a475429f17a0cbbc4526827d9f787c59c0559b16dcc09055f097ebd0fca", // ToTheMoon
  "SecretBoi": "6e08e700f8e12d6bcfaee4fe94759dc66cec13be306226740e79b6bd8613fd20", // Try to crack SecretBoi's password
  "SecretGal": "fb8ee13cda6b0b4fbe2a50336a0431d9ac0d2cb38564c2096ac2eb0ec65c4924", // Try to crack SecretGal's password
}