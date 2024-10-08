import Image from "next/image";
import Buttons from "./_components/Buttons/Buttons";
import Container from "./_components/Container";
import Banner from './images/banner.png'

export default function Home(){
  return(
    <div>
      <section className="bg-background">
        <Container>
          <div className=" h-[80vh] lg:flex lg:justify-between">
            <div className="flex flex-col items-center justify-center text-center gap-5 h-full lg:items-start lg:text-left lg:w-[40%] lg:gap-10">
              <h1 className={`text-white text-4xl font-extrabold w-fit lg:text-7xl lg:font-black font-[family-name:var(--heading-font)]`}> Consult a Doctor Anytime, anywhere By video call</h1>
              <p className="text-white text-lg">Borem ipsum dolor sit amet, consectetur adipiscing elit. Sociis ipsum posuere pharetra odio aliquam porta congue. In tincidunt sed sagittis cum ac. Porttitor vitae dictum eget neque blandit venenatis justo.</p>

              <Buttons text='Ask a Doctor Online' orange/>
            </div>

            <div className="hidden lg:block lg:w-[2/5] lg:h-full w-fit lg:py-20 lg:overflow-hidden">
              <Image src={Banner} width={700}/>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container>
          <div></div>
        </Container>
      </section>
    </div>
  )
}