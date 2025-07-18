'use client';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { useRouter, useSearchParams } from 'next/navigation';

export function BlogPagination({ page, totalPages, limit }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (direction) => {
    let newPage = page;

    if (direction === 'prev' && page > 1) {
      newPage = page - 1;
    } else if (direction === 'next' && page < totalPages) {
      newPage = page + 1;
    } else {
      return;
    }

    const params = new URLSearchParams(searchParams.toString());

    params.set('page', newPage.toString());
    params.set('limit', limit.toString());

    router.push(`?${params.toString()}`);
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => handlePageChange('prev')}
            className={page === 1 ? 'pointer-events-none opacity-50' : ''}
          />
        </PaginationItem>

        <PaginationItem>
          <div className="px-4 py-2 text-sm">{`Page ${page} of ${totalPages}`}</div>
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            onClick={() => handlePageChange('next')}
            className={
              page === totalPages ? 'pointer-events-none opacity-50' : ''
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
