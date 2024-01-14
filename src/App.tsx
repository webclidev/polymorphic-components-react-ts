import { Emphasis, Text } from "./components";

function App() {
  return (
    <>
      <Text as="h1">H1 Heading / Title</Text>

      <Text as="h2">H2 Subheading / Subtitle</Text>

      <Text as="a" href="https://react.dev/" target="_blank">
        Learn React
      </Text>

      <br />

      <Text as={Emphasis}>important message!</Text>
    </>
  );
}

export default App;
