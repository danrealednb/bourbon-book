// import type { V2_MetaFunction } from "@remix-run/node";
import MainHeader from "~/components/MainHeader";
import { FaGlassWhiskey } from "react-icons/fa";

// export const meta: V2_MetaFunction = () => {
//   return [
//     { title: "New Remix App" },
//     { name: "description", content: "Welcome to Remix!" },
//   ];
// };

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      {/* <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul> */}
      <MainHeader />
      <h1 className="text-xl font-bold text-white flex justify-center py-10">
        Welcome to My Bourbon Book
      </h1>
      <div className="grid justify-center">
        <p className="text-white">
          My Bourbon Book is where you can keep track of your bourbon collection
          and tastings. Cheers!
        </p>
        <div className="flex justify-center">
          <FaGlassWhiskey className="text-white text-3xl" />
        </div>
      </div>
    </div>
    // <div>
    //   <MainHeader />
    // </div>
  );
}
