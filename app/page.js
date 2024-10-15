import Image from "next/image";
import Buttons from "./_components/Buttons/Buttons";
import Container from "./_components/Container";
import Banner from "./images/banner.png";
import Heading from "./_components/Heading";
import Services from "./_components/Services";
import { services } from "./_components/data";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="bg-background">
        <Container>
          <div className=" h-[80vh] lg:flex lg:justify-between">
            <div className="flex flex-col items-center justify-center text-center gap-5 h-full lg:items-start lg:text-left lg:w-[40%] lg:gap-10">
              <h1
                className={`text-white text-4xl font-extrabold w-fit lg:text-7xl lg:font-black font-[family-name:var(--heading-font)]`}
              >
                {" "}
                Consult a Doctor Anytime, anywhere By video call
              </h1>
              <p className="text-white text-lg">
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Sociis
                ipsum posuere pharetra odio aliquam porta congue. In tincidunt
                sed sagittis cum ac. Porttitor vitae dictum eget neque blandit
                venenatis justo.
              </p>

              <Buttons text="Ask a Doctor Online" orange />
            </div>

            <div className="hidden lg:block lg:w-[2/5] lg:h-full w-fit lg:py-20 lg:overflow-hidden">
              <Image src={Banner} width={700} />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container>
          <div className="py-20">
            <Heading>
              {" "}
              Our <span className="text-[#ff8a01]">Consulting</span>{" "}
              Specialities
            </Heading>

            <p className="text-center text-md text-foreground font-light w-1/2 mx-auto mt-4">
              Vorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              malesuada augue habitasse aliquet. Viverra id cursus nascetur
              pulvinar tincidunt iaculis. Hac cursus faucibus fermentum arcu
              turpis fusce sed volutpat.
            </p>
          </div>


          <div className="w-fit grid grid-cols-4 mx-auto">
            {services.map((service,index) => (
              <Link href={`/services/${service.linkURL}`} key={index}>
                <Services serviceName={service.name} url={service.imageUrl}/>
              </Link>
            ))}
          </div>

          {/* <Services serviceName={'Dermatology'} url={Neurology} />
          <Services serviceName={'Dermatology'} url={Neurology} />
          <Services serviceName={'Dermatology'} url={Neurology} />
          <Services serviceName={'Dermatology'} url={Neurology} />
          <Services serviceName={'Dermatology'} url={Neurology} />
          <Services serviceName={'Dermatology'} url={Neurology} />
          <Services serviceName={'Dermatology'} url={Neurology} />
          <Services serviceName={'Dermatology'} url={Neurology} /> */}
          
        </Container>
      </section>
    </div>
  );
}
