import Link from "next/link";
import Image from "next/image";

export default function ExperienceCards() {
  return (
    <section>
      <div className="outline outline-primary/10 rounded flex items-center justify-center">
        <Link href={"/ObvioHealth"}>
          <div className="imageContainer">
            <Image
              src={"/unnamed.webp"}
              width={400}
              height={600}
              alt="obviohealth"
            />
            <div className="overlay">
              <div className="overlayText">Obviohealth</div> {/* Text */}
            </div>
          </div>
        </Link>
        <Link href={"/Kailasa"}>
          <div className="imageContainer">
            <Image
              src={"/kailaasa_logo.jpeg"}
              width={400}
              height={600}
              alt="Kailasa"
            />
            <div className="overlay">
              <div className="overlayText">Kailasa</div> {/* Text */}
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
