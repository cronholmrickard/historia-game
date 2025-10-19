(function () {
  function C(term, definition) {
    return { term, definition };
  }
  function S(section, cards) {
    return { section, cards };
  }

  // Data set
  const DATA = [
    S("Staden var en marknadsplats", [
      C(
        "marknadsplats",
        "handelsplats, mötesplats för köpare och säljare av varor och tjänster"
      ),
      C(
        "tull",
        "avgift/skatt som tas ut när varor förs in i ett land eller en stad"
      ),
      C(
        "borgare",
        "handelsmän och hantverkare som bodde och betalade skatt i staden"
      ),
      C(
        "stadsprivilegier",
        "rättigheter för en stad att bedriva handel m.m"
      ),
      C(
        "handelsbod",
        "liten affärsbyggnad med lucka som bildar disk när den öppnas"
      ),
      C("vallgrav", "brett dike runt en borg eller stadsmur"),
      C("rådhus", "byggnad för de styrande i staden"),
      C("magasin", "byggnad för förvaring av varor"),
      C("skrå", "förening för hantverkare"),
      C(
        "lärling",
        "person som lär sig ett hantverk genom att arbeta med en erfaren person"
      ),
      C("gesäll", "utbildad hantverkare som gjort gesällbrev"),
      C("mästare", "mycket kunnig hantverkare som gjort mästarprov"),
    ]),
    S("Lagar och regler i staden", [
      C("borgmästare", "högste ämbetsmannen i en stad"),
      C("rådman", "medlem av stadens styrelse"),
      C("stadsport", "port i stadsmur"),
      C("nattvakt", "vakt på natten"),
      C("galgbacke", "plats för avrättning genom hängning"),
      C("bödel", "person som utförde dödsstraff"),
      C("rackare", "bödelns dräng, gjorde orent arbete"),
      C("krog", "restaurang"),
      C("utedass", "toalett utan vatten, i separat hus"),
      C("avloppsledning", "rör som leder bort avloppsvatten"),
      C("slaskvatten", "smutsvatten"),
      C("gränd", "trång gata i en stad"),
    ]),
    S("Fest och nöjen", [
      C("helgondag", "dag då minnet av ett helgon firas"),
      C("barnsöl", "firande efter ett dop"),
      C("lekare", "kringvandrande underhållare"),
      C("narr", "person som uppträdde för att roa"),
    ]),
    S("Hansan och handeln runt Östersjön", [
      C("handelsskepp", "båt som fraktar varor"),
      C("handelsförbund", "sammanslutning som samarbetar vid handel"),
      C("hansestad", "stad som hörde till Hansan"),
      C("ringmur", "mur som omsluter en stad eller borg"),
    ]),
    S("Kamp om makten i Norden", [
      C("stupa", "dö i strid"),
      C("slag", "sammandrabbning i krig"),
      C("här", "armé"),
      C("förhandla", "diskutera tills man enas"),
      C("krigsmakt", "de som sköter försvaret i ett land"),
    ]),
    S("Drottning Margareta enade Norden", [
      C("avsätta (en regent)", "tvinga en regent att avgå"),
      C("armé", "militär styrka på land"),
      C("kröna", "sätta krona på någon för att göra personen till regent"),
      C("union", "förbund mellan länder"),
      C("kröningsbrev", "brev som bekräftar en kröning"),
      C("sigill", "vax-/lackavtryck som visar att dokument är giltigt"),
    ]),
    S("Union eller inte?", [
      C("rådgivare", "person som ger råd"),
      C("bergsman", "bonde som också ägnade sig åt gruvbrytning och järn"),
      C("riksföreståndare", "ersätter regenten när denne är förhindrad"),
      C("ärkebiskop", "kyrkans högste ledare i Sverige"),
    ]),
    S("Anfallet på Sverige", [
      C("belägra", "omringa/innesluta"),
      C("armborst", "skjutvapen likt pilbåge"),
      C("rättegång", "domstol avgör skuld"),
      C("kätteri", "att inte tro på den rätta läran"),
      C("riksmöte", "beslutande möte för de styrande"),
    ]),
    S("Stockholms blodbad", [
      C("halshugga", "hugga huvudet av"),
      C("avrätta", "verkställa dödsstraff"),
      C("tyrann", "grym härskare"),
    ]),
    S("Målningar som finns kvar", [
      C("kalkmålning", "målning i kalk"),
      C("kyrkomålning", "målning på vägg/tak i kyrka"),
      C("spinna", "tillverka garn genom att tvinna"),
      C("slända", "redskap för att göra garn"),
      C("kolt", "barnplagg som en stor skjorta"),
      C("borgerskap", "stadens borgare (handelsmän och hantverkare)"),
    ]),
  ];

  window.DATA = DATA;
})();

