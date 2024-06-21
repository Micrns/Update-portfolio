import Link from "next/link";
import Image from "next/image";

export default function ProjectLists() {
  return (
    <section className="outline outline-primary/10 rounded grid grid-cols-3 p-10 gap-1">
      <Link href={''}>
        <div className="imageContainer">
          <Image 
            src={"/college housing.png"}
            width={600}
            height={500}
            alt="college-housing"
          />
          <div className="overlay"></div> 
        </div>
      </Link>
      
      <Link href={''}>
        <div className="imageContainer">
          <Image 
            src={"/Holo Mainpage (1).png"}
            width={600}
            height={500}
            alt="rental-website"
          />
          <div className="overlay"></div>
        </div>
      </Link>

      <Link href={''}>
        <div className="imageContainer">
          <Image 
            src={"/Frame 1 (3).png"}
            width={600}
            height={500}
            alt="past-portfolio"
          />
          <div className="overlay"></div> 
        </div>
      </Link>

      <Link href={''}>
        <div className="imageContainer">
          <Image 
            src={"/weather (2).png"}
            width={600}
            height={500}
            alt="weather"
          />
          <div className="overlay"></div> 
        </div>
      </Link>

      <Link href={''}>
        <div className="imageContainer">
          <Image 
            src={"/Sorting-algorithm.png"}
            width={600}
            height={500}
            alt="weather"
          />
          <div className="overlay"></div> 
        </div>
      </Link>

      <Link href={''}>
        <div className="imageContainer">
          <Image 
            src={"/new-portfolio.png"}
            width={600}
            height={500}
            alt="weather"
          />
          <div className="overlay"></div> 
        </div>
      </Link>
    </section>
  );
}
