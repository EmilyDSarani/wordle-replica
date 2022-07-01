import React, { useEffect, useState } from 'react'
import styles from './Grid.module.css';

export default function Grid() {
  //to put the wordler words in state
  const [words, setWords]=useState('')

  //we want the user to be able to type directly into the boxes
  //
  useEffect(() => {
    window.addEventListener('keypress', e => setWords(words + e.key))
  }, [words]);



 
  // show the words as user types
  return (
    <>
    <div className={styles.container} >
      <div className={styles.square}>{words.charAt(0)}</div>
      <div className={styles.square}>{words.charAt(1)}</div>
      <div className={styles.square}>{words.charAt(2)}</div>
      <div className={styles.square}>{words.charAt(3)}</div>
      <div className={styles.square}>{words.charAt(4)}</div>
    </div>
    <div className={styles.container} >
      <div className={styles.square}></div>
      <div className={styles.squaretwo}></div>
      <div className={styles.squarethree}></div>
      <div className={styles.squarefour}></div>
      <div className={styles.squarefive}></div>
    </div>
    <div className={styles.container} >
      <div className={styles.square}></div>
      <div className={styles.squaretwo}></div>
      <div className={styles.squarethree}></div>
      <div className={styles.squarefour}></div>
      <div className={styles.squarefive}></div>
    </div>
    <div className={styles.container} >
      <div className={styles.square}></div>
      <div className={styles.squaretwo}></div>
      <div className={styles.squarethree}></div>
      <div className={styles.squarefour}></div>
      <div className={styles.squarefive}></div>
    </div>
    <div className={styles.container} >
      <div className={styles.square}></div>
      <div className={styles.squaretwo}></div>
      <div className={styles.squarethree}></div>
      <div className={styles.squarefour}></div>
      <div className={styles.squarefive}></div>
    </div>
    <div className={styles.container} >
      <div className={styles.square}></div>
      <div className={styles.squaretwo}></div>
      <div className={styles.squarethree}></div>
      <div className={styles.squarefour}></div>
      <div className={styles.squarefive}></div>
    </div>

    </>
  )
}
