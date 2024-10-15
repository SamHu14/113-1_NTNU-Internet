import React from 'react';

const DisplayComponent = ({ entries }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Weather</th>
          <th>Diary</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry, index) => (
          <tr key={index}>
            <td>{entry.date}</td>
            <td>{entry.weather}</td>
            <td>{entry.content}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DisplayComponent;
