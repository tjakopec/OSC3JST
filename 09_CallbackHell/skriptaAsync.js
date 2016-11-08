
(async() => {
  try {
    var mjestaFetch = await fetch("popis_naselja_u_republici_hrvatskoj.json");
    var mjesta = await mjestaFetch.json();
    var mjesto;
    for (let m of mjesta) {
        if (m.ID==="4266"){
            mjesto=m;
            break;
        }
    }
    var zapisFetch = await fetch("popis.php?ID=" + mjesto.ID);
    var zapis = await zapisFetch.json();

    var parametri = new FormData()
    parametri.append('mjesto', zapis.mjesto);
    var ocjenaFetch = await fetch("ocjena.php", { method: "POST", body: parametri });
    var ocjena = await ocjenaFetch.text();

    log(ocjena);



  } catch (e) {
    console.log(e)
  }
})();