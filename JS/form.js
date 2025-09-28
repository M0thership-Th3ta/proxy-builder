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
    let vtuberProxies = ["Akami Hebiko", "Alias Anono", "Anime4days", "Annytf", "Arialyxiah", "Aruna Reaver", "Attera Nox", "August Anomaly", "Babocloud", "Beribug", "Beyumi_", "BibblyDarling", "Bomie", "BrittyWho", "Brujita", "Buffpup", "CalicoDia", "Callie Calico", "Camila MYTHICS", "Captain Hannah", "Ceelio_ch", "Chongusdongus", "ChonkyLotus", "Chu Senpai", "Ciirilla", "Clotho MYTHOS", "Coni Confetti", "Coqui", "CrysaliaVT", "Daiya Fortuna", "Daph MYTHICS", "Daph_VT", "Daphne Duck", "Dearallyse", "Dee the Sphynx", "Dreammxyy", "Eden Vtuber", "EliaStellaria", "Elorapard", "EmeikoVT", "Eoisvt", "Euna Miku", "FangzAH", "Fenari Mori", "FifiGoesRee", "Fluffenfox", "Fream", "FufuVT", "Furi Ferntail", "FuwaCH", "GammaInkk", "GirlDM", "Hikanari Hina", "HuntressSpectre", "Iluvei", "Jean Faymas", "JellySaora", "Jowol (PorcelainMaid)", "K1ttch3n", "Kairuui", "Kilia Kurayami", "KiranaYonome", "KonoobiVtuber", "KumoGoroGoro", "Larryybearr", "LavandereVT", "Lealumie", "LoLotus", "Lorelai Loch", "Lylanxia", "LyraCalyptra", "Mae Dawn", "Meatscave", "Milla Noire", "Millie Meraki", "Mina Aoyama", "MinikoMew", "MiquellaVT", "Mirune Mochi", "Miyune", "Momotexx", "Mono Monet", "Moomochi", "MoonbunVT", "Mozumi Pichi", "Murdercrumpet", "NaiyoSpede", "Nako Moon", "Nanamine Nina", "NEBULAHNEI", "NekomancerVT", "NyaNeila", "Olivia Monroe", "OniGiri", "Onikanzei", "OrendaVT", "Para Norma", "PeikuVT", "PinBunVT", "Pippin Otter", "PixCatOS", "PolarPeri", "Puresera_", "QueensWrath", "Rae Chuu", "RamuneLive", "Rana Ianna", "Ray Himesama", "Reina Sun", "Remilia", "Remuchii", "Reycall", "Rin Penrose", "RivaVTuber", "Roca Rourin", "Saeko Kitsune", "SakurahVT", "Savisenpai", "Scarlett Flameheart", "Secret Subject", "Seira Wynn", "Shekai", "Shisui Michiru", "Shoozki", "Silva livv", "SimplyAzura", "SpongeyBuns", "Succuguts", "Sukovt", "Sylliah", "SylveeVT", "Techycutie", "ttvrosie", "Vaempy", "Vexoria", "VitaMyon", "Whiskey Project", "Whoisrinkya", "YFU Baby", "Yomi Quinnley", "YourItalianWaifu", "YuikaiChan", "Yura Rikudou", "YUY IX", "Hermes MYTHOS", "Dionysus MYTHOS", "Hephaestus MYTHOS", "MyuVT"];
    let shipgirlProxies = ["Chao Ho", "Chi An", "Huan Ch'ang", "Ting An", "Yat Sen", "Ying Swei", "Alabama", "Atlanta", "Constellation", "Essex", "Fargo", "Georgia", "Hornet II", "Indianapolis", "Ingraham", "Kearsarge", "Louisville", "Marblehead", "Massachusetts", "Memphis", "Minneapolis", "North Carolina", "Northampton", "Pittsburgh", "San Jacinto", "Seattle", "South Dakota", "Yorktown", "Yorktown II", "Brennus", "Guichen", "Jeanne d'Arc", "Lyon", "Painleve", "Richelieu", "Suffren", "Alvitr", "Bismarck", "Bismarck Zwei", "Blücher", "Duisberg", "Elbe", "Friedrich Carl", "Fritz Rumey", "Hipper", "Jade", "Lützow", "Magdeburg", "Mainz", "Prinz Rupprecht", "Regensburg", "U-410", "U-556", "Weser", "Z11", "Z16", "Z24", "Z52", "Admiral Nakhimov", "Arkhangelsk", "Chapayev", "Chkalov", "Gangut", "Kirov", "Kursk", "Murmansk", "Pamiat Merkuria", "Poltava", "Sovetskaya Belorussiya", "Sovetskaya Rossiya", "Tallinn", "Voroshilov", "Albion", "Argus", "Black Prince", "Devonshire", "Duke of York", "Glorious", "Hood", "Javelin", "King George V", "Liverpool", "Monarch", "Nelson", "Penelope", "Prince of Wales", "Royal Oak", "Scylla", "Swiftsure", "Theseus", "Victorious", "Akagi-Chan", "Akashi", "Ayanami", "Ayase", "Azuma", "Chikuma", "Chitose", "Chiyoda", "Daisen", "Fusou", "Haguro", "Hakuryuu", "Hanazuki", "Hiei", "Kaga", "Kawakaze", "Kii", "Mikasa", "Nachi", "Noshiro", "Shimanto", "Suzuya", "Watarase", "Giuseppe Garibaldi", "Gorizia", "Impero", "Littorio", "Marco Polo", "Napoli", "Roma", "Trieste", "Adventure Galley", "Fancy", "Ganj-i-Sawai", "Golden Hind", "Portsmouth Adventure", "Dupleix", "Joffre", "Kersaint", "Marseillaise", "Mogador", "Strasbourg", "Tartu"];
    let tdollProxies = ["Andoris", "Bathilde", "Colphne", "Helia", "Krolik", "Lotta", "Nemesis", "Peritya", "Sharkry", "Ullrid", "Vepley", "Zhaohui", "AK-12", "AK-47", "AK-47U", "Alva", "AUG", "Ballista", "Belka", "C-MS", "Carcano M1891", "Carcano M91/38", "Centaureissi", "Cheeta", "Colt Walker", "Contender", "Daiyan", "Desert Eagle", "DP-12", "Dushevnaya", "FAL", "Five-seveN", "G41", "Glock 17", "Grizzly", "Groza", "Honey Badger", "IWS 2000", "Jericho", "Jiangyu", "Kolibri", "Lainie", "Lee-Enfield", "Littara", "M14", "M1887", "M1911", "M1918", "M1A1", "M870", "M950A", "MDR", "Micro Uzi", "Mosin-Nagant", "Nagant", "Negev", "Nikketa", "P90", "Qiongjiu", "Qiuhua", "RFB", "Ribeyrolles", "RPK-16", "RPK-203", "S.A.T.8", "Saiga-12", "Shipka", "SIG MCX", "Skorpion", "SPAS-15", "Sten MkII", "StG44", "SVD", "TAC-50", "Thompson", "TMP", "Tololo", "Vector", "Voymastina", "Welrod", "Anna", "Bramedb", "Grig", "Isomer White", "Koleda", "Machlian", "Narciss", "Nemhran", "Nimogen", "Nyto Black", "Nyto White", "Beak", "Destroyer", "Dreamer", "Executioner", "Gager", "Hunter", "Intruder", "Judge", "Scarecrow", "Dandelion"];
    let printedContent = `${name}\n${proxyName} ${systemTag} |${speciesOne}${speciesTwo}${nationalityOne}${nationalityTwo}|\n${pronouns}\n${birthday}\n${color}\n${name}.\n\n《  ${fullName.toUpperCase()}  》\n\n☆ ${source.toUpperCase()} ☆\n\n☆★☆★☆★☆★☆★☆★☆★☆★☆\n\nEuphorias :: \nDiscomforts :: \nFront Triggers :: \nNegative Triggers :: \n\n☆★☆★☆★☆★☆★☆★☆★☆★☆\n\nBirthday :: \nGender :: \nZodiac Sign :: ${zodiac}\nSexual Orientation :: \nRomantic Orientation :: \nVibe Song ::\n\nProxies Left: ${proxiesLeft}\nVtuber Proxies Left: ${vtuberProxies.length}\nShipgirl Proxies Left: ${shipgirlProxies.length}\nT-Doll Proxies Left: ${tdollProxies.length}\n\n${vtuberProxies[proxiesToDo]}`;
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











