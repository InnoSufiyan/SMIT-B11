import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Modal } from "./Components/Modal";

function App() {
  const [modalState, setModalState] = useState("");

  return (
    <>
      <button onClick={() => setModalState("success")}>Success</button>
      <button onClick={() => setModalState("error")}>Error</button>
      <button onClick={() => setModalState("danger")}>Danger</button>
      <div className="main">
        {modalState == "success" ? (
          <Modal>
            <button
              style={{
                backgroundColor: "green",
              }}
            >
              Success
            </button>
            <p>Mabrook you registered successfully</p>
          </Modal>
        ) : modalState == "error" ? (
          <Modal>
            <button
              style={{
                backgroundColor: "orange",
              }}
            >
              Error
            </button>
            <p>Bhai saab error aya hai</p>
          </Modal>
        ) : modalState == "danger" ? (
          <Modal>
            <button
              style={{
                backgroundColor: "red",
              }}
            >
              Danger
            </button>
            <p>Al-Moat</p>
          </Modal>
        ) : null}
      </div>
    </>
  );
}

export default App;
