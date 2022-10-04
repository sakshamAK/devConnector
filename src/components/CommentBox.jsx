import { Box, Button } from "@chakra-ui/react"

export const ScaleFadeEx = ({ isOpen, onToggle }) => {

    return (
        <>
                <Box
                    p='40px'
                    onClick={e => onToggle(e)}
                    display={isOpen}
                    bg='#1e1e1e80'
                    position="fixed"
                    top="0"
                    left="0"
                    width="100vw"
                    height="100vh"
                >
                    <Box
                        py="1rem"
                        px="2rem"
                        background="white"
                        m="auto"
                        maxWidth="40rem"
                        borderRadius="1rem"
                    >
                        
                    </Box>
                </Box>
        </>
    )
}