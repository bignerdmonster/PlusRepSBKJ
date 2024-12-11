import Link from "next/link";
import Caard from "./_components/caard";
export default function HomePage() {
  return (
    <main className="content-center">
      <div className="mx-auto flex flex-column content-center">
        <Caard img="https://bigrat.monster/media/bigrat.jpg" alt="big rat" title="big rat" content="big rat lol"></Caard>
      </div>
    </main>
  );
}
