function saveTextAsFile() {
    let name = document.getElementById("name").value;
    let proxyName = document.getElementById("proxy-name").value;
    let systemTag = document.getElementById("system").value;
    let speciesOne = document.getElementById("species1").value;
    let speciesTwo = document.getElementById("species2").value;
    let nationalityOne = document.getElementById("nationality1").value;
    let nationalityTwo = document.getElementById("nationality2").value;
    let pronouns = document.getElementById("pronouns").value;
    let birthday = document.getElementById("birthday").value;
    let color = document.getElementById("color").value;
    let fullName = document.getElementById("full-name").value;
    let source = document.getElementById("source").value;
    let zodiac = document.getElementById("zodiac").value;
    let proxies = document.getElementById("proxies").value;
    let proxiesDone = document.getElementById("proxies-done").value;
    let proxiesLeft = proxies - proxiesDone;
    let proxiesToDo = Math.floor(Math.random() * proxiesLeft);
    let vtuberProxies = ["Adora Bunny", "Agano Mai", "Akamevt", "Akami Hebiko", "Akiko Sushi", "Alias Anono", "Amedoll", "Anime4days", "Annytf", "Apollo MYTHOS", "Arialyxiah", "Aruna Reaver", "Attera Nox", "August Anomaly", "Babocloud", "Beribug", "Beyumi_", "BibblyDarling", "Bomie", "BrittyWho", "Brujita", "Buffpup", "CalicoDia", "Callie Calico", "Camila MYTHICS", "Captain Hannah", "Ceelio_ch", "Chongusdongus", "ChonkyLotus", "Chu Senpai", "CiernaVT", "Ciirilla", "Clotho MYTHOS", "Coni Confetti", "Coqui", "CrysaliaVT", "Daiya Fortuna", "Daph MYTHICS", "Daph_VT", "Daphne Duck", "Dearallyse", "Dee the Sphynx", "Demenishki", "Dizzy Dokuro", "Dreammxyy", "Eden Vtuber", "EliaStellaria", "Elorapard", "EmeikoVT", "Eoisvt", "Euna Miku", "FangzAH", "Fenari Mori", "FifiGoesRee", "Fluffenfox", "Fream", "FufuVT", "Furi Ferntail", "FuwaCH", "GammaInkk", "Ghoulettie", "GirlDM", "GracelaShnark", "Gyarugoyle", "HanichuuVT", "Hikanari Hina", "HuntressSpectre", "Iluvei", "Jean Faymas", "JellySaora", "Jowol (PorcelainMaid)", "K1ttch3n", "Kaguya Fae", "Kairuui", "Kesuwuception", "Kilia Kurayami", "KiranaYonome", "KonoobiVtuber", "Koppa Fortuna", "KumoGoroGoro", "Larryybearr", "LavandereVT", "Lealumie", "Lewnabun", "LoLotus", "Lorelai Loch", "Lumi Kaneko", "Lylanxia", "LyraCalyptra", "Mae Dawn", "Mako Fukusame", "Meatscave", "Milla Noire", "Millie Meraki", "Mina Aoyama", "MinikoMew", "Mint Fantome", "MiquellaVT", "Mirune Mochi", "Miyune", "Moegi Lida", "Momotexx", "Mono Monet", "Moomochi", "MoonbunVT", "Mozumi Pichi", "Murdercrumpet", "NaiyoSpede", "Nako Moon", "Nanamine Nina", "NEBULAHNEI", "NekomancerVT", "NyaNeila", "Olivia Monroe", "OniGiri", "Onikanzei", "OrendaVT", "Para Norma", "PeikuVT", "PinBunVT", "Pinkchyu", "Pippin Otter", "Piranya", "PixCatOS", "PolarPeri", "Pumpkin Potion", "Puresera_", "QueensWrath", "RadiaActive", "Rae Chuu", "RamuneLive", "Rana Ianna", "Ray Himesama", "Reina Sun", "Remilia", "Remuchii", "Reycall", "Rhubarb N. Kustard", "Rin Penrose", "RivaVTuber", "Roca Rourin", "Saeko Kitsune", "SakurahVT", "Savisenpai", "Scarlett Flameheart", "Secret Subject", "Seira Wynn", "Shekai", "Shisui Michiru", "Shoozki", "Silva livv", "SimplyAzura", "SpongeyBuns", "Star2d2", "Succuguts", "Sukovt", "Sylliah", "SylveeVT", "TaigaVS", "Techycutie", "Thor Chan VR", "ttvrosie", "Vaempy", "Vexoria", "VitaMyon", "Vixenstella", "Whiskey Project", "Whoisrinkya", "Yae Yugiri", "YFU Baby", "Yomi Quinnley", "YourItalianWaifu", "YuikaiChan", "Yura Rikudou", "YUY IX", "Zeus MYTHOS", "Hermes MYTHOS", "Dionysus MYTHOS", "Hephaestus MYTHOS", "MyuVT"];
    let shipgirlProxies = ["Chao Ho", "Chi An", "Huan Ch'ang", "Ting An", "Yat Sen", "Ying Swei", "Alabama", "Arizona", "Atlanta", "Constellation", "Essex", "Fargo", "Georgia", "Hornet II", "Indiana", "Indianapolis", "Ingraham", "Kearsarge", "Louisville", "Marblehead", "Maryland", "Massachusetts", "Memphis", "Minneapolis", "North Carolina", "Northampton", "Pittsburgh", "San Jacinto", "Seattle", "South Dakota", "Yorktown", "Yorktown II", "Alsace", "Brennus", "Guichen", "Jeanne d'Arc", "Lyon", "Painleve", "Richelieu", "Suffren", "Alvitr", "Bismarck", "Bismarck Zwei", "Blücher", "Duisberg", "Elbe", "Friedrich Carl", "Fritz Rumey", "Hipper", "Jade", "Lützow", "Magdeburg", "Mainz", "Prinz Rupprecht", "Regensburg", "U-410", "U-556", "Weser", "Z11", "Z16", "Z24", "Z52", "Admiral Nakhimov", "Arkhangelsk", "Chapayev", "Chkalov", "Gangut", "Kirov", "Kursk", "Murmansk", "Pamiat Merkuria", "Poltava", "Sovetskaya Belorussiya", "Sovetskaya Rossiya", "Tallinn", "Voroshilov", "Albion", "Argus", "Black Prince", "Devonshire", "Duke of York", "Glorious", "Hood", "Javelin", "King George V", "Liverpool", "Monarch", "Nelson", "Penelope", "Prince of Wales", "Royal Oak", "Scylla", "Swiftsure", "Theseus", "Victorious", "Akagi-Chan", "Akashi", "Ayanami", "Ayase", "Azuma", "Chikuma", "Chitose", "Chiyoda", "Daisen", "Fusou", "Haguro", "Hakuryuu", "Hanazuki", "Hiei", "Kaga", "Kawakaze", "Kii", "Mikasa", "Nachi", "Noshiro", "Shimanto", "Suzuya", "Watarase", "Giuseppe Garibaldi", "Gorizia", "Impero", "Littorio", "Marco Polo", "Napoli", "Roma", "Trieste", "Adventure Galley", "Fancy", "Ganj-i-Sawai", "Golden Hind", "Portsmouth Adventure", "Dupleix", "Joffre", "Kersaint", "Marseillaise", "Mogador", "Strasbourg", "Tartu"];
    let nikkeProxies = ["Ade", "Blanc", "Brid", "Cinderella", "Crow", "D", "Diesel", "Dolla", "Dorothy", "Emma", "Ether", "Frima", "Guilty", "Harran", "Helm", "Isabel", "Maiden", "Marian", "Mast", "Mihara", "Milk", "Modernia", "Nero", "Neve", "Noir", "Privaty", "Quency", "Rapi", "Rapunzel", "Rosanna", "Sin", "Soda", "Sugar", "Tia", "Volume", "Yuni"];
    let printedContent = `${name}\n${proxyName} ${systemTag} |${speciesOne}${speciesTwo}${nationalityOne}${nationalityTwo}|\n${pronouns}\n${birthday}\n${color}\n${name}.\n\n《  ${fullName.toUpperCase()}  》\n\n☆ ${source.toUpperCase()} ☆\n\n☆★☆★☆★☆★☆★☆★☆★☆★☆\n\nEuphorias :: \nDiscomforts :: \nFront Triggers :: \nNegative Triggers :: \n\n☆★☆★☆★☆★☆★☆★☆★☆★☆\n\nBirthday :: \nGender :: \nZodiac Sign :: ${zodiac}\nSexual Orientation :: \nRomantic Orientation :: \nVibe Song ::\n\nProxies Left: ${proxiesLeft}\nVtuber Proxies Left: ${vtuberProxies.length}\nShipgirl Proxies Left: ${shipgirlProxies.length}\nNikke Proxies Left: ${nikkeProxies.length}\n\n${nikkeProxies[proxiesToDo]}`;
    let textToSaveAsBlob = new Blob([printedContent], { type: "text/plain" });
    let textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    let fileNameToSaveAs = "proxy.txt";
    let downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
}

function destroyClickedElement(event) {
    document.body.removeChild(event.target);
}
