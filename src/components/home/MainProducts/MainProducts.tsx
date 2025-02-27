import Image from 'next/image'
import styles from './MainProducts.module.sass'
//import { getProducts } from 'app/services/shopify/products';
import { getMainProducts } from 'app/services/shopify/products';


export const MainProducts = async () => {
  // opc 1
  // const products = await getProducts()
  
  // opc 2
  // const reponse = await fetch('http://localhost:3000/api')
  // const { products } = await reponse.json()

  const products = await getMainProducts()

  return (
    <section className={styles.MainProducts}>
      <h3>✨ New products released!</h3>
      <div className={styles.MainProducts__grid}>
        {products?.map((product:any) => {
          const imageSrc = product.images[0].src;
          return (
            <article key={product.id}>
              <p>{product.title}</p>
              <Image src={imageSrc} fill alt={product.title} loading="eager" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
 />
            </article>
          )
        })}
      </div>
    </section>
  )
}