'use client'

type Props = {
  text: string
}

export default function PageTitle({ text }: Props) {
  return (
    <h1>{`${text}`}</h1>
  )
}