'use client';

import React from 'react';

const page = () => {
  const [file, setFile] = React.useState<File>();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;

    try {
      const data = new FormData();
      data.set('file', file);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: data,
      });

      if (!res.ok) throw new Error(await res.text());
    } catch (e: any) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='file'
        name='file'
        onChange={(e) => setFile(e.target.files?.[0])}
      />
      <button type='submit'>Enviar</button>
    </form>
  );
};

export default page;
