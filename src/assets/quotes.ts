type Quote = {
  website: string
  logo: {
    alt: string
    src: string
    height: number
    width: number
  }
  text: string
  author: string
  role: string
  company: string
}

const quotes: Quote[] = []

export default quotes
