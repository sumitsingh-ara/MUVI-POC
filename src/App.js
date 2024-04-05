import { AccessToken } from "./components/AccessToken/AccessToken";
import { useState } from "react";

function App({ updateAuthToken }) {
  const [fetchingToken, setFetchingToken] = useState(true);

  return (
    <div>
      {fetchingToken && (
        <AccessToken
          updateAuthToken={updateAuthToken}
          setFetchingToken={setFetchingToken}
        />
      )}
    </div>
  );
}

export default App;
