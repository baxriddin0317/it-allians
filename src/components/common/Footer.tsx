const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white z-10">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-gray-500 flex items-center justify-between">
        <span>© {new Date().getFullYear()} IT Alliance</span>
        <span className="hidden sm:inline">Powered by React & Tailwind CSS</span>
      </div>
    </footer>
  )
}

export default Footer

