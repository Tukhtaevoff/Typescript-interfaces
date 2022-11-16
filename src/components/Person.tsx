import { FC, ChangeEvent, useState } from 'react';
import { User } from '../Interfaces';

export const Person: FC<User> = ({name, email, age, hairColor}) => { // <Props> instead of this we can put <any> they work the same way

  const [country, setCountry] = useState<string | null>(null);

  // type NameType = "Abdulaziz" | "Jack" | "Menuel"

  // const nameForType: NameType = "Menuel";  // The other way like Enum

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(evt.target.value);
  }

  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h3>{email}</h3>
      <input type="text" placeholder='You can write down your country...' onChange={ handleChange } />

      {country}
      {hairColor}
    </div>
  );
}
