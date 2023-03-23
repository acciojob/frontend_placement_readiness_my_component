import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
`;

const Title = styled.h3`
  margin: 0;
  margin-bottom: 0.8rem;
  text-transform: capitalize;
`;

const Body = styled.p`
  margin: 0;
  color: #333;
  text-transform: capitalize;
`;

const Styles = () => {
  return `
    body {
      margin: 0;
      padding: 0;
      font-family: sans-serif;
    }
  `;
};

const MyComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {}, []);

  return (
    <>
      <style>{Styles()}</style>
      <Container>
        {/* Map data here, map ITEM compnent which has title and body. take title and body from the data you get in the api */}
      </Container>
    </>
  );
};

export default MyComponent;
