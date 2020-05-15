import React from 'react';

const getVowel = () => {
  const randomVowel = 'aaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeiiiiiiiiiiiiiooooooooooooouuuuu'.split(
    ''
  )[Math.floor(Math.random() * 67)];
  const uppercaseVowel = randomVowel.toUpperCase();
  return uppercaseVowel;
};

const getConsonant = () => {
  const randomConsonant = 'bbcccddddddffggghhjklllllmmmmnnnnnnnnppppqrrrrrrrrrssssssssstttttttttvwxyz'.split(
    ''
  )[Math.floor(Math.random() * 74)];
  const uppercaseConsonant = randomConsonant.toUpperCase();
  return uppercaseConsonant;
};
