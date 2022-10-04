import {
    Box,
    Flex,
    Image,
    Square,
    Text,
    useDisclosure
} from "@chakra-ui/react"
import { useState } from "react";
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ScaleFadeEx } from "./CommentBox";



export const Post = ({ name, username, content, pp, src }) => {
    const [display, setDisplay] = useState("none");
    const [isOpen, setOpen] = useState("none");

    const onToggle = e => {
        console.log(e.currentTarget)
        if(e.target !== e.currentTarget) return
        else isOpen === "none" ? setOpen("block") : setOpen("none")
    }

    return (
        <Flex py="1rem" width="100%">
            <Box flexShrink="0">
                <Image height="2.5rem" width="2.5rem" src={pp} alt="username" borderRadius="full" />
            </Box>
            <Flex
                flexDirection="column"
                gap="0.5rem"
                pl="1rem"
                justifyContent="flex-start"
                textAlign="left"
                flexShrink="1"
                width="100%"
            >
                <Box fontSize="0.8rem">
                    <Text as="b">{name}</Text> <Text display="inline" color="gray">@{username} • 1m</Text>
                    <Text>{content}</Text>
                    <Flex
                        gap="0.1rem"
                        my="1rem"
                        justifyContent="center"
                        overflow="hidden"
                    >
                        {src && src?.slice(0, 2).map(item => (
                            <Box
                                height="15rem"
                                width="50%"
                                backgroundImage={item}
                                backgroundPosition="center"
                                backgroundSize="auto 100%"
                                backgroundRepeat="no-repeat"
                                onClick={() => setDisplay("flex")}
                                cursor="pointer"
                            >
                            </Box>
                        ))}
                        {src?.length > 2 &&
                            <Square
                                position="relative"
                                cursor="pointer"
                                className="material-symbols-outlined"
                                background="#f3f3f3"
                                padding="1rem"
                                onClick={() => setDisplay("flex")}
                            >
                                add_circle
                            </Square>}
                    </Flex>
                    <Flex my="1rem" justifyContent="space-between">
                        <Text
                            cursor="pointer"
                            as="i"
                            className="material-symbols-outlined"
                        >
                            favorite_border
                        </Text>
                        <Text
                            cursor="pointer"
                            as="i"
                            className="material-symbols-outlined"
                            onClick={e => onToggle(e)}
                        >
                            chat_bubble
                        </Text>
                        <Text
                            cursor="pointer"
                            as="i"
                            className="material-symbols-outlined"
                        >
                            share
                        </Text>
                        <Text
                            cursor="pointer"
                            as="i"
                            className="material-symbols-outlined"
                        >
                            bookmark
                        </Text>
                    </Flex>
                </Box>
            </Flex>
            <ScaleFadeEx
                isOpen={isOpen}
                onToggle={onToggle}
            />
            {
                <Flex
                    position="fixed"
                    display={display}
                    height="100vh"
                    width="100vw"
                    bottom="0"
                    left="0"
                    background="#1e1e1e80"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Box width="30rem" height="100%" overflowY="scroll">
                        <Square
                            className="material-symbols-outlined"
                            cursor="pointer"
                            onClick={() => setDisplay("none")}
                            padding="0.8rem"
                            borderRadius="999px"
                            background="#f3f3f3"
                            width="min-content"
                            margin="0.2rem auto"
                        >close</Square>
                        <Carousel showArrows={true}>
                            {src?.map((item, index) => (<div>
                                <img src={item} alt={index} height="70vh" width="10rem" />
                            </div>))}
                        </Carousel>
                    </Box>
                </Flex>}
        </Flex>
    )
}
