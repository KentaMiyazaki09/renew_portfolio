'use client'

import styles from './pageTitle.module.scss'

type Props = {
  text: string
}

export default function PageTitle({ text }: Props) {
  return (
    <h1 className={styles.pageTitle}>{`${text}`}</h1>
  )
}