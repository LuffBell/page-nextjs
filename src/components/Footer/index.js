import Logo from "../Logo";
import { FooterContainer, FooterSocial } from "./style";

export default function Footer({ src }) {
    return (
        <FooterContainer>
             <Logo src={src}/>
            <FooterSocial src="./whatsapp.png">(xx) xxxxx-xxxx</FooterSocial>
            <FooterSocial src="./correspondencia.png">xxxxxx@xxxxx.xxx</FooterSocial>
            <FooterSocial src="./instagram.png">@xxxxxxxxxxxx</FooterSocial>
            <FooterSocial src="./facebook">@xxxxxxxxxxx</FooterSocial>
        </FooterContainer>
    )
}