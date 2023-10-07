import { Suspense, useState } from 'react';
import wrapPromise from './wrapPromises';

const getPeople = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(['bob1', 'bob2', 'bob3']), 3000);
  });
};

const peoplePromise = wrapPromise(getPeople());

const PeopleList = () => {
  const people = peoplePromise.read();

  return (
    <>
      {people?.map((person) => (
        <div key={person}>{person}</div>
      ))}
    </>
  );
};

const SuspenseExample = () => {
  const [show, setShow] = useState(false);

  if (!show) {
    return <button onClick={() => setShow(true)}>Show list of people</button>;
  }
  return (
    <div>
      <h1>List of people</h1>
      <Suspense fallback={<div>Loading....</div>}>
        <PeopleList />
      </Suspense>
    </div>
  );
};

export default SuspenseExample;
