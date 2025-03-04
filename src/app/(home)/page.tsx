import { MainProducts } from "app/components/home/MainProducts"
import { Metadata } from "next"
import { Todo } from "app/components/home/Todo"

export const metadata: Metadata = {
  title: "✨ Idar Shop",
  description: "Welcome to the Idear Shop, an ecommerce from other century",
  keywords: ["ecommerce", "future", "world", "technology"],
}

export default function Home() {
  return (
    <main>
      <Todo />
      <MainProducts />
    </main>
  )
}