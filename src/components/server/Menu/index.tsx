import AppLogo from '@/components/client/Menu/AppLogo'
import DeskTopMenu from '@/components/client/Menu/DesktopMenu'
import ResponsiveMenu from '@/components/client/Menu/ResponsiveMenu'
import LocaleSwitcher from '@/components/server/LocaleSwitcher'

const Menu = () => {
    return (<>
        <nav className="flex flex-row w-full justify-around" id="nav-menu">
            <AppLogo />
            <DeskTopMenu />
            <ResponsiveMenu />
            <LocaleSwitcher />
        </nav>
        
    </>)
}

export default Menu