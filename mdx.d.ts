declare module '*.mdx' {
  export const title: string
  export const description: string
  export const image: string
  export const date: string

  export default function MDXContent(props: any): JSX.Element
}