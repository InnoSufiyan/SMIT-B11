import { memo } from "react";

export const Beta2 = memo(function Beta2({ user }) {
  console.log("===>> beta2 calling on chowk");

  return (
    <>
      <h1>Main hun Beta 2 , naam hai {user.name}</h1>
    </>
  );
});
