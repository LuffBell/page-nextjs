import { Link, Nav } from "./style.js";

export default function Menu ({ itens }) {
    return (
        <Nav>
            {itens.map((i,index) => {
                return (
                    <Link key={index} as="a" href={i == 'Inicio' ? '/' : `/`+i}>{i}</Link>
                )
            })}
        </Nav>
    )
}