import React from "react"

const Navbar = () => {
	return (
		<nav className='bg-green border-b shadow-sm'>
			<div className='max-w-6xl mx-auto px-4 py-3 flex items-center justify-between'>
				{/* Logo / Brand */}
				<div className='flex items-center gap-2'>
					<span className='text-xl font-bold text-gray-800'>Simplifier</span>
				</div>

				{/* Links */}
				<div className='hidden md:flex items-center gap-6 text-sm font-medium'>
					<a href='#' className='text-gray-600 hover:text-gray-900'>
						Home
					</a>
					<a href='#' className='text-gray-600 hover:text-gray-900'>
						About
					</a>
					<a href='#' className='text-gray-600 hover:text-gray-900'>
						Services
					</a>
					<a href='#' className='text-gray-600 hover:text-gray-900'>
						Contact
					</a>
				</div>

				{/* Button */}
				<button className='hidden md:inline-flex px-4 py-2 rounded-lg border text-sm font-medium text-gray-800 hover:bg-gray-100'>Sign In</button>

				{/* Mobile Menu Icon */}
				<button className='md:hidden inline-flex items-center p-2 rounded-md hover:bg-gray-100'>
					<span className='sr-only'>Open menu</span>
					<svg className='h-6 w-6 text-gray-800' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
						<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
					</svg>
				</button>
			</div>
		</nav>
	)
}

export default Navbar
