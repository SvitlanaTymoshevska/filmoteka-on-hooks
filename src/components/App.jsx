import { useState } from "react";
import { Wrapper } from "components/App.styled";
import { Header } from "components/Header/Header";


export const App = () => {
  const [query, setQuery] = useState("")

  const handleSubmit = (value) => { 
    setQuery(value);
    
  };
  console.log(query);
  return (
    <Wrapper>
      <Header onSubmit={handleSubmit}></Header>
    </Wrapper>
  );
};
