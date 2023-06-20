import { LoginButton, LogoutButton } from '@/components/button';
import { getServerSession } from 'next-auth/next';

export default async function Home() {
  const session = await getServerSession();

  return (
    <main className='flex flex-col h-screen'>
      <div className='flex items-center justify-items-center'>
        {session?.user ? <LogoutButton /> : <LoginButton />}
      </div>
      <hr />
      <div className='p-4'>
        <h1>Server Session</h1>
        <pre className='h-[400px] w-full '>
          {JSON.stringify(session, null, '\t')}
        </pre>
      </div>
    </main>
  );
}
