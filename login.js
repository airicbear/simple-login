function hash(plaintext) {
  if (plaintext === '') {
    return '';
  }

  return hex_sha256(plaintext.replace(new RegExp('\r', 'g'), ''));
}

function login(username, password) {
  if (!username) {
    alert("Please enter a username.");
    return 1;
  }
  if (userInfo.hasOwnProperty(username)) {
    if (hash(password) === userInfo[username]) {
      alert("Login success.");
      return 0;
    } else {
      alert("Incorrect password.");
      return 1;
    }
  } else {
    alert("Username doesn't exist.");
    return 1;
  }
}

let userInfo = {
  "Octocat": "ab6ee2706e4b17cf8328d84ef558a71ac929f816158c4b8d06dc9059b356bf97", // Octocat
  "Nyancat": "e1adca2aab7f058717d5876928d901cc797406cefd6156cc0c58ac12f9f8391f", // Nyan!Cat
  "Dogecoin": "633d2a475429f17a0cbbc4526827d9f787c59c0559b16dcc09055f097ebd0fca", // ToTheMoon
  "SecretBoi": "03f8c1273e3da99bb315fe7b71c8e45159c826e6d3f42eecd4612078248f73a1", // Try to crack SecretBoi's password
  "SecretGal": "e8cca808ae5aaa03a7fc3060856e6d4ad776fb1cb8cfe441a9bd240988cde151", // Try to crack SecretGal's password
}