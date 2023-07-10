import { Box, Text, useToast } from "@chakra-ui/react";


export function ShowToast(toast,color, message) {

    toast({
      position: "top",
      render: () => (
        <Box
          bg={color}
          p="10px"
          borderRadius="15px"
          color="white"
          textAlign="center"
        >
          <Text fontWeight="500">{message}</Text>
        </Box>
      ),
    });
  }