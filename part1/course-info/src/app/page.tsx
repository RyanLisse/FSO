import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Header = ({ course }: any) => {
  return <div>{course}</div>;
};

const course = "Half Stack application development";
const part1 = "Fundamentals of React";
const exercises1 = 10;
const part2 = "Using props to pass data";
const exercises2 = 7;
const part3 = "State of a component";
const exercises3 = 14;

const Part = ({ name, number }: any) => {
  return (
    <>
      <p>
        {name} {number}
      </p>
    </>
  );
};

const Content = ({
  part1,
  part2,
  part3,
  exercises1,
  exercises2,
  exercises3,
}: any) => {
  return (
    <>
      <Part name={part1} number={exercises1} />
      <Part name={part2} number={exercises2} />
      <Part name={part3} number={exercises3} />
    </>
  );
};

const Total = ({ exercises1, exercises2, exercises3 }: any) => {
  return (
    <>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </>
  );
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Header course={course} />
        <Content
          part1={part1}
          part2={part2}
          part3={part3}
          exercises1={exercises1}
          exercises2={exercises2}
          exercises3={exercises3}
        />
        <Total
          exercises1={exercises1}
          exercises2={exercises2}
          exercises3={exercises3}
        />
      </div>
    </main>
  );
}
