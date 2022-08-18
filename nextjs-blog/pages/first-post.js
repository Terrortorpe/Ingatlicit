import Link from 'next/link';
import { Aheader } from '../components/aheader';

export default function FirstPost() {
  return (
    <>
      <p>This is the content of the first post</p>
      <Aheader></Aheader>
      <h1 style={{color: "red"}}>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}