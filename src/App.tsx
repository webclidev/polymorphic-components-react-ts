import { useRef } from "react";
import { Emphasis, Text } from "./components";

function App() {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const anchorRef = useRef<HTMLAnchorElement | null>(null);

  return (
    <>
      <Text as="h1" ref={headingRef}>
        H1 Heading / Title
      </Text>

      <Text as="h2" color="orange" style={{ backgroundColor: "black" }}>
        H2 Subheading / Subtitle
      </Text>

      <Text as="a" ref={anchorRef} href="https://react.dev/" target="_blank">
        Learn React
      </Text>

      <br />

      <Text as={Emphasis}>important message!</Text>
    </>
  );
}

export default App;
