import Image from 'next/image'

export default function Services({serviceName, url}) {
  return (
    <div className="border h-[300px] w-[300px] flex flex-col justify-center items-center gap-4">
        <Image src={url} width={100} height={100}/>
        <p className="text-lg text-foreground font-bold">{serviceName}</p>
    </div>
  )
}
