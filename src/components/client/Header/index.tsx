'use client'
import Menu from '@/components/server/Menu'

const Header = () => {
  return (
    <header className='flex w-full max-h-16 z-10 header' id="header">
      <Menu />
    </header>
  )
}

export default Header