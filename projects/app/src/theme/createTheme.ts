import { createTheme, useMediaQuery } from '@mui/material'
import React from 'react'

const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

export const theme  = React.useMemo(() => createTheme({
    palette: {
        primary: {
            main: '#ff4400',
        }, 
        secondary: {
            main: '#f44336',
        },
    },
}), [prefersDarkMode])