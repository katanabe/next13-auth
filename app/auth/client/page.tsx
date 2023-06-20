'use client';

import { LoginButton, LogoutButton } from '@/components/button';
import { NextAuthProvider } from '@/libs/provider';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

function ClientHome() {
  const { data: session } = useSession();

  return (
    <main className='flex flex-col h-screen '>
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

export default async function Home() {
  return (
    <NextAuthProvider>
      <ClientHome />
    </NextAuthProvider>
  );
}
