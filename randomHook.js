import { useState, useEffect } from "react";

function randomHook(firstName, lastName) {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    const fetchJoke = async () => {
      await fetch(
        `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
      )
        .then((res) => res.json())
        .then((data) => setJoke(data.value.joke.replace(/&quot;/g,'\"')));
    };
    fetchJoke();
  }, [firstName, lastName]);
  return joke;
}

export default randomHook;
