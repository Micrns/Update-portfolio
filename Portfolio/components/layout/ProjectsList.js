import Link from "next/link";
import Image from "next/image"

export default function ProjectLists(){

    return(
        <section className="grid grid-cols-3 gap-3 p-10 shadow-md rounded-sm">
            <Link href={''}>
                <Image 
                    src={"/college housing.png"}
                    width={500}
                    height={500}
                    className="rounded-md shadow-xl"
                    alt="college-housing"
                />
            </Link>
            
            <Link href={''}>
                <Image 
                    src={"/Holo Mainpage (1).png"}
                    width={500}
                    height={500}
                    className="rounded-md shadow-xl"
                    alt="rental-website"
                />
            </Link>


            
            
            <Link href={''}>
                <Image 
                    src={"/Frame 1 (3).png"}
                    width={500}
                    height={500}
                    className="rounded-md shadow-xl"
                    alt="college-housing"
                />
            </Link>

            <Link href={''}>
                <Image 
                    src={"/weather (2).png"}
                    width={500}
                    height={500}
                    className="rounded-md shadow-xl"
                    alt="college-housing"
                />
                
            </Link>

            <Link href={''}>
                <Image 
                    src={"/new-portfolio.png"}
                    width={500}
                    height={500}
                    className="rounded-md shadow-xl"
                    alt="college-housing"
                />
                
            </Link>

            <Link href={''}>
                <Image 
                    src={"/Sorting-algorithm.png"}
                    width={500}
                    height={500}
                    className="rounded-md shadow-xl"
                    alt="college-housing"
                />
                
            </Link>


        </section>

    )
}