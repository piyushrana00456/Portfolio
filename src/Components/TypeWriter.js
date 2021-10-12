import { Typewriter } from "react-simple-typewriter";
export const MyComponent = () => {
  // const handleType = (count: number) => {
  //   // access word count number
  //   console.log(count)}
  // }

  // const handleDone = () => {
  //   console.log(`Done after 5 loops!`)
  // }

  return (
    <div className="App">
      <h1
        style={{ paddingTop: "5rem", margin: "auto 0", fontWeight: "normal" }}
      >
        {/* Life is simple{" "} */}
        <span style={{ color: "red", fontWeight: "bold" }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={["Eat", "Sleep", "Code", "Repeat!"]}
            loop={Infinity}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            //   onLoopDone={handleDone}
            //   onType={handleType}
          />
        </span>
      </h1>
    </div>
  );
};
