import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  touteslesimages: {},
  couleurs: ["bleu", "vert", "rouge"],
  voiture: [
    {
      images: [],
      couleur: "vert",
      model: "pure",
      jantes: [],
      sellerie: [],
      equipements: [],
      accessoires: [],
      recapitulatif: [],
    },
  ],
};

export const alpineSlice = createSlice({
  name: "alpine",
  initialState,
  reducers: {
    setCouleur: (state, action) => {
      state.voiture[0].couleur = action.payload;
    },
  },
});

export const { setCouleur } = alpineSlice.actions;
export default alpineSlice.reducer;
