(function () {
  function C(term, definition) {
    return { term, definition };
  }
  function S(section, cards) {
    return { section, cards };
  }

  const MEDELTIDEN = [
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

  const RELIGION = [
    S("Begrepp", [
      C("världsreligion", "religion med många anhängare spridda över hela världen"),
      C("monoteism", "tro på en enda gud"),
      C("polyteism", "tro på flera gudar"),
      C(
        "abrahamitiska religionerna",
        "judendom, kristendom och islam tillsammans"
      ),
      C("stamfader", "viktig person som funnits tidigt i ett folks historia"),
      C(
        "profet",
        "person som förutspår framtiden eller sprider budskap från en gud"
      ),
      C("altare", "plats där man tackar och offrar till en gud"),
      C(
        "dyrka",
        "beundra och älska; den som dyrkar en gud ber till och hyllar den"
      ),
    ]),
    S("Heliga böcker och anhängare", [
      C("Bibeln", "judarnas och de kristnas heliga bok"),
      C("Koranen", "muslimernas heliga bok"),
      C("judar", "människor som tillhör judendomen"),
      C("kristna", "människor som tillhör kristendomen"),
      C("muslimer", "människor som tillhör islam"),
    ]),
    S("Personer", [
      C("Abraham", "stamfader i alla de tre abrahamitiska religionerna"),
      C("Ibrahim", "arabiska namnet för Abraham"),
      C("Sara", "Abrahams fru, mor till Isak"),
      C("Hagar", "tjänsteflicka och mor till Ismael"),
      C("Isak", "son till Abraham och Sara, judarnas stamfader"),
      C("Ismael", "son till Abraham och Hagar, det arabiska folkets stamfader"),
      C("Jesus", "judisk man som kallades Kristus, kristendomens upphov"),
      C("Muhammed", "profet som grundade islam på 600-talet"),
      C(
        "Mose",
        "person som ledde Israels folk ut ur Egypten och tog emot Guds tio bud"
      ),
      C("David", "kung som besegrade jätten Goljat och gjorde Israels folk rikt"),
      C("Salomo", "Davids son och kung som byggde templet i Jerusalem"),
      C("Maria", "Jesus mor"),
      C("Josef", "snickare av Davids släkt; Marias man"),
      C(
        "Johannes döparen",
        "släkting till Jesus som döpte människor i floden, däribland Jesus"
      ),
      C(
        "Pontus Pilatus",
        "den romerske ledare som dömde Jesus till döden"
      ),
      C(
        "Judas Iskariot",
        "lärjungen som förrådde Jesus för trettio silvermynt"
      ),
      C("Khadija", "Muhammeds första hustru, en rik kvinna i Mekka"),
      C(
        "Abu Bakr",
        "Muhammeds nära vän som sunniterna ansåg skulle bli ny ledare efter Muhammed"
      ),
      C(
        "Ali",
        "Muhammeds släkting som shiiterna ansåg skulle bli ny ledare efter Muhammed"
      ),
    ]),
    S("Platser", [
      C("Mesopotamien", "området där Abraham enligt myten kom från"),
      C("Ur", "stad i Mesopotamien där Abraham enligt myten levde"),
      C("Kanaan", "landet vid Medelhavet dit Abraham vandrade"),
      C("Jerusalem", "ursprungsplats för judendom och kristendom"),
      C("Mekka", "helig stad inom islam"),
      C("Medina", "helig stad inom islam"),
      C("Egypten", "land där Israels folk levde som slavar"),
      C(
        "berget Sinai",
        "berg där Mose enligt Bibeln tog emot de tio buden av Gud"
      ),
      C(
        "Babylonien",
        "land som tog makten över Juda rike och förde judarna i fångenskap"
      ),
      C(
        "Palestina",
        "namnet som romarna gav landet Israel efter att ha besegrat Juda rike"
      ),
      C("Nasaret", "staden i Israel där Jesus växte upp"),
      C("Betlehem", "Davids stad där Jesus enligt Bibeln föddes"),
      C(
        "Golgata",
        "avrättningsplatsen utanför Jerusalems stadsmur där Jesus korsfästes"
      ),
      C(
        "Arabiska halvön",
        "området där islam grundades; idag bland annat Saudiarabien"
      ),
      C(
        "Yathrib",
        "stad dit Muhammed flydde år 622; fick senare namnet Medina"
      ),
    ]),
    S("Judendom – skrifter och troslära", [
      C("Tora", "judarnas lag; lär ut hur man ska leva som jude"),
      C(
        "Tanakh",
        "samlingsnamn för judendomens tre heliga skrifter (Tora, Nevim, Ketuvim)"
      ),
      C("Nevim", "profeternas böcker i judendomens heliga skrifter"),
      C(
        "Ketuvim",
        "skrifterna; samling sånger och dikter som används vid gudstjänster"
      ),
      C("Moseböckerna", "Bibelns fem första böcker, finns i Tora"),
      C("förbund", "överenskommelse mellan Gud och Israels folk"),
      C(
        "utvalda folk",
        "folket som Gud lovat skydd om de följer hans bud (judarna)"
      ),
      C(
        "Messias",
        "ledare av Davids släkt som enligt profeterna ska göra Israels folk mäktigt igen"
      ),
      C(
        "Israels folk",
        "släkten efter Jakob, som fick namnet Israel av Gud"
      ),
    ]),
    S("Att leva som jude", [
      C(
        "sabbat",
        "judisk vilodag, från fredag kväll till lördag kväll"
      ),
      C("kosher", "mat lagad enligt judiska matregler"),
      C("kippa", "liten rund mössa som män och pojkar bär vid högtidliga tillfällen"),
      C(
        "omskärelse",
        "borttagande av förhuden; görs på judiska pojkar när de är åtta dagar gamla"
      ),
      C("bar mitzva", "religiös fest när en judisk pojke fyller 13 år"),
      C("bat mitzva", "religiös fest när en judisk flicka fyller 12 år"),
      C(
        "tefillin",
        "liten ask med verser från Toran som bärs på pannan vid bar mitzva"
      ),
      C("rit", "religiös ceremoni; bestämt sätt att utföra något"),
    ]),
    S("Judiska högtider", [
      C("rosh hashana", "judisk nyårsfest, infaller i september eller oktober"),
      C(
        "jom kippur",
        "försoningsdagen; judarna ber varandra om förlåtelse"
      ),
      C(
        "sukkot",
        "lövhyddohögtiden; skördefest på hösten då man bygger en lövhydda"
      ),
      C(
        "chanukka",
        "ljusets fest; åtta dagars firande till minne av att judarna fick tillbaka Jerusalem"
      ),
      C(
        "pesach",
        "judisk påsk; firas till minne av befrielsen från slaveriet i Egypten"
      ),
      C("lövhydda", "enkel hydda av löv som byggs under sukkot"),
    ]),
    S("Synagogan och symboler", [
      C(
        "synagoga",
        "byggnad där judar samlas för gudstjänst (ordet betyder samlingsplats)"
      ),
      C("rabbin", "religiös ledare och lärare i en judisk församling"),
      C("kantor", "musiker som leder sång och bön under gudstjänsten"),
      C("ark", "vackert skåp i synagogan där Tora-rullarna förvaras"),
      C(
        "predikan",
        "tal i gudstjänsten med tankar om det man har läst"
      ),
      C("Davidsstjärnan", "judendomens vanligaste symbol, sex uddar"),
      C(
        "menoran",
        "sjuarmad ljusstake; judendomens äldsta symbol"
      ),
      C(
        "ortodoxa judar",
        "judisk riktning som följer reglerna noga och anser att skrifterna är Guds sanna ord"
      ),
      C(
        "reformerta judar",
        "judisk riktning som tolkar texterna på nytt sätt när tiderna förändras"
      ),
      C(
        "konservativa judar",
        "judisk riktning som vill bevara viktiga traditioner men anpassa sig efter sin tid"
      ),
    ]),
    S("Kristendom – skrifter och Jesus liv", [
      C(
        "Nya testamentet",
        "den del av Bibeln som berättar om Jesus och de första kristna; 27 böcker"
      ),
      C(
        "Gamla testamentet",
        "den del av Bibeln som är samma som den judiska Bibeln"
      ),
      C(
        "evangelium",
        "betyder glatt budskap; en av de fyra första böckerna i Nya testamentet"
      ),
      C(
        "evangelisterna",
        "Matteus, Markus, Lukas och Johannes — de fyra som evangelierna namngetts efter"
      ),
      C("lärjunge", "en av Jesus tolv medhjälpare"),
      C("korsfästelse", "att straffas med döden genom att spikas upp på ett kors"),
      C(
        "uppståndelse",
        "att Jesus enligt kristen tro reste sig från de döda två dygn efter sin död"
      ),
      C(
        "Kristi himmelsfärd",
        "när Jesus 40 dagar efter påsk svävade upp till himlen"
      ),
      C(
        "den heliga anden",
        "Guds kraft som kom över lärjungarna på pingst; symboliseras av en duva"
      ),
      C(
        "Guds rike",
        "det rike Jesus talade om — inte ett politiskt rike i den här världen"
      ),
    ]),
    S("Att leva som kristen", [
      C("bön", "att tala med Gud"),
      C("aftonbön", "bön som man ber på kvällen"),
      C("morgonbön", "bön som man ber på morgonen"),
      C(
        "radband",
        "snöre med kulor som används som hjälpmedel för att räkna böner"
      ),
      C("söndagen", "den kristna vilodagen, då man håller gudstjänst i kyrkan"),
      C(
        "fastan",
        "period på 40 dagar före påsk då man äter mindre eller avstår från viss mat"
      ),
      C("fettisdagen", "dagen innan fastan börjar; firas ofta med semlor"),
      C("semla", "bulle som äts på fettisdagen; kallas också fastlagsbulle"),
    ]),
    S("Kristna högtider", [
      C(
        "advent",
        "väntan på Jesus ankomst; börjar fyra söndagar före jul och inleder kyrkans år"
      ),
      C("jul", "kristen högtid till minne av Jesus födelse"),
      C("julotta", "gudstjänst tidigt på morgonen på juldagen"),
      C(
        "trettondag jul",
        "6 januari; firas till minne av att stjärntydarna kom med gåvor till Jesus"
      ),
      C("stilla veckan", "veckan före påsk; minne av Jesus sista vecka"),
      C("palmsöndagen", "söndagen då Jesus red in i Jerusalem"),
      C("skärtorsdagen", "torsdagen i påskveckan; minne av Jesus sista måltid"),
      C("långfredagen", "fredagen då Jesus dog på korset"),
      C("påskdagen", "söndagen då Jesus enligt kristen tro uppstod från de döda"),
      C(
        "pingst",
        "kristen högtid 50 dagar efter påsk; lärjungarna fylls av den heliga anden"
      ),
    ]),
    S("Kristna riter och kyrkan", [
      C(
        "nattvard",
        "kristna kyrkans heligaste rit; bröd och vin till minne av Jesus sista måltid"
      ),
      C(
        "dop",
        "rit då prästen öser vatten över personen som tas in i den kristna gemenskapen"
      ),
      C(
        "konfirmation",
        "bekräftelse av dopet och kristen tro; sker i 14-årsåldern"
      ),
      C("mässa", "kristen gudstjänst där nattvarden ingår"),
      C("kyrka", "kristnas gudstjänstlokal"),
      C("katedral", "stor kyrka"),
      C("krucifix", "staty eller bild av Jesus på korset"),
      C("predikstol", "plats i kyrkan där prästen står och predikar"),
      C("dopfunt", "stor skål i kyrkan som används vid dop"),
      C("präst", "kyrkans ledare som leder gudstjänsten"),
      C("psalm", "sång som sjungs i kyrkan under gudstjänsten"),
      C("kollekt", "pengar som samlas in vid en gudstjänst"),
    ]),
    S("Kristna symboler och riktningar", [
      C(
        "korset",
        "kristen symbol som påminner om att Jesus dog på ett kors"
      ),
      C("fisken", "den äldsta kristna symbolen; hemligt tecken hos de första kristna"),
      C(
        "katoliker",
        "den största gruppen kristna i världen, leds av påven i Rom"
      ),
      C(
        "ortodoxa kristna",
        "vanligaste gruppen i östra Europa och Mellanöstern; ingen gemensam ledare"
      ),
      C(
        "protestanter",
        "kristen riktning från 1500-talet, vanlig i Norden, Tyskland, England och USA"
      ),
      C("påven", "den katolska kyrkans ledare; bor i Rom"),
      C("ärkebiskopen", "Sveriges högsta kyrkliga ledare"),
    ]),
    S("Islam – skrifter och troslära", [
      C("Allah", "det arabiska namnet för Gud"),
      C("sura", "kapitel i Koranen (114 stycken totalt)"),
      C(
        "ängeln Gabriel",
        "ängel som enligt islam förmedlade Koranens text till Muhammed"
      ),
      C(
        "Kaba",
        "fyrkantig byggnad i Mekka som muslimer vallfärdar till"
      ),
      C(
        "den svarta stenen",
        "helig sten i hörnet av Kaba; enligt legenden från paradiset"
      ),
      C(
        "den sista profeten",
        "Muhammeds roll i islam — den som kom med det sista sanna budskapet från Gud"
      ),
      C(
        "den yttersta domen",
        "när varje människas liv enligt islam ska granskas av Gud"
      ),
      C(
        "paradiset",
        "platsen dit den som gjort gott kommer enligt islam"
      ),
    ]),
    S("De fem pelarna", [
      C(
        "de fem pelarna",
        "de fem grundregler som ska hjälpa muslimer att hålla fast vid sin tro"
      ),
      C(
        "trosbekännelsen",
        "kort beskrivning av den muslimska tron; Det finns ingen gud utom Gud och Muhammed är Guds sändebud"
      ),
      C(
        "fem dagliga böner",
        "muslimer ber till Gud vid fem bestämda tillfällen varje dag"
      ),
      C("zakat", "avgift som muslimer ger till välgörenhet och fattiga"),
      C(
        "ramadan",
        "muslimsk fastemånad; man äter och dricker inget från gryning till solnedgång"
      ),
      C(
        "vallfärd till Mekka",
        "resa som muslimer som har råd bör göra minst en gång i livet"
      ),
    ]),
    S("Moskén och muslimska riter", [
      C("muslim", "betyder ungefär 'en som överlämnar sig till Guds vilja'"),
      C("moské", "muslimernas bönelokal och samlingsplats"),
      C("imam", "religiös ledare i islam som leder bönen och predikar"),
      C(
        "minaret",
        "torn vid en moské där böneutropet ropas ut"
      ),
      C("fredagsbönen", "veckans viktigaste bön; hålls vid middagstid på fredagen"),
      C(
        "böneutrop",
        "utrop som anger när det är dags för bön; ropas ut från minareten"
      ),
      C(
        "nisch (i moskén)",
        "hylla i en vägg som visar riktningen mot Mekka"
      ),
      C(
        "månskäran",
        "vanlig symbol för islam, ofta tillsammans med en stjärna"
      ),
    ]),
    S("Islamiska högtider och riktningar", [
      C(
        "eid",
        "betyder fest; namnet på de två största muslimska högtiderna"
      ),
      C(
        "eid al-fitr",
        "muslimsk fest som firas när fastemånaden ramadan är slut"
      ),
      C(
        "eid al-adha",
        "muslimsk offerhögtid efter vallfärden; firas till minne av att Abraham var beredd att offra Ismael"
      ),
      C(
        "sunniter",
        "den största gruppen muslimer i världen; betonar att var och en själv ska följa Koranen"
      ),
      C(
        "shiiter",
        "muslimsk minoritet, främst i Irak och Iran; religiösa ledare är viktiga och Muhammeds familj hedras"
      ),
    ]),
  ];

  window.GAMES = {
    medeltiden: {
      title: "Medeltiden",
      sections: MEDELTIDEN,
      files: { tf: "qna.json", mc: null },
    },
    religion: {
      title: "Abrahamitiska religionerna",
      sections: RELIGION,
      files: {
        tf: "qna-religion.json",
        mc: "mc-religion.json",
        cat: "cat-religion.json",
        odd: "odd-religion.json",
        multi: "multi-religion.json",
      },
    },
  };
})();
