import { Flex, Box, Text } from "@mantine/core";
import SpacingLabel from "./spacing-label";

const BoxSpacing = () => {
  return (
    <Flex justify="center" align="center">
      <Box
        w={200}
        h={200}
        pos="relative"
        style={{
          border: "1px solid #ca8a0499",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#fed7aa",
        }}
      >
        <Text size="10px" pos="absolute" top={2} left={2}>
          margin
        </Text>
        <SpacingLabel pos="y" attr="margin-left" style={{ left: 0 }} />
        <SpacingLabel pos="x" attr="margin-top" style={{ top: 0 }} />
        <SpacingLabel pos="y" attr="margin-right" style={{ right: 0 }} />
        <SpacingLabel pos="x" attr="margin-bottom" style={{ bottom: 0 }} />
        <Box
          w={120}
          h={120}
          pos="relative"
          style={{
            border: "2px solid #ca8a0499",
            background: "#bbf7d0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text size="10px" pos="absolute" top={1} left={2}>
            padding
          </Text>
          <SpacingLabel pos="y" attr="padding-left" style={{ left: 0 }} />
          <SpacingLabel pos="x" attr="padding-top" style={{ top: 0 }} />
          <SpacingLabel pos="y" attr="padding-right" style={{ right: 0 }} />
          <SpacingLabel pos="x" attr="padding-bottom" style={{ bottom: 0 }} />
          <Box
            w={40}
            h={40}
            pos="relative"
            style={{
              border: "2px solid #ca8a0499",
              background: "white",
            }}
          ></Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default BoxSpacing;
