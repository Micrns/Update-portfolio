import Link from "next/link";
import Image from "next/image"

export default function ProjectLists(){

    return(
        <section>
            <Link href={''}>
                <Image 
                    src={"/college housing.png"}
                    width={600}
                    height={600}
                    className="rounded-md"
                    alt="college-housing"
                />
            </Link>


        </section>

    )
}