import Logo from "../Logo";
import Menu from "../Menu";
import { HeaderContainer } from "./style";

export default function Header ({ src, itens }) {
    return (
        <HeaderContainer>
            <Logo src={src}/>
            <Menu itens={itens}/>
        </HeaderContainer>
    )
}