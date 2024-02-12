import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Button,
  buttonVariants,
} from '@/components/ui/button'
import Link from 'next/link'


const content = [
  {
    heading: "1. What is an Array?",
    paragraph: `An array is like a box where you can store similar kinds of things together. 
    Imagine you have a box of crayons—all the crayons are in one place, 
    making it easy to find the color you need. Similarly, in programming, 
    an array is a container that holds items of the same type, such as numbers or words. 
    These items are stored one after the other in a line, making it convenient to work with them collectively. 
    So, you can think of an array as a neat and organized way to group similar pieces of information under one label, 
    just like putting all your crayons in one box.`,
    code: null,
  },
  {
    heading: "2. How to Declare an Array?",
    paragraph: `Here's how you declare an array in a simple way:
    Let's say you want to store a bunch of whole numbers (integers) together. You first decide how many numbers you want to store, and then you give a name to this group of numbers.
    For example, if you want to store 5 integers, you could declare an array like this:`,
    code: `#include <stdio.h>

    int main() {
        // Declare an array to store 5 integers
        int numbers[5];
        // Loop to prompt the user to input 5 integers
        for (int i = 0; i < 5; i++) {
            // Prompt the user for an integer input
            printf("Enter an integer: ");
            // Read the integer input from the user
            scanf("%d", &numbers[i]);
        }
    
        // Print the array of integers
        printf("Array of integers: ");
        for (int i = 0; i < 5; i++) {
            printf("%d ", numbers[i]);
        }
        return 0;
    }
    
    `,
  },
];

const problem_statement = [
  {
    problem:
      "Q1) Declare an Array:  Write a C program to declare an array named numbers of size 5 to store integer values.",
    id: "1"
    },
  {
    problem:
      "Q2)Read Array Elements:  Write a C program to read 5 integer values from the user and store them in an array named array.",
      id: "2"
  
    },
  {
    problem:
      "Q3) Print Array Elements:  Write a C program to print all the elements of an array named arr.",
      id: "3"
  
    },
  {
    problem:
      "Q4) Find Maximum Element:  Write a C++ program to find the maximum element from an array named nums of size 6.",
      id: "4"
  
    },
  {
    problem:
      "Q5)Calculate Array Sum:   Write a JavaScript function to calculate the sum of all elements in an array named numbers.",
      id: "5"
  
    },
];

export default function Array() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="item-center justify-center p-6">
          <Tabs defaultValue="Array" className="w-auto">
            <TabsList className="grid w-full grid-cols-2">
              {" "}
              <TabsTrigger value="Array" className="">
                Array
              </TabsTrigger>
              <TabsTrigger value="Problems" className="">
                Problems Statement
              </TabsTrigger>
            </TabsList>

            <TabsContent key="Array" value="Array">
              <div className="h-auto w-full bg-slate-200 p-2 rounded-lg">
                <article className="bg-white p-3">
                  <h2 className="p-3 text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Array
                  </h2>
                  <div className="p-2">
                    {content.map((cont) => (
                      <div key={cont.heading} className="p-1">
                        <h1 className="p-3 text-lg font-semibold text-gray-900 sm:text-xl">
                          {cont.heading}{" "}
                        </h1>
                        <p className="p-3 text-lg text-gray-800 sm:text-xl">
                          {cont.paragraph}
                        </p>

                        {cont.code ? (
                          <div className="bg-slate-200 grid place-items-center h-auto p-1 m-3">
                            <div className="p-4">
                              <SyntaxHighlighter
                                language="javascript"
                                style={atomOneDark}
                                customStyle={{
                                  padding: "16px",
                                  borderRadius: "12px",
                                }}
                                wrapLongLines={true}
                              >
                                {cont.code}
                              </SyntaxHighlighter>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </article>
              </div>
            </TabsContent>

            <TabsContent key="Problems" value="Problems">
              <div className="h-auto w-full">
                {problem_statement.map((ps) => (
                  <div key={ps.id}className="m-1 p-2 border border-slate-900 rounded-lg">
                    <h2 className="p-3 text-xl  tracking-tight text-gray-900 sm:text-2xl m-2">
                      {ps.problem}
                    </h2>
                    <div className="m-2 p-3">
                    <Link href="/topics" className={buttonVariants()} >
              Solve now &rarr;
            </Link>
            </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
