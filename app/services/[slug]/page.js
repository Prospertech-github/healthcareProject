import { services } from "@/app/_components/data"
import Image from "next/image"


export default function page({params}) {
  const service = services.find(service => service.linkURL === params.slug )

  return (
    <>
    <div className="flex flex-col gap-5 justify-center items-center py-10">
      <h3 className="text-foreground text-3xl font-bold text-center">{service.name}</h3>
      <Image src={service.imageUrl} width={100} height={100} />
    </div>

    <div className="flex flex-col border w-4/5 mx-auto px-5 py-10 text-foreground">
      <h2 className="text-foreground text-4xl font-bold">{service.heading}</h2>

      <p className="my-6">{service.p1}</p>
      <p>{service.p2}</p>

    </div>
    </>
  )
}
