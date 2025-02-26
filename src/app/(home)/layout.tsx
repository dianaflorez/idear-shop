import { Hero } from "app/components/home/Hero"
import { Description } from "app/components/home/Description"

export default function HomeLayuot({children}: {children: React.ReactNode}) {
  return (
    <main>
      <Hero />
      <Description />
      {children}
    </main>
  )
}