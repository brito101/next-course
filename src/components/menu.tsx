import Link from "next/link";

export default async function Menu() {
  return (
    <ul className="menu">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/products">Products</Link>
      </li>
      <li>
        <Link href="/products/add">Add Product</Link>
      </li>
      {/* <li>
        <Link href="/acoes">Ações</Link>
      </li> */}
    </ul>
  );
}
