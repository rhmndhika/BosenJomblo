import React, { useState } from "react";
import {PasanganContext, Pasangan} from './Pasangan-context';
import Nabila from '../gambar/Bila1.jpg';
import Cgul from '../gambar/Cgul1.jpg';
import Devi from '../gambar/Devi1.jpg';
import Freya from '../gambar/Freya1.jpg';
import Yupi from '../gambar/Yupi1.jpg';
import Zee from '../gambar/Zee1.jpg';
import Dea from '../gambar/Dea1.jpg';
import Ayana from '../gambar/Ayana1.jpg';
import Haruka from '../gambar/Haruka1.jpg';
import Naomi from '../gambar/Naomi1.jpg';
import Shania from '../gambar/Shania1.jpg';




const FriendsContextProvider: React.FC = (props) => {
    const [pasangans, setPasangan] = useState<Pasangan[]>([
        {
            id: 'f1',
            name: 'Nabila Ayu',
            status: 'Lagi bete',
            gender: 'Female',
            src: Nabila

        },
        {
            id: 'f2',
            name: 'Cindy Gula',
            status: 'Butuh Kasih Sayang',
            gender: 'Female',
            src: Cgul

        },
        {
            id: 'f3',
            name: 'Ningtara Devi',
            status: 'Need Friends :(',
            gender: 'Female',
            src: Devi

        },
        {
            id: 'f4',
            name: 'Freyanashifa',
            status: 'Lagi Kesepian Bangett',
            gender: 'Female',
            src: Freya

        },
        {
            id: 'f5',
            name: 'Cindy Yuvia',
            status: 'Butuh pendamping',
            gender: 'Female',
            src: Yupi

        },
        {
            id: 'f6',
            name: 'Azizi Asadel',
            status: 'zZzzzz',
            gender: 'Female',
            src: Zee
        },
        {
            id: 'f7',
            name: 'Dea Rizky',
            status: 'Terlalu Lama Sendiri',
            gender: 'Female',
            src: Dea
        },
        {
            id: 'f8',
            name: 'Ayana Shahab',
            status: 'Hiksss',
            gender: 'Female',
            src: Ayana
        },
        {
            id: 'f9',
            name: 'Haruka',
            status: 'Good Morning World!',
            gender: 'Female',
            src: Haruka
        },
        {
            id: 'f10',
            name: 'Shinta Naomi',
            status: 'Ohaiyo',
            gender: 'Female',
            src: Naomi
        },
        {
            id: 'f11',
            name: 'Shania Gracia',
            status: 'Sunshinee',
            gender: 'Female',
            src: Shania
        }
    ]);

    const [tampung, setTampung] = useState<Pasangan[]>([]);

    const addPasangan = (newPasangan: Pasangan) => {
        if (newPasangan == null) return;
    
        setTampung((currPasangan) => {
          return currPasangan.concat(newPasangan);
        });
        
        const filter = pasangans.filter((item) => item !== newPasangan);
        setPasangan(filter);
    };


    const deletePasangan = (id: string) => {
        const menghapus = tampung.filter((item) => item.id !== id);
        setTampung(menghapus)
      };

    return(
        <PasanganContext.Provider value={{
            pasangans,
            tampung,
            addPasangan,
            deletePasangan
        }}> 
        {props.children}
        </PasanganContext.Provider>
    );
    };

export default FriendsContextProvider;