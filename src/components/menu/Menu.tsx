import Link from "next/link";

export const Menu = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>

        <li>
          <Link href={"/movies"}>Movies page</Link>
        </li>
      </ul>
    </div>
  );
};
