import React, { useState } from 'react';

const FormComponent = ({ addEntry }) => {
  const [weather, setWeather] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date().toLocaleDateString();
    if (weather && content) {
      addEntry({ date, weather, content });
      setWeather('');
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Weather:
        <select value={weather} onChange={(e) => setWeather(e.target.value)}>
          <option value="">Select weather</option>
          <option value="Sunny">晴天</option>
          <option value="Partly Cloudy">晴時多雲</option>
          <option value="Rainy">雨天</option>
          <option value="Thunderstorm">雷雨</option>
        </select>
      </label>
      <br />
      <label>
        Diary:
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your diary here"
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
