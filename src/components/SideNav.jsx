import { Flex, Heading } from "@chakra-ui/react"
import { useState } from "react";
import { Link, NavLink } from "react-router-dom"


export const SideNav = () => {
    const defaultStyle = {
        display: "flex",
        padding: "1rem 3rem",
        borderRadius: "999px",
        margin: "0.2rem 0",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
    }

    const menuItems = [
        {
            name: "Dashboard",
            link: "/dashboard",
            symbol: "home",
            id: 1
        },
        {
            name: "My Profile",
            link: "/myProfile",
            symbol: "person",
            id: 2
        }
    ]

    return (
        <Flex
            flexDirection="column"
            alignItems="center"
        >
            {menuItems.map(({ name, link, symbol, id }) => (
                <NavLink
                    key={id}
                    to={link}
                    style={({ isActive }) => ({
                        ...defaultStyle,
                        background: isActive ? "#17a2b8" : "",
                        color: isActive ? "#f4f4f4" : ""
                    })
                    }
                >
                    <Flex
                        className="material-symbols-outlined"
                        alignItems="center"
                        justifyContent="center"
                    >
                        {symbol}
                    </Flex>
                    <Heading as="h3" size="md">{name}</Heading>
                </NavLink>
            ))
            }
        </Flex >
    )
}