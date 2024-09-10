import { Card, CardDescription, CardHeader } from '@/components/ui/card'
import { getAuthSession } from '@/lib/auth'
import React from 'react'

export default async function AccountPage() {
const session = await getAuthSession();
   if (!session){
    throw new Error("No session Found");
   }
   const imageUrl: string | null | undefined = session.user.image;
  return (
    <Card>
        <CardHeader>{session.user.email}</CardHeader>
        <CardHeader>{session.user.name}</CardHeader>
        <CardDescription><img className='h-32 rounded-r-2xl ms-4' src={imageUrl ?? undefined} alt="profil" /></CardDescription>
    </Card>
  )
}
