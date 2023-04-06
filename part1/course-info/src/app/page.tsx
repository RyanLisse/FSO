"use client";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Header = ({ course }: any) => {
  console.log("hello from component");
  return <div>{course.name}</div>;
};

const Part = ({ name, number }: any) => {
  return (
    <>
      <p>
        {name} {number}
      </p>
    </>
  );
};

const Content = ({ course }: any) => {
  return (
    <>
      {course.parts.map((part: any) => (
        <Part key={part.name} name={part.name} number={part.exercises} />
      ))}
    </>
  );
};

const Total = ({ course }: any) => {
  let totalOfExercises = 0;
  for (let i = 0; i < course.parts.length; i++) {
    totalOfExercises += course.parts[i].exercises;
  }
  return (
    <>
      <p>Number of exercises {totalOfExercises}</p>
    </>
  );
};

export default function Home() {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
      </div>
    </main>
  );
}
