'use client';
import React from 'react';

const Down = ({ projectData }) => {
  function downloadJSON(data: any[], filename: string = 'data.json') {
    const jsonStr = JSON.stringify(data, null, 2); // prettified JSON

    const blob = new Blob([jsonStr], { type: 'application/json' });

    const url = window.URL.createObjectURL(blob); // ✅ use window.URL
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.URL.revokeObjectURL(url);
  }

  downloadJSON(projectData);

  return <div>Down</div>;
};

export default Down;
