import { useState } from 'react';
import Search from './Search';

export default function App() {
  const [location, setLocation] = useState('');

  const [updated, setUpdated] = useState(location);

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const handleClick = () => {
    setUpdated(Location);
  };

  
  

}
