import React, { useState } from 'react';

const Test = () => {
  const [fields, setFields] = useState([
    { value: '', id: 1 },
  ]);

  const handleChange = (index, newValue) => {
    const newFields = [...fields];
    newFields[index].value = newValue;
    setFields(newFields);
  };

  const handleAddField = () => {
    setFields([...fields, { value: '', id: fields.length + 1 }]);
  };

  const handleRemoveField = (id) => {
    const newFields = fields.filter((field) => field.id !== id);
    setFields(newFields);
  };

  return (
    <div>
      {fields.map((field, index) => (
        <div key={field.id}>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleChange(index, e.target.value)}
          />
          <button onClick={() => handleRemoveField(field.id)}>Remove</button>
        </div>
      ))}
      <button onClick={handleAddField}>Add Image Field</button>
    </div>
  );
};

export default Test;
