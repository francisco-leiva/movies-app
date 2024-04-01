import Link from 'next/link'
import { Pagination, PaginationItemType, cn } from '@nextui-org/react'

export default function CustomPagination({ path, query, totalPages }) {
  const renderItem = ({ ref, key, value, isActive, setPage, className }) => {
    if (value === PaginationItemType.DOTS) {
      return (
        <button key={key} className={className}>
          ...
        </button>
      )
    }

    if (path === 'search') {
      return (
        <Link
          key={key}
          ref={ref}
          href={`/search?${new URLSearchParams({
            q: query,
            page: value,
          })}`}
          className={cn(
            className,
            isActive && 'text-white bg-primary-600 font-bold'
          )}
          onClick={() => setPage((prev) => value)}
        >
          {value}
        </Link>
      )
    }

    return (
      <Link
        key={key}
        ref={ref}
        href={
          !path
            ? `?${new URLSearchParams({
                page: value,
              })}`
            : `/${path}?${new URLSearchParams({
                page: value,
              })}`
        }
        className={cn(
          className,
          isActive && 'text-white bg-primary-600 font-bold'
        )}
        onClick={() => setPage((prev) => value)}
      >
        {value}
      </Link>
    )
  }

  return (
    <div className='max-w-4xl mx-auto'>
      <Pagination
        initialPage={1}
        total={totalPages}
        className='w-fit mx-auto my-4'
        renderItem={renderItem}
      />
    </div>
  )
}
