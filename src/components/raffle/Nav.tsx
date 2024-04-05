import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "../ui/navigation-menu";
import { Link } from "react-router-dom";
import { Ticket, ClipboardPen, Trophy, CircleUser } from "lucide-react"

function Nav() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Ticket/>
                    <Link to="/">Home</Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <ClipboardPen/>
                    <Link to="/register">Register</Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <CircleUser />
                    <Link to="/participants">Participants</Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Trophy />
                    <Link to="/winner">Pick Winner</Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default Nav