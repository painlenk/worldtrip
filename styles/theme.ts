import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        white:{
            400: '#F5F8FA',
            500: '#DADADA',
            600: '#47585B',
        },
        yellow: {
            500: '#FFBA08'
        }


    },

    fonts: {
        body: 'Poppins, sans-serif',
    },

    styles: {
        body : {
            bg: '##F5F8FA'
        }
    }
})