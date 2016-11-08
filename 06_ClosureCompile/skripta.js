var datoteka="datoteka.json";
(async() => {
  try {
    var odgovor = await fetch(datoteka);
    var json = await odgovor.json();
    console.log(json);
  } catch (e) {
    console.log("Greška")
  }
})();