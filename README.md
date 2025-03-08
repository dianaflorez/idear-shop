# 🛒 Next.js Shopify Store

## 🚀 Project Overview
This is a fully functional **e-commerce store** built with **Next.js** for the frontend and connected to **Shopify** as the backend. The store allows users to browse products, add items to the cart, and complete purchases seamlessly.

[Visitar IDEAR Shop](https://idear-shop.vercel.app/)
<a href="https://idear-shop.vercel.app/" target="_blank" rel="noopener noreferrer">Visitar IDEAR Shop</a>

## 🛠️ Tech Stack
- **Frontend:** Next.js, React, Tailwind CSS
- **Backend:** Shopify API
- **State Management:** React Context API / SWR
- **Authentication:** Shopify Customer API
- **Deployment:** Vercel

## 📌 Features
✅ **Dynamic Product Listings** – Fetch products directly from Shopify.
✅ **Product Details Pages** – View detailed product information.
✅ **Shopping Cart** – Add, remove, and update items.
✅ **Checkout Process** – Secure checkout via Shopify.
✅ **Customer Authentication** – Login and register with Shopify accounts.
✅ **SEO Optimized** – Server-side rendering for better performance.

## 📦 Installation
1️⃣ Clone the repository:
```bash
git clone https://github.com/yourusername/next-shopify-store.git
cd next-shopify-store
```
2️⃣ Install dependencies:
```bash
npm install
# or
yarn install
```
3️⃣ Create a **.env.local** file and add your Shopify credentials:
```env
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-shopify-store.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-access
-token
SHOPIFY_HOSTNAME=""
SHOPIFY_TOKEN=""
CACHE_TOKEN=""
SHOPIFY_GRAPHQL_ENDPOINT=""
SHOPIFY_STOREFRONT_TOKEN=""
OPENAI_API_KEY=""

```
4️⃣ Run the development server:
```bash
npm run dev
# or
yarn dev
```
The store will be available at **http://localhost:3000**.

## 🛍️ Connecting with Shopify
1. Create a **Shopify Partner Account** and a development store.
2. Generate a **Storefront API Access Token** in the Shopify admin panel.
3. Add the credentials to the `.env.local` file as shown above.

## 🚀 Deployment
Deploy the store easily on **Vercel**:
```bash
vercel
```
Or manually in **Netlify, AWS, or Digital Ocean**.

## 📜 License
This project is licensed under the **MIT License**.

---

📩 **Questions?** Feel free to reach out or contribute to the repository!

---


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
