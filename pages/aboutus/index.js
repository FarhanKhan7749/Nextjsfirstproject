import Link from "next/link";
import { Fragment } from "react";

function AboutUs() {
  return <Fragment>
    <h1>this is About us page</h1>
    <ul>
      <li>
        <Link href="aboutus/1">1</Link>
      </li>
      <li>
        <Link href="aboutus/2">2</Link>
      </li>
      <li>
        <Link href="aboutus/3">3</Link>
      </li>
    </ul>
  </Fragment>
}

export default AboutUs;