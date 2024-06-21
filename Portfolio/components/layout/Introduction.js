import NavBar from "@/components/layout/Navigation";


export default function Introduct() {
    return (
        <section className="relative h-screen">
            <NavBar />

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4">
                
                <h1 className="text-slate-400 text-5xl py-5 fade-up">
                    Hello,
                </h1>
                <h2 className="text-slate-400 text-5xl fade-up-delay">
                    my name is <span className="text-primary">Oscar Reyes</span>
                </h2>
            </div>
        </section>
    );
}
