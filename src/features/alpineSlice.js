import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: {
    Pure: {
      couleur: {
        noir: {
          standard: [
            "/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard (1).jpg",
            "/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard (2).jpg",
            "/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard (3).jpg",
            "/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard (4).jpg",
          ],
          serac: [
            "/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (1).jpg",
            "/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (2).jpg",
            "/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (3).jpg",
            "/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (4).jpg",
          ],
        },
        bleu: {
          standard: [
            "/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard (1).jpg",
            "/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard (2).jpg",
            "/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard (3).jpg",
            "/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard (4).jpg",
          ],
          serac: [
            "/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (1).jpg",
            "/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (2).jpg",
            "/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (3).jpg",
            "/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (4).jpg",
          ],
        },
        blanc: {
          standard: [
            "/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (1).jpg",
            "/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (2).jpg",
            "/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (3).jpg",
            "/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (4).jpg",
          ],
          serac: [
            "/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (1).jpg",
            "/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (2).jpg",
            "/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (3).jpg",
            "/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (4).jpg",
          ],
        },
      },
    },
    Legende: {
      couleur: {
        noir: [
          "/images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-1.jpg",
          "/images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-2.jpg",
          "/images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-3.jpg",
          "/images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-4.jpg",
        ],
        bleu: [
          "/images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-1.jpg",
          "/images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-2.jpg",
          "/images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-3.jpg",
          "/images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-4.jpg",
        ],
        blanc: [
          "/images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-1.jpg",
          "/images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-2.jpg",
          "/images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-3.jpg",
          "/images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-4.jpg",
        ],
      },
    },
  },
  equipement: {
    conduite: [],
  },
  voiture: [
    {
      version: "",
      images: [],
      couleur: "",
      model: "pure",
      sellerieChoix: ["", ""],
      equipements: [],
      accessoires: [],
    },
  ],
};

export const alpineSlice = createSlice({
  name: "alpine",
  initialState,
  reducers: {
    setCouleur: (state, action) => {},
  },
});

export const { setCouleur } = alpineSlice.actions;
export default alpineSlice.reducer;
