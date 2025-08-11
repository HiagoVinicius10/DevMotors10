import About from "@/components/home/about";
import { Hero } from "@/components/hero";
import { Submenu } from "@/components/home/submenu";
import { getDataHome, getSubMenu } from "@/utils/actions/get-data";
import { HomeProps } from "@/utils/home.type";
import { Phone } from "lucide-react";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { SubMenuProps } from "@/utils/menu.type";

export default async function Home() {
  const {  object }: HomeProps = await getDataHome();
  const menu: SubMenuProps = await getSubMenu()

    
  return (
      <main>
        {menu.objects.length > 0 && <Submenu menu={menu}/>}
        <div>
            <Hero
              heading={object.metadata.heading}
              buttonTitle={object.metadata.cta_button.title}
              buttonUrl={object.metadata.cta_button.url}
              bannerUrl={object.metadata.banner.url}
              icon={<Phone size={20} color="#fff"/>}
            />
        </div>

       <Container>
             <About object={object}/>
             <Footer object={object}/>
       </Container>
        
      </main>
  )}