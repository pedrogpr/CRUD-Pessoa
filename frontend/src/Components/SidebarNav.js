import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';

export const SidebarNav = [
    {
        nome: "Início",
        icone: <HomeIcon />,
        link: "/"
    },
    {
        nome: "Adicionar",
        icone: <AddIcon />,
        link: "/adicionar"
    }
]

