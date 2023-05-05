import { createTheme, useMediaQuery } from '@mui/material'
import React from 'react'

const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

export const theme  = React.useMemo(() => createTheme({
    palette: {
        mode: prefersDarkMode ? 'dark' : 'light', 
    },
}), [prefersDarkMode])