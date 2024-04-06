import { AccessToken } from "./components/AccessToken/AccessToken";
import { useState } from "react";

function App({ setToken, token }) {
  const [fetchingToken, setFetchingToken] = useState(true);
  return (
    <div>
      {fetchingToken ? (
        <AccessToken
          setFetchingToken={setFetchingToken}
          setToken={setToken}
          token={token}
        />
      ) : (
        <div style={{ width: "100%" }}>
          <img
            src="/hero.jpg"
            alt="Sfa Champions"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      )}
    </div>
  );
}

export default App;
