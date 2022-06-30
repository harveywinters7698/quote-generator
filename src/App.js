import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Center } from "@mantine/core";
import { ToastContainer, Zoom } from "react-toastify";

import Quote from "./Quote";

function App() {
  const [quote, setQuote] = useState(null);

  const getQuote = () => {
    axios.get('https://api.quotable.io/random')
      .then((res) => {
        setQuote(res.data);
      }).catch((err) => {
        alert(err);
      })
  }

  useEffect(() => {
    getQuote();
  }, [])

  return (
    <div style={{ background: "#22b8cf" }}>
      <ToastContainer transition={Zoom} autoClose={3000} hideProgressBar={true} icon={false} />
      <Container>
        <Center style={{ height: "100vh" }}>
          <Quote author={quote ? quote.author : ""} content={quote ? quote.content : ""} getQuote={getQuote} />
        </Center>
      </Container>

    </div>
  );
}

export default App;
