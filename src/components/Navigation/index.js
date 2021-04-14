import { Hamburger } from "./Hamburger";
import { Search } from "./Search";
import { BrandLogo } from "./BrandLogo";
import { Toolbox } from "./Toolbox";
import { Container } from "../Container";

export function Navigation() {
  return (
    <header>
      <Container>
        <Toolbox>
          <BrandLogo />
          <Search />
          <Hamburger />
        </Toolbox>
      </Container>
    </header>
  );
}
