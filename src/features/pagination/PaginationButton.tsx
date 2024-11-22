'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export type CoursePaginationButtonProps = {
  totalPage: number; // Total number of pages (1-based count)
  page: number; // Current page (0-based index)
  baseUrl: string;
};

export const CoursePaginationButton = ({
  totalPage,
  page,
  baseUrl,
}: CoursePaginationButtonProps) => {
  const router = useRouter();

  return (
    <div className="flex gap-2">
      {/* Button to go to the previous page */}
      <Button
        variant="outline"
        size="sm"
        disabled={page <= 0} // Disable if on the first page
        onClick={() => {
          const searchParams = new URLSearchParams({
            page: String(page - 1),
          });
          const url = `${baseUrl}?${searchParams.toString()}`;
          router.push(url);
        }}
      >
        Previous
      </Button>

      {/* Button to go to the next page */}
      <Button
        variant="outline"
        size="sm"
        disabled={page >= totalPage - 1} // Disable if on the last page
        onClick={() => {
          const searchParams = new URLSearchParams({
            page: String(page + 1),
          });
          const url = `${baseUrl}?${searchParams.toString()}`;
          router.push(url);
        }}
      >
        Next
      </Button>
    </div>
  );
};
