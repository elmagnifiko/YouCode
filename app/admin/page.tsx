/* eslint-disable @next/next/no-img-element */
import {
    Layout,
    LayoutContent,
    LayoutHeader,
    LayoutTitle,
  } from '@/components/layout/layout';
  import Link from 'next/link';
  
  export default async function CoursesPage() {
    return (
      <Layout>
        <LayoutHeader>
          <LayoutTitle>Cours</LayoutTitle>
        </LayoutHeader>
        <LayoutContent className='hover:bg-red-600 hover:p-4 rounded-xl'>
          <Link className='hover:underline' href="/admin/courses">Mes cours</Link>
        </LayoutContent>
      </Layout>
    );
  }