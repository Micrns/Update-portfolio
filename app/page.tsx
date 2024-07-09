import NavBar from "../components/layout/Navigation"
import Introduct from "../components/layout/Introduction"
import SocialLink from "../components/layout/SocialLinks"
import SkillsList from "@/components/layout/Skills";


import Carousel from '@/components/layout/Carousel';

const images = [
  '\collection\IMG_0472.jpeg',
  '/collection/IMG_0552.jpeg',
  '/collection/D62E079C-8D3E-4947-9260-C599CD2754A8.jpeg',
  '/collection/IMG_0230.jpeg',
  '/collection/IMG_0555.jpeg',
  '/collection/IMG_1938.jpeg',
  '/collection/IMG_4064.jpeg',
  '/collection/IMG_2892.jpeg',
  '/collection/IMG_0501.jpeg',
  '/collection/IMG_0643.jpg',
  '/collection/IMG_0946.jpeg',
  '/collection/IMG_1160.jpeg',
  '/collection/IMG_1191.jpeg',
  '/collection/IMG_0984.jpeg',
];


export default function Home() {
  return (
    <>
      <NavBar />

      <Introduct />
      
      <section className="max-w-screen-xl mx-auto p-4">

        
          <SocialLink />
          <div className="p-8">

            <Carousel images={images}/>
          </div>
          
          
          
        
        

      </section>
      
      
      
    
    </>

 

   
    
  );
}
