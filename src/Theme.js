import { extendTheme } from "@chakra-ui/react"
import { StyleFunctionProps } from '@chakra-ui/styled-system'

export const theme = extendTheme({
    colors: {
        brand: {
            pr: {
                500: '#17a2b8',
                dark: '#30374a'
            },
            dark: "#343a40",
            light: "#f4f4f4",
            danger: "#dc3545",
            success: "#28a745"
        },
    }
})