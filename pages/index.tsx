
import { Inter } from 'next/font/google'
import SideNav from '@/components/SideNav'
import jwt from 'jsonwebtoken';
import { useEffect } from 'react';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
    if (typeof sessionStorage !== 'undefined') {
    const token = sessionStorage.getItem('token');
    if (token) {
      const decodedToken = jwt.decode(token) as { [key: string]: string } | null;
      const userRole = decodedToken?.['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
      console.log('User role:', userRole);
    } }
  }, []);
  
  
  return (
   <div  className='h-[100vh] bg-[#F0F8FF] ' >
    <SideNav path='Accueil'></SideNav>
   </div>
  )
}
