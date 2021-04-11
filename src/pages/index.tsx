import { GetStaticProps } from 'next';
import { Microphone } from '../../model/Microphone';
import { openDB } from '../openDB';
import Link from 'next/link';

export interface IndexProps {
  microphones: Microphone[];
}

export default function index({ microphones }: IndexProps) {
  console.log(JSON.stringify(microphones));
  return (
    <div>
      {microphones.map((micro) => (
        <Link href='/[id]' as={`/${micro.id}`}>
          <a>{micro.brand + micro.model}</a>
        </Link>
      ))}
    </div>
  );
}

//getStaticProps run only when the page is built
export const getStaticProps: GetStaticProps = async (ctx) => {
  const db = await openDB();
  const microphones = await db.all('select * from microphone');

  return { props: { microphones } };
};
