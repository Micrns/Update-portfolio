import Link from "next/link";
import Image from "next/image";

export default function ProjectLists() {
  return (
    <section className="outline outline-primary/10 rounded grid grid-cols-3 p-10 gap-1">
      <Link href={'https://github.com/Micrns/college-housing'}>
        <div className="imageContainer">
          <Image 
            src={"/college housing.png"}
            width={600}
            height={500}
            alt="college-housing"
          />
          <div className="overlay">
          <div className="overlayText">College Housing</div>
            <div className="overlayDescription">A search website that allows university students to find housing accomodations. Allows users to minimize extensive research to find housing that fits their needs</div>
            </div> 
        </div>
      </Link>
      
      <Link href={'https://github.com/jjamesparkrr/holo'}>
        <div className="imageContainer">
          <Image 
            src={"/Holo Mainpage (1).png"}
            width={600}
            height={500}
            alt="rental-website"
          />
          <div className="overlay">
            <div className="overlayText">Holo</div>
            <div className="overlayDescription">A renting application that allows users to rent out sports gear/ equipment, tools and vehicles.</div>
            </div>
        </div>
      </Link>

      <Link href={'https://github.com/Micrns/Oscar-Reyes-portfolio'}>
        <div className="imageContainer">
          <Image 
            src={"/Frame 1 (3).png"}
            width={600}
            height={500}
            alt="past-portfolio"
          />
          <div className="overlay">
          <div className="overlayText">Oscar Reyes Portfolio</div>
            <div className="overlayDescription">First deployed website portfolio that showcases my skils and familiarity of JavaScript, HTML, CSS.</div>
            </div> 
        </div>
      </Link>

      <Link href={'https://github.com/Micrns/java-weatherapp-api'}>
        <div className="imageContainer">
          <Image 
            src={"/weather (2).png"}
            width={600}
            height={500}
            alt="weather"
          />
          <div className="overlay">
          <div className="overlayText">Weather Application</div>
            <div className="overlayDescription">A simple weather application that allows users to search the weather for any city around the world. Improved my understanding in fetching and displaying data from an API.</div>
            </div> 
        </div>
      </Link>

      <Link href={'https://github.com/Micrns/python-sorting-visualizer-pygame'}>
        <div className="imageContainer">
          <Image 
            src={"/Sorting-algorithm.png"}
            width={600}
            height={500}
            alt="weather"
          />
          <div className="overlay">
          <div className="overlayText">PyGame Sorting Algorithm</div>
            <div className="overlayDescription">A visualizer that shows the speed and method of each sorting algorithm. Improves my understanding of data structures and algorithms and time complexity. </div>
            </div> 
        </div>
      </Link>

      <Link href={'https://github.com/Micrns/Update-portfolio'}>
        <div className="imageContainer">
          <Image 
            src={"/Sorting-algorithm.png"}
            width={600}
            height={500}
            alt="weather"
          />
          <div className="overlay">
          <div className="overlayText">Oscar Reyes Updated Portfolio</div>
            <div className="overlayDescription">An updated version of my website portfolio using Next.js and Tailwind. Previous portfolio needed improvements due to some technical issues with the layout. Additionally, improved my understanding in Next.js and Tailwind.</div>
            </div> 
        </div>
      </Link>
    </section>
  );
}
