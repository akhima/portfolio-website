import React from "react";
import { Box, Heading } from "rebass";

function Background() {
  return (
    <Box
      sx={{
        px: 4,
        py: 6,
        backgroundImage: "url(https://source.unsplash.com/random/1024x768?sky)",
        backgroundSize: "cover",
        borderRadius: 8,
        color: "white",
        bg: "gray",
      }}
    >
      <Heading textAlign="center" fontSize={[5, 6]}>
        Background Image
      </Heading>
    </Box>
  );
}

export default Background;
