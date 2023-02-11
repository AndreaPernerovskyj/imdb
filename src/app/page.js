import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
	<h1 className="text-[#bbb000] text-[100px]">
		Hello world!
 	</h1>
  )
}
