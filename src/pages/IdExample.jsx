import { useId } from 'react';

const IdExample = () => {
  const idForFirstName = useId();
  const idForLastName = useId();
  const idForEmail = useId();

  return (
    <form>
      <label htmlFor={idForFirstName}>First Name</label>
      <input
        id={idForFirstName}
        type='text'
        placeholder={`Generated id --> ${idForFirstName}`}
      />
      <br />

      <label htmlFor={idForLastName}>Last Name</label>
      <input
        id={idForLastName}
        type='text'
        placeholder={`Generated id --> ${idForLastName}`}
      />
      <br />

      <label htmlFor={idForEmail}>Email</label>
      <input
        id={idForEmail}
        type='email'
        placeholder={`Generated id --> ${idForEmail}`}
      />
      <br />
    </form>
  );
};

export default IdExample;
