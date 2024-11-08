const Campeones = [
  "Aatrox",
  "Ahri",
  "Akali",
  "Alistar",
  "Amumu",
  "Anivia",
  "Annie",
  "Aphelios",
  "Ashe",
  "AurelionSol",
  "Azir",
  "Bard",
  "Blitzcrank",
  "Brand",
  "Braum",
  "Caitlyn",
  "Camille",
  "Cassiopeia",
  "Chogath",
  "Corki",
  "Darius",
  "Diana",
  "DrMundo",
  "Draven",
  "Ekko",
  "Elise",
  "Evelynn",
  "Ezreal",
  "Fiddlesticks",
  "Fiora",
  "Fizz",
  "Galio",
  "Gangplank",
  "Garen",
  "Gnar",
  "Gragas",
  "Graves",
  "Gwen",
  "Hecarim",
  "Heimerdinger",
  "Illaoi",
  "Irelia",
  "Ivern",
  "Janna",
  "JarvanIV",
  "Jax",
  "Jayce",
  "Jhin",
  "Jinx",
  "Kaisa",
  "Kalista",
  "Karma",
  "Karthus",
  "Kassadin",
  "Katarina",
  "Kayle",
  "Kayn",
  "Kennen",
  "Khazix",
  "Kindred",
  "Kled",
  "KogMaw",
  "Leblanc",
  "LeeSin",
  "Leona",
  "Lillia",
  "Lissandra",
  "Lucian",
  "Lulu",
  "Lux",
  "Malphite",
  "Malzahar",
  "Maokai",
  "MasterYi",
  "MissFortune",
  "Mordekaiser",
  "Morgana",
  "Nami",
  "Nasus",
  "Nautilus",
  "Neeko",
  "Nidalee",
  "Nocturne",
  "Nunu",
  "Olaf",
  "Orianna",
  "Ornn",
  "Pantheon",
  "Poppy",
  "Pyke",
  "Qiyana",
  "Quinn",
  "Rakan",
  "Rammus",
  "RekSai",
  "Rell",
  "Renata",
  "Renekton",
  "Rengar",
  "Riven",
  "Rumble",
  "Ryze",
  "Samira",
  "Sejuani",
  "Senna",
  "Seraphine",
  "Sett",
  "Shaco",
  "Shen",
  "Shyvana",
  "Singed",
  "Sion",
  "Sivir",
  "Skarner",
  "Sona",
  "Soraka",
  "Swain",
  "Sylas",
  "Syndra",
  "TahmKench",
  "Taliyah",
  "Talon",
  "Taric",
  "Teemo",
  "Thresh",
  "Tristana",
  "Trundle",
  "Tryndamere",
  "TwistedFate",
  "Twitch",
  "Udyr",
  "Urgot",
  "Varus",
  "Vayne",
  "Veigar",
  "Velkoz",
  "Vex",
  "Vi",
  "Viego",
  "Viktor",
  "Vladimir",
  "Volibear",
  "Warwick",
  "MonkeyKing",
  "Xayah",
  "Xerath",
  "XinZhao",
  "Yasuo",
  "Yone",
  "Yorick",
  "Yuumi",
  "Zac",
  "Zed",
  "Zeri",
  "Ziggs",
  "Zilean",
  "Zoe",
  "Zyra",
];

var gridContainer = document.getElementById("tiles");

Campeones.forEach(function (champion) {
  let gridItem = document.createElement("button");
  gridItem.classList.add("grid-item");
  let imgElement = document.createElement("img");

  imgElement.setAttribute("data-image", champion);
  imgElement.src = `https://ddragon.leagueoflegends.com/cdn/14.20.1/img/champion/${champion}.png`;
  gridItem.appendChild(imgElement);
  imgElement.addEventListener("click", function () {
    mostrarCampeon(champion);
  });
  gridContainer.appendChild(gridItem);
});

var splash = document.querySelector(".splashArt");

function mostrarCampeon(campeon) {
  document.querySelector(".nombreCampeon").innerHTML = campeon;
  let urlImagen = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${campeon}_0.jpg`;
  splash.src = urlImagen;
  cargarCampeonesDesdeJson(campeon);
}

function cargarCampeonesDesdeJson(campeon) {
  fetch('/Trabajo Practico LED/Dragontails/14.20.1/data/es_AR/championFull.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error al cargar el archivo JSON');
      }
      return response.json();
    })
    .then((data) => {
      mostrarCampeonDesdeJson(data.data[campeon]); // Aquí obtenemos los datos específicos del campeón
    })
    .catch((error) => {
      console.error('Hubo un problema al cargar el archivo JSON:', error);
    });
}

function mostrarCampeonDesdeJson(campeonData) {
  if (campeonData) {
    document.querySelector(".description").innerHTML = campeonData.lore; // Suponiendo que el campo 'lore' es el texto de la descripción.
  } else {
    document.querySelector(".description").innerHTML = "Descripción no disponible.";
  }
}

window.onload = cargarCampeones;