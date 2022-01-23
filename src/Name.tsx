import React from 'react';

interface NameProps {
  name: string;
}

const Name = ({name}: NameProps) => {
  return (
    <div>
      {name}
    </div>
  );
};

export default Name;