import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  players: [
    // {
    //   name: "Yugo",
    //   pv: 200,
    //   pvMax: 200,
    //   mana: 50,
    //   manaMax: 50,
    //   id: 1,
    //   avatar: "yugo.png",
    //   bg: "Yugo-card.gif",
    //   color: "#4ecbd3",
    //   petite: "elio/PA",
    //   attaque: "elio/GA",
    //   special: "elio/ULT",
    //   heal: "elio/HEAL",
    //   titlePA: "Pulsation",
    //   titleGA: "Raclée",
    //   titleULT: "Tempête",
    //   titleHEAL: "Empreinte de Wakfu ",
    // },
  ],
  monster: { id: 1, name: "Nox", pv: 400, pvMax: 400, color: "#d99f06" },
};

export const alpineSlice = createSlice({
  name: "alpineSlice",
  initialState,
  reducers: {
    hitPA: (state, action) => {
      const { playerID, damage } = action.payload;
      return {
        ...state,
        monster: {
          ...state.monster,
          pv: state.monster.pv - damage,
        },
        lastAttackerId: playerID,
      };
    },
  },
});

export default alpineSlice.reducer;
export const {
  //   hitPA,
} = alpineSlice.actions;
