if(Meteor.isServer) {
  var words = {
      "categories" : [
                      {
                      "games" : [
                                 {
                                 "words" : [
                                            "Aberdare",
                                            "Ballina",
                                            "Cobar",
                                            "Dapto",
                                            "Euston",
                                            "Forbes",
                                            "Ganmain",
                                            "Hay",
                                            "Inverell",
                                            "Jennings",
                                            "Kempsey",
                                            "Lawson",
                                            "Manilla",
                                            "Nabiac",
                                            "Pambula",
                                            "Raleigh",
                                            "Queensland",
                                            "Smithtown",
                                            "Tumut",
                                            "Uralla",
                                            "Walcha",
                                            "Walgett",
                                            "Yass",
                                            "Yeovil",
                                            "Young"
                                            ],
                                 "identifier" : 1,
                                 "name" : "Australia Towns"
                                 },
                                 {
                                 "words" : [
                                            "Ireland",
                                            "Sicily",
                                            "Zealand",
                                            "Sardinia",
                                            "Cyprus",
                                            "Majorca",
                                            "Crete",
                                            "Fyn",
                                            "Matta",
                                            "Iceland",
                                            "Corsica",
                                            "Euboea",
                                            "Amager",
                                            "Portsea",
                                            "Rhodes",
                                            "Ibiza",
                                            "Venice",
                                            "Chios",
                                            "Samos",
                                            "Sylt",
                                            "Wolin",
                                            "Hvar",
                                            "Capri",
                                            "Paros"
                                            ],
                                 "identifier" : 2,
                                 "name" : "Islands"
                                 }
                                 ],
                      "name" : "Places",
                      "identifier" : 1,
                      "bundle_id" : ""
                      },
                      {
                      "games" : [
                                 {
                                 "words" : [
                                            "Aberdare",
                                            "Ballina",
                                            "Cobar",
                                            "Dapto",
                                            "Euston",
                                            "Forbes",
                                            "Ganmain",
                                            "Hay",
                                            "Inverell",
                                            "Jennings",
                                            "Kempsey",
                                            "Lawson",
                                            "Manilla",
                                            "Nabiac",
                                            "Pambula",
                                            "Raleigh",
                                            "Queensland",
                                            "Smithtown",
                                            "Tumut",
                                            "Uralla",
                                            "Walcha",
                                            "Walgett",
                                            "Yass",
                                            "Yeovil",
                                            "Young"
                                            ],
                                 "identifier" : 3,
                                 "name" : "Australia Towns Purchased"
                                 },
                                 {
                                 "words" : [
                                            "Ireland",
                                            "Sicily",
                                            "Zealand",
                                            "Sardinia",
                                            "Cyprus",
                                            "Majorca",
                                            "Crete",
                                            "Fyn",
                                            "Matta",
                                            "Iceland",
                                            "Corsica",
                                            "Euboea",
                                            "Amager",
                                            "Portsea",
                                            "Rhodes",
                                            "Ibiza",
                                            "Venice",
                                            "Chios",
                                            "Samos",
                                            "Sylt",
                                            "Wolin",
                                            "Hvar",
                                            "Capri",
                                            "Paros"
                                            ],
                                 "identifier" : 4,
                                 "name" : "Islands Purchased"
                                 }
                                 ],
                      "name" : "Movies",
                      "identifier" : 6,
                      "bundle_id" : "com.mrott.words.package50"
                      }
                      ]
  };

var wordsNumber = Words.find().count();

  if(!wordsNumber) {
    Words.insert(words);
    console.log('Inserted Words');
  }

}
