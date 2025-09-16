import Link from "next/Link";

export default function Home() {
  return (
    <div>
      <Link href="/user">user</Link> <br />
      <Link href="/userWithoutId">userWithoutId</Link>
    </div>
  );
}
