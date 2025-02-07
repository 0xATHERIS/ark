import {
  Pagination,
  PaginationEllipsis,
  PaginationList,
  PaginationNextPageTrigger,
  PaginationPageTrigger,
  PaginationPrevPageTrigger,
} from './'
import './pagination.css'

export const Basic = () => (
  <Pagination count={5000} pageSize={10} siblingCount={2}>
    {({ pages }) => (
      <PaginationList>
        <PaginationPrevPageTrigger>
          <button>
            Previous <span class="visually-hidden">Page</span>
          </button>
        </PaginationPrevPageTrigger>

        {pages.map((page, index) =>
          page.type === 'page' ? (
            <PaginationPageTrigger value={page.value}>
              <button>{page.value}</button>
            </PaginationPageTrigger>
          ) : (
            <PaginationEllipsis index={index}>&#8230;</PaginationEllipsis>
          ),
        )}

        <PaginationNextPageTrigger>
          <button>
            Next <span class="visually-hidden">Page</span>
          </button>
        </PaginationNextPageTrigger>
      </PaginationList>
    )}
  </Pagination>
)
