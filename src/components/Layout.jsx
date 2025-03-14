import { useState } from "react";
import Authentication from "./Authentication";
import Modal from "./Modal";
import { useAuth } from "../Context/AuthContext";

export default function Layout(props) {
  const { children } = props;

  const [showModal, setShowModal] = useState(false);

  const { globalUser, logout } = useAuth();

  const header = (
    <header>
      <div>
        <h1 className="text-gradient">CAFFED</h1>
        <p>For Coffee Addicts</p>
      </div>
      {globalUser ? (
        <button onClick={logout}>
          <p>Logout</p>
        </button>
      ) : (
        <button onClick={() => setShowModal(true)}>
          <p>Sign In / Sign Up Free</p>
          <i className="fa-solid fa-mug-saucer"></i>
        </button>
      )}
    </header>
  );

  const footer = (
    <footer>
      <p>
        <span className="text-gradient">Caffed</span> was made by{" "}
        <a href="https://github.com/PDK1744" target="_blank">
          Kobe Bonner
        </a>{" "}
        using the <br />
        <a href="https://www.fantacss.smoljames.com" target="_blank">
          FantaCSS
        </a>{" "}
        design library.
        <br />
        Check out the project on{" "}
        <a target="_blank" href="#">
          Github
        </a>
        !
      </p>
    </footer>
  );

  function handleCloseModal() {
    setShowModal(false);
  }
  return (
    <>
      {showModal && (
        <Modal handleCloseModal={handleCloseModal}>
          <Authentication
            handleCloseModal={handleCloseModal}
          />
        </Modal>
      )}
      {header}
      <main>{children}</main>
      {footer}
    </>
  );
}
