import CountryLookup from "./CountryLookup";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 text-sm text-gray-500 bg-[#f2f2f2] w-full">
        <div className="border-b px-8 py-3">
            <CountryLookup />
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-0">
            <ul className="flex items-center space-x-6">
                <li className="link">Sobre</li>
                <li className="link">Publicidade</li>
                <li className="link">Negócios</li>
                <li className="link">Como funciona a pesquisa</li>
                <li className="link">Meu git</li>
            </ul>

            <ul className="flex items-center space-x-6">
                <li className="link">Privacidade</li>
                <li className="link">Termos</li>
                <li className="link">Configurações</li>
            </ul>
        </div>
    </footer>
  )
}
