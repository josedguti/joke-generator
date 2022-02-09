import styles from "../styles/Home.module.css";
import { useState, useEffect, useRef } from "react";
import randomHook from "../randomHook";

export default function Home() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
 

  const [firstName, setFirstName] = useState("Steve");
  const [lastName, setLastName] = useState("Jobs");

  const joke = randomHook(firstName, lastName);

  const generateJoke = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
    e.target.reset();
  }

  return (
    <>
      <div className={styles.container}>
        <h1>Joke Generator</h1>
        <h3>{joke}</h3>
        <form onSubmit={generateJoke}>
          <input placeholder="first name" ref={firstNameRef} />

          <input placeholder="last name" ref={lastNameRef} />

          <button type="submit">Generate Joke</button>
        </form>
      </div>
    </>
  );
}
