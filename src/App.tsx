import { Text } from "./components";

function App() {
  return (
    <>
      <Text>App.tsx span</Text>
      <Text as="div">App.tsx div</Text>
      <Text as="h1">App.tsx h1</Text>
      <Text as="p">App.tsx p</Text>
    </>
  );
}

export default App;
