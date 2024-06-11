import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [
    Pure: [
        couleur: [
          noir: [ 
            standards : [
              "/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard (1).jpg",
              "/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard (2).jpg",
              "/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard (3).jpg",
              "/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard (4).jpg",
            ],
            serac : [
              "/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (1).jpg",
              "/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (2).jpg",
              "/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (3).jpg",
              "/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (4).jpg",
            ]
          ]
          bleu: [ 
            jantes: [
              standards, serac
            ]
          ]
          blanc: [ 
            jantes: [
              standards, serac
            ]
          ]

          ]
        ]
    ]
    Legende: [
        couleur: [
            noir: [ 
              url,url,url
            ]
            bleu: [ 
              url,url,url
              
            ]
            blanc: [ 
              url,url,url
              
            ]

            ]
          ]
  equipement : [
    conduite : [

    ]
  ]
          
  
  voiture: [
    {
      version: string,
      images: [],
      couleur: string,
      model: "pure",
      sellerieChoix: [url , url],
      equipements: [],
      accessoires: [],
    },
  ],
};

export const alpineSlice = createSlice({
  name: "alpine",
  initialState,
  reducers: {},
});

export const { setCouleur } = alpineSlice.actions;
export default alpineSlice.reducer;
