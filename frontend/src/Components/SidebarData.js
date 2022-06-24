import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';

export const SidebarData = [
    {
        nome: "Início",
        icone: <HomeIcon />,
        link: "/",
        class: "nav-text"
    },
    {
        nome: "Adicionar",
        icone: <AddIcon />,
        link: "/adicionar",
        class: "nav-text"
    }
]

