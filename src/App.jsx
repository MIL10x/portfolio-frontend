import Allrouter from "./Routers/Allrouter";
import { Header, Footer } from "./components";
import { useState, useEffect, useRef } from "react";

function App() {
  const [audioplay, setaudioplay] = useState(false);
  const audioref = useRef();
  useEffect(() => {
    if (audioref.current) {
      if (audioplay) {
        audioref.current.play();
      } else {
        audioref.current.pause();
      }
    }
  }, [audioplay]);

  const a = "test";

  return (
    <>
      <audio
        src="/Assets/Music/portfolioaudio.mp3"
        ref={audioref}
        className="hidden"
        loop
      />
      <Header setaudioplay={setaudioplay} audioplay={audioplay} test={a} />
      <Allrouter />
      <Footer />
    </>
  );
}

export default App;
