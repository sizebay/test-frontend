'use client'

export default function RepoCardSkeleton() {
  return (
    <div className="rounded-2xl border p-4 shadow-sm animate-pulse">
      {/* título */}
      <div className="h-5 w-2/3 rounded-md bg-gray-200" />
      {/* descrição */}
      <div className="mt-3 space-y-2">
        <div className="h-4 w-full rounded-md bg-gray-200" />
        <div className="h-4 w-5/6 rounded-md bg-gray-200" />
      </div>
      {/* meta */}
      <div className="mt-3 space-y-2">
        <div className="h-4 w-1/3 rounded-md bg-gray-200" />
        <div className="h-3 w-1/4 rounded-md bg-gray-200" />
      </div>
      {/* botão/link */}
      <div className="mt-4 h-9 w-28 rounded-2xl bg-gray-200" />
    </div>
  )
}
