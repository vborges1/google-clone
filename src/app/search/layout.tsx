import SearchHeader from '@/components/SearchHeader'
import '@/app/globals.css'

export default function SearchLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <SearchHeader />
            {children}
        </div>
    )
}
