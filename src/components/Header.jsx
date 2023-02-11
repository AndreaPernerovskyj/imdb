'use client'
import React from 'react'
import MenuItem from './MenuItem'
import {AiTwotoneHome} from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'
import Link from 'next/link'

export default function Header() {
  return (
	 <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center sm:py-6'>
			<div className="flex">
				<MenuItem title='Home' address='/' Icon={AiTwotoneHome}/>
				<MenuItem title='About' address='/' Icon={FcAbout}/>
			</div>

			<div className="">
				<Link href="/">
					<h2><span className='font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1'>IMDb</span><span className='text-xl hidden sm:inline'>Clone</span></h2>
				</Link>
			</div>
	 </div>
  )
}
