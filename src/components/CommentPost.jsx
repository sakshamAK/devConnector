import {
    Box,
    Flex,
    Image,
    Square,
    Text,
} from "@chakra-ui/react"

export const CommentPost = ({ name, username, content, pp, src, _id, borderBottom, fSize, lHeight }) => {
    return (
        <Flex py="1rem" width="100%" borderBottom={borderBottom}>
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
                    <Text as="b" fontSize={fSize}>{name}</Text> <Text display="inline" fontSize={fSize} color="gray">@{username} • 1m</Text>
                    <Text fontSize={fSize} pb="0.8rem">{content}</Text>
                    {src && <Flex
                        gap="0.1rem"
                        my="1rem"
                        justifyContent="center"
                        overflow="hidden"
                    >
                        {src && src?.slice(0, 2).map(item => (
                            <Box
                                key={item}
                                height="15rem"
                                width="50%"
                                backgroundImage={item}
                                backgroundPosition="center"
                                backgroundSize="auto 100%"
                                backgroundRepeat="no-repeat"
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
                            >
                                add_circle
                            </Square>}
                    </Flex>}
                    <Flex justifyContent="space-between">
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
        </Flex>
    )
}
