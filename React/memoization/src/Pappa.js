import { useCallback, useMemo, useState } from "react";
import { Beta1 } from "./Beta1";
import { Beta2 } from "./Beta2";
import { Beta3 } from "./Beta3";

export function Pappa() {
  const [name, setName] = useState("Shahbaz");
  const [pappaState, setPappaState] = useState("pappaState");
  console.log("===>> pappa calling on chowk");
  const [isDark, setIsDark] = useState(true);

  const functionProp = useCallback(function functionProp() {
    console.log("==>> ek function");
  }, []);

  const user = useMemo(() => {
    return {
      name: name,
      age: 22,
    };
  }, [isDark]);
  console.log({} == {});
  return (
    <>
      <button onClick={() => setName("Sufiyan")}>Name Changer</button>
      <button onClick={() => setIsDark(!isDark)}>ThemeChanger</button>
      <h1>Main hun Pappa</h1>
      <h2>Ab meray baad call hoga mera beta</h2>
      <Beta1 pappaState={pappaState} functionProp={functionProp} />
      <Beta2 user={user} />
      <Beta3 isDark={isDark} />
    </>
  );
}
