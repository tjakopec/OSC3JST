

"use strict";

var nizObjekata = JSON.parse("[{\"ime\": \"Tomislav\", \"prezime\": \"Jakopec\"},{\"ime\": \"Dora\", \"prezime\": \"Krupićeva\"}]");

for (let value of nizObjekata) {
  log(value.ime);
}
