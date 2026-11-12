import Button from "../ui/Button";
import heroImage from "../../assets/images/heroimage.png";
import { Sun, Leaf } from "lucide-react";

const Hero = () => {
  return (
    <section className="  bg-[#fbfcf9]">
      <div className=" grid page-container grid-cols-1 items-center py-8 lg:pt-16 lg:pb-16 lg:grid-cols-2">
        {/* Left Side Hero Section */}
        <div>
          <div className="flex items-center gap-4">
            <span className="inline-block w-8 h-0.5 bg-sage"></span>
            <p className="font-body text-xs uppercase tracking-widest text-[#63836d] font-extrabold">
              Nga toka, me kujdes
            </p>
          </div>
          <h1 className="mt-8 font-bold leading-[0.9] font-heading text-6xl md:text-[120px] lg:text-[90px] xl:text-[120px] text-brand ">
            E thjeshtë.
            <span className="block"> E mirë.</span>
            <span className="block text-sage">Prej natyre.</span>
          </h1>
          <p className="text-[#64736a] py-4 leading-1.8 max-w-[28em]">
            Trahana pa gluten, e frymëzuar nga tradita dhe e krijuar me përbërës
            të përzgjedhur. Për momente të ngrohta, çdo ditë.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Button to="/products" variant="primary">
              Zbulo Produktet
            </Button>
            <Button to="/about" variant="text">
              Historia Jone
            </Button>
          </div>
          <div className="flex items-center gap-2 my-4 md:mt-12">
            <span className="w-9 h-9 rounded-full bg-sage/20 flex items-center justify-center">
              <Leaf size={20} className="text-brand/50" />
            </span>
            <p className="text-[#64736a] text-xs">
              E fermentuar me kujdes. E përgatitur me dashuri.
            </p>
          </div>
        </div>
        {/* Right Side Hero Section */}
        <div className="relative w-full max-w-[560px] mx-auto">
          <div className="rounded-[58%_42%_55%_45%/45%_55%_45%_55%] w-full aspect-square bg-[#dfead8]">
            <img
              src={heroImage}
              className="rounded-full object-cover w-[82%] h-[82%] top-[9%] left-[9%] absolute z-10"
            />
          </div>
          <div className="absolute z-20 rounded-full aspect-square top-[10%] right-[0%] w-[22%] flex items-center justify-center items-center gap-2 bg-[#d9f2a0]">
            <Sun size={28} className="text-brand" />
            <div className="font-heading font-extrabold leading-none text-brand rotate-12">
              <span className="block">GOOD</span>
              <span className="block">FOOD</span>
              <span className="block">MOOD</span>
            </div>
          </div>
          <div className="absolute bottom-[8%] left-0 bg-white rounded-full border border-[#dfead8] px-6 py-3 text-xs font-bold tracking-widest z-20 text-brand">
            TOKË FOOD · NATYRSHËM · ME KUJDES ·
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
