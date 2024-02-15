export default function Header({ title }) {
  return (
    <>
      <h1 className="title">{title}</h1>
      <p>Hey there 👋!</p>

      <p>
        We're <a href="https://aexol.com">Aexol</a>, a technology-first
        company's best friend. We love building mobile apps, web apps, SaaS
        tools, open-source & blazingly fast ecommerece solutions based on
        Vendure!
      </p>
    </>
  );
}
