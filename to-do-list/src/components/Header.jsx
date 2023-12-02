import { Flex, Heading } from "@chakra-ui/react";

export const Header = () => {

    return (
        <Flex as="header">
            <Heading as="h1" size="2xl" mt={5} color="black">
                To Do List
            </Heading>
        </Flex>
    );
}