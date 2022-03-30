import React from "react";

export interface Pasangan {
    id: string,
    name: string,
    status: string,
    gender: string,
    src: string
}

interface Context {
    pasangans: Pasangan[];
    tampung: Pasangan[];
    addPasangan: (pasangan: Pasangan) => void,
    deletePasangan: (pasanganId: string) => void
}

export const PasanganContext = React.createContext<Context>({
    pasangans: [],
    tampung: [],
    addPasangan: () => {},
    deletePasangan: () => {}
});



