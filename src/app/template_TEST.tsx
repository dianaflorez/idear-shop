import { Hero } from "app/components/home/Hero"
import { Description } from "app/components/home/Description"
import { useEffect } from "react"

export default function HomeLayuot({children}: {children: React.ReactNode}) {
  console.log('HomeLayout con TEMPLATE');

  useEffect(() => {
    console.log('envio de metricas');
    // Evento xejemplo con google analitics
    
  }, []);

  return (
    <div>
      <Hero />
      <Description />
      {children}
    </div>
  )
}