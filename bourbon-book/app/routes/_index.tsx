// import type { V2_MetaFunction } from "@remix-run/node";
import MainHeader from "~/components/MainHeader";
import { FaGlassWhiskey } from "react-icons/fa";
import { requireUserSession } from "~/data/auth.server";

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
        <p className="text-white text-center">
          My Bourbon Book is where you can keep track of your bourbon collection
          and tastings.
        </p>
        <p className="text-white text-center">
          If you have any feature requests please email{" "}
          <a
            className="underline"
            href="mailto:djreale@gmail.com?subject=MBB%20Feedback"
          >
            djreale@gmail.com
          </a>
        </p>
        <div className="flex justify-center text-white space-x-2 pt-5">
          <p className="font-bold"> Cheers!</p>
          <FaGlassWhiskey className="text-white text-3xl" />
        </div>
      </div>
    </div>
    // <div>
    //   <MainHeader />
    // </div>
  );
}
export async function loader({ request }) {
  const userId = await requireUserSession(request);
  return userId;
}
