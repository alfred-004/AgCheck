import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GitPullRequestArrow, Brackets, Network, Waypoints, Tally4, AlignVerticalJustifyEnd } from "lucide-react";

import Link from "next/link";

const dataStructure = [
  {
    name: "Array",
    Icon: Brackets,
    href: "/topics/Array",
    description:
      "Skip lengthy local language installations. Our in-browser editor supports all the language for convenience",
  },
  {
    name: "Stack - (Static)",
    Icon: AlignVerticalJustifyEnd,
    href: "/topics/Array",
    description:
      "AlgoCheck offers an intuitive interface, ensuring a seamless learning experience for users.",
  },
  {
    name: "Queue - (Static)",
    Icon: Tally4,
    href: "/topics/Array",
    description:
      "  Access a wide range of DSA problem statements to practice and enhance problem-solving skills.",
  },
  {
    name: "Linked-List",
    Icon: GitPullRequestArrow,
    href: "/topics/Array",
    description:
      "  Access a wide range of DSA problem statements to practice and enhance problem-solving skills.",
  },
  {
    name: "Tree",
    Icon: Network,
    href: "/topics/Array",
    description:
      "  Access a wide range of DSA problem statements to practice and enhance problem-solving skills.",
  },
  {
    name: "Graph",
    Icon: Waypoints,
    href: "/topics/Array",
    description:
      "  Access a wide range of DSA problem statements to practice and enhance problem-solving skills.",
  },
  {
    name: "Stack - (Dynamic)",
    Icon: AlignVerticalJustifyEnd,
    href: "/topics/Array",
    description:
      "AlgoCheck offers an intuitive interface, ensuring a seamless learning experience for users.",
  },
  {
    name: "Queue - (Dynamic)",
    Icon: Tally4,
    href: "/topics/Array",
    description:
      "AlgoCheck offers an intuitive interface, ensuring a seamless learning experience for users.",
  },


];

const algorithms = [
  {
    name: "Array",
    Icon: Brackets,
    href: "/topics/Array",
    description:
      "Skip lengthy local language installations. Our in-browser editor supports all the language for convenience",
  },
  {
    name: "Stack - (Static)",
    Icon: AlignVerticalJustifyEnd,
    href: "/topics/Array",
    description:
      "AlgoCheck offers an intuitive interface, ensuring a seamless learning experience for users.",
  },
  {
    name: "Queue - (Static)",
    Icon: Tally4,
    href: "/topics/Array",
    description:
      "  Access a wide range of DSA problem statements to practice and enhance problem-solving skills.",
  },
  {
    name: "Linked-List",
    Icon: GitPullRequestArrow,
    href: "/topics/Array",
    description:
      "  Access a wide range of DSA problem statements to practice and enhance problem-solving skills.",
  },
  {
    name: "Tree",
    Icon: Network,
    href: "/topics/Array",
    description:
      "  Access a wide range of DSA problem statements to practice and enhance problem-solving skills.",
  },
  {
    name: "Graph",
    Icon: Waypoints,
    href: "/topics/Array",
    description:
      "  Access a wide range of DSA problem statements to practice and enhance problem-solving skills.",
  },
  {
    name: "Stack - (Dynamic)",
    Icon: AlignVerticalJustifyEnd,
    href: "/topics/Array",
    description:
      "AlgoCheck offers an intuitive interface, ensuring a seamless learning experience for users.",
  },
  {
    name: "Queue - (Dynamic)",
    Icon: Tally4,
    href: "/topics/Array",
    description:
      "AlgoCheck offers an intuitive interface, ensuring a seamless learning experience for users.",
  },


];



export default function Topic() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="flex w-full max-w-sm items-center space-x-2 py-8">
          <Input type="search" placeholder="Search any topic" />
          <Button type="submit">Search</Button>
        </div>
        <div className="p-10 text-center">
          <h2 className="py-10 text-lg font-semibold tracking-tight text-gray-900 sm:text-6xl"> Data  {" "}<span className="text-slate-500">Structure</span> </h2>
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0 ">
          {dataStructure.map((dataStructure) => (
            <div className="rounded px-5 py-20 shadow-lg transition-all duration-700 hover:scale-110">
              <div className="flex flex-col gap-2">
                <div
                  key={dataStructure.name}
                  className="text-center  md:flex md:items-start md:text-left lg:block lg:text-center"
                >
                  <Link key={dataStructure.name} href={dataStructure.href}>
                    <div className="md:flex-shrink-0 flex justify-center">
                      <div className="h-16 w-16 flex items-center justify-center rounded-lg bg-slate-600 text-blue-200">
                        {<dataStructure.Icon className="w-1/3 h-1/3" />}
                      </div>
                    </div>

                    <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                      <h3 className="text-base font-medium text-gray-900">
                        {dataStructure.name}
                      </h3>
                      <p className="mt-3 text-sm text-muted-foreground">
                        {dataStructure.description}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
        <div className="h-10 w-auto bg-slate-300 my-10 rounded-lg"></div>
        <div className="p-5 text-center">
          <h2 className="py-10 text-lg font-semibold tracking-tight text-gray-900 sm:text-6xl"> Algo<span className="text-slate-500">rithm</span> </h2>
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0 ">
          {algorithms.map((algorithm) => (
            <div className="rounded px-5 py-20 shadow-lg transition-all duration-700 hover:scale-110">
              <div className="flex flex-col gap-2">
                <div
                  key={algorithm.name}
                  className="text-center  md:flex md:items-start md:text-left lg:block lg:text-center"
                >
                  <Link key={algorithm.name} href={algorithm.href}>
                    <div className="md:flex-shrink-0 flex justify-center">
                      <div className="h-16 w-16 flex items-center justify-center rounded-lg bg-blue-100 text-blue-900">
                        {<algorithm.Icon className="w-1/3 h-1/3" />}
                      </div>
                    </div>

                    <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                      <h3 className="text-base font-bold text-gray-700">
                        {algorithm.name}
                      </h3>
                      <p className="mt-3 text-sm text-muted-foreground">
                        {algorithm.description}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
