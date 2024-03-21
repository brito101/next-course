'use client';

import {
  revalidatePathAction,
  revalidateTagAction,
} from '@/actions/revalidate-path';
import React from 'react';

export default function Update() {
  function handleClick() {
    revalidateTagAction('actions');
  }
  // React.useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     revalidatePathAction('/acoes');
  //   }, 5000);
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);
  return <button onClick={handleClick}>Update</button>;
}
