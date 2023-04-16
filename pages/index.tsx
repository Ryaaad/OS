
import { Inter } from 'next/font/google'
import SideNav from '@/components/SideNav'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div  className='h-[100vh] bg-[#F0F8FF] ' >
    <SideNav path='Dashboard'></SideNav>
   </div>
  )
}
