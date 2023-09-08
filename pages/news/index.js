import Link from "next/link";
import { Fragment } from "react";

function NewsPage() {
  return <Fragment>
    <h1>
      this is news page
    </h1>
    <ul>
      <li>
      <Link href="/news/nextjs-is-great-framework">
        NextJS is Great Framework
      </Link>
      </li>
      <li>
        Something Else
      </li>
    </ul>
  </Fragment>
}

export default NewsPage;